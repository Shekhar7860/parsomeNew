import { Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
 import React, { Component} from 'react'

 export default class RadioButton extends Component
{
    constructor()
    {
        super();
    }
 
    render()
    {
        return(
            <TouchableOpacity onPress = { this.props.onClick } activeOpacity = { 0.8 } style = { styles.radioButton }>
                <View style = {[ styles.radioButtonHolder, { height: this.props.button.size, width: this.props.button.size, borderColor: this.props.button.color }]}>
                {
                    (this.props.button.selected)
                    ?
                        (<View style = {[ styles.radioIcon, { height: this.props.button.size / 2, width: this.props.button.size / 2, backgroundColor: this.props.button.color }]}></View>)
                    :
                        null
                }
                </View>
                <Text style = {[ styles.label, { color: this.props.button.color }]}>{ this.props.button.label }</Text>
            </TouchableOpacity>
        );
    }
}