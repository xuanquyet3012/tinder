import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {BallIndicator} from 'react-native-indicators';

const RemoteImage = ({containerStyle, imageStyle, uri, resizeMode, priority, children}) => {

    const [loading, setLoading] = useState(false);
    const [layout, setLayout] = useState(null);

    // MARK: - Events

    const onLayout = (e) => {
        if (layout !== null) {
            return;
        }
        setLayout({
            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height,
        });
    };

    // MARK: - UIs

    let indicator = null;
    if (loading) {
        indicator = (
            <View style={[styles.indicator, {
                top: layout ? (layout.height - 20) / 2 : 0,
                left: layout ? (layout.width - 20) / 2 : 0,
            }]}>
                <BallIndicator color={'red'} size={20} animating={loading}/>
            </View>
        );
    }
    let source = {
        uri: uri,
        priority: priority || FastImage.priority.normal,
    };
    if (typeof uri !== 'string') { // Local image
        source = uri;
    }
    return (
        <View style={[styles.container, containerStyle || {}]} onLayout={onLayout}>
            <FastImage
                style={imageStyle || {}}
                source={source}
                resizeMode={resizeMode || FastImage.resizeMode.contain}
                onLoadStart={() => {
                    setLoading(true);
                }}
                onError={() => {
                    setLoading(false);
                }}
                onLoadEnd={() => {
                    setLoading(false);
                }}
            >
                {children}
            </FastImage>
            {
                indicator
            }
        </View>
    );
};

export default React.memo(RemoteImage);

const styles = StyleSheet.create({
    container: {},
    indicator: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
    },
});

