import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity, Dimensions,
    FlatList
} from 'react-native';
import Modal from 'react-native-modal';
import FavoritesCell from '../cells/FavoritesCell';
import Icon from 'react-native-vector-icons/AntDesign';
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
                        renderItem={renderFavoritesItem}
                        // keyExtractor={(item, index) => `${item.id}`}
                        extraData={listFavorites}
                    />
                </View>
            <TouchableOpacity style={styles.buttonClose}
                              onPress={onPressCloseModalFavorite}>
                <Icon name={'closesquare'} size={40} color={'red'}/>
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
    },
    buttonClose: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
