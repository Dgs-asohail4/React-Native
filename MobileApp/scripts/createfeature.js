'use strict';

const args = require('minimist')(process.argv.slice(2));
const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')

if(!args){
    console.log('invalid arguments');
    return;
}
if(!args._){
    console.log('invalid arguments');
    return;
}

if(args._ && (args._.length < 1 || args._.length > 1) ){
    console.log('Only one argument required provided ' + args._.length);
    return;
}

var feature_name = args._[0];

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

const getFeaturesNames = paths => paths.map(path => path.split('\\')[2]);

var allFeaturesPaths  = getDirectories('./src/features');
var allFeaturesNames = getFeaturesNames(allFeaturesPaths);

if(allFeaturesNames.includes(feature_name)){
    console.log('Feature with name ' + feature_name + ' already exists');
    return;
}

var fs = require('fs');
var dir = './src/features/' + feature_name;
var apidir = './src/api/' + feature_name;


if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const create_folder = (path,name) => fs.mkdirSync(path+'/'+name);
const create_file = (path, name)=> fs.openSync(path+'/'+name, 'w');
const writetofile = (file, text) => fs.writeFile(file, text, function (err) {
    if (err)
        return console.log(err);
});

var basic_component =
`import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
export default class COMPONENT_NAME extends Component {
  render() {
    return (
      <View>
        <Text>Hello World !</Text>
      </View>
    );
  }
}`


var basic_styles =
`import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

});

export default styles;`

var basic_reducer =
`
import * as actionTypes from '../constants'

const DEFAULT_STATE = {title:"Hello World"}
export default function reducer(state = DEFAULT_STATE, action){
    switch(action.type){
        default:
            return state;
    }
}
`;

var basic_container =
`
import COMPONENT_NAME from '../components/COMPONENT_NAME'
import {connect} from 'react-redux'
import * as actions from '../actions'
import * as actionsNav from '../../../navigation/actions'
import { bindActionCreators } from 'redux';
const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions, dispatch),
    ...bindActionCreators(actionsNav,dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(COMPONENT_NAME);
`

var basic_selector =
`
// Selectors
export const getTitle = (state) => ({
    title :state.title
});
`

//Generate Folders
create_folder(dir, 'actions');
create_folder(dir, 'components');
create_folder(dir, 'containers');
create_folder(dir, 'reducers');
create_folder(dir, 'selectors');
create_folder(dir, 'components/'+feature_name);
if (!fs.existsSync(apidir)){
    fs.mkdirSync(apidir);
}

var camelCaseFeatureName = feature_name.charAt(0).toUpperCase() + feature_name.slice(1);

//Generate Files
create_file(dir, 'constants.js');
create_file(apidir, camelCaseFeatureName +'.js');
create_file(dir, 'components/'+camelCaseFeatureName+'/index.js');
create_file(dir, 'reducers/index.js');
create_file(dir, 'components/'+camelCaseFeatureName+'/styles.js');
create_file(dir, 'actions/index.js');
create_file(dir, 'containers/index.js');
create_file(dir, 'selectors/index.js');

//Writing Files
writetofile(dir+'/components/'+feature_name+'/index.js', basic_component.replace(/\bCOMPONENT_NAME\b/g,  camelCaseFeatureName));
writetofile(dir+'/components/'+feature_name+'/styles.js', basic_styles);
writetofile(dir+'/reducers/index.js', basic_reducer);
writetofile(dir+'/containers/index.js', basic_container.replace(/\bCOMPONENT_NAME\b/g,camelCaseFeatureName));
writetofile(dir+'/selectors/index.js', basic_selector);

