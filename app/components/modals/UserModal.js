import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text, Image, Dimensions,
    TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';



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
            return (
                <View style={styles.viewModal}>
                    <View style={styles.viewTop}>
                    </View>
                    <View style={styles.centerView}>
                        {
                            type === 'info' ? (<View style={styles.viewInfo}>
                                {
                                    name ? (<Text style={{fontSize: 20}}>Name: {name.first} {name.last}</Text>) : null
                                }
                                <Text style={{fontSize: 20}}>Gender: {gender}</Text>
                            </View>) : null
                        }
                        {
                            type === 'location' ? (<View style={styles.viewInfo}>
                                <Text style={{fontSize: 20}}>My address is</Text>
                                {
                                    location ? (<Text style={{
                                        fontSize: 20,
                                    }}>Location: {location.street} {location.city} {location.state}</Text>) : null
                                }
                            </View>) : null
                        }
                        {
                            type === 'phone' ? (<View style={styles.viewInfo}>
                                <Text style={{fontSize: 20}}>Phone number: {phone}</Text>
                            </View>) : null
                        }
                    </View>
                    <View style={styles.viewImageUser}>
                        <Image style={styles.image} source={{uri: picture}}/>
                    </View>
                    <TouchableOpacity style={styles.viewButtonClose} onPress={onPressCloseModal}>
                        <Icon name={'closesquare'} size={40} color={'red'}/>
                    </TouchableOpacity>
                    <View style={styles.viewButton}>
                        <TouchableOpacity style={{borderBottomWidth: type === 'info' ? 1 : 0, padding: 5, borderColor: 'green'}} onPress={(e) => onClickInformation('info')}>
                            <Icon name={'infocirlceo'} size={40} color={'blue'}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderBottomWidth: type === 'location' ? 1 : 0, padding: 5, borderColor: 'green'}} onPress={(e) => onClickLocation('location')}>
                            <Icon2 name={'location-arrow'} size={40} color={'red'}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderBottomWidth: type === 'phone' ? 1 : 0, padding: 5, borderColor: 'green'}} onPress={(e) => onClickPhone('phone')}>
                            <Icon name={'phone'} size={40}/>
                        </TouchableOpacity>
                    </View>

                </View>
            )
        // })
    };

    return (
        <Modal isVisible={isModalVisible}>
            <View style={styles.modal}>
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
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewModal: {
        width: width / 1.3,
        height: height / 2.2,
        backgroundColor: 'white',
        borderRadius: 10
    },
    viewTop: {
        flex: 0.5,
        backgroundColor: '#EEEEEE',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    buttonClose: {
        width: 36,
        height: 36,
    },
    viewButtonClose: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    viewImageUser: {
        position: 'absolute',
        width: 110,
        borderRadius: 55,
        borderWidth: 0.5,
        padding: 5,
        top: width / 8,
        left: height / 8.5,
        borderColor: '#EEEEEE'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    viewButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 40,
    }
});
