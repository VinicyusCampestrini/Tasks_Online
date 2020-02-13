import React, { Component } from 'react'
import { ImageBackground, Text, StyleSheet, View, TextInput, TouchableOpacity, Platform} from 'react-native'
import commonStyles from '../commonStyles'
import backgroundImage from '../../assets/imgs/login.jpg'

export default class Auth extends Component {

    state = {
        name: '',
        sobrenome: '',
        email: '',
        password: '',
        confirmPassword: '',
        stageNew: true,
    }

    render() {
        return(
            <ImageBackground source={ backgroundImage }
            style={styles.backgound}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formConteiner}>
                    <Text style={styles.subtitle}>
                        {this.state.stageNew ? 'Crie sua conta agora mesmo' : 'Digite seu login e senha'}
                    </Text>
                    {this.state.stageNew && 
                        <TextInput placeholder = 'Nome' value={this.state.name}
                            style={styles.input} onChangeText={ name => this.setState({ name })}/>}
                    {this.state.stageNew && 
                        <TextInput placeholder = 'Sobrenome' value={this.state.sobrenome}
                            style={styles.input} onChangeText={ sobrenome => this.setState({ sobrenome })}/>}
                    <TextInput placeholder = 'E-mail' value={this.state.email}
                        style={styles.input} onChangeText={ email => this.setState({ email })}/>
                    <TextInput placeholder = 'Senha' value={this.state.password}
                        style={styles.input} secureTextEntry={true}  onChangeText={ password => this.setState({ password })}/>
                        {this.state.stageNew && 
                        <TextInput placeholder = 'Confime sua senha' value={this.state.confirmPassword}
                            style={styles.input} onChangeText={ confirmPassword => this.setState({ confirmPassword })}/>}
                    <TouchableOpacity>
                        <View style={styles.button}>
                        <Text style={styles.buttonText}>{
                            this.state.stageNew ? 'Cadastre-se' : 'Entre'
                        }</Text>
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
        textAlign: 'center'
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
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        margin: 10,

    },
})