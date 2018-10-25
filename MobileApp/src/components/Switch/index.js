import React, { Component } from 'react';
import {
  Animated,
  Easing,
  Platform,
  PanResponder
} from 'react-native';

import StyleSheetFactory, {getBaseStyle,getSelectedStyle} from './styles';
import Theme from '../../global/theme'


const width = 52;
const height = 32;
const animationDuration = 200;
const offLeftValue = -2;
const onLeftValue = 20;


export default class Switch extends Component {


  constructor(props) {
    super(props);
    this.offset = width - height;
    this.handlerSize = height;
    this.state = {
      name: this.props.name,
      value: this.props.value,
      toggleable: true,
      alignItems: this.props.value ? 'flex-end' : 'flex-start',
      left: this.props.value ? onLeftValue : offLeftValue,
      handlerAnimation: new Animated.Value(this.handlerSize),
      switchAnimation: new Animated.Value(this.props.value ? -1 : 1),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.state;
    if (nextProps === this.props) {
      return;
    }
    if (typeof nextProps.value !== 'undefined' && nextProps.value !== value) {
      this.toggleSwitch(true);
    }
  }


  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderTerminationRequest: () => true,
      onPanResponderGrant: this.onPanResponderGrant,
      onPanResponderMove: this.onPanResponderMove,
      onPanResponderRelease: this.onPanResponderRelease,
    });
  }

  onPanResponderGrant = () => {
    this.animateHandler(height * 0.9);
  };

  onPanResponderMove = (evt, gestureState) => {
    const { value } = this.state;

    this.setState({
      toggleable: value ? (gestureState.dx < 10) : (gestureState.dx > -10),
    });
  };

  onPanResponderRelease = () => {
    const { toggleable } = this.state;
    const { disabled, onValueChange } = this.props;

    if (toggleable && !disabled) {
      if (onValueChange) {
        this.toggleSwitch(onValueChange);
      }
    }
  };

  toggleSwitch = (result, callback = () => null) => {
    const { value, switchAnimation } = this.state;
    const toValue = !value;

    this.animateHandler(this.handlerSize);

    this.animateSwitch(toValue, () => {
      callback(toValue);
      this.setState({
        value: toValue,
        left: toValue ? onLeftValue : offLeftValue,
      });
      switchAnimation.setValue(toValue ? -1 : 1);
    });
  };

  animateSwitch = (value, callback = () => null) => {
    const { switchAnimation } = this.state;

    Animated.timing(
      switchAnimation,
      {
        toValue: value ? this.offset : -this.offset,
        duration: animationDuration,
        easing: Easing.linear,
      },
    ).start(callback);
  };

  animateHandler = (value, callback = () => null) => {
    const { handlerAnimation } = this.state;

    Animated.timing(
      handlerAnimation,
      {
        toValue: value,
        duration: animationDuration,
        easing: Easing.linear,
      },
    ).start(callback);
  };



  render() {
    const {
      switchAnimation, handlerAnimation, left, value,
    } = this.state;
    const {
      style,
      ...rest
    } = this.props;

    const type = value ? this.selectedType : '';
    if(this.props.base)
      const { container, thumb } = getBaseStyle(Theme[this.props.theme]).base;
    if(this.props.selected)
      const { container, thumb } = getSelectedStyle(Theme[this.props.theme]).selected;

    const onColor = Theme[this.props.theme].colors.screen.base;
    const offColor = Platform.OS == "android" ?  Theme[this.props.theme].colors.screen.base : Theme[this.props.theme].colors.border.base;

    const interpolatedBackgroundColor = switchAnimation.interpolate({
      inputRange: value ? [-this.offset, -1] : [1, this.offset],
      outputRange: [offColor, onColor],
    });

    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme])
    return (
      <Animated.View
      {...rest}
      {...this.panResponder.panHandlers}
      style={[style, container, {
        backgroundColor: interpolatedBackgroundColor,
      }]}>
      <Animated.View style={[thumb, {
        position: 'absolute',
        left,
        height: handlerAnimation,
        transform: [{ translateX: switchAnimation }],
      }]}
      />
    </Animated.View>
    );
  }
}