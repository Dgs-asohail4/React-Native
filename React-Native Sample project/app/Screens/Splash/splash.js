import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import api from '../../Api/api';
import * as actions from '../../Actions/actions';

class Splash extends Component {

  constructor(props){
    super(props)
    this.state = {
      version : ""
    }
  }

  componentDidMount(){
    api.getVersions().then((res)=>res.json())
    .then(res=>{this.props.setVersion(res.version)})
    .catch(err=>console.log(err));
  }

  render() {
    return (
    <View style={styles.container}>
        <Text>{this.state.version}</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = state => {
  return {
    version: state.version
  };
};

const mapDispatchToProps = {
  actions
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);