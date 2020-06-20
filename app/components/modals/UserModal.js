import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text, Image, Dimensions,
    TouchableOpacity,
} from 'react-native';
import Images from '../../utils/Images';
import Modal from 'react-native-modal';

const {height, width} = Dimensions.get('window');

const UserModal = ({user, isModalVisible, onPressCloseModal}) => {
    const [type, setType] = useState('info');


    const onClickInformation = (e) => {
        setType(e);
    };
    const onClickLocation = (e) => {
        setType(e);
    };
    const onClickPhone = (e) => {
        setType(e);
    };

    const renderInformation = () => {
        const {name, gender, location, picture, phone} = user || {};
        console.log('data: ', user, name);

            return (
                <View style={styles.viewModal}>
                    <View style={styles.viewTop}>
                    </View>
                    <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                        {
                            type === 'info' ? (<View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20}}>
                                {
                                    name ? (<Text style={{fontSize: 20}}>Name: {name.first} {name.last}</Text>) : null
                                }
                                <Text style={{fontSize: 20}}>Gender: {gender}</Text>
                            </View>) : null
                        }
                        {
                            type === 'location' ? (<View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20}}>
                                <Text style={{fontSize: 24}}>My address is</Text>
                                {
                                    location ? (<Text style={{
                                        fontSize: 20,
                                    }}>Location: {location.street} {location.city} {location.state}</Text>) : null
                                }
                            </View>) : null
                        }
                        {
                            type === 'phone' ? (<View>
                                <Text style={{fontSize: 20}}>Phone number: {phone}</Text>
                            </View>) : null
                        }
                    </View>
                    <View style={{
                        position: 'absolute',
                        width: 110,
                        borderRadius: 55,
                        borderWidth: 0.5,
                        padding: 5,
                        top: width / 8,
                        left: height / 8.5,
                    }}>
                        <Image style={{width: 100, height: 100, borderRadius: 50}} source={{uri: picture}}/>
                    </View>
                    <TouchableOpacity style={{position: 'absolute', top: 20, right: 20}} onPress={onPressCloseModal}>
                        <Image source={Images.ic_close} style={{width: 32, height: 32}}/>
                    </TouchableOpacity>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        marginBottom: 40,
                    }}>
                        <TouchableOpacity style={{borderBottomWidth: type === 'info' ? 1 : 0, padding: 5, borderColor: 'green'}} onPress={(e) => onClickInformation('info')}>
                            <Image style={[styles.button, {tintColor: 'blue'}]} source={Images.ic_information}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderBottomWidth: type === 'location' ? 1 : 0, padding: 5, borderColor: 'green'}} onPress={(e) => onClickLocation('location')}>
                            <Image style={[styles.button]} source={Images.ic_location}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderBottomWidth: type === 'phone' ? 1 : 0, padding: 5, borderColor: 'green'}} onPress={(e) => onClickPhone('phone')}>
                            <Image style={styles.button} source={Images.ic_phone}/>
                        </TouchableOpacity>
                    </View>

                </View>
            )
        // })
    };

    return (
        <Modal isVisible={isModalVisible}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                {
                    renderInformation()
                }
            </View>
        </Modal>
    );
};

export default UserModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewModal: {
        width: width / 1.3,
        height: height / 2,
        backgroundColor: 'white',
        borderRadius: 10
    },
    viewTop: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    button: {
        width: 36,
        height: 36,
    },
});
