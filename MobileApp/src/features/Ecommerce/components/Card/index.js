import React, { Component } from 'react';
import { Text,FlatList, View,Image,Button,TouchableOpacity,Modal } from 'react-native';
import PasswordTextInput from '../../../../components/passwordTextInput/container'
import {data} from '../../../../global/data'
import Icon from '../../../../global/assets/icon/FontAwesome'
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'

import  LinearGradient  from 'react-native-linear-gradient';

export default class Ecommerce extends Component {

    static navigationOptions = {
      title: 'Cards'.toUpperCase(),
    };
  
    state = {
      data: data.getCards(),
      modalVisible: false,
    };
  
    getCardStyle = (type) => {
      switch (type) {
        case 'visa':
          return {
            gradient: Theme[this.props.theme].colors.gradients.visa,
            icon: require('../../../../global/assets/icon/visaIcon.png'),
          };
        case 'mastercard':
          return {
            gradient: Theme[this.props.theme].colors.gradients.mastercard,
            icon: require('../../../../global/assets/icon/masterCardIcon.png'),
          };
        case 'axp':
          return {
            gradient: Theme[this.props.theme].colors.gradients.axp,
            icon: require('../../../../global/assets/icon/americanExpressIcon.png'),
          };
        default: return {};
      }
    };
  
    formatCurrency = (amount, currency) => {
      switch (currency) {
        case 'usd':
          return `$${amount}`;
        case 'eur':
          return `€${amount}`;
        default: return '';
      }
    };
  
    prepareCardNo = (cardNo) => {
      const re = /\*+/;
      const parts = cardNo.split(re);
      return {
        firstPart: parts[0],
        lastPart: parts[1],
      };
    };
  
    // renderFooter = () => (
    //   <View style={styles.footer}>
    //     <Button style={[styles.button,highlight]} circle>
    //       <Image source={require('../../..//../global/assets/icon/iconPlus.png')} />
    //     </Button>
    //   </View>
    // );
  
    setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
    };
  
    onItemPressed = () => {
      this.setModalVisible(true);
    };
  
    extractItemKey = (item) => `${item.id}`;
  
    renderItem = ({ item }) => {
      const { gradient, Icon } = this.getCardStyle(item.type);
      const { firstPart, lastPart } = this.prepareCardNo(item.cardNo);
      var styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
      const {header2,header4,header6,inverseColor}=this.props.globalStyles.textStyle;
      const credit = this.props.globalStyles.modalStyle.credit;
    styles = {...styles, ...credit}
      return (<View style={styles.card}>
      
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={this.onItemPressed}>
        <LinearGradient
          colors={gradient}
          start={{ x: 0.0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.background}>
          <View style={styles.header}>
            <Text style={[header4,inverseColor]}>{item.bank}</Text>
            <Image source={this.getCardStyle.icon} />
          </View>
          <View style={styles.content}>
            <View style={styles.cardNoContainer}>
              <Text style={[styles.cardNo,header2,inverseColor]}>{firstPart}</Text>
              <Text style={[styles.cardNo, styles.cardPlaceholder,header2,inverseColor]}>* * * *</Text>
              <Text style={[styles.cardNo, styles.cardPlaceholder,header2,inverseColor]}>* * * *</Text>
              <Text style={[styles.cardNo,header2,inverseColor]}>{lastPart}</Text>
            </View>
            <Text style={[styles.date,header6,inverseColor,{textAlign:'center'}]}>{item.date}</Text>
          </View>
          <View style={styles.footer}>
            <View style={[{flex:1}]}>
              <Text style={[header4,inverseColor,{textAlign:'left'}]}>{item.currency.toUpperCase()}</Text>
              <View style={[{flexDirection:'row', alignItems:'center'}]}>
                <View style={[{flex:1,flexDirection:'row'}]}>
                  <Text style={[header6,inverseColor]}>{item.name.toUpperCase()}</Text>
                </View>
                <View style={[{justifyContent:'space-evenly'}]}>  
                  <Text
                    style={[header2,inverseColor,{textAlign:'right'}]}>{this.formatCurrency(item.amount, item.currency)}
                  </Text>
                </View> 
              </View>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>)
    }
  
    render() {
      var styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
      const {header4,light,baseColor}=this.props.globalStyles.textStyle;
      const credit = this.props.globalStyles.modalStyle.credit;
    styles = {...styles, ...credit}
      return (
        <View style={styles.root}>
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={this.renderFooter}
        keyExtractor={this.extractItemKey}
        data={this.state.data}
        renderItem={this.renderItem}
      />
      <Modal
        animationType="fade"
        transparent
        onRequestClose={() => this.setModalVisible(false)}
        visible={this.state.modalVisible}>
        <View style={styles.popupOverlay}>
          <View style={styles.popup}>
            <View style={styles.popupContent}>
              <Text style={[styles.popupHeader,header4]}>Enter security code</Text>
              <PasswordTextInput />
            </View>
            <View style={styles.popupButtons}>
              <TouchableOpacity
                onPress={() => this.setModalVisible(false)}
                style={[styles.popupButton]}
                
                >
                <Text styles={[light,{textAlign:'center'}]}>CANCEL</Text>
              </TouchableOpacity>
              <View style={styles.separator} />
              <TouchableOpacity
                onPress={() => this.setModalVisible(false)}
                style={styles.popupButton}
                
                >
                <Text styles={{justifyContent:'center'}}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
      );
    }
  }
