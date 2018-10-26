import React , {Component} from 'react'
import {View, Text, Image} from 'react-native'

import styles from './styles'
import userIcon from '../../global/assets/img/user_icon.png'

export default class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.drawerHeader}>
                <Image source={{uri:"https://intellihr.com.au/wp-content/uploads/2017/06/avatar_placeholder_temporary.png"}} style={{resizeMode:'stretch', width:70,height:70}}/>
            </View>
        )
    }
}