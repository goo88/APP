import React from 'react';

import { FlatList, View, Text, StatusBar, StyleSheet } from 'react-native';

const data = [

    { name: "iPhone 7", price: 12000 },

    { name: "iPhone 8", price: 10000 },

]

/*

const Item = ({name}) => (

  <View>

    <Text>{name}</Text>

  </View>

);

*/

const renderItem = ({ item, index }) => (

    <View style={styles.item}>

        <Text style={styles.title}>{item.name}</Text>

        <Text>{item.price}</Text>

        <Text>/{index}</Text>

    </View>

);

export default function ProductList() {

    return (

        <View style={styles.container}>

            <FlatList

                data={data}

                renderItem={renderItem}

                keyExtractor={item => item.name}
            >
            </FlatList>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {

        //backgroundColor: '#00bfff',

        flex: 1,

        flexDirection: 'row',

        marginTop: StatusBar.currentHeight || 0,

    },

    item: {

        flex: 1,

        flexDirection: 'row',

        backgroundColor: '#00ffff',

        padding: 8,

        marginVertical: 8,

        marginHorizontal: 16,

    },

    title: {

        fontSize: 24,

    },

});

