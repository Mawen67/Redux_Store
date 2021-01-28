import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import Item from './Item';

export default class VegetablePage extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Item name='Carrot' price='0.85'/>
                <Item name='Tomatoe' price='0.75'/>
                <Item name='Cucumer' price='1.20'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:10,
    },
  });
  