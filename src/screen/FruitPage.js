import React, {Component} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Item from './Item';

export default class FruitPage extends Component {
    render() {

        const FruitList = [
            {
                fruit: 'Apple',
                price: '1.10',
                key: '1',
            },
            {
                fruit: 'Banana',
                price: '1.40',
                key: '2',
            },
            {
                fruit: 'Strawberry',
                price: '1.95',
                key: '3',
            }
        ]

        return(
            <View style={styles.container}>

                <FlatList
                        data={FruitList}
                        renderItem={({item}) =>
                                (<Item name={item.fruit} price={item.price}/>)
                                
                            }
                        keyExtractor={item => item.key}
                        style={{flex:1}}
                    />

                {/* <Item name={'Apple'} price={'1.10'}/>  
                <Item name={'Banana'} price={'1.40'}/>
                <Item name={'Strawberry'} price={'1.95'}/>*/}
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
  