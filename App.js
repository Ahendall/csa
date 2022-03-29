// React dependencies
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TextInput, Image, ScrollView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


// External Dependencies
import ModernHeader from "react-native-modern-header";

// Local Imports
import AppButton from './components/AppButton';
import colors from './config/colors';
import AppTextInput from './components/AppTextInput';
import CollapsibleCard from './components/CollapsibleCard';
import SampleEasing from './components/SampleEasing';

// Globals
let fullName = "";
let carId = "";

// Create a Stack navigator
const Stack = createNativeStackNavigator();
const AuthScreens = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="login"
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="register"
					component={RegisterScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="mainApp"
					component={MainApp}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const Tab = createBottomTabNavigator();
const MainApp = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'home') {
						iconName = focused
							? 'car'
							: 'car';
					} else if (route.name === 'news') {
						iconName = focused ? 'ios-list' : 'ios-list';
					} else if (route.name === 'offer') {
						iconName = focused ? 'ios-card-outline' : 'ios-card';
					}

					// You can return any component that you like here!
					return <Ionicons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: colors.lightBlue,
				tabBarInactiveTintColor: 'gray',
			})}
		>
			<Tab.Screen
				name="home"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="news"
				component={NewsScreen}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="offer"
				component={OfferScreen}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	)
}











// Auth Screens
const LoginScreen = ({ navigation }) => {
	const backgroundImage = { uri: "https://yo-mr-white.wheres-my-ta.co/5rUv28GzY.png" };
	const [fname, setFname] = useState('');
	const [carid, setCarid] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	return (
		<View style={styles.container}>
			<ImageBackground source={backgroundImage} style={styles.backgroundImage}>
				<Text
					style={styles.headerText}>Log in to your CSA account</Text>
				{() => {
					if (errorMessage) {
						return <Text style={styles.errorMessage}>{errorMessage}</Text>;
					}
				}}
				{AppTextInput({
					placeholder: "Full Name",
					width: "70%",
					iconType: "account",
					iconColor: colors.lightBlue,

					onChangeText: (text) => {
						setFname(text);
					}
				})}
				{AppTextInput({
					placeholder: "Car ID",
					width: "70%",
					iconType: "car",
					iconColor: colors.lightBlue,
					onChangeText: (text) => {
						setCarid(text);
					}
				})}
				{AppButton({
					title: "Log In",
					color: colors.lightBlue,
					onPress: () => {
						fullName = fname;
						carId = carid;
						navigation.navigate("mainApp", { screen: "home" });
					},
				})}
				<Text
					style={styles.noAccountText}
					onPress={() => { navigation.navigate("register") }}
				>
					Don't have an account? Sign up!
				</Text>
				<StatusBar style="auto" />
			</ImageBackground>
		</View>
	);
};


const RegisterScreen = ({ navigation }) => {
	const backgroundImage = { uri: "https://yo-mr-white.wheres-my-ta.co/5rUv28GzY.png" };
	const [name, setName] = useState('');
	const [carid, setCarid] = useState('');

	return (
		<View style={styles.container}>
			<ImageBackground source={backgroundImage} style={styles.backgroundImage}>
				<Text
					style={styles.headerText}
					onPress={() => { navigation.navigate() }}>Sign up for a CSA account</Text>
				{() => {
					if (errorMessage) {
						return <Text style={styles.errorMessage}>{errorMessage}</Text>;
					}
				}}
				{AppTextInput({
					placeholder: "Full Name",
					width: "70%",
					iconType: "account",
					iconColor: colors.primary,
					onChangeText: (text) => {
						setName(text);
					}
				})}
				{AppTextInput({
					placeholder: "Email",
					width: "70%",
					iconType: "email",
					iconColor: colors.primary,
				})}
				{AppTextInput({
					placeholder: "Phone Number",
					width: "70%",
					iconType: "card-account-phone",
					iconColor: colors.primary,
				})}
				{AppTextInput({
					placeholder: "Password",
					width: "70%",
					iconType: "lock",
					iconColor: colors.primary,
				})}
				{AppTextInput({
					placeholder: "Car ID",
					width: "70%",
					iconType: "car",
					iconColor: colors.primary,

					onChangeText: (text) => {
						setCarid(text);
					}
				})}
				{AppButton({
					title: "Register",
					color: colors.primary,
					onPress: () => {
						fullName = name;
						carId = carid;
						navigation.navigate("mainApp", { screen: "home" });
					},
				})}
				<Text
					style={styles.yesAccountText}
					onPress={() => { navigation.navigate("login") }}
				>
					Already have an account? Log in!
				</Text>
				<StatusBar style="auto" />
			</ImageBackground>
		</View>
	)
}







