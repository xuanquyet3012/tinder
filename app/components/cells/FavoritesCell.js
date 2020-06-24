import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

const FavoritesCell = ({item}) => {

    const {picture, name, gender, location, phone} = item.user || {};

    return (
        <View style={styles.container}>

            {
                item ? (
                    <View style={styles.viewItem}>
                        <View style={styles.viewImage}>
                            <Image style={styles.image} source={{uri: picture}}/>
                        </View>
                        <View style={styles.info}>
                            <Text>Name: {name.first} {name.last}</Text>
                            <Text>Gender: {gender}</Text>
                            <Text>Location: {location.street} {location.city} {location.state}</Text>
                        </View>
                        <View style={styles.phone}>
                            <Text style={styles.phone}>Phone number: {phone}</Text>
                        </View>
                    </View>
                ) : (<Text>Danh sách trống</Text>)
            }
        </View>
    );
};

export default FavoritesCell;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    viewItem: {
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row',
        flex: 1
    },
    viewImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 50, height: 50, borderRadius: 5
    },
    info: {
        flex: 2
    },
    phone: {
        flex: 1
    }
});
