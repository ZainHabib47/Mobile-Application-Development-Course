import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  const [userCity, setUserCity] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        console.log('Permission status:', status);

        if (status !== 'granted') {
          setUserCity('Permission denied');
          setLoading(false);
          return;
        }

        const position = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Highest,
        });

        console.log('Coordinates:', position);

        const [place] = await Location.reverseGeocodeAsync(position.coords);
        console.log('Location Info:', place);

        setUserCity(
          place.city ||
          place.subregion ||
          place.region ||
          place.country ||
          'Unknown'
        );
      } catch (error) {
        console.log('Location error:', error);
        setUserCity('Failed to get location');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <View style={styles.centered}>
      <Text style={styles.heading}>Your Current City:</Text>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <Text style={styles.cityText}>{userCity}</Text>
      )}
    </View>
  );
}

function ProfileScreen({ navigation }) {
  const [displayName, setDisplayName] = useState('Your Name');

  useEffect(() => {
    navigation.setOptions({ title: displayName });
  }, [displayName]);

  return (
    <View style={styles.centered}>
      <Text style={styles.heading}>Enter Your Name:</Text>
      <TextInput
        style={styles.inputBox}
        value={displayName}
        onChangeText={(text) => setDisplayName(text)}
        placeholder="Type your name"
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.centered}>
      <Text style={styles.heading}>Settings</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '600',
  },
  cityText: {
    fontSize: 18,
    color: 'blue',
    textAlign: 'center',
  },
  inputBox: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});
