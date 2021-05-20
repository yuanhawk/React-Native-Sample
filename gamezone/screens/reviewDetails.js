import React from 'react';
import { Button, Text, View } from 'react-native'
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global';
import { StyleSheet, Image } from 'react-native'

export default function ReviewDetails({ navigation }) {
    const rating = navigation.getParam('rating');

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>ReviewDetails Screen</Text>
                <Text>{ navigation.getParam('title') }</Text>
                <Text>{ navigation.getParam('body') }</Text>
                {/* <Text>{ navigation.getParam('rating') }</Text> */}
                <View style={styles.rating}>
                    <Text>Gamezone rating: </Text>
                    <Image source={images.ratings[rating]}/>
                </View>
                <Button title="back to home screen" onPress={pressHandler} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
      }
})