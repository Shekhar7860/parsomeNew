import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ImageBackground,TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from "../styles/styles";
import SegmentedControlTab from "react-native-segmented-control-tab";
import YouTube from 'react-native-youtube';
export default class Settings extends Component {

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
      cardheight:300,
       selectedIndex: 0
    }
    
  }

    openMenu = () => {
    this.props.navigation.openDrawer()
  }

  newPage = () => {
    this.props.navigation.navigate('Process')
  }
handleIndexChange = index => {
    this.setState({
      ...this.state,
      selectedIndex: index
    });
  };
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
    return (
    
      <View style={{flex:1}}>
         <View style={styles.toolbar}>
         <Text style={styles.toolbarButton}></Text>
                    <Text style={styles.toolbarTitle}>Learn</Text>
                    <TouchableOpacity>
                    <Image style={{width:30,marginRight:10,  height:30}}></Image>
                    </TouchableOpacity>
                </View>
               <SegmentedControlTab
               style={{flex:1}}
          values={["Must See", "How To", "Contact Us"]}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
        />
        {this.state.selectedIndex == 0 ? <View style={{flex:1}}><ScrollView>
                <View style={{flex:1, marginBottom :40}}>
   <View style={{height:150, width:'90%', borderWidth:1, alignSelf : 'center', marginTop:20, borderColor : "#95a5a6"}}>
   <YouTube
  videoId="KVZ-P-ZI6W4" 
  apiKey = 'AIzaSyDqo1UEhNzQqF_mS3xZ6OSNtgdO3UmYP8A'// The YouTube video ID
  play // control playback of video with true/false // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
/>
   </View>
    <View style={{height:150, width:'90%', borderWidth:1, alignSelf : 'center', marginTop:20, borderColor : "#95a5a6"}}>
   </View>
    <View style={{height:150, width:'90%', borderWidth:1, alignSelf : 'center', marginTop:20, borderColor : "#95a5a6"}}>
   </View>
    <View style={{height:150, width:'90%', borderWidth:1, alignSelf : 'center', marginTop:20, borderColor : "#95a5a6"}}>
   </View>
    <View style={{height:150, width:'90%', borderWidth:1, alignSelf : 'center', marginTop:20, borderColor : "#95a5a6"}}>
   </View>
   </View>
     </ScrollView></View> : this.state.selectedIndex == 1 ?
     <View> 
     <TouchableOpacity onPress={this.newPage.bind(this, 'hiiii')}style={{height:50,justifyContent : 'center', width:'90%', borderWidth:1, alignSelf : 'center', marginTop:20, borderColor : "#95a5a6"}}>
   <Text>Getting Started</Text>
   </TouchableOpacity>
    <View style={{height:50,justifyContent : 'center', width:'90%', borderWidth:1, alignSelf : 'center', marginTop:20, borderColor : "#95a5a6"}}>
   <Text>Getting Started</Text>
   </View>
   </View> :  <View style={{flex:1}}> 
   <TouchableOpacity style={{height:50,justifyContent : 'center', width:'90%', borderWidth:1, alignSelf : 'center', alignItems : "center", marginTop:20, borderColor : "#95a5a6"}}>
   <YouTube
  videoId="KVZ-P-ZI6W4" // The YouTube video ID
  apiKey = 'AIzaSyDqo1UEhNzQqF_mS3xZ6OSNtgdO3UmYP8A'
  play // control playback of video with true/false
  fullscreen // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
/>
   </TouchableOpacity>
     <TouchableOpacity style={{height:50,justifyContent : 'center', width:'90%', borderWidth:1, alignSelf : 'center', alignItems : "center", marginTop:20, borderColor : "#95a5a6"}}>
   <Text >Call Us at - +91-9040490606</Text>
   </TouchableOpacity>
    <View style={{height:50,justifyContent : 'center', width:'90%', borderWidth:1, alignSelf : 'center', alignItems : "center", marginTop:20, borderColor : "#95a5a6"}}>
   <Text>Email Us at support@parsome.com</Text>
   </View>
   </View>}
      </View>
      
    );
}


}