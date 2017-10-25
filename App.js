import React from 'react';
import ChannelMenu from './ChannelMenu';
import Expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component
                                {
    constructor()               {
        super();
        this.state = {
            isReady: false
        };
                                }

    async componentWillMount()  {
        await Expo.Font.loadAsync({
        ComfortaaRegular: require("./assets/fonts/ComfortaaRegular.ttf"),
        });
        this.setState({ isReady: true });
                                }

    render()                    {
        if (!this.state.isReady) {
        return <Expo.AppLoading/>
        }
        else return (
            <View style={styles.container}>
              <ChannelMenu/>
            </View>
        );
                                }
                                }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
