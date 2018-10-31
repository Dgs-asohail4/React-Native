import React, { Component } from 'react';
import { Text,FlatList,
  View,
  Platform,
  Image,
  TouchableOpacity,
  Keyboard,
  TextInput,
  KeyboardAvoidingView,
  InteractionManager } from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'
import Avatar from '../../../../components/avatar/container'
import {data} from '../../../../global/data'
const moment = require('moment');
import Icon from 'react-native-vector-icons/FontAwesome'
import MyTextInput from '../../../../components/MyTextInput/container'
import {ChatTitleComp} from '../../containers'
export default class Chat extends Component {
  static navigationOptions = ({ navigation }) => {
    const userId = navigation.state.params ? navigation.state.params.userId : undefined;
    const user = data.getUser(userId);
    return ({
      headerTitle: (<ChatTitleComp user={user} navigation={navigation} onNavigationTitlePressed={Chat.onNavigationTitlePressed} />),
      headerRight: Chat.renderNavigationAvatar(navigation,user)
    });
  };




  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.refs.listRef.scrollToEnd();
    });
  }

  setListRef = (ref) => {
    this.listRef = ref;
  };

  extractItemKey = (item) => `${item.id}`;

  scrollToEnd = () => {
    if (Platform.OS === 'ios') {
      this.refs.listRef.scrollToEnd();
    } else {
      this.refs.listRef.scrollToEnd()
    //  _.delay(this.listRef.scrollToEnd, 100);
    }
  };

  onInputChanged = (text) => {
    this.setState({ message: text });
  };

  onSendButtonPressed = () => {
    if (!this.state.message) {
      return;
    }
    this.state.data.messages.push({
      id: this.state.data.messages.length, time: 0, type: 'out', text: this.state.message,
    });
    this.setState({ message: '' });
    this.scrollToEnd(true);
  };

  static onNavigationTitlePressed = (navigation, user) => {
    navigation.navigate('social.userprofilev1', { id: user.id });
  };

  static onNavigationAvatarPressed = (navigation, user) => {
    navigation.navigate('social.userprofilev1', { id: user.id });
  };

  constructor(props) {
    super(props);
    const userId = this.props.navigation.getParam('userId', undefined);
    this.state = {
      data: data.getConversation(userId),
    };
  }

  static renderNavigationTitle = (navigation, user) => {
    const styles = StyleSheetFactory.getSheet(Theme[Chat.props.theme]);
    const {header5,secondar3,secondaryColor,baseColor} = Chat.props.globalStyles.textStyle;
    return(
    <TouchableOpacity onPress={() => Chat.onNavigationTitlePressed(navigation, user)}>
      <View style={styles.header}>
        <Text style={[header5,baseColor]}>{`${user.firstName} ${user.lastName}`}</Text>
        <Text style={[secondar3,secondaryColor]}>Online</Text>
      </View>
    </TouchableOpacity>
  )};

  static renderNavigationAvatar = (navigation, user) => (
    <TouchableOpacity style={{marginHorizontal:10}} onPress={() => Chat.onNavigationAvatarPressed(navigation, user)}>
      <Avatar small img={user.photo} />
    </TouchableOpacity>
  );

  renderDate = (date) => {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {secondar7,hintColor} = this.props.globalStyles.textStyle;
    return(
    <Text style={[secondar7,hintColor,styles.time]}>
      {moment().add(date, 'seconds').format('LT')}
    </Text>
  )};


  renderItem = ({ item }) => {

    var RkTheme = {};
    RkTheme.current = Theme[this.props.theme]
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {primary2,mediumLine,chat} = this.props.globalStyles.textStyle;

    const isIncoming = item.type === 'in';
    const backgroundColor = isIncoming
      ? RkTheme.current.colors.chat.messageInBackground
      : RkTheme.current.colors.chat.messageOutBackground;
    const itemStyle = isIncoming ? styles.itemIn : styles.itemOut;

    return (
      <View style={[styles.item, itemStyle]}>
        {!isIncoming && this.renderDate(item.time)}
        <View style={[styles.balloon, { backgroundColor }]}>
          <Text style={[{ paddingTop: 5 },primary2,mediumLine,chat ]}>{item.text}</Text>
        </View>
        {isIncoming && this.renderDate(item.time)}
      </View>
    );
  };

  render = () => {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {header5,secondar3,secondaryColor,baseColor,awesome} = this.props.globalStyles.textStyle;
    return(
    <KeyboardAvoidingView
      style={styles.container}
      onResponderRelease={Keyboard.dismiss}>
      <FlatList
        ref={"listRef"}
        extraData={this.state}
        style={styles.list}
        data={this.state.data.messages}
        keyExtractor={this.extractItemKey}
        renderItem={this.renderItem}
        onContentSizeChange={this.scrollToEnd}
        onLayout={this.scrollToEnd}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.plus} >
          <Text style={[awesome,secondaryColor]}>
            <Icon name={'plus'} size={24} style={[awesome,secondaryColor]} color={secondaryColor.color}/>
          </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          onFocus={this.scrollToEnd}
          onBlur={this.scrollToEnd}
          placeholderTextColor={baseColor.color}
          onChangeText={this.onInputChanged}
          value={this.state.message}
          placeholder="Add a comment..."
        />
        <TouchableOpacity onPress={this.onSendButtonPressed} style={styles.send}>
          <Image resizeMode={'center'} source={require('../../../../global/assets/icon/sendIcon.png')} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

  )}
}