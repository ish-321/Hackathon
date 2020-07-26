import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {color} from 'react-native-reanimated';
import MissingPersonLogo from './../../assets/missingIcon.png';

class GetStarted extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Image
        style={styles.tinyLogo}
        source={require('./../../assets/missingIcon.png')}
      /> */}
        <TouchableOpacity
          activeOpacity={0.5}
          style={{width: '80%'}}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.getStarted}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#452d9a',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  getStarted: {
    color: '#452d9a',
    backgroundColor: 'white',
    width: '100%',
    padding: '6%',
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    elevation: 10,
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});

export default GetStarted;
