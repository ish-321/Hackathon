import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import axios from 'axios'
import Card from './../../Components/Cards/cards';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      confirmed: '',
      recovered: '',
      deaths: '',
    };
  }
  componentDidMount = async () => {
    try {
      const data = await axios.get('https://covid19.mathdro.id/api');
      this.setState({
        confirmed: data.data.confirmed.value,
        recovered: data.data.recovered.value,
        deaths: data.data.deaths.value,
      });
    } catch (e) {
      alert(e.message);
    }
  };

  render() {
    // console.log(this.props.navigation, '=====>');
    return (
      <ScrollView>
        <View style={styles.Container}>
          <View style={styles.totalCasesView}>
    <Text>{this.state.confirmed}</Text>
           
            <Text>confirmed cases</Text>
          </View>
          <View style={styles.totalCasesView}>
    <Text>{this.state.recovered}</Text>
            
            <Text>recovered cases</Text>
          </View>
          <View style={styles.totalCasesView}>
    <Text>{this.state.deaths}</Text>
            
            <Text>Death Cases</Text>
          </View>
        </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
 
  },
  totalCasesView:{
    width:"80%",
    padding:20,
    alignSelf:"center",
    backgroundColor:"grey",
    justifyContent:"center",
    alignItems:"center",
    marginTop:40,
    borderRadius:5
  }
});

export default Home;
