import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ChannelMenu extends React.Component
                                 {
    constructor(props)
    {
    super(props)
    }

    render()   {
        return (
            <View style={styles.container}>
            <View style={styles.menuContainer}>
                <Text style={styles.text}>Categories</Text>
                <Text style={styles.text}>All channels</Text>
                <Text style={styles.text}>TV program</Text>
            </View>
                <View style={styles.bottomLine}/>
            </View>
        );
                }
                                 }

const styles = StyleSheet.create({
    container:      {
        top:'20%',
        width:'100%',
        backgroundColor:'black',
        height:'70%'

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
    fontSize:20
                                },
    bottomLine:                 {
    //borderBottomHeight:10,
    borderBottomWidth:1,
    borderBottomColor:'grey',
    marginLeft:5,
    //height:2,
    width:'98%'

                                }
});
