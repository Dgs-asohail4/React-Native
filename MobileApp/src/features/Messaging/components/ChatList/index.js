import React, { Component } from 'react';
import { Text,  FlatList,
  View,
  StyleSheet,
  TouchableOpacity, } from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'
import Avatar from '../../../../components/avatar/container'
import {data} from '../../../../global/data'
import Icon from 'react-native-vector-icons/FontAwesome'
import CustomizedTextInput from '../../../../components/textInput/container'

const moment = require('moment');
export default class Messaging extends Component {

  static navigationOptions = {
    title: 'Chats List'.toUpperCase(),
  };

  state = {
    data: {
      original: data.getChatList(),
      filtered: data.getChatList(),
    },
  };

  extractItemKey = (item) => `${item.withUser.id}`;

  onInputChanged = (event) => {
    const pattern = new RegExp(event.nativeEvent.text, 'i');
    const chats = this.state.data.original.filter(function(chat){
      const filterResult= {
        firstName: chat.withUser.firstName.search(pattern),
        lastName: chat.withUser.lastName.search(pattern),
      }
      return filterResult.firstName !== -1 || filterResult.lastName !== -1 ? chat : undefined;

    })
    this.setState({
      data: {
        original: this.state.data.original,
        filtered: chats,
      },
    });
  };

  onItemPressed = (item) => {
    const navigationParams = { userId: item.withUser.id };
    this.props.navigation.navigate('msg.chat', navigationParams);
  };

  renderSeparator = () => {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
    <View style={styles.separator} />
  )};

  renderInputLabel = () => {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {awesome,baseColor} = this.props.globalStyles.textStyle;
    return(
    <Text style={[awesome]}>
      <Icon color={baseColor.color} style={[awesome]} size={24} name={'search'}/>
    </Text>
  )};


  renderHeader = () => {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {row,baseColor,hintColor}=this.props.globalStyles.textStyle
   return(
     <View style={{backgroundColor:Theme[this.props.theme].colors.screen.bold}}>
      <CustomizedTextInput
        contentContainerStyle={styles.searchContainer}
        autoCapitalize='none'
        autoCorrect={false}
        onChange={this.onInputChanged}
        placeholder='Search'
        borderRadius = {20}
        borderWidth = {1}
        borderColor = {Theme[this.props.theme].colors.border.base}
        iconColor = {hintColor.color}
        inputColor = {baseColor.color}
        placeholderTextColor = {Theme[this.props.theme].colors.input.placeholder}
        error = {false}
        iconName = 'ios-search'
        iconPos = 'left'
      />
    </View>
   )
  };

  renderItem = ({ item }) => {
    const last = item.messages[item.messages.length - 1];
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {header5,baseColor,secondary4,hintColor,primary3,mediumLine} = this.props.globalStyles.textStyle;
    return (
      <TouchableOpacity onPress={() => this.onItemPressed(item)}>
        <View style={styles.container}>
          <Avatar small img={item.withUser.photo} />
          <View style={styles.content}>
            <View style={styles.contentHeader}>
              <Text style={[header5,baseColor]}>{`${item.withUser.firstName} ${item.withUser.lastName}`}</Text>
              <Text style={[secondary4,hintColor]}>
                {moment().add(last.time, 'seconds').format('LT')}
              </Text>
            </View>
            <Text numberOfLines={2} style={[primary3,mediumLine,baseColor]} >
              {last.text}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <FlatList
        style={styles.root}
        data={this.state.data.filtered}
        extraData={this.state}
        ListHeaderComponent={this.renderHeader}
        ItemSeparatorComponent={this.renderSeparator}
        keyExtractor={this.extractItemKey}
        renderItem={this.renderItem}
        />
    );
  }
}