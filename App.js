import React from 'react';
import ChannelMenu from './ChannelMenu';
import VideoCont from   './VideoCont';
import Expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Dimensions } from 'react-native';
const  store = configureStore();

export default class App extends React.Component
                                    {
    constructor()                   {
        super();
        this.state = {
            isReady: false,
            orientation:'portrait'
        };
        this.setOrientation = this.setOrientation.bind(this);
        // Event Listener for orientation changes
        Dimensions.addEventListener('change', () =>
                                    {
            this.setState ({
                orientation: this.isPortrait() ? 'portrait' : 'landscape'
                                    });
                                    })
                                    }

        async componentWillMount()  {
        await Expo.Font.loadAsync ({
        ComfortaaRegular: require ("./assets/fonts/ComfortaaRegular.ttf"),
                                  });
        this.setState({ isReady: true });
                                    }
        isPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
        };

        isLandscape = () =>
        {
        const dim = Dimensions.get('screen');
        return dim.width >= dim.height;
        };
        setOrientation ()               {
        if (this.state.orientation==='portrait')
                                return (<View style={styles.container}>
                                        <VideoCont/>
                                        <ChannelMenu/>
                                        </View>);
         else return                    (<View>
                                        <VideoCont/>
                                        </View>)

                                        }
        render()                        {
        if (!this.state.isReady) {
        return <Expo.AppLoading/>
        }
        else return                   (
            <Provider store={store}>
            {this.setOrientation()}
            </Provider>
                                      );
                                      }
                                      }
        const styles = StyleSheet.create(
                                      {
            container:                {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                                      },
                                      });
