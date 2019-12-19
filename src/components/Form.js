import React, { Component} from 'react'
import {View, Text,TextInput, Image, TouchableOpacity, Alert, ScrollView} from 'react-native'
import styles from "../styles/styles";
import RadioButton from './RadioButton'
export default class Register extends Component {
     constructor (props) {
    super (props)
    this.state = {
      email : "",
      username : "",
      password : "",
      confirmPassword : "",
      otpField : false,
      otp : "",
       radioItems:
        [
          {
            label: 'Student',
            size: 30,
            color: '#636c72',
            selected: true
          },

          {
            label: 'Partner',
            color: '#636c72',
            size: 30,
            selected: false,
          },

          
        ]
    }
  }
    goToPage = (page) => {
       

      if(this.state.username && this.state.age && this.state.location && this.state.course)
      {
      
         this.props.navigation.navigate(page)
        
         
      }

      else
      {
        if(!this.state.username && !this.state.age && !this.state.location && !this.state.course) {
             Alert.alert("please enter all details")
        }
       else  if(!this.state.username )
        {
            Alert.alert("please enter username")
        }
         else if(!this.state.age )
        {
            Alert.alert("please enter age")
        }
        else  if(!this.state.location)
        {
            Alert.alert("please enter location")
        }
         else if(!this.state.course )
        {
            Alert.alert("please enter course")
        }
       
      }
        
    }

sendOTP = () => {
  Alert.alert("OTP send Successfully")
}

verifyOTP = () => {
  if(this.state.otp.length == 4) {
    Alert.alert("OTP Verified Successfully")
  }
  else
  {
    Alert.alert("Please enter valid OTP")
  }
}
  setMobile = (text) => 
  {
    if(text.length  == 10)
    {
      this.setState({otpField : true})
    }
    this.setState({ mobile :text})
  }
  changeActiveRadioButton(index) {
    this.state.radioItems.map((item) => {
      item.selected = false;
    });

    this.state.radioItems[index].selected = true;

    this.setState({ radioItems: this.state.radioItems }, () => {
      this.setState({ selectedItem: this.state.radioItems[index].label });
    });
  }
render () { 
return (<View style={styles.container}>
   <View style={styles.toolbar}>
                     <TouchableOpacity style={styles.toolbarButton}>
                    <Image style={{width:30, marginLeft:5, marginTop :0,  height:30, }}></Image>
                    </TouchableOpacity>

                    <Text style={styles.toolbarTitle}>Registeration Form</Text>
                    <TouchableOpacity style={styles.toolbarButton}>
                   
                    </TouchableOpacity>
                </View>
      <Image  style={styles.imageWidth} source={require('../images/study.jpg')} ></Image>
      <ScrollView>

    <View style={{marginTop:10}}>
 
 
    <TextInput style={styles.input} placeholder="Name" onChangeText={(text)=>this.setState({ username:text})} placeholderTextColor = "black"></TextInput>
    <TextInput style={styles.input} placeholder="Age" onChangeText={(text)=>this.setState({ age:text})} placeholderTextColor = "black" keyboardType='numeric'></TextInput>
    <TextInput style={styles.input} placeholder="Location" onChangeText={(text)=>this.setState({ location:text})} placeholderTextColor = "black" ></TextInput>
     <TextInput style={styles.input} placeholder="Study Course" onChangeText={(text)=>this.setState({ course:text})} placeholderTextColor = "black"  keyboardType='numeric' maxLength={10}></TextInput>
   

    <TouchableOpacity style={styles.buttonBackground} onPress={this.goToPage.bind(this, 'Home2')}>
        <Text  style={styles.welcomeLoginText}>Submit</Text>
        </TouchableOpacity>
        
        </View>
        </ScrollView></View>)} 
      
}