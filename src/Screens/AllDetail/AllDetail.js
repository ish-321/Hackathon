import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

class AllDetail extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.Card}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                'https://lh3.googleusercontent.com/proxy/kY_Q7pWao004Q3h0r0OR7xxpk2_H3k3IOcCJg_AKfrwdiyjpto7P8-3cpDVEojc4TSySgFjIbmEWCyYj989_jev1u-7zs124iRQhDMZx00EaAbiDxfK2v73iuRzroak',
            }}
          />
          <Text style={styles.text}>Muhammad Ishaque </Text>
          <Text style={styles.text}>Rahimoon </Text>
          <Text style={styles.text}>village </Text>
          <Text style={styles.text}>Eidani </Text>
          <Text style={styles.text}>Tal </Text>
          <Text style={styles.text}>chachro </Text>
          <Text style={styles.text}>dist </Text>
          <Text style={styles.text}>TharParkar </Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.Btn}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    margin: 15,
  },
  tinyLogo: {
    width: 160,
    height: 160,
  },
  Card: {
    padding: 15,
    // borderWidth : 2,
    borderRadius: 10,
    width: '90%',
    height: 500,
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 4,
  },
  Btn: {
    backgroundColor: '#452d9a',
    padding: 15,
    borderRadius: 50,
    width: 220,
    textAlign: 'center',
    color: 'white',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop : 5,
  },
});

export default AllDetail;
