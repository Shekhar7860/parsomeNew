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
       

      if(this.state.mobile && this.state.password && this.state.username && this.state.confirmPassword && this.state.otp)
      {
         if ( this.state.password != this.state.confirmPassword) {
          Alert.alert("password and confirmpassword do not match")
        } 
        else
        {
         this.props.navigation.navigate(page)
        }
         
      }

      else
      {
        if(!this.state.mobile && !this.state.password && !this.state.username && !this.state.confirmPassword && !this.state.otp) {
             Alert.alert("please enter all details")
        }
       else  if(!this.state.mobile )
        {
            Alert.alert("please enter mobile")
        }
         else if(!this.state.password )
        {
            Alert.alert("please enter password")
        }
        else  if(!this.state.username )
        {
            Alert.alert("please enter email")
        }
         else if(!this.state.confirmPassword )
        {
            Alert.alert("please enter confirm password")
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

  goBack = () => {
      this.props.navigation.goBack()
    }
render () { 
return (<View style={styles.container}>
  <View style={styles.toolbar}>
   <TouchableOpacity onPress={() => this.goBack()}>
                    <Image style={{width:30,marginLeft:5,  height:30}}source={require('../images/back.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.toolbarTitle}>Register</Text>
                    <TouchableOpacity style={styles.toolbarButton}>
                   
                    </TouchableOpacity>
                </View>
      <Image  style={styles.imageWidth} source={require('../images/study.jpg')} ></Image>
      <ScrollView>

    <View style={{marginTop:10}}>
    <View style={{flexDirection : 'row', alignSelf:"center"}}>
    {
          this.state.radioItems.map((item, key) =>
            (
              <RadioButton key={key} button={item} onClick={this.changeActiveRadioButton.bind(this, key)} />
            ))
        }
    </View>
    <TextInput style={styles.input} placeholder="User Name" onChangeText={(text)=>this.setState({ username:text})} placeholderTextColor = "black"></TextInput>
    <TextInput style={styles.input} placeholder="Password" onChangeText={(text)=>this.setState({ password:text})} placeholderTextColor = "black" secureTextEntry={true}></TextInput>
    <TextInput style={styles.input} placeholder="Confirm Password" onChangeText={(text)=>this.setState({ confirmPassword:text})} placeholderTextColor = "black" secureTextEntry={true}></TextInput>
     <TextInput style={styles.input} placeholder="Mobile Number" onChangeText={(text)=>this.setMobile(text) } placeholderTextColor = "black"  keyboardType='numeric' maxLength={10}></TextInput>
    { this.state.otpField ? <View><TextInput style={styles.input} placeholder="OTP" onChangeText={(text)=>this.setState({ otp:text}) } placeholderTextColor = "black"  keyboardType='numeric' maxLength={4}></TextInput>
        <TouchableOpacity style={styles.buttonBackground} onPress={this.sendOTP.bind(this, 'Home2')}>
        <Text  style={styles.welcomeLoginText}>Send OTP</Text>
        </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBackground} onPress={this.verifyOTP.bind(this, 'Home2')}>
        <Text  style={styles.welcomeLoginText}>Verify OTP</Text>
        </TouchableOpacity></View> : null}

    <TouchableOpacity style={styles.buttonBackground} onPress={this.goToPage.bind(this, 'Form')}>
        <Text  style={styles.welcomeLoginText}>SignUp</Text>
        </TouchableOpacity>
        
        </View>
        </ScrollView></View>)} 
      
}