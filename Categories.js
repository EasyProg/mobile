import React, {Component,PropTypes} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';



export default class Categories extends Component
{
    constructor(props)
    {
    super(props);
    this.state = {chosen:0}
    }
    static propTypes =  {
    categories:PropTypes.array.isRequired
                        };

    render ()
    {
    return   (
        <View>
            <ScrollView>
            {
                this.props.categories.map((item,i)=>
                <View style={styles.item} key={i}>
                    <Image source={item.src} style={styles.imageStyle}/>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
                                         )

            }
            </ScrollView>
        </View>
             )
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
        width: 30,
        height: 30
                                 },
    groupView:                   {
        width:'40%',
        height:'100%',
        flexDirection: 'row',

                                 }
                                 });