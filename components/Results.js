import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Button, Linking, LogBox  } from 'react-native';
import Radar from 'react-native-radar';
import CountDown from './CountDown';



class Results extends React.Component  {
    constructor(props) {
       super(props)
       this.state = { places: [], hour: "00", minute: "00", second: "00" };
       //LogBox.ignoreAllLogs();//Ignore all log notifications
    }
    componentDidMount () {
        let _self = this;
        Radar.getPermissionsStatus().then((status) => {
            // do something with status
            if(status === "DENIED"){
                var promise = Radar.requestPermissions(false);
                console.log(promise);
                if(promise === "GRANTED_BACKGROUND"){
                    _self.UpdateResults();
                }
            }
            else if(status === "GRANTED_BACKGROUND"){
                _self.UpdateResults();
            }
          });
        
    }
    UpdateResults(){
        let _self = this;
        const { route, navigation } = this.props;
        const { category, categoryLabel, radius } = route.params;
        _self.setState({places: []});
        if(_self.timer){
            console.log("clearing");
            clearTimeout(_self.timer);
        }
        Radar.getLocation().then((result) => {
            // do something with result.location, result.events, result.user
            Radar.searchPlaces({
                near: result.location,
                radius: Number.parseInt(radius)*1609.344,
                categories : [category],
                limit: 10
              }).then((result) => {
                // do something with result.places
                let places = [];
                for (let i = 0; i < result.places.length; i++) {
                    const place = result.places[i];
                    places.push({ key: place._id, name: place.name });
                }
                _self.setState({places: places, hour: _self.props.route.params.hour, minute: _self.props.route.params.minute, second: _self.props.route.params.second});
                var interval = Number.parseInt(_self.state.second) * 1000;
                interval += Number.parseInt(_self.state.minute) * 60 * 1000;
                interval += Number.parseInt(_self.state.hour) * 60 * 60 * 1000;
                console.log(interval);
                _self.timer = setTimeout(function(){
                    _self.UpdateResults();
                }, interval)
            }).catch((err) => {
                // optionally, do something with err
                console.log("searchPlaces: " + err);
              });
          }).catch((err) => {
            // optionally, do something with err
            console.log("getLocation: " + err);
          });
    }
    openPlaceInMaps(place){
        Linking.openURL('https://www.google.com/maps/search/?api=1&query='+place.replace(' ', '+'));
    }
    updateCountdown(time){
        this.setState({ hour: time.hour, minute: time.minute, second: time.second});
    }
    render() {
        let _self = this;
        const { route, navigation } = this.props;
        const { category, categoryLabel, radius } = route.params;
        var places = <Text>Keep driving! No results yet.</Text>
        if(_self.state.places.length > 0)
            places = <FlatList data={_self.state.places} renderItem={({item}) => <Text style={styles.item} onPress={() => _self.openPlaceInMaps(item.name)}>{item.name}</Text>} />
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white'}}>
                <View style={styles.container}>
                    <Image source={require('../images/tracking.png')} style={styles.image} />
                    <Text style={styles.title}>Searching for {categoryLabel}</Text>
                    <Text style={styles.description}>{radius} miles near me.</Text>
                    <CountDown style={styles.description} onChange={(time) => _self.updateCountdown(time)} hour={_self.state.hour} minute={_self.state.minute} second={_self.state.second} />
                </View>
                <View style={{ flex: 3}}>
                    {places}
                </View>
                <View style={{paddingTop: 10, flex: 1}}>
                    <Button
                        title="Look again now!"
                        onPress={() => _self.UpdateResults()}
                        color='#982121'
                    />
                </View>
            </View>
          );
  }
}

export default Results;

const styles = StyleSheet.create({
    container: {
        padding: 10, 
        borderRadius: 5,
        flex: 5,
        alignItems: 'center'
    },
    title: {
      fontSize: 24,
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
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      }
  });
