import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

import List from '../../../../components/list'
import { TEXT_COLOR_PRIMARY } from '../../../../global/theme/default';

export default class ListViewScreenExample extends Component {

  constructor(props){
    super(props)
    this._onRender = this._onRender.bind(this);

    this.state ={

      names: [
        {
           id: 0,
           name: 'Ben',
        },
        {
           id: 1,
           name: 'Susan',
        },
        {
           id: 2,
           name: 'Robert',
        },
        {
           id: 3,
           name: 'Mary',
        },

     ]

    }
  }

  _onRender(item){
    return(
      <View key={item.id}>
        <Text>{item.name}</Text>
      </View>
    )
  }

  render() {
    return (
      <View>
        <List renderRow={this._onRender} data={this.state.names} />
      </View>
    );
  }
}