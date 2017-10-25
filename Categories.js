import React, {Component,PropTypes} from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class Categories extends Component
{
    constructor(props)
    {
    super(props);
    this.state = {chosen:0}
    }
    static propTypes = {
    categories:PropTypes.array.isRequired
                       };

    render ()
    {
    return   (
        <View>
            {
                this.props.categories.map((item,i)=>
                <View style={styles.item}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
                                         )
            }
        </View>
             )
    }
}


const styles = StyleSheet.create({
    text:                        {

        color:'grey',
        fontFamily:'ComfortaaRegular',
        fontSize:17
                                 },
    item:                        {
        width:'100%',
        height:40
                                 }
});