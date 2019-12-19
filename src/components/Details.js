import React, { Component} from 'react'
import {View, Text, Image,TextInput,  TouchableOpacity, FlatList,  Modal, TouchableHighlight, ScrollView} from 'react-native'
import styles from "../styles/styles";
// import {  Card, Divider, SearchBar, List, ListItem  } from 'react-native-elements';
// import MapView from 'react-native-maps'
// import Geolocation from '@react-native-community/geolocation';
// import Stars from 'react-native-stars';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Service from "../services/Service";

export default class Details extends Component {

  constructor (props) {
    super (props)
    this.state = {
      listView : true,
      mapView : false, 
      longitude : "", 
      latitude : "",
      places : [1, 2],
      modalVisible: false
      
    }
    service = new Service()
  }
    goToPage = (page) => {
        this.props.navigation.navigate(page)
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
     // Geolocation.requestAuthorization();
      this.getProfiles()
      // Geolocation.getCurrentPosition(info => this.sendLocation(info));
      Geolocation.getCurrentPosition(
        (position) => {
          console.log('Position -> ',position);
          this.setState({latitude : position.coords.latitude, longitude : position.coords.longitude})
        },
        (error) => console.log(error, 'error')
        
    );
    }

   
    getCategoriesPlaces = () => {
      service.getCategories().then(res => {
        console.log("myres", res);
       
      });
    }
    getProfiles = () => {
      service.getProfiles().then(res => {
        console.log("new", res);
     //   this.setState({places : res.profileList})
      });
    }
   
    searchFilterFunction = text => {
      this.setState({
         value: text,
       });
   
      
     }

     toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }

    checkItem = (object, index) => {
    console.log(object, 'hdhhdhd', index)
    if(object.heart == true ) {
       
  this.state.places[index].heart = false
  this.setState({
    places: [...this.state.places]
  });
    }
    
    else
    {
    this.state.places[index].heart = true
    this.setState({
        places: [...this.state.places]
      });
    }
}


  goBack = () => {
      this.props.navigation.goBack()
    }
    
render () { 
return (<View style={styles.container}>

<View style={styles.toolbar}>
      <TouchableOpacity onPress={() => this.goBack()}>
                    <Image style={{width:30, marginLeft:5, marginTop :10,  height:30, tintColor : 'black'}}source={require('../images/back.png')}></Image>
                    </TouchableOpacity>
                 
                </View>
    <Image  style={styles.detailsImageWidth} source={require('../images/food.jpg')} ></Image>
          <ScrollView>
    <View style={{marginTop:10}}>
     
      <View style={styles.row}>
 <View  style={styles.width50}>
     <Text style={styles.detailedText}>
     Name  {"\n"}
     Price{"\n"}
Location {"\n"}
Contact Number
    </Text>
</View>
<View style={styles.width50}>
<Stars
        default={2.5}
        count={5}
        half={true}
        fullStar={<Icon name={'star'} size={35} style={[styles.myStarStyle]}/>}
        emptyStar={<Icon name={'star-outline'} size={35}style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
        halfStar={<Icon name={'star-half'} size={35} style={[styles.myStarStyle]}/>}
         
      />
</View>

</View>
    
</View>
    
    <Text style={styles.smallText}>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr </Text>
    
  
 

     
  </ScrollView>  
        <View style={styles.footer}>
     <TouchableOpacity style={styles.buttonBackgroundfb}  >
        <Text style={styles.textWhite}>Chat</Text>
        </TouchableOpacity>
  </View>

    </View>)} 
      
}