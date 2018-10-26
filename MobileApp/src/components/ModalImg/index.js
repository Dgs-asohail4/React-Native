import React from 'react';
import StyleSheetFactory, {getBasicStyle} from './styles';
import Theme from '../../global/theme'

import {
  View,
  Touchable,
  TouchableWithoutFeedback,
  Image,
  Text,
  Modal,
  Animated,
  Dimensions,
  Platform,
  FlatList,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

export default class ModalImg extends React.Component {
  static propTypes = {
    index: PropTypes.number,
    source: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    style: ViewPropTypes.style,
    imgContainerStyle: ViewPropTypes.style,
    modalStyle: ViewPropTypes.style,
    modalImgStyle: ViewPropTypes.style,
    headerStyle: ViewPropTypes.style,
    footerStyle: ViewPropTypes.style,
    renderHeader: PropTypes.func,
    renderFooter: PropTypes.func,
  };
  static defaultProps = {
    index: 0,
    style: null,
    imgContainerStyle: null,
    modalStyle: null,
    modalImgStyle: null,
    headerStyle: null,
    footerStyle: null,
    renderHeader: undefined,
    renderFooter: undefined,
  };

  // componentName = 'RkModalImg';
  // typeMapping = {
  //   img: {},
  //   header: {},
  //   footerContent: {},
  //   headerContent: {},
  //   footer: {},
  //   headerText: {},
  //   imgContainer: {},
  //   modal: {},
  // };

  state = {
    opacity: new Animated.Value(1),
    visible: false,
    width: undefined,
    height: undefined,
    index: 0,
  };

  needUpdateScroll = false;

  constructor(props) {
    super(props);
    this.state.index = props.index;
  }

  onContainerScroll = (event) => {
    const currentIndex = Math.round(event.nativeEvent.contentOffset.x / this.state.width);
    if (currentIndex >= 0 &&
      currentIndex <= this.props.source.length &&
      currentIndex !== this.state.index) {
      this.setState({
        index: currentIndex,
      });
    }
  };

  onRenderImageContainer = (source, index, props) => (
    <FlatList
      data={Array.from(source)}
      getItemLayout={this.onRenderItemLayout}
      renderItem={({ item }) => this.onRenderImage(item, props)}
      initialScrollIndex={index}
      horizontal={true}
      pagingEnabled={true}
      keyExtractor={(item, srcIndex) => srcIndex.toString()}
      onScroll={this.onContainerScroll}
    />
  );

  onRenderItemLayout = (item, index) => ({
    length: this.state.width,
    offset: this.state.width * index,
    index,
  });

  onRenderImage = (source, props) => (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={this.onImageClicked}>
      <Image source={source} {...props} />
    </TouchableWithoutFeedback>
  );

  onRenderHeader = (options) => {
    const content = this.styles ? this.styles.headerContent : {};
    const text = this.styles ? this.styles.headerText : {};
    const {baseColor,primary} =this.props.globalStyles.textStyle;
    const {clear} = this.props.globalStyles.buttonStyle;
    return (
      <View style={content}>
        <View style={{ flex: 1, alignItems: 'flex-start' }}>
          <Touchable
            style={[clear]}
            onPress={options.closeImage}>
            <Text style={[baseColor,primary]}></Text>
          </Touchable>
        </View>
        <View style={{
          flex: 1,
          alignItems: 'center',
        }}>
          <Text style={[text,baseColor]}>{this.onRenderPageNumber()}</Text>
        </View>
        <View style={{
          flex: 1,
        }}
        />
      </View>
    );
  };

  onRenderPageNumber = () => {
    if (Array.isArray(this.props.source)) {
      let pageText = +this.state.index + +1;
      pageText += '/';
      pageText += this.props.source.length;
      return (
        <Text style={{color:'#fff'}}>
          {pageText}
        </Text>
      );
    }
    return null;
  };

  onRenderFooter = () => {
    const style = this.styles ? this.styles.footerContent : {};
    return (
      <View style={style} />
    );
  };

  onImageClicked = () => {
    // eslint-disable-next-line no-underscore-dangle
    const endValue = this.state.opacity._value ? 0 : 1;
    Animated.timing(this.state.opacity, {
      toValue: endValue,
    }).start();
  };

  onRootViewClicked = () => {
    this.needUpdateScroll = true;
    this.setState({
      visible: true,
    });
  };

  onCloseImage = () => this.setState({
    visible: false,
  });

  onUpdateDimension() {
    const { height, width } = Dimensions.get('window');
    this.state.height = height;
    this.state.width = width;
  }

  onOrientationChange = () => {
    this.needUpdateScroll = true;
    this.forceUpdate();
  };

  render() {
    const {
      imgContainerStyle,
      modalStyle,
      modalImgStyle,
      headerStyle,
      footerStyle,
      source,
      index: initialIndex,
      style: imgStyle,
      ...imgProps
    } = this.props;

    const {
      header,
      footerContent,
      headerContent,
      footer,
      headerText,
      img,
      imgContainer,
      modal,
      modalImg,
    } = getBasicStyle(Theme[this.props.theme]).basic;

    this.styles = {
      header: [header, headerStyle],
      footerContent,
      headerContent,
      footer: [footer, footerStyle],
      headerText,
    };

    const renderHeader = this.props.renderHeader || this.onRenderHeader;
    const renderFooter = this.props.renderFooter || this.onRenderFooter;
    const animationType = imgProps.animationType || 'fade';
    const transparent = imgProps.transparent === undefined ? false : imgProps.transparent;
    const visible = imgProps.visible === undefined ? this.state.visible : imgProps.visible;

    this.onUpdateDimension();

    if (visible) {
      imgProps.style = [
        imgProps.style,
        { height: this.state.height, width: this.state.width },
        modalImg,
        modalImgStyle,
      ];
    }
    const closeImage = this.onCloseImage;
    const pageNumber = +this.state.index + 1;
    const totalPages = this.props.source.length;
    const basicSource = Array.isArray(source) ? source[+initialIndex] : source;

    return (
      <View>
        <TouchableWithoutFeedback
          style={[imgContainer, imgContainerStyle]}
          onPress={this.onRootViewClicked}>
          <Image
            style={[img, imgStyle]}
            source={basicSource}
            {...imgProps}
          />
        </TouchableWithoutFeedback>
        <Modal
          supportedOrientations={['portrait', 'landscape']}
          onRequestClose={closeImage}
          animationType={animationType}
          transparent={transparent}
          visible={visible}
          onOrientationChange={this.onOrientationChange}>
          <View
            style={[modal, modalStyle]}
            onLayout={Platform.OS === 'ios' ? null : this.onOrientationChange}>
            {Array.isArray(source) ?
              this.onRenderImageContainer(source, +initialIndex, imgProps) :
              this.onRenderImage(basicSource, imgProps)}
            <Animated.View style={[this.styles.header, { opacity: this.state.opacity }]}>
              {renderHeader({ closeImage, pageNumber, totalPages })}
            </Animated.View>
            <Animated.View style={[this.styles.footer, { opacity: this.state.opacity }]}>
              {renderFooter({ closeImage, pageNumber, totalPages })}
            </Animated.View>
          </View>
        </Modal>
      </View>
    );
  }
}