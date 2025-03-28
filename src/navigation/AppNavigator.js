import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'


import HomeScreem from '../screens/HomeScreem'
import SplashScreen from '../screens/SplashScreen'
const Stack = createStackNavigator()

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreem} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppNavigator