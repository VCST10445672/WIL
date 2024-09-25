import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Button } from 'react-native';

const GardenMainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      
      <Image source={require('../images/gardenMain.jpg')} style={styles.logo} />
      
      <Text style={styles.title}>Garden Maintenance</Text>
      <Text style={styles.price}>R750</Text>
      <Text style={styles.description}>
        Provide basic knowledge of watering, pruning, and planting in domestic gardens. 
      </Text>
      
      <Text style={styles.subTitle}>Topics Covered:</Text>
      <Text style={styles.topic}>
        - Water restrictions and the watering requirements of indigenous and exotic plants{"\n"}
        - Pruning and propagation of plants{"\n"}
        - Planting techniques for different plant types
      </Text>
      
      <Text style={styles.duration}>Duration: 6 weeks</Text>
      
      <Button title="Go to CheckOut" onPress={() => navigation.navigate('Select')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 40,
    left: 10,
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  topic: {
    fontSize: 16,
    marginBottom: 20,
  },
  duration: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 20,
  },
});

export default GardenMainScreen;
