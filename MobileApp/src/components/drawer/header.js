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
                <Image source={userIcon} style={{resizeMode:'stretch', width:50,height:50}}/>
            </View>
        )
    }
}