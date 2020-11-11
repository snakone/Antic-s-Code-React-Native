import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/Home';
import Articles from '../screens/Articles';
import { BottomTabParamList, ArticlesParamList, HomeParamList } from '../types';
import { Button } from 'react-native-elements';
import Layout from '../constants/Layout';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const colorScheme = useColorScheme();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ 
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false
      }}>
      <BottomTab.Screen
        name={'Home'}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />
        }}
      />
      <BottomTab.Screen
        name="Articles"
        component={ArticlesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-paper" color={color} />
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={23} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ 
          headerTitle: 'Home', 
          headerTitleAlign: 'center',
          headerStyle: { 
            shadowColor: 'transparent', 
            borderBottomWidth: 0,
            height: 50
          },
          headerLeft: () => (
            <><Button
                type="clear"
                icon={
                    <Ionicons name="ios-search"
                              size={22}
                              style={{ marginLeft: Layout.margin.small }}
                              color={Colors[colorScheme].tabIconDefault}/>
                }
                onPress={() => {
                  console.log('hey');
                } }
            /></>
          ),
          headerRight: () => (
            <><Button
                type="clear"
                icon={
                    <Ionicons name="ios-more"
                              size={22}
                              style={{ marginRight: Layout.margin.small }}
                              color={Colors[colorScheme].tabIconDefault}/>
                }
                onPress={() => {
                  console.log('hey');
                } }
            /></>
          ), 
        }}
      />
    </HomeStack.Navigator>
  );
}

const ArticlesStack = createStackNavigator<ArticlesParamList>();

function ArticlesNavigator() {
  return (
    <ArticlesStack.Navigator>
      <ArticlesStack.Screen
        name="Articles"
        component={Articles}
        options={{ 
          title: 'Articles', 
          headerTitleAlign: 'center',
          headerStyle: { 
            shadowColor: 'transparent', 
            borderBottomWidth: 0,
            height: 50
          },
          headerLeft: () => (
            <><Button
                type="clear"
                icon={
                    <Ionicons name="ios-search"
                              size={22}
                              style={{ marginLeft: 10 }}
                              color={Colors[colorScheme].tabIconDefault}/>
                }
                onPress={() => {
                  console.log('hey');
                } }
            /></>
          ),
          headerRight: () => (
            <><Button
                type="clear"
                icon={
                    <Ionicons name="ios-more"
                              size={22}
                              style={{ marginRight: 10 }}
                              color={Colors[colorScheme].tabIconDefault}/>
                }
                onPress={() => {
                  console.log('hey');
                } }
            /></>
          ), 
        }}
      />
    </ArticlesStack.Navigator>
  );
}

