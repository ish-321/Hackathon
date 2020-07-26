import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import DrawerNavigation from './src/Config/drawer';

class App extends React.Component {
  render() {
    return <DrawerNavigation />;
  }
}

const styles = StyleSheet.create({});

export default App;
