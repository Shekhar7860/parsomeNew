import React, { Component} from 'react'
import {View, Text,TextInput, Image, TouchableOpacity, Picker, Alert} from 'react-native'
import styles from "../styles/styles";
// import { Dropdown } from 'react-native-material-dropdown';
export default class SelectItems extends Component {
    goToPage = (page) => {
        this.props.navigation.navigate(page)
    }
render () { 
    let data = [{
        value: 'Australia',
      }, {
        value: 'New Zealand',
      }, {
        value: 'India',
      }];
      let data2 = [{
        value: 'Punjab',
      }, {
        value: 'West Bengal',
      }, {
        value: 'Uttar Pradesh',
      }];
      let data3 = [{
        value: 'Patiala',
      }, {
        value: 'Mohali',
      }, {
        value: 'Ludhiana',
      }];
return (<View>
      <Image  style={styles.imageWidth} source={require('../images/kinder.jpg')} ></Image>
    <View style={{marginTop:10}}>
    <Dropdown
    containerStyle={styles.dropDown}
        label='Country'
        data={data}
      />
       <Dropdown
    containerStyle={styles.dropDown}
        label='State'
        data={data2}
      />
       <Dropdown
    containerStyle={styles.dropDown}
        label='City'
        data={data3}
      />
   
   
    <TouchableOpacity style={styles.buttonBackgroundNext} onPress={this.goToPage.bind(this, 'Home')}>
        <Text  style={styles.welcomeLoginText}>Next</Text>
        </TouchableOpacity>
        
        </View></View>)} 
      
}