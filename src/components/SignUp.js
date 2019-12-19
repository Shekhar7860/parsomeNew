import React, {Component} from 'react';
import {Platform, Picker, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from "../styles/styles";
// import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
// import firebase from 'react-native-firebase';
// const Banner = firebase.admob.Banner;
// const AdRequest = firebase.admob.AdRequest;
// const request = new AdRequest();
// request.addKeyword('foobar');
export default class SignuUp extends Component {

  constructor(props){
    super(props);
    this.state = { 
      email:'',
      password:'',
      mobile:'',
      confirmPassword:'',
      confirmPasswordError:'',
      passwordError:'',
      emailFormatError:'',
      mobileError:'',
      emailFormatError:'',
      loading: false,
       stname : "",
       ptname : "",
       score : ""
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

   submit = () => {
    if (this.state.email && this.state.level && this.state.stname && this.state.ptname && this.state.score && this.state.mobile)
    {
        alert("logging in")
    }
    else
    {
        alert("please fill all details")
    }
}


  render() {

    var radio_props = [
  {label: 'UR', value: 0 },
  {label: 'OBC/SC/ST', value: 1 }
];
    return (
    
      <View style={{flex:1}}>
         <View style={styles.toolbar}>
         <TouchableOpacity onPress={() => this.goBack()}>
                    <Image style={{width:30,marginLeft:5,  height:30}}source={require('../images/back.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.toolbarTitle}>GPA Calculator</Text>
                    <Text style={styles.toolbarButton}></Text>
                </View>
                <ScrollView>
                <View style={{alignItems:'center', marginTop:20}}>

                 <TextInput style={styles.inputBox}
                onChangeText={(stname) => this.setState({stname})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Student Name (required)"
                editable={false} selectTextOnFocus={false}
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                keyboardType="email-address"
               />
                 <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100}}>
                <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/name.png')}></Image>
                 <TextInput style={styles.inputBox}
                onChangeText={(name) => this.setState({name})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Student Name (required)"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="email-address"
                />
                </View>
                <TextInput style={styles.inputBox}
                onChangeText={(prname) => this.setState({prname})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Parent/Guardian Name (required)"
                editable={false} selectTextOnFocus={false}
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                keyboardType="email-address"
               />
                 <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100}}>
                <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/name.png')}></Image>
                 <TextInput style={styles.inputBox}
                onChangeText={(name) => this.setState({name})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Parent/Guardian Name"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="email-address"
                />
                </View>

                <TextInput style={styles.inputBox}
                onChangeText={(stname) => this.setState({stname})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Your Email (required)"
                editable={false} selectTextOnFocus={false}
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                keyboardType="email-address"
               />
                 <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100}}>
                <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/email1.png')}></Image>
                 <TextInput style={styles.inputBox}
                onChangeText={(name) => this.setState({name})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Your Email"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="email-address"
                />
                </View>

                <TextInput style={styles.inputBox}
                onChangeText={(stname) => this.setState({stname})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Your Phone"
                editable={false} selectTextOnFocus={false}
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                
               />
                 <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100}}>
                <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/mobile.png')}></Image>
                 <TextInput style={styles.inputBox}
                onChangeText={(name) => this.setState({name})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Your Phone"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
                />
                </View>

                <TextInput style={styles.inputBox}
                onChangeText={(stname) => this.setState({stname})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="NEET SCORE (optional)"
                editable={false} selectTextOnFocus={false}
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                
               />
                 <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100}}>
                <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/class.png')}></Image>
                 <TextInput style={styles.inputBox}
                onChangeText={(name) => this.setState({name})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="NEET SCORE"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
                />
                </View>

                 <TextInput style={styles.inputBox}
                onChangeText={(ptname) => this.setState({ptname})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Marks Obtained In Class 10/SSC/X/O Level : Put Best Five Marks Obtained"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                editable={false} selectTextOnFocus={false}
                keyboardType="email-address"
                />
                <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100}}>
                
                 <TextInput style={styles.inputBox}
                onChangeText={(name) => this.setState({name})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Subject1"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
                />
                </View>
                <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100, marginTop:10}}>
                
                 <TextInput style={styles.inputBox}
                onChangeText={(name) => this.setState({name})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Subject2"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
                />
                </View>
                <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100, marginTop:10}}>
                
                 <TextInput style={styles.inputBox}
                onChangeText={(name) => this.setState({name})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Subject3"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
                />
                </View>
                <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100, marginTop:10}}>
                
                 <TextInput style={styles.inputBox}
                onChangeText={(name) => this.setState({name})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Subject4"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
                />
                </View>
                <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100, marginTop:10}}>
                
                 <TextInput style={styles.inputBox}
                onChangeText={(name) => this.setState({name})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Subject5"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
                />
                </View>

                <TextInput style={styles.inputBox}
                onChangeText={(ptname) => this.setState({ptname})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Marks Obtained In Class 12/HSC/X/A Level :"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                editable={false} selectTextOnFocus={false}
                keyboardType="email-address"
                />
                <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100, marginTop:10}}>
                
                <TextInput style={styles.inputBox}
               onChangeText={(name) => this.setState({name})}
               underlineColorAndroid='rgba(0,0,0,0)' 
               placeholder="Biology (Botany + Zoology)"
               placeholderTextColor = "#95A5A6"
               selectionColor="#fff"
               keyboardType="number-pad"
               />
               </View>
               <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100, marginTop:10}}>
                
                 <TextInput style={styles.inputBox}
                onChangeText={(name) => this.setState({name})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Physics"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
                />
                </View>
                <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100, marginTop:10}}>
                
                 <TextInput style={styles.inputBox}
                onChangeText={(name) => this.setState({name})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Chemistry"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
                />
                </View>
<TextInput style={styles.inputBox}
                onChangeText={(ptname) => this.setState({ptname})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Category (required)"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                editable={false} selectTextOnFocus={false}
                keyboardType="email-address"
                />
                  <RadioForm
                  style={{marginTop:10, justifyContent:'space-around'}}
          radio_props={radio_props}
          initial={0}
           formHorizontal={true}
          onPress={(value) => {this.setState({value:value})}}
        />

<TextInput style={styles.inputBox}
                onChangeText={(ptname) => this.setState({ptname})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Year Of Passing Class 10/SSC/X/O Level (required)"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                editable={false} selectTextOnFocus={false}
                keyboardType="email-address"
                />
 <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.language}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({language: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Choose Year" value="year" />  
                    <Picker.Item label="2010" value="2010" />  
                    <Picker.Item label="2011" value="2011" />  
                     <Picker.Item label="2012" value="2012" />  
                    <Picker.Item label="2013" value="2013" />  
                     <Picker.Item label="2014" value="2014" />  
                    <Picker.Item label="2015" value="2015" />  
                     <Picker.Item label="2016" value="2016" />  
                    <Picker.Item label="2017" value="2017" />  
                     <Picker.Item label="2018" value="2018" />  
                    <Picker.Item label="2019" value="2019" />  
                     <Picker.Item label="2020" value="2020" />  
                    <Picker.Item label="2021" value="2021" />  
                     <Picker.Item label="2022" value="2022" />  
                    <Picker.Item label="2023" value="2023" />  
                     <Picker.Item label="2024" value="2024" />  
                    <Picker.Item label="2025" value="2025" />  
                     <Picker.Item label="2026" value="2026" />  
                    <Picker.Item label="2027" value="2027" />  
                     <Picker.Item label="2028" value="2028" />  
                    <Picker.Item label="2029" value="2029" />  
                     <Picker.Item label="2030" value="2030" />  
                   
                </Picker>  
                
                <TextInput style={styles.inputBox}
                onChangeText={(ptname) => this.setState({ptname})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Year Of Passing Class 12/HSC/X11/A Level (required)"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                editable={false} selectTextOnFocus={false}
                keyboardType="email-address"
                />
 <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.language}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({language: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Choose Year" value="year" />  
                    <Picker.Item label="2010" value="2010" />  
                    <Picker.Item label="2011" value="2011" />  
                     <Picker.Item label="2012" value="2012" />  
                    <Picker.Item label="2013" value="2013" />  
                     <Picker.Item label="2014" value="2014" />  
                    <Picker.Item label="2015" value="2015" />  
                     <Picker.Item label="2016" value="2016" />  
                    <Picker.Item label="2017" value="2017" />  
                     <Picker.Item label="2018" value="2018" />  
                    <Picker.Item label="2019" value="2019" />  
                     <Picker.Item label="2020" value="2020" />  
                    <Picker.Item label="2021" value="2021" />  
                     <Picker.Item label="2022" value="2022" />  
                    <Picker.Item label="2023" value="2023" />  
                     <Picker.Item label="2024" value="2024" />  
                    <Picker.Item label="2025" value="2025" />  
                     <Picker.Item label="2026" value="2026" />  
                    <Picker.Item label="2027" value="2027" />  
                     <Picker.Item label="2028" value="2028" />  
                    <Picker.Item label="2029" value="2029" />  
                     <Picker.Item label="2030" value="2030" />  
                   
                </Picker>  
 
                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText} onPress={() => this.submit()}>Calculate</Text>
                </TouchableOpacity>
                <TextInput style={styles.inputBox}
                onChangeText={(ptname) => this.setState({ptname})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="OTP Please check your phone/Email"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                editable={false} selectTextOnFocus={false}
                keyboardType="email-address"
                />
                </View>
                </ScrollView>
                <View style={styles.footer}>
       <Banner
       style={{alignSelf:'center',marginLeft:20}}
    size={"SMALL_BANNER"}
  unitId={"ca-app-pub-2457999726327943/8752996954"}
  request={request.build()}
  onAdLoaded={() => {
    console.log('Advert loaded');
  }} />
  </View>
      
      
      </View>
      
    );
}


}