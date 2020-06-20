import React, {useRef} from 'react';
import {
    StyleSheet,
    View,
    Text, TouchableOpacity, Image,
} from 'react-native';
import Images from '../../utils/Images';

const Screen = ({onClickDisLike, onClickLike, onClickHeart, onClickListFavorites, showInformation}) => {

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginBottom: 40,
        }}>
            <TouchableOpacity onPress={onClickDisLike}>
                <Image style={[styles.button, {tintColor: 'red'}]} source={Images.ic_dislike}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClickLike}>
                <Image style={[styles.button, {tintColor: 'green'}]} source={Images.ic_like}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClickHeart}>
                <Image style={styles.button} source={Images.ic_heart}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClickListFavorites}>
                <Image style={styles.button} source={Images.ic_listfavorite}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={showInformation}>
                <Image style={styles.button} source={Images.ic_information}/>
            </TouchableOpacity>
        </View>
    );
};

export default Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        width: 36,
        height: 36,
    },
});
