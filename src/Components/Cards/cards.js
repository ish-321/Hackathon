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

class Card extends React.Component {
  render() {
    console.log('props  ====>>', this.props);
    return (
      <View style={styles.Container}>
        {/* <View style={styles.Card}> */}
          {/* <Image
            style={styles.tinyLogo}
            source={{
              uri:
                'https://lh3.googleusercontent.com/proxy/kY_Q7pWao004Q3h0r0OR7xxpk2_H3k3IOcCJg_AKfrwdiyjpto7P8-3cpDVEojc4TSySgFjIbmEWCyYj989_jev1u-7zs124iRQhDMZx00EaAbiDxfK2v73iuRzroak',
            }}
          /> */}
          {/* <Text style={styles.text}>MUHD Ishaque</Text>
          <Text style={styles.text}>Ishaque</Text>
          <TouchableOpacity activeOpacity={0.5}
            onPress={() =>
              this.props.navigate.navigation.navigate('AllDetail')
            }>
            <Text style={styles.Btn}>More Detail</Text>
          </TouchableOpacity> */}
        {/* </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    margin: 15,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  Card: {
    padding: 15,
    // borderWidth : 2,
    borderRadius: 10,
    width: 150,
    height: 200,
    alignItems: 'center',
    elevation: 4,
  },
  Btn: {
    backgroundColor: '#452d9a',
    padding: 6,
    borderRadius: 50,
    width: 100,
    textAlign: 'center',
    color: 'white',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Card;
