import  React, {Component,PropTypes} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';



export default class ChannelList extends Component
{
constructor(props)  {
super(props);
                    }
static propTypes =  {
channels:PropTypes.array.isRequired
                    };
render ()
        {
return  (
    <View>
        <ScrollView>
            {
                    this.props.channels.map((item,i)=>
                    <View style={styles.item} key={i}>
                        <Text style={styles.textNum}>  {item.channelNum}</Text>
                        <Image source={{uri:item.img}} style={styles.imageStyle}/>
                        <Text style=  {styles.text}>{item.channel}</Text>
                    </View>
                )

            }
        </ScrollView>
    </View>
        );
        }




}
const styles = StyleSheet.create({
    text:                        {

        color:'white',
        fontFamily:'ComfortaaRegular',
        fontSize:17,
        alignSelf:'center',
        marginLeft:30
                                 },
    item:                        {
        width:'100%',
        height:60,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center',
        padding:10

                                 },
    imageStyle:                  {
        width: 40,
        height: 40
    },
    groupView:                   {
        width:'40%',
        height:'100%',
        flexDirection: 'row',

    },
    textNum:                      {
        color:'white',
        fontFamily:'ComfortaaRegular',
        fontSize:17,
        alignSelf:'center',
        width:'10%',
        marginRight:5
                                 },
});