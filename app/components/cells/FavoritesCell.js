import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image, Dimensions,
} from 'react-native';
const {height, width} = Dimensions.get('window');

const FavoritesCell = ({item}) => {

    console.log('item', item);
    const {picture, name, gender, location, phone} = item.user || {};

    return (
        <View style={styles.container}>

            {
                item ? (<View style={{backgroundColor: 'white', borderRadius: 5, flexDirection: 'row', flex: 1}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image style={{width: 50, height: 50, borderRadius: 5}} source={{uri: picture}}/>
                    </View>
                    <View style={{flex: 2}}>
                        <Text>Name: {name.first} {name.last}</Text>
                        <Text>Gender: {gender}</Text>
                        <Text>Location: {location.street} {location.city} {location.state}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{flex: 1}}>Phone number: {phone}</Text>
                    </View>
                </View>) : (<Text>Danh sách trống</Text>)
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
        marginBottom: 10
    },
});
