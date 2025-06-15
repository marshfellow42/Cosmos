import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home/home";
import { Agenda } from "./pages/agenda";
import { Profile } from "./pages/profile";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="início"
        component={Home}
        options={{
          headerShown : false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused, size, color}) =>{
              if (focused){
                  return <Ionicons size={size} color={color} name="home"/>
              }
              else{
                  return <Ionicons size={size} color={color} name="home-outline"/>
              }
          }
      }}
      />
      <Tab.Screen
        name="Agenda"
        component={Agenda}
        options={{
          headerShown : false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused, size, color}) =>{
              if (focused){
                  return <Ionicons size={size} color={color} name="book"/>
              }
              else{
                  return <Ionicons size={size} color={color} name="book-outline"/>
              }
          }
      }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          headerShown : false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused, size, color}) =>{
              if (focused){
                  return <Ionicons size={size} color={color} name="person"/>
              }
              else{
                  return <Ionicons size={size} color={color} name="person-outline"/>
              }
          }
      }}
      />
    </Tab.Navigator>
  )
}
