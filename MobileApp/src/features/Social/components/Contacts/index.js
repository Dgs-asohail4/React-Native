import React, { Component } from 'react';
import { Text, View,TouchableOpacity,FlatList } from 'react-native';
import Avatar from '../../../../components/avatar/container'
import {data} from '../../../../global/data'
import MyTextInput from '../../../../components/MyTextInput/container'
//import TextInput from '../../../../components/textInput'
import Icon from 'react-native-vector-icons/FontAwesome'
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'
import CustomizedTextInput from '../../../../components/textInput/container'

export default class Social extends Component {

  static navigationOptions = {
    title: 'Contacts'.toUpperCase(),
  };

  state = {
    data: {
      original: data.getUsers(),
      filtered: data.getUsers(),
    },
  };

  extractItemKey = (item) => `${item.id}`;

  onSearchInputChanged = (event) => {
    const pattern = new RegExp(event.nativeEvent.text, 'i');
    const contacts = this.state.data.original.filter(function(contact){
    const filterResult= {
        firstName: contact.firstName.search(pattern),
        lastName: contact.lastName.search(pattern),
      }
      return filterResult.firstName !== -1 || filterResult.lastName !== -1 ? contact : undefined;
    });

    this.setState({
      data: {
        original: this.state.data.original,
        filtered: contacts,
      },
    });
  };

  onItemPressed = (item) => {
    this.props.navigation.navigate('social.userprofile1', { id: item.id });
  };

  renderItem = ({ item }) => {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {baseColor}=this.props.globalStyles.textStyle
    return(
    <TouchableOpacity onPress={() => this.onItemPressed(item)}>
      <View style={styles.container}>
        <Avatar small style={styles.avatar} img={item.photo} />
        <Text style={[baseColor, {fontSize:22}]}>{`${item.firstName} ${item.lastName}`}</Text>
      </View>
    </TouchableOpacity>
  );
    }
  renderSeparator = () => {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return(
    <View style={styles.separator} />
  );
    }
  renderHeaderLabel = () => {
    const {awesome}=this.props.globalStyles.textStyle
    return(
    <Text style={[awesome]}><Icon name={'search'}/></Text>
  );
    }

  renderHeader = () => {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {row,baseColor,hintColor}=this.props.globalStyles.textStyle
   return(
     <View style={{backgroundColor:Theme[this.props.theme].colors.screen.bold}}>
      <CustomizedTextInput
        contentContainerStyle={styles.searchContainer}
        autoCapitalize='none'
        autoCorrect={false}
        onChange={this.onSearchInputChanged}
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

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <FlatList
      style={styles.root}
      data={this.state.data.filtered}
      renderItem={this.renderItem}
      ListHeaderComponent={this.renderHeader}
      ItemSeparatorComponent={this.renderSeparator}
      keyExtractor={this.extractItemKey}
      enableEmptySections
    />
    );
  }
}