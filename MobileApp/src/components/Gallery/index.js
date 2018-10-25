import React, { Component } from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

import StyleSheetFactory from './styles';
import Theme from '../../global/theme'
import ModalImg from '../ModalImg/container'
import Ellipsis from '../Ellipsis/container'
import SocialBar from '../SocialBar/container'

import PropTypes from 'prop-types'

export default class Gallery extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.node).isRequired,
  };

  constructor(props) {
    super(props);
    const itemSize = (Dimensions.get('window').width - 12) / 3;
    this.state = {
      data: this.props.items,
      itemSize,
    };
  }

  extractItemKey = (index) => `${index}`;

  renderHeader = (options) => {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const textStyle = this.props.globalStyles.textStyle
    const buttonStyle = this.props.globalStyles.buttonStyle
    return (
      <View style={styles.header}>
        <TouchableOpacity style={[buttonStyle.clear,buttonStyle.contrast]} onPress={options.closeImage}>
          <Text style={[textStyle.baseColor]}>Close</Text>
        </TouchableOpacity>
        <Text style={[textStyle.header4,textStyle.baseColor]}>{`${options.pageNumber}/${options.totalPages}`}</Text>
        <TouchableOpacity style={[buttonStyle.clear]}>
          <Ellipsis />
        </TouchableOpacity>
      </View>
    );
  }

  renderFooter = () => (
    <SocialBar />
  );

  renderItem = ({ index }) => (
    <ModalImg
      style={{ width: this.state.itemSize, height: this.state.itemSize }}
      renderHeader={this.renderHeader}
      renderFooter={this.renderFooter}
      source={this.props.items}
      index={index}
    />
  );

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme])
    return (
      <View style={styles.images}>
        <FlatList
          data={this.state.data}
          numColumns={3}
          keyExtractor={this.extractItemKey}
          renderItem={this.renderItem}
        />
     </View>
    );
  }
}