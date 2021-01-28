import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

function Item({name, price}) {

    const [quantity, setQuantity] = useState(0)

    return(
        <View style={styles.container}>
            <View style={{flex:0.5, flexDirection:'column', right:-15 }}>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>{price}€</Text>
            </View>

            <View style={{flex:0.5, flexDirection:'column'}}>
                <View style={{flex:0.5, flexDirection:'row'}}>
                    <AntDesign name='minus' size={30} onPress={() => (quantity>0)?setQuantity(quantity-1):setQuantity(0)}/>
                    <Text style={styles.text}>   {quantity}   </Text>
                    <AntDesign name='plus' size={30} onPress={() => setQuantity(quantity+1)}/>
                </View>
                <Text style={styles.text}>Total : {(~~(price*quantity*100))/100}€</Text>
            </View>

        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ddd',
      flexDirection:'row',
      marginBottom:10,
      borderRadius:20,
    },

    text: {
        fontSize:20,
    }
  });
  