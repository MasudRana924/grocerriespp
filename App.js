import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import About from './components/About';
import Button from './components/OurButton';
import ChallengeFlaglist from './components/ChallengeFlaglist';
import Contact from './components/Contact';
import Flatlist from './components/Flatlist';
import Home from './components/Home';
import Images from './components/Images';
import ChallengeNetflix from './components/ChallengeNetflix';
import Products from './components/Products';
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardScreen from './components/OnBoardScreen';
import SIgnUp from './components/SIgnUp';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="OnBoardScreen" screenOptions={{header: () => null}}>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen}  />
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SIgnUp} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Vegitables" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
