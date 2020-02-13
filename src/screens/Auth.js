import React, { Component } from 'react'
import { ImageBackground, Text, StyleSheet, View, TextInput, TouchableOpacity, Platform} from 'react-native'
import commonStyles from '../commonStyles'
import backgroundImage from '../../assets/imgs/login.jpg'

export default class Auth extends Component {

    state = {
        email: '',
        password: '',
    }

    render() {
        return(
            <ImageBackground source={ backgroundImage }
            style={styles.backgound}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formConteiner}>
                    <TextInput placeholder = 'E-mail' value={this.state.email}
                        style={styles.input} onChangeText={ email => this.setState({ email })}/>
                    <TextInput placeholder = 'Senha' value={this.state.password}
                        style={styles.input} onChangeText={ password => this.setState({ password })}/>
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
    input: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        marginTop: 10,
        backgroundColor: '#FFF',
        padding: Platform.OS == 'ios' ? 15 : 10,
    },
    formConteiner: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: 20,
        width: '90%'
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',

    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: '#fff',
        fontSize: 20,

    }
})