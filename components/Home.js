import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white'}}>
        <View style={styles.container}>
            <Image source={require('../images/trip.png')} style={styles.image} />
            <Text style={styles.title}>Food Stop Advisor</Text>
            <Text style={styles.description}>You handle the driving we take care of the food!</Text>
        </View>
        <View style={{marginBottom: 20}}>
            <Button
                title="Start the engines!"
                onPress={() => navigation.navigate('Search')}
                color='#982121'
            />
        </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        padding: 10, 
        borderRadius: 5,
        flex: 2,
        alignItems: 'center'
    },
    title: {
      fontSize: 32,
      fontWeight: '600',
      color: 'black',
    },
    description: {
      margin: 10,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '400',
      color: 'darkgray',
    },
    image: { 
        width: 200, 
        height: 200, 
        alignSelf: 'center',
        backgroundColor: '#ff611d',
        borderRadius: 100,
    }
  });
