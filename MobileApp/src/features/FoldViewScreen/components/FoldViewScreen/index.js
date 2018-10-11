import React, { Component } from 'react';
// import styles from './styles';

import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  LayoutAnimation,
  UIManager,
  TouchableOpacity,
  View,
} from 'react-native';


  // Enable LayoutAnimation on Android
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const ROW_HEIGHT = 180;

import FoldView from '../../../../components/FoldView';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#4A637D',
    flex: 1,
    padding: 10,
    paddingTop: STATUSBAR_HEIGHT,
  },
});

export default class FoldViewScreenExample extends Component {
  constructor(props){
    super(props)
    this.state = {
      expanded: false,
      height: ROW_HEIGHT,
    };
  }

  componentWillMount() {
    this.flip = this.flip.bind(this);
    this.handleAnimationStart = this.handleAnimationStart.bind(this);
    this.renderFrontface = this.renderFrontface.bind(this);
    this.renderBackface = this.renderBackface.bind(this);
  }

  flip() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  handleAnimationStart(duration, height) {
    const isExpanding = this.state.expanded;

    const animationConfig = {
      duration,
      update: {
        type: isExpanding ? LayoutAnimation.Types.easeOut : LayoutAnimation.Types.easeIn,
        property: LayoutAnimation.Properties.height,
      },
    };

    LayoutAnimation.configureNext(animationConfig);

    this.setState({
      height,
    });
  }

  renderFrontface() {
    return (
      <View style={{height:100, width:null, backgroundColor:'brown'}}>
        <TouchableOpacity onPress={this.flip}>
          <View>
            <Text>
              Front face
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  renderBackface() {
    return (
      <View  style={{height:100, width:null, backgroundColor:'blue'}}>
        <TouchableOpacity onPress={this.flip}>
          <View>
            <Text>
              Back face
            </Text>
          </View>
        </TouchableOpacity>
      </View>
  );
  }

  render(){
    return(
      <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
      >
        <FoldView
          expanded={this.state.expanded}
          onAnimationStart={this.handleAnimationStart}
          perspective={1000}
          renderBackface={this.renderBackface}
          renderFrontface={this.renderFrontface}
        >

        </FoldView>


      </ScrollView>
    </View>

    )
  }
}
