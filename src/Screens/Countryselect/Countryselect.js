import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Picker,
  Dimensions
} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
import Chart from "../../Components/Cards/cards";
export default class CountrySelect extends React.Component {
  constructor() {
    super();
    this.state = {
      totalCases: 0,
      confrimCases: 0,
      totalRecovered: 0,
      totalDeaths: 0,
      selectedValue: 'Afghanistan',
      country: ["Afghanistan", "Albania", "Algeria", "American Samoa"],
    };
  }
  componentDidMount = async() => {
    await fetch(`https://covid19.mathdro.id/api/countries/Afghanistan`, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            confrimCases: json.confirmed.value,
            totalRecovered: json.recovered.value,
            totalDeaths: json.deaths.value,
          });
          this.setState({});
        })
        .catch((err) => console.log('new error', err));
  }
  select = async (itemValue) => {
    await fetch(`https://covid19.mathdro.id/api/countries/${itemValue}`, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            confrimCases: json.confirmed.value,
            totalRecovered: json.recovered.value,
            totalDeaths: json.deaths.value,
          });
        })
        .catch((err) => console.log('new error', err));
  }


  render() {
    let {selectedValue} = this.state;
    return (
      <View style={styles._container}>
    <View style={styles._picker}>
        <Picker
          selectedValue={selectedValue}
          mode="dropdown"
          style={{
            width: screenWidth - 40,
            borderWidth: 1,
            borderColor: 'red',
            borderWidth: 1,
          }}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({selectedValue: itemValue});
            this.select(itemValue);
          }}
          >
          {this.state.country.map((val, i) => (
          <Picker.Item label={val} value={val} />
           ))} 
        </Picker>
      </View>
        <View style={styles._boxes}>
          <View style={[styles._box, styles._boxOne]}>
            <Text style={styles._title}>TOTAL CASES</Text>
            <Text style={styles._value}>{this.state.confrimCases}</Text>
          </View>
        </View>
        <View style={styles._boxes}>
          <View style={[styles._box, styles._boxThree]}>
            <Text style={styles._title}>TOTAL RECOVERED</Text>
            <Text style={styles._value}>{this.state.totalRecovered}</Text>
          </View>
          <View style={[styles._box, styles._boxFour]}>
            <Text style={styles._title}>TOTAL DEATHS</Text>
            <Text style={styles._value}>{this.state.totalDeaths}</Text>
          </View>
        </View>

        <Chart graphData={this.state}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#fff',
  },

  _boxes: {
    display: 'flex',
    flexDirection: 'row',
  },
  _box: {
    flex: 1,
    height: 150,
    borderRadius: 5,
    padding: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    margin: 2,
  },
  _boxOne: {
    backgroundColor: '#7B7979',
  },
  _boxTwo: {
    backgroundColor: 'blue',
  },
  _boxThree: {
    backgroundColor: '#269954',
  },
  _boxFour: {
    backgroundColor: '#99264D',
  },
  _title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  _value: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  },
  _picker:{
    borderColor: 'grey',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1
  }
});
