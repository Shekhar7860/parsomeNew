import React, { Component} from 'react'
import {View, Text, Image,TextInput,  TouchableOpacity, FlatList,  Modal, TouchableHighlight} from 'react-native'
import styles from "../styles/styles";
// import {  Card, Divider, SearchBar, List, ListItem  } from 'react-native-elements';
// import MapView from 'react-native-maps'
// import Geolocation from '@react-native-community/geolocation';
// import Stars from 'react-native-stars';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Service from "../services/Service";

export default class Home extends Component {

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
    
render () { 
return (<View style={styles.container}>
     {/* <SearchBar
          placeholder="Kindergartens"
          lightTheme
          round
          onChangeText={text => this.searchFilterFunction(text)}
          autoCorrect={false}
          value={this.state.value}
          icon = {{type: 'material-community', color: '#86939e', name: 'share' }}
  
          
        /> */}
         <Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>
                  <Text style = {styles.text}>Filter Options</Text>
                  
                  <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     
                     <Text style = {styles.text}>Close Modal</Text>
                  </TouchableHighlight>
               </View>
            </Modal>
            
       
        <View style={{width: '95%', flexDirection :'row', borderWidth : 1, margin : 10, alignSelf : 'center', borderRadius : 30, height :50}}>
        <Image  style={styles.icon} source={require('../images/search.png')} ></Image>
        <TextInput style={styles.input2} placeholder="Kindergartens" onChangeText={(text)=>this.setState({ username:text})} placeholderTextColor = "black"></TextInput>
        <TouchableHighlight onPress = {() => {this.toggleModal(true)}}><Image  style={styles.icon} source={require('../images/filter.png')} ></Image></TouchableHighlight>
        </View>
         <View style={{backgroundColor:"white" ,width:'100%',height:50,marginLeft:0,flexDirection:"row",justifyContent: "center",alignItems: "center"}}>
<TouchableOpacity onPress={this.setView.bind(this, 'list')} style={{backgroundColor:this.state.listView == true ? "#e84393" : "white",width:"45%",height:48,justifyContent:"center",alignItems:"center",marginTop:2,  borderWidth:1}}>
<View>
<Text style={{color: this.state.listView == true ? "white" : "black" }}>ListView</Text>
</View>
</TouchableOpacity>
<View style={{width:'5%'}}></View>
<TouchableOpacity  onPress={this.setView.bind(this, 'map')} style={{backgroundColor:this.state.mapView == true ? "#e84393" : "white",width:"45%",height:48,justifyContent:"center",alignItems:"center",marginTop:2,  borderWidth:1}}>
<Text style={{color: this.state.mapView == true ? "white" : "black"}}>MapView</Text>
</TouchableOpacity>

</View>
{this.state.listView ?  <View style={{marginTop:10}}><FlatList
  data={this.state.places}
 // refreshing={this.state.refreshing}
 // onRefresh={this.handleRefresh.bind(this)}
 // ListHeaderComponent={this.renderHeader}
  
  // onRefresh={this.onRefresh}  
  // refreshing={this.state.refreshing}  
  // onEndReached={this.loadMore}  

  renderItem={({item}) =>
  <View><View style={styles.row}>
     <TouchableOpacity style={styles.imageDimension}>
     <Image  style={styles.imageWidthList} source={require('../images/pro.jpg')} ></Image>
     </TouchableOpacity>
     <View style={styles.sectionDimension}>
       <View style={{width:'100%', flexDirection:'row', flex:1}}>
            <Text style={{width:'30%'}}>{item.profileName}</Text>
            <View  style={{width:'70%'}}><Stars
        default={2.5}
        count={5}
        half={true}
        fullStar={<Icon name={'star'} size={22} style={[styles.myStarStyle]}/>}
        emptyStar={<Icon name={'star-outline'} size={22}style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
        halfStar={<Icon name={'star-half'} size={22} style={[styles.myStarStyle]}/>}
      />
      </View>
       </View>
       <Text style={styles.textWidth}>{item.profileDescription}</Text>
       </View>
      
         </View></View>
  
  }
  keyExtractor={item => item.email}
/> 
</View>: <MapView
  style={{  
    flex:1,
  marginTop:20}}
    zoomEnabled={true}
initialRegion={{
  latitude:this.state.latitude,
  longitude:this.state.longitude,
  latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
}}
/>}
    
      
    </View>)} 
      
}