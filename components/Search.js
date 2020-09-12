import React, { useState }  from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Button } from 'react-native';
import {Picker} from '@react-native-community/picker';
import categories from '../data/categories';

const Search = ({ navigation }) => {
    const [category, setCategory] = useState('food-beverage');
    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('06');
    const [second, setSecond] = useState('00');
    const [radius, setRadius] = useState('5');
    var pickerItems = [];
    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        pickerItems.push(<Picker.Item key={category.value} label={category.label} value={category.value} />)
    }
  return (
    <ScrollView style={{flexDirection: 'column'}}>
        <View style={{flex: 1}}>
            <Image source={require('../images/search.png')}
            style={{ width: 200, height: 200, alignSelf: 'center' }}
            />
        </View>
        <View style={{ flex:2}}>
            <Text>What are we looking for?</Text>
            <Picker
                selectedValue={category}
                onValueChange={(itemValue, itemIndex) =>
                    setCategory(itemValue)
                }>
                {pickerItems}
            </Picker>
            <Text>Check every:</Text>
            <View style={styles.countdownContainer}>
                <View style={styles.countDownPicker}>
                    <TextInput keyboardType='number-pad' onChangeText={text => setHour(text)} style={{borderWidth: 0, fontSize: 32 }} defaultValue={hour} />
                    <Text style={styles.countDownFontSize}>h</Text>
                </View>
                <Text style={styles.countDownFontSize}>:</Text>
                <View style={styles.countDownPicker}>
                    <TextInput keyboardType='number-pad' onChangeText={text => setMinute(text)} style={{ borderWidth: 0, fontSize: 32 }} defaultValue={minute} />
                    <Text style={styles.countDownFontSize}>min</Text>
                </View>
                <Text style={styles.countDownFontSize}>:</Text>
                <View style={styles.countDownPicker}>
                    <TextInput keyboardType='number-pad' onChangeText={text => setSecond(text)} style={{  borderWidth: 0, fontSize: 32 }} defaultValue={second} />
                    <Text style={styles.countDownFontSize}>sec</Text>
                </View>
            </View>
            <Text>How far can we look?</Text>
            <View style={{flexDirection: 'row'}}>
                    <TextInput keyboardType='number-pad' onChangeText={text => setRadius(text)} style={{borderWidth: 0, fontSize: 32 }} defaultValue={radius} />
                    <Text style={styles.countDownFontSize}>miles near me</Text>
            </View>
        </View>
        <Button title="Start searching" onPress={() => navigation.navigate('Results', {
            category: category,
            categoryLabel: categories.find(element => element.value === category).label,
            radius: radius,
            hour: hour,
            minute: minute,
            second: second
        })}></Button>
    </ScrollView>
  );
}
25440965
export default Search;

const styles = StyleSheet.create({
    countDownFontSize: {
        fontSize: 32,
    },
    countdownContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '50%',
        alignSelf: 'center',
    },
    countDownPicker: {
        flexDirection: 'column',
        alignItems: 'center'
    }
  });

