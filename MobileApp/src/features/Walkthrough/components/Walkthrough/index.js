import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'
import WalkthroughComponent from '../../../../components/Walkthrough';
import Button from '../../../../components/button';
import { DEFUALT_THEME } from '../../../../global/config';
import PaginationIndicator from '../../../../components/PaginationIndicator/container'
export default class Walkthrough extends Component {
  static navigationOptions = {
    header: null,
  };

  getThemeImageSource = (theme) => (
    theme === DEFUALT_THEME ?
      require('../../../../global/assets/img/kittenImage.png') : require('../../../../global/assets/img/kittenImageDark.png')
  );

  getThemeImageSource2 = (theme) => (
    theme === DEFUALT_THEME ?
      require('../../../../global/assets/img/screensImage.png') : require('../../../../global/assets/img/screensImageDark.png')
  );
  onWalkThroughIndexChanged = (index) => {
    this.setState({ index });
  };


  state = {
    index: 0,
  };

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {header2, baseColor} = this.props.globalStyles.textStyle;
    return (
      <View style={styles.screen}>
        <WalkthroughComponent onChanged={this.onWalkThroughIndexChanged}>
          <View style={styles.container}>
            <Image source={this.getThemeImageSource(this.props.theme)} />
            <Text style={[header2,baseColor,styles.text]}>Welcome to Kitten Tricks</Text>
          </View>
          <View style={styles.container}>

          <Image
          style={{ width: Dimensions.get('window').width }}
          source={this.getThemeImageSource2(this.props.theme)}
        />
        <Text style={[header2,baseColor,styles.text2]}>Explore different examples of frequently used pages</Text>
          </View>
        </WalkthroughComponent>
        <PaginationIndicator length={2} current={this.state.index} />
        <Button
        text="GET STARTED"
        style={{width:250, borderRadius:20,marginVertical:10}}
        color={Theme[this.props.theme].colors.gradients.base[0]}
        onPress={()=>this.props.navigation.goBack()}>

        </Button>
      </View>
    );
  }
}