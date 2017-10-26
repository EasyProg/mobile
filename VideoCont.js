import  React, {Component,PropTypes} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {togglePlay,toggleButtons,toggleFullScreen,setMenusVisible,setFavor} from './actions/actions';
import  Video from 'react-native-video';
import  {connect} from 'react-redux';
import  {bindActionCreators} from 'redux';
class VideoCont extends Component
                        {
constructor(props)      {
        super(props);
                        }


    render()
                        {
        return          (
                <View style={styles.container}>
                    {/*<Video source={{uri:this.props.video.link}}/>*/}
                </View>
                        )
                        }
                        }




const styles = StyleSheet.create({
    container:      {
        //top:'20%',
        //flex:1,
        top:0,
        width:'100%',
        height:'30%',
        backgroundColor:'yellow'

                    },
});




const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        dispatch,togglePlay,toggleButtons,
        toggleFullScreen,setMenusVisible,setFavor
                        }, dispatch);
export default connect      (
    state => ({
        video:                state.videoReducer.video,
        isPlaying:            state.videoReducer.isPlaying,
        autoPlay:             state.videoReducer.autoPlay,
        fullScreen:           state.videoReducer.fullScreen
    }),
    mapDispatchToProps
)(VideoCont);