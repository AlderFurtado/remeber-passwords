import { MainScreen, PasswordsListScreen } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return  (<NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen 
                name="MainScreen" 
                component={MainScreen} 
                options={{
                  headerShown:false
                }}
              />
              <Stack.Screen 
                name="PasswordsListScreen" 
                component={PasswordsListScreen} 
                options={{
                  title: "Password List"
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>)
}