// Main App Screens
const HomeScreen = ({ navigation }) => {
	let deviceWidth = Dimensions.get('window').width;
	let deviceHeight = Dimensions.get('window').height;
	const backgroundImage = { uri: "https://yo-mr-white.wheres-my-ta.co/5rUv28GzY.png" };
	const carImage = { uri: "https://yo-mr-white.wheres-my-ta.co/5rWyPiAWP.png" };
	return (
		<View style={styles.container}>
			<ImageBackground source={backgroundImage} style={styles.backgroundImage}>
				<Text style={styles.headerText2}>Welcome, {fullName}</Text>
				<Image source={carImage} style={styles.carImage} />
				<Card style={styles.card}>
					<Card.Content>
						<Title>Your Car</Title>
						<Paragraph>Car ID: {carId}</Paragraph>
						<Paragraph>Car Battery Level: 68%</Paragraph>
						<Paragraph>Mileage: 12,000 miles</Paragraph>
						<Paragraph>Alerts:</Paragraph>
						<Paragraph>    - Check Tire Pressure</Paragraph>
						<Paragraph>    - Clear Air Filters</Paragraph>
					</Card.Content>
				</Card>
			</ImageBackground>
		</View>
	);
}

const NewsScreen = ({ navigation }) => {
	const backgroundImage = { uri: "https://yo-mr-white.wheres-my-ta.co/5rUv28GzY.png" };
	const newsImage1 = { uri: "https://yo-mr-white.wheres-my-ta.co/5rWRpyHi1.png" };
	return (
		<View style={styles.container}>
			<ImageBackground source={backgroundImage} style={styles.backgroundImage}>
				<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Text style={styles.headerText}>Latest news on sustainable energy, carbon emissions, and CSA</Text>

					<Card style={styles.cardRelative}>
						<Card.Content>
							<Title style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}
							>Carbon Emissions are Heightening Within Canadia</Title>
							{/* <Image source={newsImage1} style={styles.newsImage} /> */}
							<Paragraph>
								Whereupon our great land of Canadia, of which this unrivaled populous resides, certain blemishes have arisen and must be dealt with. Our factories and vehicular transports, despite unparalleled outputs of reliability, use an excess of fossil fuels. Subsequently, carbon emissions and greenhouse gasses plague us, tainting the otherwise spotless reputation of our country. Top scientists have deduced that these issues pose serious threats to the future of Canadia, including health concerns for citizens and environmental destruction on a possibly unprecedented scale.

								But these issues are being met with full force. Representatives of the C.G.C. (Canadia’s Governing Council) have spoken upon the matter, with one who requested anonymity stating “The situation has become more dire than anticipated, and is at a boiling point that hasn’t gone unnoticed. However, we wish to alleviate citizen’s concerns, and pledge to launch a fully green campaign. With support, dedication, and promotion of limiting greenhouse gas emissions, we shall prevail stronger, such as we always have, and always will.”

								This new “Green Campaign” already has substantial backing, with all major automotive companies announcing to make the switch from petrol and gasoline to electric and otherwise sustainable alternatives. A new government sector, named the C.S.A (Canadia’s Sustainable Automotives) is at the forefront of these revolutionary changes, and are set to release an app this week that will “change the future of transportation”. Updates shall arrive soon when available.

								In short, our benevolent and thoughtful leaders have no other intent than our wellbeing, and will work tirelessly to this end. As a community, it is our obligation to help in any way possible. Let us triumph over all, all as one.

							</Paragraph>
						</Card.Content>
					</Card>
					<Card style={styles.cardRelative}>
						<Card.Content>
							<Title style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}
							>CSA releases new app to help promote sustainability</Title>
							{/* <Image source={newsImage1} style={styles.newsImage} /> */}
							<Paragraph>
								The new, highly streamlined mobile application created and produced by the C.S.A only released three days ago, but is already receiving critical acclaim and praise. Not only can you control your car from your phone, ushering in a new age of automation and transport, but it rewards those who use sustainable vehicles to be rewarded. These rewards include coupons, discounts, and much more, promoting the usage of electric cars over carbon-emitting gas powered vehicles.

								The C.S.A issued a statement yesterday, “This new  app is part of Canadia’s switch to a sustainable future, with the near prohibition of fossil fuels. We need citizens to rally behind the movement, realizing how these changes benefit all parties involved.” The C.G.C states that it sponsors the C.S.A in its entiriety. The app is available on IOS and Android at this moment, and can be downloaded with post haste efficiency.


							</Paragraph>
						</Card.Content>
					</Card>
					<Card style={styles.cardRelative2}>
						<Card.Content>
							<Title style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}
							>ًWelcome to Canadia Sustainable Automotives!</Title>
							{/* <Image source={newsImage1} style={styles.newsImage} /> */}
							<Paragraph>
								At C.S.A, we strive to create a more sustainable Canadia. We must rid ourselves of non-green pollutionary sources, and revitalize high tech electric automobiles to new peaks. Our environment, and the livelihood of our populace, cannot be hindered by these carbon emissions. We must stand together as a nation, and rectify these issues together. By using our app, you are doing just that. We thank you for your support, and are proud of these commitments. Let us represent Candia, and prevail as one.
							</Paragraph>
						</Card.Content>
					</Card>
				</ScrollView>
			</ImageBackground>
		</View>
	);
}

