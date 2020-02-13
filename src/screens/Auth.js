import React, { Component } from 'react'
import { ImageBackground, Text, StyleSheet} from 'react-native'
import commonStyles from '../commonStyles'
import backgroundImage from '../../assets/imgs/login.jpg'

export default class Auth extends Component {
    render() {
        return(
            <ImageBackground source={ backgroundImage }
            style={styles.backgound}>
                <Text style={styles.title}>Tasks</Text>
            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    backgound: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 70,
        marginBottom: 10,
    },
})