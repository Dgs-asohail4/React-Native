import React, { Component } from 'react';
import { Text, View,TouchableHighlight } from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'
import Icon from 'react-native-vector-icons/Ionicons'
import List from '../../../../components/list'
import * as Routes from '../../../../navigation/routes'
import { items } from '../../../../components/drawer/draweritems';
export class ListViewScreenExample extends Component {
  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={names:items}
  }

  _onRender(item){
    const {header4,moon, xxlarge,center, regular, primary, baseColor} = this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
      <TouchableHighlight
      style={styles.item}
      key={item.name}
      underlayColor={Theme[this.props.theme].colors.button.underlay}
      activeOpacity={1}
       onPress={() => {this.props.navigation.navigate(item.navigateTo)}}>

      <View style={[primary, moon, xxlarge,styles.screen]}>
        <Text style={styles.icon}>
          <Icon name={item.icon} size={25} color={Theme[this.props.theme].colors.primary} />
        </Text>
        <Text style={[center, regular, primary, baseColor,header4]}>{item.name}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <List style={styles.container} containerStyle={styles.container} renderRow={this._onRender} data={this.state.names} />
    );
  }
}
export class AuthScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={
      names: Routes.AuthMenuRoutes
    }
  }

  _onRender(item){
    const {baseColor, basic, header4} = this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
      <TouchableHighlight
      style={styles.text}
      key={item.name}
      underlayColor={Theme[this.props.theme].colors.button.underlay}
      activeOpacity={1}
       onPress={() => {this.props.navigation.navigate(item.name)}}>

      <View key={item.id} style={styles.item}>
        <Text style={[baseColor, basic,header4]}>{item.title}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <List style={styles.container} containerStyle={styles.container} renderRow={this._onRender} data={this.state.names} />
    );
  }
}
export class SocailScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={names:Routes.SocialRoutes}
  }

  _onRender(item){
    const {baseColor, basic, header4} = this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
      <TouchableHighlight
      style={styles.text}
      key={item.name}
      underlayColor={Theme[this.props.theme].colors.button.underlay}
      activeOpacity={1}
       onPress={() => {this.props.navigation.navigate(item.name)}}>

      <View key={item.id} style={styles.item}>
        <Text style={[baseColor, basic,header4]}>{item.title}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <List style={styles.container} containerStyle={styles.container} renderRow={this._onRender} data={this.state.names} />
    );
  }
}
export class ArticlesScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);
    this.state ={names:Routes.ArticleRoutes}
  }

  _onRender(item){
    const {baseColor, basic, header4} = this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
      <TouchableHighlight
      style={styles.text}
      key={item.name}
      underlayColor={Theme[this.props.theme].colors.button.underlay}
      activeOpacity={1}
       onPress={() => {this.props.navigation.navigate(item.name)}}>

      <View key={item.id} style={styles.item}>
        <Text style={[baseColor, basic,header4]}>{item.title}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <List style={styles.container} containerStyle={styles.container}  renderRow={this._onRender} data={this.state.names} />
    );
  }
}
export class MessagingScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={names:Routes.MessagingRoutes}
  }

  _onRender(item){
    const {baseColor, basic, header4} = this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
      <TouchableHighlight
      style={styles.text}
      key={item.name}
      underlayColor={Theme[this.props.theme].colors.button.underlay}
      activeOpacity={1}
       onPress={() => {this.props.navigation.navigate(item.name)}}>

      <View key={item.id} style={styles.item}>
        <Text style={[baseColor, basic,header4]}>{item.title}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <List style={styles.container} containerStyle={styles.container} renderRow={this._onRender} data={this.state.names} />
    );
  }
}
export class DasboardScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={names:Routes.DashboardRoutes}
  }

  _onRender(item){
    const {baseColor, basic, header4} = this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
      <TouchableHighlight
      style={styles.text}
      key={item.name}
      underlayColor={Theme[this.props.theme].colors.button.underlay}
      activeOpacity={1}
       onPress={() => {this.props.navigation.navigate(item.name)}}>

      <View key={item.id} style={styles.item}>
        <Text style={[baseColor, basic,header4]}>{item.title}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <List style={styles.container} containerStyle={styles.container} renderRow={this._onRender} data={this.state.names} />
    );
  }
}

// export class WalkthroughScreenMenu extends Component {

//   constructor(props){
//     super(props)
//     this._onRender = this._onRender.bind(this);

//     this.state ={names:Routes.WalkthroughRoutes}
//   }

//   _onRender(item){
//     const {baseColor, basic, header4} = this.props.globalStyles.textStyle;
//     const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
//     return(
//       <TouchableHighlight
//       style={styles.text}
//       key={item.name}
//       underlayColor={Theme[this.props.theme].colors.button.underlay}
//       activeOpacity={1}
//        onPress={() => {this.props.navigation.navigate(item.name)}}>

//       <View key={item.id} style={styles.item}>
//         <Text style={[baseColor, basic,header4]}>{item.key}</Text>
//       </View>
//       </TouchableHighlight>
//     )
//   }

//   render() {
//     const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
//     return (
//       <List style={styles.container} containerStyle={styles.container}renderRow={this._onRender} data={this.state.names} />
//     );
//   }
// }

export class EcommerceScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={names:Routes.EcommerceRoutes}
  }

  _onRender(item){
    const {baseColor, basic, header4} = this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
      <TouchableHighlight
      style={styles.text}
      key={item.name}
      underlayColor={Theme[this.props.theme].colors.button.underlay}
      activeOpacity={1}
       onPress={() => {this.props.navigation.navigate(item.name)}}>

      <View key={item.id} style={styles.item}>
        <Text style={[baseColor, basic,header4]}>{item.title}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <List style={styles.container} containerStyle={styles.container} renderRow={this._onRender} data={this.state.names} />
    );
  }
}
export class NavigationScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={names: Routes.NavigationRoutes}
  }

  _onRender(item){
    const {baseColor, basic, header4} = this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
      <TouchableHighlight
      style={styles.text}
      key={item.name}
      underlayColor={Theme[this.props.theme].colors.button.underlay}
      activeOpacity={1}
       onPress={() => {if(item.name == 'nav.sidemenu') {this.props.navigation.openDrawer(); return;} this.props.navigation.navigate(item.name)}}>

      <View key={item.id} style={styles.item}>
        <Text style={[baseColor, basic,header4]}>{item.title}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <List style={styles.container} containerStyle={styles.container} renderRow={this._onRender} data={this.state.names} />
    );
  }
}
export class OthersScreenMenu extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={names:Routes.OtherRoutes}
  }

  _onRender(item){
    const {baseColor, basic, header4} = this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
      <TouchableHighlight
      style={styles.text}
      key={item.name}
      underlayColor={Theme[this.props.theme].colors.button.underlay}
      activeOpacity={1}
       onPress={() => {this.props.navigation.navigate(item.name)}}>

      <View key={item.id} style={styles.item}>
        <Text style={[baseColor, basic,header4]}>{item.title}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <List style={styles.container} containerStyle={styles.container} renderRow={this._onRender} data={this.state.names} />
    );
  }
}