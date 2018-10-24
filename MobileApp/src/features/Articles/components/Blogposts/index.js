import React, { Component } from 'react';
import { Text, View,FlatList,Image } from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'
import img from '../../../../global/assets/img/photo17.png'
import img2 from '../../../../global/assets/img/photo18.png'
import img3 from '../../../../global/assets/img/photo19.png'
import img4 from '../../../../global/assets/img/photo20.png'
import userimg from '../../../../global/assets/img/avatar/Image9.png'
import userimg2 from '../../../../global/assets/img/avatar/Image1.png'
import userimg3 from '../../../../global/assets/img/avatar/Image3.png'
import userimg4 from '../../../../global/assets/img/avatar/Image4.png'
export default class Articles extends Component {
  constructor(props){
    super(props)
      this.renderItem = this.renderItem.bind(this);
       this.state ={
         names: [
          {
            key: "0",
              name: 'Helen Gilbert',
              image:img ,
              userimage:userimg,
             description:'I have got a cat. Her name is Matilda. She is quite old for a cat. She is eleven years old. ...',
          },
          {
            key: "1",
             name: 'Emilie McDiarmid',
             image:img2 ,
             userimage:userimg2,
             description:'One chef prepared a delicious cake with apples and named it in honor of his beloved...',
          },
          {
            key: "2",
             name: 'Sandra Paver',
             image:img3,
             userimage:userimg3,
             description:'The scientists say that they can define your character if they know what music you like.',
          },
          {
            key: "3",
             name: 'Nancy O\'Crevan',
             image:img4,
             userimage:userimg4,
             description:'My trip to Spain last summer. I think that it was the most interesting trip in my life.',
          },
        ]
      }
      }
          renderItem(item){
            item = item.item;
            const {blog,primary3, mediumLine,header6,circle, small} =this.props.globalStyles.textStyle;
            const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
           return(
             <View style={[blog,styles.card,{backgroundColor:"white"}]}>
                <View key={item.key}>
             <Image source={item.image}/>
                <Text style={[mediumLine,primary3]} >{item.description}</Text>
                <View style={styles.userInfo}>
                  <Image style={[circle,small,styles.avatar]} source={item.userimage} />
                <Text style={[header6]}>{item.name}</Text>
                </View>
             </View>
             </View>
           )
       
       
    }
  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <FlatList
      data={this.state.names} 
      renderItem={this.renderItem}
      />
    );
  }
}