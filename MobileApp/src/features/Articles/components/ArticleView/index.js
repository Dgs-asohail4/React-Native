import React, { Component } from 'react';
import { Text, View } from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'

export default class Articles extends Component {
  
  constructor(props) {
    super(props);
  }

  // onAvatarPressed = () => {
  //   this.props.navigation.navigate('ProfileV1', { id: this.data.user.id });
  // };
  render() {
    const {data} = this.props.navigation.getParam('data',{});
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const article = this.props.globalStyles.modalStyle.horizontal;
    styles = {...styles, ...article}
    return (
      <ScrollView style={styles.root}>
      <View style={[article]}>
        <Image source={this.data.photo} />
        <View >
          <View>
            <Text style={styles.title} rkType='header4'>{this.data.header}</Text>
            <Text rkType='secondary2 hintColor'>
              {moment().add(this.data.time, 'seconds').fromNow()}
            </Text>
          </View>
          <TouchableOpacity onPress={this.onAvatarPressed}>
            <Avatar rkType='circle' img={this.data.user.photo} />
          </TouchableOpacity>
        </View>
        <View rkCardContent>
          <View>
            <Text rkType='primary3 bigLine'>{this.data.text}</Text>
          </View>
        </View>
        <View rkCardFooter>
          <SocialBar />
        </View>
      </View>
    </ScrollView>
    );
  }
}