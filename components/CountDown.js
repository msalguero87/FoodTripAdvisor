import React from 'react';
import { Text} from 'react-native';

class CountDown extends React.Component  {
    constructor(props) {
       super(props)
    }
    componentDidMount () {
        let _self = this;
        this.timer = setInterval(() => {
            console.log('I do not leak!');
            var secondInt = Number.parseInt(_self.props.second);
            var minuteInt = Number.parseInt(_self.props.minute);
            var hourInt = Number.parseInt(_self.props.hour);
            secondInt--;
            if(secondInt < 0){
                secondInt = 59;
                minuteInt--;
                if(minuteInt < 0){
                    minuteInt = 59;
                    hourInt--;
                    if(hourInt < 0){
                        secondInt = 0;// _self.props.second;
                        minuteInt = 0;//_self.props.minute;
                        hourInt = 0;//_self.props.hour;
                    }
                }
            }
            _self.props.onChange({hour: ("00" + hourInt).slice(-2), minute: ("00" + minuteInt).slice(-2), second: ("00" + secondInt).slice(-2)});
          }, 1000);
        
    }
    componentWillUnmount() {
        console.log('******************* UNMOUNTED');
        if(this.timer)
            clearInterval(this.timer);
    }
    render() {
        return (
            <Text style={this.props.style}>checking every {this.props.hour}:{this.props.minute}:{this.props.second}</Text>
          );
  }
}

export default CountDown;