import React, {Component} from 'react';
import {Platform, Text, View, TextInput,  Dimensions,Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from "../styles/styles";

export default class Tasks extends Component {

  constructor(props){
    super(props);
    this.state = { 
      name:'',
      cls:'',
      city:'',
      age:'',
      mobile : '',
      confirmPasswordError:'',
      passwordError:'',
      emailFormatError:'',
      mobileError:'',
      emailFormatError:'',
      loading: false,
      cardheight:300
    }
    
  }

    openMenu = () => {
    this.props.navigation.openDrawer()
  }

   submit = () => {
       if (this.state.name && this.state.email && this.state.mobile )
       {
           alert("profile updated successfully")
           // this.props.navigation.navigate('Profile')
       }
       else
       {
           alert("please enter all details both")
       }
   }

  signUp = () =>{
    this.setState(() => ({ cardheight:370}));
    if ( !service.validateEmail(this.state.email)) {
      this.setState(() => ({ emailFormatError: "Proper Email Format is Required"}));
    } 
    else{
      this.setState(() => ({ emailFormatError: ''}));
    }
    if (this.state.email.trim() === "") {
      this.setState(() => ({ emailError: " Email is required."}));
      this.setState(() => ({ emailFormatError: null}));
    } else {
      this.setState(() => ({ emailError: null})); 
    }
    if (this.state.password.trim() === "") {
      this.setState(() => ({ passwordError: " Password is required."}));
    } else {
      this.setState(() => ({ passwordError: null}));
    }
    if (this.state.mobile.trim() === "") {
      this.setState(() => ({ mobileError: " Mobile Number is required."}));
    } else {
      this.setState(() => ({ mobileError: null}));
    }
    if (this.state.confirmPassword.trim() === "") {
      this.setState(() => ({ confirmPasswordError: " Confirm Password is required."}));
    } else {
      this.setState(() => ({ confirmPasswordError: null}));
    }
    if(this.state.email && this.state.mobile && this.state.password && this.state.confirmPassword)
    {
      this.setState(() => ({ cardheight:300}));
    }

    if(this.state.email && this.state.password && this.state.mobile && this.state.confirmPassword && service.validateEmail(this.state.email))
    {
      
     this.setState ({ loading: true});
      setTimeout(() => 
      {this.setState({loading: false})
      this.refs.defaultToastBottom.ShowToastFunction('SignUp SuccessFully');
      this.props.navigation.navigate('Login')
       }, 3000)
      }

  
   // alert(this.state.password)
   }
   goBack = () =>{
    this.props.navigation.pop()
   }
  render() {
      const  NewImage =   <Image source={require('../images/78.png')} style={styles.profilePic}/>
      let width = Dimensions.get('window').width
let height =  Dimensions.get('window').height
    return (
    
      <View style={{flex:1}}>
         <View style={styles.toolbar}>
         <TouchableOpacity>
                    <Image style={{width:30,marginLeft:5,  height:30}}></Image>
                    </TouchableOpacity>
                    <Text style={styles.toolbarTitle}>Partner Support</Text>
                    <TouchableOpacity>
                    <Image style={{width:30,marginRight:10,  height:30}}></Image>
                    </TouchableOpacity>
                </View>
                  <View style={{flex:1, marginBottom :20}}>
   <View style={{height:height/2 - 110, width:'90%', borderWidth:1, alignSelf : 'center', marginTop:20, borderColor : "#95a5a6"}}>
   <TouchableOpacity style={{width:'40%', alignSelf : 'center', backgroundColor : "#8e44ad", marginTop:160, height :30, justifyContent : 'center', alignItems : "center"}}>
   <Text style={{color : "white"}}>Call </Text>
   </TouchableOpacity>
   </View>
    <View style={{height:height/2 -110, width:'90%', borderWidth:1, alignSelf : 'center', marginTop:20, borderColor : "#95a5a6"}}>
    <TouchableOpacity style={{width:'40%', alignSelf : 'center', backgroundColor : "#8e44ad", marginTop:160, height :30, justifyContent : 'center', alignItems : "center"}}>
   <Text style={{color : "white"}}>Call </Text>
   </TouchableOpacity>
   </View>
       
    
   </View>
               
      </View>
      
    );
}


}