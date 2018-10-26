import React, { Component } from 'react';
import { Text, View,Image,FlatList,TouchableOpacity } from 'react-native';
import StyleSheetFactory from './styles';
import styles from './styles'
import List from '../../../../components/list'
import img from '../../../../global/assets/img/photo45.png'
import img2 from '../../../../global/assets/img/photo46.png'
import img3 from '../../../../global/assets/img/photo47.png'
import img4 from '../../../../global/assets/img/photo48.png'
import img5 from '../../../../global/assets/img/photo49.png'
import Theme from '../../../../global/theme'

export default class Articles extends Component {
  constructor(props){
  super(props)
    this.renderItem = this.renderItem.bind(this);
     this.state ={
       names: [
        {
          key: "0",
           name: 'Smile and Forever',
            image:img ,
           description:'It takes 17 muscles to smile and 43 to frown',
        },
        {
          key: "1",
           name: 'Interesting Fact',
           image:img2 ,
           description:'Dolphin sleep with one eye open',
        },
        {
          key: "2",
           name: 'Elephant',
           image:img3,
           description:'Elephant is one of the few mammals that can\'t jump',
        },
        {
          key: "3",
           name: 'Cold Water',
           image:img4,
           description:'Cold Water weighs less than hot water',
        },
       {
        key: "4",
        name: 'Our Eyes',
        image:img5,
        description:'You blink over 10,000,000 times a year',
       },
     ]
     }
  }
   renderItem(item){
     console.log(this.props)
     item = item.item;
     const {header6,baseColor,secondary1,hintColor,secondary6} =this.props.globalStyles.textStyle;
     var styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
     const horizontal = this.props.globalStyles.modalStyle.horizontal;
     styles = {...styles, ...horizontal}
     return(
      <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      //onPress={() => this.props.navigation.navigate('articleview', { id: item.id })}
      >
        <View style={[styles.card,{backgroundColor:Theme[this.props.theme].colors.base},]}>
          <View key={item.key} style={ styles.container2}>
            <Image source={item.image} style={[styles.img]}/>
            <View style={[styles.content,{paddingHorizontal:20,justifyContent:'center'}]}>
              <Text style={[header6, baseColor]} >{item.name}</Text>
              <Text style={[styles.post, secondary1,baseColor]}>{item.description}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
     
    )
  }
  render() {
    const {header6} =this.props.globalStyles.textStyle;
    var styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const horizontal = this.props.globalStyles.modalStyle.horizontal;
    styles = {...styles, ...horizontal}
    return (
       <FlatList
          style={styles.container}
          data={this.state.names} 
          renderItem={this.renderItem}
          />
    );
  }
}