import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Button } from 'react-native';

const Results = ({ route, navigation }) => {
    const { category, categoryLabel, hour, minute, second, radius } = route.params;
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white'}}>
        <View style={styles.container}>
            <Image source={require('../images/tracking.png')} style={styles.image} />
            <Text style={styles.title}>Searching for {categoryLabel}</Text>
            <Text style={styles.description}>{radius} miles near me.</Text>
            <Text style={styles.description}>checking every {hour}:{minute}:{second}</Text>
        </View>
        <View style={{marginBottom: 20}}>
            <Button
                title="Look again now!"
                onPress={() => navigation.navigate('Search')}
                color='#982121'
            />
        </View>
    </View>
  );
}

export default Results;

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
