// React dependencies
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Local Imports
import AppButton from './components/AppButton';
import colors from './config/colors';


// Create a stack navigator
const Stack = createNativeStackNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Log in to CSA" component={LoginScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};


const LoginScreen = () => {
	const backgroundImage = { uri: "https://yo-mr-white.wheres-my-ta.co/5rUv28GzY.png" };
	return (
		<View style={styles.container}>
			<ImageBackground source={backgroundImage} style={styles.backgroundImage}>
				<Text>Open up App.js to start working on your app!</Text>
				{/* <AppButton title="Press me" color="red" onPress={() => {}} /> */}
				{AppButton({
					title: "Log In",
					color: colors.lightBlue,
					onPress: () => { console.log("Pressed!") },
				})}
				<StatusBar style="auto" />
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7
    },
});

export default App;