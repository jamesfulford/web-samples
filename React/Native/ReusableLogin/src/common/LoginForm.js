import React from "react";
import { Button, Platform, StyleSheet, TextInput } from "react-native";
import CardView from "../common/components/CardView";

const styles = StyleSheet.create({
    buttonStyle: {
        elevation: 5,
        height: 40
    },
    textInputStyle: {
        padding: 10,
        //Additional params to make
        //iOS inputs prettier
        ...Platform.select({
            ios: {
                borderRadius: 2,
                marginTop: 5,
                backgroundColor: '#eeeeee'
            }
        })
    }
});

export default class LoginForm extends React.Component {
    render() {
        return (
            <CardView style = {
                    {
                        borderRadius: 4,
                        backgroundColor: '#fff'
                    }
                } ><TextInput
            style = {
                styles.textInputStyle
            }
            /><TextInput
            style = {
                styles.textInputStyle
            }
            secureTextEntry = {
                true
            }
            /><Button color = "#841584"
            title = "Login"
            onPress = {
                () => console.log("onLoginPress")
            }
            buttonStyle = {
                styles.buttonStyle
            }
            /></CardView>
        );
    }
}

