import React, { Component } from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';

import styles from './styles';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container} >
     
            {
               this.props.data.map( (item, index) =>
                this.props.renderRow(item)
                )
            }


         </View>
    );
  }
}