import React, { Component} from 'react'
import {View, Text, Image,TextInput,  Dimensions, TouchableOpacity, FlatList,  Modal, TouchableHighlight, ScrollView} from 'react-native'
import styles from "../styles/styles";
// import {  Card, Divider, SearchBar, List, ListItem  } from 'react-native-elements';
// import MapView from 'react-native-maps'
// import Geolocation from '@react-native-community/geolocation';
// import Stars from 'react-native-stars';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Service from "../services/Service";

export default class Home2 extends Component {

  constructor (props) {
    super (props)
    this.state = {
      listView : true,
      mapView : false, 
      longitude : "", 
      latitude : "",
      places : [{heart : true},
        {heart : true},
        {heart : true},
        {heart : true},
        {heart : true},
        {heart : true}],

      modalVisible: false,
      guest : false
      
    }
    service = new Service()
  }

  onFocusFunction = () => {
if(this.props.navigation.state.params)
    {
      if(this.props.navigation.state.params.guest === "guest")
      {
      //  alert("this one")
        this.setState({ guest: true})
      }
      else
      {
     //   alert("this fired")
          this.setState({ guest: false})
      }
    }
    else
    {
    //  alert("this")
    }
}


    goToPage = (page) => {
        this.props.navigation.navigate(page)
    }

    makeItem = () => {
        return {
            heart : false
          };
    }
   openScreen = (val) => {
    this.props.navigation.navigate(val)

   }
    setView = (val) => {
      if(val == "list" ) {
        this.setState({mapView: false, listView: true}) 
      }else{
        this.setState({mapView: true, listView: false}) 
        }
      }
    componentDidMount = () => {
      console.log('im working')

     this.focusListener = this.props.navigation.addListener('didFocus', () => {
    this.onFocusFunction()
  })
     // Geolocation.requestAuthorization();
    //   this.getProfiles()
    //   // Geolocation.getCurrentPosition(info => this.sendLocation(info));
    //   Geolocation.getCurrentPosition(
    //     (position) => {
    //       console.log('Position -> ',position);
    //       this.setState({latitude : position.coords.latitude, longitude : position.coords.longitude})
    //     },
    //     (error) => console.log(error, 'error')
        
    // );
    }

detail = () => {
 if(this.state.guest == false)
 {
    this.props.navigation.navigate("Details")
 }
}
   
    getCategoriesPlaces = () => {
      service.getCategories().then(res => {
        console.log("myres", res);
       
      });
    }
    getProfiles = () => {
     //  service.getProfiles().then(res => {
     //    console.log("new", res);
     // //   this.setState({places : res.profileList})
     //  });
    }
   
    searchFilterFunction = text => {
      this.setState({
         value: text,
       });
   
      
     }

     toggleModal(visible) {
      this.setState({ modalVisible: visible });
      if(visible == false) {
         this.props.navigation.navigate("Home")
      }
   }
     openMenu = () => {
    this.props.navigation.openDrawer()
  }
render () { 
return (<View style={styles.container}>
  <View style={styles.toolbar}>
                     <TouchableOpacity style={styles.toolbarButton}>
                    <Image style={{width:30, marginLeft:5, marginTop :0,  height:30, }}></Image>
                    </TouchableOpacity>

                    <Text style={styles.toolbarTitle}>Parsome</Text>
                     <TouchableOpacity onPress={() => this.openMenu()}>
                    <Image style={{width:30,marginRight:20,  height:30}} source={require('../images/notification.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.openMenu()}>
                    <Image style={{width:30,marginRight:10,  height:30}} source={require('../images/menu.png')}></Image>
                    </TouchableOpacity>
                </View>
               
                <ScrollView>
                <View style={{flex:1, marginBottom :20}}>
   <View style={{height:150, width:'90%', borderWidth:1, alignSelf : 'center', marginTop:20, borderColor : "#95a5a6"}}>
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
     </ScrollView>

    
  
 

     
  
      
    </View>)} 
      
}