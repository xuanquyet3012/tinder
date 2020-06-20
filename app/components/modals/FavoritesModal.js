import React from 'react';
import {
    StyleSheet,
    View,
    Text, Image, TouchableOpacity, Dimensions,
    FlatList
} from 'react-native';
import Images from '../../utils/Images';
import Modal from 'react-native-modal';
import FavoritesCell from '../cells/FavoritesCell';
const {height, width} = Dimensions.get('window');

const FavoritesModal = ({listFavorites, onPressCloseModalFavorite, isModalVisibleFavorites}) => {


    const renderFavoritesItem = ({ item, index }) => {
        return <FavoritesCell item={item}/>;
    };

    return (
        <Modal isVisible={isModalVisibleFavorites}>
                <View style={{flex: 1}}>
                    <FlatList
                        style={styles.listView}
                        data={listFavorites || []}
                        horizontal={false}
                        // showsHorizontalScrollIndicator={false}
                        renderItem={renderFavoritesItem}
                        // keyExtractor={(item, index) => `${item.id}`}
                        extraData={listFavorites}
                    />
                </View>
            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}
                              onPress={onPressCloseModalFavorite}>
                <Image source={Images.ic_close} style={{width: 32, height: 32}}/>
            </TouchableOpacity>
        </Modal>
    );
};

export default FavoritesModal;

const styles = StyleSheet.create({
    viewModal: {
        width: width,
        height: height / 2,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    listView: {
        marginHorizontal: 20,
        marginVertical: 20
    }
});
