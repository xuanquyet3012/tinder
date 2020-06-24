import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Fontisto';



const Screen = ({onClickDisLike, onClickLike, onClickHeart, onClickListFavorites, showInformation}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onClickDisLike}>
                <Icon name={'dislike2'} size={40} color={'red'}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClickLike}>
                <Icon name={'like2'} size={40} color={'blue'}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClickHeart}>
                <Icon name={'heart'} size={40} color={'red'}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClickListFavorites}>
                <Icon2 name={'favorite'} size={40} color={'white'}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={showInformation}>
                <Icon name={'infocirlceo'} size={40}/>
            </TouchableOpacity>
        </View>
    );
};

export default Screen;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 40,
    },
    button: {
        width: 36,
        height: 36,
    },
});
