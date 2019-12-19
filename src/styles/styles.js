import {StyleSheet, Platform, Dimensions} from 'react-native';
export default styles = StyleSheet.create({

  container: {
    flex: 1
  },
 
imageWidth :{
  width: Dimensions.get('window').width - 30, height :  Dimensions.get('window').height/2 - 150, alignSelf:'center', marginTop:20
},
icon :{
  width:22,
  height :22,
  margin :15,
  
},
icon2 :{
  width:25,
  height :25,
  
  
},
guestText : {
  alignSelf : 'center',
  fontSize : 16,
  marginTop : 20
},
 radioButton:
    {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
 
    radioButtonHolder:
    {
        borderRadius: 50,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
 
    radioIcon:
    {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
     selectedTextHolder: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 15,
      backgroundColor: 'rgba(0,0,0,0.6)',
      justifyContent: 'center',
      alignItems: 'center'
    },
    selectedText: {
      fontSize: 18,
      color: 'white'
    },
 
    label:
    {
        marginLeft: 10,
        fontSize: 20
    },
 
    selectedTextHolder:
    {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: 15,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center'
    },
 
    selectedText:
    {
        fontSize: 18,
        color: 'white'
    },
detailsImageWidth : {
  width :  Dimensions.get('window').width - 10,
  height :  Dimensions.get('window').height/2,
  alignSelf : 'center',
  marginTop :5
},
float : {
  position : 'absolute',
  top : 5,
  marginLeft : 120
},
imageWidthList :{
  width : 50,
  height : 50,

},
imageWidthList2 :{
  width : 45,
  height : 45,
  marginTop:8
},
textCommon : {
  color : 'white',
  textAlign : 'center',
  fontSize : 12,
  marginTop: 5,
  marginBottom :5

},
textStyle : {
  marginTop:5,
  alignSelf : 'center'
},
textStyle2 : {
  marginTop:5,
  alignSelf : 'center'
}, 
homeTextStyle : {
  marginTop: 5, 
 fontSize : 14,
 fontWeight : 'bold'
},
homeTextStyle2 : {
  marginTop: 2, 
  fontSize : 13,
  color : "#bdc3c7"
},
splashTextFont: {
  textAlign: 'center', fontSize:50, alignSelf:'center', width:'100%', color:'red',
  fontFamily: 'beauty'
},

welcomeTextStyle : {
  textAlign: 'center', 
  marginTop:10,
  color : '#ff5a66',
  fontSize:40,
  fontFamily: 'beauty'
},
welcomeLoginText :{
  color:'white',
  
},
textWidth : {
  width: '85%'
},
Width50 : {
  width: '50%'
},
detailedText : {
  marginLeft : 5,
  fontSize : 25
},
smallText : {
  margin : 5
},
footer : {
  position : 'absolute', bottom : 0,
  width : '100%'
},
row : {
  flexDirection : 'row'
},
imageDimension : {
width : '30%',
marginBottom : 20,
margin:10
},
imageDimension2 : {
  width:"23%",
  marginBottom : 20,
  margin:20,
  backgroundColor : '#bdc3c7',

  },
pickerStyle:{  
  height: 50,  
  width: "80%",  
  color: '#344953',  
  justifyContent: 'center',  
},
starDimension : {
width:'30%'
},
sectionDimension : {
  width:'70%',
  margin:10
},
input : {
  marginTop:10,
  width:'70%',
  borderWidth:1,
  alignSelf:'center',
  height:40,
  borderRadius : 20,
  color:'black',
  marginBottom :10,
  padding:10
},
input2 : {
  marginTop:10,
  width:'70%',
  borderWidth:1,
  alignSelf:'center',
  height:40,
  borderRadius : 20,
  color:'black',
  marginBottom :10,
  padding:10,
  borderColor : 'white'
},

dropDown : {
  marginTop:0,
  width:'70%',
  alignSelf:'center',
  marginBottom :0,
  height:50
  
},
myStarStyle: {
  color: '#fc5c65',
  backgroundColor: 'transparent',
  textShadowColor: 'black',
  textShadowOffset: {width: 1, height: 1},
  textShadowRadius: 2
},
myEmptyStarStyle: {
  color: 'white',
},
textWhite:{
  color :"white"
},
toolbar:{
        backgroundColor:'#8e44ad',
        paddingTop:20,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'left',
        fontWeight:'bold',
        flex:1,
        fontSize:20                //Step 3
    },
    tabsContainerStyle: {
    //custom styles
  },
  tabStyle: {
    //custom styles
  },
  firstTabStyle: {
    //custom styles
  },
  lastTabStyle: {
    //custom styles
  },
  tabTextStyle: {
    //custom styles
  },
  activeTabStyle: {
    //custom styles
  },
  activeTabTextStyle: {
    //custom styles
  },
  tabBadgeContainerStyle: {
    //custom styles
  },
  activeTabBadgeContainerStyle: {
    //custom styles
  },
  tabBadgeStyle: {
    //custom styles
  },
  activeTabBadgeStyle: {
    //custom styles
  },
buttonBackground:{
 marginTop:10,
 alignSelf:'center',
  backgroundColor:'#8e44ad',
  width:"70%",
  borderRadius:25,
  height:40,
  alignItems:'center',
  justifyContent:'center'
},
buttonBackground2:{
 marginTop:30,
 alignSelf:'center',
  backgroundColor:'#8e44ad',
  width:"70%",
  borderRadius:25,
  height:40,
  alignItems:'center',
  justifyContent:'center'
},
buttonBackgroundNext:{
  marginTop:160,
  alignSelf:'flex-end',
   backgroundColor:'#e84393',
   width:"20%",
   borderRadius:25,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   marginRight:10
 },
buttonBackgroundSignUp:{
  marginTop:30,
  borderWidth:1,
  alignSelf:'center',
   width:"70%",
   borderRadius:25,
   height:40,
   alignItems:'center',
   justifyContent:'center'
 },
 buttonBackgroundfb:{
  marginTop:10,
  borderWidth:1,
  alignSelf:'center',
  backgroundColor:'#70a1ff',
   width:"70%",
   borderRadius:25,
   height:40,
   alignItems:'center',
   justifyContent:'center'
 },
 buttonBackgroundGuest:{
  marginTop:10,
  borderWidth:1,
  alignSelf:'center',
  backgroundColor:'#8e44ad',
   width:"70%",
   borderRadius:25,
   height:40,
   alignItems:'center',
   justifyContent:'center'
 },
 buttonBackgroundgplus:{
  marginTop:15,
  borderWidth:1,
  backgroundColor:'#ff4757',
  alignSelf:'center',
   width:"70%",
   borderRadius:25,
   height:40,
   alignItems:'center',
   justifyContent:'center'
 }

  
      
          


    
  
  
  

  
})