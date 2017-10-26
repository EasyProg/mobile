import React, {Component} from 'react';
import Categories from './Categories';
import ChannelList from './ChannelList';
import { StyleSheet, Text, View } from 'react-native';
import parse from './Parsing';
import hlsArray from './hls';
import  {setMenusVisible,getChannels,toggleCategory} from './actions/actions';
var film = require('./img/film-roll.png');
var headphones = require('./img/headphones.png');
var star=require('./img/shooting-star.png');
var masks=require('./img/theater.png');
var all = require('./img/crowd-of-users.png');
var tv = require('./img/television.png');
import  {connect} from 'react-redux';
import  {bindActionCreators} from 'redux';

class ChannelMenu extends Component
                                 {
    constructor(props)
    {
    super(props);
    this.menuState = this.menuState.bind(this);
    this.menuGetState = this.menuGetState.bind(this);
    this.menuGetStateLine = this.menuGetStateLine.bind(this);
    this.conditionalRender = this.conditionalRender.bind(this);
    this.state = {chosen:1};

    }
    menuState (num)                 {
    this.setState({chosen:num});
                                    }
    menuGetState(num)               {
    if (num === this.state.chosen)
    return  styles.testChosen;
    else  return  styles.text

                                        }
    firstToUpperCase( str )             {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
                                        }
    chooseSrc(categoryName)             {
    switch (categoryName)               {
    case 'Фильмы': return film;
    break;
    case 'Все жанры':return all;
    break;
    case 'Музыкальный':return headphones;
    break;
    case 'Развлекательный':return masks;
    default: return tv

                                     }
                                     }
    parseCategories ()
    {
    let grpArr = [];
    let c = parse(hlsArray);
    let obj = {};
    c.forEach(function(e,i){
    let str = e['category'];
    obj[str] = true;
    });
    for (var key in Object.keys(obj))
    {
    grpArr.push       ({name:this.firstToUpperCase(Object.keys(obj)[key]),
    src:this.chooseSrc(this.firstToUpperCase(Object.keys(obj)[key]))});
    }
    grpArr.unshift({name: 'Любимые',  src:star});
    grpArr.unshift({name: 'Все жанры',src:all});
    return grpArr;
    }
    conditionalRender           (num)
                                 {
    switch (num) {
        case 1: return <Categories categories={this.parseCategories()}/>;
            break;
        case 2: return <ChannelList channels= {this.props.channels}/>;
            break;
        case 3: return null;
            break;
        default:return null
                 }
                                 }
    menuGetStateLine(num)        {
    switch (num)                 {
        case 1: return styles.bottomLineChosen1;
        break;
        case 2: return styles.bottomLineChosen2;
        break;
        case 3: return styles.bottomLineChosen3;
        break;
        default:return null
                                 }
                                 }

    render()   {
        return (
                <View style={styles.container}>
                <View style={styles.menuContainer}>
                <Text style={this.menuGetState(1)} onPress={(e)=>this.menuState(1)}>Categories</Text>
                <Text style={this.menuGetState(2)} onPress={(e)=>this.menuState(2)}>All channels</Text>
                <Text style={this.menuGetState(3)} onPress={(e)=>this.menuState(3)}>TV program</Text>
                </View>
                    <View style={styles.bottomLine}>
                    <View style={this.menuGetStateLine(this.state.chosen)}/>
                    </View>
                <View style={styles.innerCont}>
                    {this.conditionalRender(this.state.chosen)}
                </View>
                </View>
                );
                }
                                 }

const styles = StyleSheet.create({
    container:      {
        //top:'30%',
        width:'100%',
        backgroundColor:'black',
        height:'70%',
        //flex:4

                    },

    menuContainer:  {
        height: 50,
        width:'96%',
        //flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        marginLeft:5,
        marginRight:5,

                    },
    text:                       {

    color:'grey',
    fontFamily:'ComfortaaRegular',
    fontSize:17
                                },
    testChosen:                 {
        color:'white',
        fontFamily:'ComfortaaRegular',
        fontSize:17

                                },
    bottomLine:                 {
    //borderBottomHeight:10,
    borderBottomWidth:1,
    borderBottomColor:'grey',
    marginLeft:5,
    //height:2,
    width:'98%'

                                },
    bottomLineChosen1:          {
    borderBottomWidth:3,
    borderBottomColor:'white',
    width:'33%',
    //left:'33%'
                                },
    bottomLineChosen2:          {
    borderBottomWidth:3,
    borderBottomColor:'white',
    width:'33%',
    left:'33%',
    //borderRadius:3
                                 },
    bottomLineChosen3:           {
    borderBottomWidth:3,
    borderBottomColor:'white',
    width:'33%',
    left:'68%',
    //borderRadius:3
                                 },
    innerCont:                   {
    width:'100%',
    height:'80%',
    //backgroundColor:'yellow',
    //borderRadius:3

                                 }
});


const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        dispatch,setMenusVisible,getChannels,toggleCategory
    },  dispatch);
export default connect(
    state =>
        ({ channels:state.channelReducer.channels
        }),
mapDispatchToProps
)(ChannelMenu);
