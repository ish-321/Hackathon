import React, { Component } from 'react';
import { Container, Header, Content, DatePicker, Text } from 'native-base';
export default class DatePickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Content
        style={{
          borderWidth: 1,
          borderColor: '#452d9a',
          marginTop: 20,
          borderRadius: 5,
          alignSelf: 'center',
          width: '95%',
          padding: 4,
        }}>
        <DatePicker
          defaultDate={new Date(2018, 4, 4)}
          minimumDate={new Date(2018, 1, 1)}
          maximumDate={new Date(2018, 12, 31)}
          locale={'en'}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={'fade'}
          androidMode={'default'}
          placeHolderText="Select Missing Date"
          textStyle={{ color: '#452d9a' }}
          placeHolderTextStyle={{ color: '#452d9a', marginLeft: 10 }}
          onDateChange={this.setDate}
          disabled={false}
        />
      </Content>
    );
  }
}
