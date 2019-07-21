import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import Colors from '../utils/constants'

const CryptoRow = ({ title, description, image_url }) => (
    <View style={styles.container}>
        <Image source={ require('../utils/images/bitcoin.png') } />
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
            <Button
              title="Add to favourites"
              color={Colors.buttonFavouriteColor}
              accessibilityLabel="Learn more about this purple button"
              />
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: Colors.secondaryColor,
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: 'black',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },

})

export default CryptoRow
