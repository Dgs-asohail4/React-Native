import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  KeyboardAvoidingView,
  Dimensions,
  AsyncStorage
} from 'react-native';
import StyleSheetFactory from './styles';

import {USER_KEY, DEFUALT_THEME, DARK_THEME} from '../../../../global/config'
import {ChangeStack, PushNewScreen} from '../../../../navigation/helper';
import Icon from 'react-native-vector-icons/Ionicons'
import {scaleModerate} from '../../../../utils/scale'

import CustomizedTextInput from '../../../../components/textInput';
import Button from '../../../../components/button';
import Theme from '../../../../global/theme'

export default class Login extends Component {
    static navigationOptions = ({navigation}) => ({
        header:null
    });
  constructor(props){
    super(props)
    this.state = {
      username: 'ahsan.sohail@ibex.co', password: 'Password123'
    }
    // this.props.navigator.setDrawerEnabled({
    //   side: "left",
    //   enabled: false,
    //   screen: "global.drawer"
    // });
  }


  storeAuthData = async (response) => {
    var data = response.data;
    var authData = { token: data.access_token };
    const user = await AsyncStorage.setItem(USER_KEY, authData)
    return this.props.requireAuthentication();
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  signIn = async () => {
    console.log(this.props);
    const { username, password } = this.state
    try {
       // login with provider
       if(username == undefined || username == ""){
          return;
       }
       if(password == undefined || password == ""){
        return;
       }

       const user = await AsyncStorage.setItem(USER_KEY, username)
       console.log('user successfully signed in!', user)
       ChangeStack(this.props, "Home", "Home", true);

    }catch (err) {
      console.log('error:', err)
    }
    //    this.props.loginAction({username,password}).then(
    //       response => {
    //           console.log(this.props);
    //           storeAuthDate(response);
    //     //      dispatch({type: types.LOGIN + SUCCESS_PREFIX, response})
    //       },
    //       error => {
    //           console.log(error);
    //       }
    //     )
    //    //const user = await AsyncStorage.setItem(USER_KEY, username)
    //    //console.log('user successfully signed in!', user)
    //   // ChangeStack(this.props, "app.home", "Home", true);
    // } catch (err) {
    //   console.log('error:', err)
    // }


  }
  getThemeImageSource = (theme) => (
      theme == DEFUALT_THEME ?
      require('../../../../global/assets/img/logo.png')
      : require('../../../../global/assets/img/logoDark.png') 
  );
  renderImage = (styles) => {
    const screenSize = Dimensions.get('window');
    const imageSize = {
      width: screenSize.width,
      height: screenSize.height - scaleModerate(375, 1),
    };
    return (
      <Image
        style={[styles.image, imageSize]}
        source={this.getThemeImageSource(this.props.theme)}
      />
    );
  };
  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme])
    const {social} = this.props.globalStyles.buttonStyle;
    const {awesome,hero,accentColor, baseColor,inverseColor, center} = this.props.globalStyles.textStyle;
    return (
      <KeyboardAvoidingView style={styles.screen}>
      <View style={styles.header}>
        {this.renderImage(styles)}
        </View>
        <View style={styles.container}>
          <CustomizedTextInput
            style={styles.input}
            placeholder='Username'
            autoCapitalize="none"
            autoCorrect={false}
            borderRadius={20}
            //backgroundColor={'#ff9147'}
            value={this.state.username}
            placeholderTextColor='black'
            //inputColor={TEXT_COLOR_PRIMARY}
            onChangeText={val => this.onChangeText('username', val)}
          />
          <CustomizedTextInput
            style={styles.input}
            placeholder='Password'
            borderRadius={20}

            autoCapitalize="none"
            value={this.state.password}
            secureTextEntry={true}
           // backgroundColor={'#ff9147'}
           // inputColor={TEXT_COLOR_PRIMARY}
            placeholderTextColor='black'
            onChangeText={val => this.onChangeText('password', val)}
          />
              <Button
                  text='lOGIN'
                  borderRadius={20}
                  color={'#ff9147'}
                  style={[{width: 350},{height:50}]}
                  textStyle={[inverseColor]}
                  onPress={this.signIn}
                /> 
            
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.button,social,{justifyContent:'center'}]}>
              <Icon name={'logo-facebook'} size={25} style={[awesome,hero,accentColor,center,{alignSelf:'center'}]}/>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button,social,{justifyContent:'center'}]} 
              >
              <Icon name={'logo-twitter'} size={25} style={[awesome,hero,accentColor,center,{alignSelf:'center'}]}/>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button,social,{justifyContent:'center'}]} >
              <Icon name={'logo-google'} size={25} style={[awesome,hero,accentColor,center,{alignSelf:'center'}]}/>
            </TouchableOpacity>
          </View>
          </View>
          
      </KeyboardAvoidingView>
      )
  }
}