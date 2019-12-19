import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, TouchableOpacity, Text, View, Alert, Image } from 'react-native';
 import Icon from 'react-native-vector-icons/MaterialIcons';

class DrawerContent extends Component {
  state = {
    channels: [
 
              { screen: 'Registeration Process', title: 'Registeration Process', icon: 'record-voice-over' },
       { screen: 'Term & Conditions', title: 'Terms & Conditions', icon: 'terrain' },
       { screen: 'Privacy Policy', title: 'Privacy Policy', icon: 'play-for-work' },
       { screen: 'About', title: 'About', icon: 'adjust' }, 
       { screen: 'Log Out Screen', title: 'Log Out', icon: 'settings-power' },
      
    ],
  };

  navigateToScreen = route => () => {
   console.log(route)
   if(route == "Log Out Screen" )
   {
    Alert.alert(
      'Log Out',
      'Are you Sure? You want to Log Out', [{
          text: 'Cancel',
          style: 'cancel'
      },
      {
          text: 'OK',
          onPress: () => 
          this.exit()
      }, ], {
          cancelable: false
      }
   )
   }
   else if (route == "Term & Conditions") {
 this.props.navigation.navigate('Terms')
   }
   else if (route == "Privacy Policy") {
 this.props.navigation.navigate('Privacy')
   }
    else if (route == "Registeration Process") {
 this.props.navigation.navigate('Process')
   }
    else  {
 this.props.navigation.navigate('About')
   }
  };

  exit = () => {
    this.props.navigation.navigate('Login')
  }
  renderChannelButtons() {
    return this.state.channels.map(({ screen, title, icon }) => (
      <TouchableOpacity
        key={screen + title}
        onPress={this.navigateToScreen(screen)}
      >
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name={icon}
            size={20}
            color="white"
            style={{ margin: 15, width: 20 }}
          />
          <Text style={{ color: 'white', marginTop: 17 }}>{title}</Text>
        </View>
      </TouchableOpacity>
    ));
  }

  render() {
    return (
      <View style={styles.containerStyle}>
      <Image style={{alignSelf:'center',marginTop:20, width:100, height:100, tintColor : 'white'}}source={require('../images/78.png')}></Image>
        <ScrollView>{this.renderChannelButtons()}</ScrollView>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#8e44ad',
  },
};

export default DrawerContent;
