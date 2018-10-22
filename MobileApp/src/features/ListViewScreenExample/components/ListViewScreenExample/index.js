import React, { Component } from 'react';
import { Text, View,TouchableHighlight } from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'
import List from '../../../../components/list'
import { TEXT_COLOR_PRIMARY } from '../../../../global/theme/default';

export class ListViewScreenExample extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={

      names: [
        {
           id: 0,
           name: 'Ben',
        },
        {
           id: 1,
           name: 'Susan',
        },
        {
           id: 2,
           name: 'Robert',
        },
        {
           id: 3,
           name: 'Mary',
        },

     ]

    }
  }

  _onRender(item){
    const {baseColor, basic, header1} = this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
      <TouchableHighlight
      style={styles.text}
      underlayColor={Theme[this.props.theme].colors.button.underlay}
      activeOpacity={1}
       onPress={() => {}}>

      <View key={item.id} style={styles.item}>
        <Text style={[baseColor, basic,header1]}>{item.name}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <List containerStyle={styles.container} renderRow={this._onRender} data={this.state.names} />
    );
  }
}
export default class AuthScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={

      names: [
        {
           id: 0,
           name: 'Login V1',
           key:'auth.login'
        },
        {
           id: 1,
           name: 'Login V2',
           key:''
        },
        {
           id: 2,
           name: 'Sign Up',
           key:''
        },
        {
           id: 3,
           name: 'Password Recovery',
           key:''
        },

     ]

    }
  }

  _onRender(item){
    const {baseColor, basic, header1} = this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
      <TouchableHighlight
      style={styles.text}
      key={item.id}
      underlayColor={Theme[this.props.theme].colors.button.underlay}
      activeOpacity={1}
       onPress={() => {this.props.navigation.navigate(item.key)}}>

      <View key={item.id} style={styles.item}>
        <Text style={[baseColor, basic,header1]}>{item.name}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <List containerStyle={styles.container} renderRow={this._onRender} data={this.state.names} />
    );
  }
}
export class SocailScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={

      names: [
        {
           id: 0,
           name: 'User Profile V1',
           key:''
        },
        {
           id: 1,
           name: 'User Profile V2',
           key:''
        },
        {
           id: 2,
           name: 'User Profile V3',
           key:''
        },
        {
           id: 3,
           name: 'Profile Settings',
           key:''
        }, 
        {
          id: 4,
          name: 'Notifciations',
          key:''
        },
        {
          id: 5,
          name: 'Contacts',
          key:''
        },
        {
          id: 6,
          name: 'Feed',
          key:''
        },

     ]

    }
  }

  _onRender(item){
    const {baseColor, basic, header1} = this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
      <TouchableHighlight
      style={styles.text}
      underlayColor={Theme[this.props.theme].colors.button.underlay}
      activeOpacity={1}
       onPress={() => {this.props.navigation.navigate(item.key)}}>

      <View key={item.id} style={styles.item}>
        <Text style={[baseColor, basic,header1]}>{item.name}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <List containerStyle={styles.container} renderRow={this._onRender} data={this.state.names} />
    );
  }
}
export class ArticlesScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={

      names: [
        {
           id: 0,
           name: 'Article List V1',
           key:''
        },
        {
           id: 1,
           name: 'Article List V2',
           key:''
        },
        {
           id: 2,
           name: 'Article List V3',
           key:''
        },
        {
           id: 3,
           name: 'Article List V4',
           key:''
        }, 
        {
          id: 4,
          name: 'Blogposts',
          key:''
        },
        {
          id: 5,
          name: 'Article View',
          key:''
        },

     ]

    }
  }

  _onRender(item){
    const {baseColor, basic, header1} = this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
      <TouchableHighlight
      style={styles.text}
      underlayColor={Theme[this.props.theme].colors.button.underlay}
      activeOpacity={1}
       onPress={() => {this.props.navigation.navigate(item.key)}}>

      <View key={item.id} style={styles.item}>
        <Text style={[baseColor, basic,header1]}>{item.name}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <List containerStyle={styles.container} renderRow={this._onRender} data={this.state.names} />
    );
  }
}
export class MessagingScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={

      names: [
        {
           id: 0,
           name: 'Chat',
           key:''
        },
        {
           id: 1,
           name: 'Chat List',
           key:''
        },
        {
           id: 2,
           name: 'Comments',
           key:''
        },
     ]

    }
  }

  _onRender(item){
    const {baseColor, basic, header1} = this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
      <TouchableHighlight
      style={styles.text}
      underlayColor={Theme[this.props.theme].colors.button.underlay}
      activeOpacity={1}
       onPress={() => {this.props.navigation.navigate(item.key)}}>

      <View key={item.id} style={styles.item}>
        <Text style={[baseColor, basic,header1]}>{item.name}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <List containerStyle={styles.container} renderRow={this._onRender} data={this.state.names} />
    );
  }
}
export class DasboardScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={

      names: [
        {
           id: 0,
           name: 'Dashboard',
           key:''
        },
     ]

    }
  }

  _onRender(item){
    const {baseColor, basic, header1} = this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
      <TouchableHighlight
      style={styles.text}
      underlayColor={Theme[this.props.theme].colors.button.underlay}
      activeOpacity={1}
       onPress={() => {this.props.navigation.navigate(item.key)}}>

      <View key={item.id} style={styles.item}>
        <Text style={[baseColor, basic,header1]}>{item.name}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <List containerStyle={styles.container} renderRow={this._onRender} data={this.state.names} />
    );
  }
}
export class EcommerceScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={

      names: [
        {
           id: 0,
           name: 'Cards',
           key:''
        },
     ]

    }
  }

  _onRender(item){
    const {baseColor, basic, header1} = this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
      <TouchableHighlight
      style={styles.text}
      underlayColor={Theme[this.props.theme].colors.button.underlay}
      activeOpacity={1}
       onPress={() => {this.props.navigation.navigate(item.key)}}>

      <View key={item.id} style={styles.item}>
        <Text style={[baseColor, basic,header1]}>{item.name}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <List containerStyle={styles.container} renderRow={this._onRender} data={this.state.names} />
    );
  }
}
export class NavigationScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={

      names: [
        {
           id: 0,
           name: 'Grid Menu V1',
           key:''
        },
        {
          id: 1,
          name: 'Grid Menu V2',
          key:''
        },
        {
          id: 2,
          name: 'List Menu',
          key:''
        },
        {
          id: 3,
          name: 'Side Menu',
          key:''
        },
     ]

    }
  }

  _onRender(item){
    const {baseColor, basic, header1} = this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
      <TouchableHighlight
      style={styles.text}
      underlayColor={Theme[this.props.theme].colors.button.underlay}
      activeOpacity={1}
       onPress={() => {this.props.navigation.navigate(item.key)}}>

      <View key={item.id} style={styles.item}>
        <Text style={[baseColor, basic,header1]}>{item.name}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <List containerStyle={styles.container} renderRow={this._onRender} data={this.state.names} />
    );
  }
}
export class OthersScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={

      names: [
        {
           id: 0,
           name: 'Settings',
           key:''
        },
     ]

    }
  }

  _onRender(item){
    const {baseColor, basic, header1} = this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
      <TouchableHighlight
      style={styles.text}
      underlayColor={Theme[this.props.theme].colors.button.underlay}
      activeOpacity={1}
       onPress={() => {this.props.navigation.navigate(item.key)}}>

      <View key={item.id} style={styles.item}>
        <Text style={[baseColor, basic,header1]}>{item.name}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <List containerStyle={styles.container} renderRow={this._onRender} data={this.state.names} />
    );
  }
}