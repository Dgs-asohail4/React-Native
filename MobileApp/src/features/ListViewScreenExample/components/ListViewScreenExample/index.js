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
        },
        {
           id: 1,
           name: 'Login V2',
        },
        {
           id: 2,
           name: 'Sign Up',
        },
        {
           id: 3,
           name: 'Password Recovery',
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
export class SocailScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={

      names: [
        {
           id: 0,
           name: 'User Profile V1',
        },
        {
           id: 1,
           name: 'User Profile V2',
        },
        {
           id: 2,
           name: 'User Profile V3',
        },
        {
           id: 3,
           name: 'Profile Settings',
        }, 
        {
          id: 4,
          name: 'Notifciations',
        },
        {
          id: 5,
          name: 'Contacts',
        },
        {
          id: 6,
          name: 'Feed',
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
export class ArticlesScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={

      names: [
        {
           id: 0,
           name: 'Article List V1',
        },
        {
           id: 1,
           name: 'Article List V2',
        },
        {
           id: 2,
           name: 'Article List V3',
        },
        {
           id: 3,
           name: 'Article List V4',
        }, 
        {
          id: 4,
          name: 'Blogposts',
        },
        {
          id: 5,
          name: 'Article View',
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
export class MessagingScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={

      names: [
        {
           id: 0,
           name: 'Chat',
        },
        {
           id: 1,
           name: 'Chat List',
        },
        {
           id: 2,
           name: 'Comments',
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
export class DasboardScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={

      names: [
        {
           id: 0,
           name: 'Dashboard',
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
export class EcommerceScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={

      names: [
        {
           id: 0,
           name: 'Cards',
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
export class NavigationScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={

      names: [
        {
           id: 0,
           name: 'Grid Menu V1',
        },
        {
          id: 1,
          name: 'Grid Menu V2',
        },
        {
          id: 2,
          name: 'List Menu',
        },
        {
          id: 3,
          name: 'Side Menu',
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
export class NavigationScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={

      names: [
        {
           id: 0,
           name: 'Settings',
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