const OfferScreen = ({ navigation }) => {
	const backgroundImage = { uri: "https://yo-mr-white.wheres-my-ta.co/5rUv28GzY.png" };
	return (
		<View style={styles.container}>
			<ImageBackground source={backgroundImage} style={styles.backgroundImage}>
				<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Text style={styles.headerText}>Offers and Coupons</Text>

					<Card style={styles.cardRelative}>
						<Card.Content>
							<Title style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}
							>Buffalo Wild Wings: 15% off!</Title>
							{/* <Image source={newsImage1} style={styles.newsImage} /> */}
							<Paragraph>
								Get 15% off your next Buffalo Wild Wings order!
							</Paragraph>
						</Card.Content>
						<Card.Actions style={styles.button}>
							{/* Redeem button */}
							<Button onPress={() => {
								Alert.alert("Redeemed Successfully!", "You have redeemed 15% off your next order!");
							}}>Redeem!
							</Button>
						</Card.Actions>
					</Card>
					
					<Card style={styles.cardRelative}>
						<Card.Content>
							<Title style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center', color: '#00b894' }}
							>Buffalo Wild Wings: 50% off!</Title>
							{/* <Image source={newsImage1} style={styles.newsImage} /> */}
							<Paragraph>
								For a limited time, get 50% off your next Buffalo Wild Wings order! (Offer only available to customers with a sustainable energy provider as their primary electrical provider.)
							</Paragraph>
						</Card.Content>
						<Card.Actions style={styles.button}>
							{/* Redeem button */}
							<Button onPress={() => {
								Alert.alert("Redemtion Failed!", "This offer is only available to CSA users with a sustainable energy provider as their electrical provider.");
							}}>Redeem!
							</Button>
						</Card.Actions>
					</Card>

					<Card style={styles.cardRelative}>
						<Card.Content>
							<Title style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center', color: '#00b894' }}
							>Emporio Armani: Free suit jacket!</Title>
							{/* <Image source={newsImage1} style={styles.newsImage} /> */}
							<Paragraph>
								Get any suit jacket of your choice for free! (Offer only available to customers with a sustainable energy provider as their primary electrical provider.)
							</Paragraph>
						</Card.Content>
						<Card.Actions style={styles.button}>
							{/* Redeem button */}
							<Button onPress={() => {
								Alert.alert("Redemtion Failed!", "This offer is only available to CSA users with a sustainable energy provider as their electrical provider.");
							}}>Redeem!
							</Button>
						</Card.Actions>
					</Card>

					<Card style={styles.cardRelative}>
						<Card.Content>
							<Title style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center', color: '#00b894' }}
							>Microcenter Canadia: Get a GPU at MSRP!</Title>
							{/* <Image source={newsImage1} style={styles.newsImage} /> */}
							<Paragraph>
								In this unpredicatble and over-inflated market, Microcenter Canadia is offering any Nvidia RTX 3000 series GPU or AMD RX 6000 series GPU at MSRP! (Offer only available to customers with a sustainable energy provider as their primary electrical provider.)
							</Paragraph>
						</Card.Content>
						<Card.Actions style={styles.button}>
							{/* Redeem button */}
							<Button onPress={() => {
								Alert.alert("Redemtion Failed!", "This offer is only available to CSA users with a sustainable energy provider as their electrical provider.");
							}}>Redeem!
							</Button>
						</Card.Actions>
					</Card>
				</ScrollView>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	backgroundImage: {
		flex: 1,
		width: '100%',
		height: '100%',
		justifyContent: "center",
		alignItems: "center",
		opacity: 0.7,
	},
	errorMessage: {
		color: 'white',
		backgroundColor: 'red',
	},
	modernHeader: {
		backgroundColor: colors.primary,
		borderBottomWidth: 0,
		shadowColor: 'transparent',
		shadowOpacity: 0,
		shadowOffset: {
			height: 0,
		},
		shadowRadius: 0,
	},

	headerText: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		fontWeight: 'bold',
		fontSize: 23,
		color: 'rgba(255,255,255,1)',
		padding: 10,
		borderRadius: 10,
		marginBottom: 10,
		textAlign: 'center',
	},
	noAccountText: {
		padding: 10,
		fontSize: 15,
		color: colors.lightBlue,
		textDecorationLine: 'underline',
		fontWeight: 'bold',
	},
	yesAccountText: {
		padding: 10,
		fontSize: 15,
		color: colors.primary,
		textDecorationLine: 'underline',
		fontWeight: 'bold',
	},
	carImage: {
		position: 'absolute',
		bottom: "40%",
		width: "100%",
		height: "40%",
		resizeMode: "contain",
	},
	card: {
		position: "absolute",
		bottom: "3%",
		width: "90%",
		borderRadius: 10,
		marginTop: 10,
		resizeMode: "contain",
	},
	headerText2: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		fontWeight: 'bold',
		fontSize: 23,
		color: 'rgba(255,255,255,1)',
		padding: 10,
		borderRadius: 10,
		position: "absolute",
		top: "10%",
	},
	cardRelative: {
		width: "90%",
		borderRadius: 10,
		marginTop: 10,
		resizeMode: "contain",
		marginBottom: 30,
	},
	scrollContainer: {
		backgroundColor: 'pink',
		marginHorizontal: 20,
	},
	headerText: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		fontWeight: 'bold',
		fontSize: 23,
		color: 'rgba(255,255,255,1)',
		padding: 10,
		borderRadius: 10,
		marginBottom: 10,
		textAlign: 'center',
		marginTop: 100,
	},
	cardRelative2: {
		width: "90%",
		borderRadius: 10,
		marginTop: 10,
		resizeMode: "contain",
		marginBottom: "30%",
	},
	button: {
		color: colors.lightBlue,
	},
});

export default AuthScreens;