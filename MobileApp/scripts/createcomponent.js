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

var component_name = args._[0];

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

const getComponentNames = paths => paths.map(path => path.split('\\')[2]);

var allComponentsPaths  = getDirectories('./src/components');
var allComponentsNames = getComponentNames(allComponentsPaths);

if(allComponentsNames.includes(component_name)){
    console.log('Component with name ' + component_name + ' already exists');
    return;
}

var fs = require('fs');
var dir = './src/components/' + component_name;

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

import StyleSheetFactory from './styles';
import Theme from '../../global/theme'

export default class COMPONENT_NAME extends Component {
  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme])
    return (
      <View>
        <Text>Hello World !</Text>
      </View>
    );
  }
}`

var basic_styles =
`import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
        })
    }
};`

var basic_container =
`
import COMPONENT_NAME from './index.js'
import {connect} from 'react-redux'
import * as actionsNav from '../../navigation/actions'
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
    theme : state.nav.theme,
    globalStyles : state.splash.globalTheme
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actionsNav,dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(COMPONENT_NAME);

`


//Generate Files
create_file(dir, 'index.js');
create_file(dir, 'styles.js');
create_file(dir, 'container.js');

writetofile(dir+'/index.js', basic_component.replace(/\bCOMPONENT_NAME\b/g,  component_name.charAt(0).toUpperCase() + component_name.slice(1)));
writetofile(dir+'/styles.js', basic_styles);
writetofile(dir+'/container.js', basic_container.replace(/\bCOMPONENT_NAME\b/g,  component_name.charAt(0).toUpperCase() + component_name.slice(1)));