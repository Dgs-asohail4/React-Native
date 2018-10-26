import React, { Component } from 'react';
import { Text, View,FlatList,Image,TouchableOpacity } from 'react-native';
import Avatar from '../../../../components/avatar/container'
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
            const {primary3, mediumLine,header6,secondary2,hintColor, baseColor} =this.props.globalStyles.textStyle;
            var styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
            const blog = this.props.globalStyles.modalStyle.blog;
            styles = {...styles, ...blog}
           return(
             <View style={[{backgroundColor:Theme[this.props.theme].colors.base}]}>
                <View key={item.key}>
                    <Image source={item.image} style={{width:null,height:140}}/>
                    <View style={styles.content}>
                      <View>
                        <Text style={[mediumLine,primary3, baseColor]} >{item.description}</Text>
                      </View>
                    </View>
                    <View style={styles.footer}>
                        <View style={[styles.userInfo]}>
                          <View style={{flex: 1,flexDirection: 'row'}}>
                            <Avatar styles={[styles.avatar]} small img={item.userimage} />
                            <Text style={[header6,baseColor,{textAlignVertical:'center', paddingHorizontal:10}]}>{item.name}</Text>
                          </View>
                          <View style={{justifyContent:'space-evenly'}}>
                            <Text >5 minutes ago</Text>
                          </View> 
                          </View>
                    </View>
                  
                </View>
             </View>
           )
       
       
    }
  render() {
    var styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const blog = this.props.globalStyles.modalStyle.blog;
    styles = {...styles, ...blog}
    return (
      <FlatList
      style={styles.container}

      data={this.state.names} 
      renderItem={this.renderItem}
      />
    );
  }
}