import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import API from '../services/API';
import Tabbar from '../components/tabbar/Tabbar';
import UserModal from '../components/modals/UserModal';
import FavoritesModal from '../components/modals/FavoritesModal';
import Images from '../utils/Images';
import RemoteImage from '../components/images/RemoteImage';
import {BallIndicator} from 'react-native-indicators';
import Storage from '../utils/Storage';

const HomeScreen = ({}) => {

    const [data, setData] = useState([]);
    const [favorites] = useState([]);
    const [favorites_offline, setFavorites_offline] = useState();
    const [currentIndex, setCurrentIndex] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisibleFavorites, setIsModalVisibleFavorites] = useState(false);

    const cardStack = useRef();

    useEffect(() => {
        getData();
    }, []);

    // MARK: - Services

    const getData = async () => {
        for (const index in [0, 1, 2, 3]) { // Preload , 2, 3, 4, 5, 6, 7, 8, 9, 10
            await getNextUser(index);
        }
        if (data.length) {
            setCurrentIndex(0);
        } else {
            //Show view no results
        }
        loadFavorites();
    };

    const getNextUser = async () => {
        try {
            const response = await API.getData();
            if (response.results && Array.isArray(response.results) && response.results.length) {
                let _data = data || [];
                _data.push(response.results[0]);
                setData(_data);
            }
        } catch (e) {
            console.log(e);
        }
        loadFavorites();
    };

    // MARK: - Events

    const onSwipeStart = async () => {

    };

    const onSwipeEnd = async () => {

    };

    const onSwiped = async () => {
        setCurrentIndex(prevValue => prevValue + 1);
    };

    const onSwipedLeft = async () => {
        await getNextUser();
    };

    const onSwipedRight = async () => {
        if (currentIndex != null && currentIndex < data.length) {
            await favorites.push(data[currentIndex - 1]);
            console.log('favorites: ', favorites);
            await Storage.saveItem('favorites_offline', JSON.stringify(favorites));
        }
        await getNextUser();
    };

    const loadFavorites = async () => {
        let result = await Storage.getItem('favorites_offline');
        console.log('result: ', JSON.parse(result));
        setFavorites_offline(JSON.parse(result))
    };

    console.log('favorites_offline: ', favorites_offline);

    const onClickDisLike = () => {
        cardStack.current.swipeLeft();
    };

    const onClickLike = () => {
        cardStack.current.swipeRight();
    };

    const showInformation = () => {
        setIsModalVisible(true);
    };

    const onClickListFavorites = () => {
        setIsModalVisibleFavorites(true);
    };

    const onPressCloseModal = () => {
        setIsModalVisible(false);
    };

    const onPressCloseModalFavorites = () => {
        setIsModalVisibleFavorites(false);
    };

    // MARK: - UIs

    const renderItem = () => {
        if (currentIndex !== null && currentIndex < data.length) {
            return (
                <CardStack
                    onSwipeStart={onSwipeStart}
                    onSwipeEnd={onSwipeEnd}
                    onSwiped={onSwiped}
                    onSwipedRight={onSwipedRight}
                    onSwipedLeft={onSwipedLeft}
                    style={styles.content}
                    ref={cardStack}
                    renderNoMoreCards={() => null}>
                    {
                        data.map(item => {
                            const {name, gender, location, picture, email} = item.user || {};
                            return (
                                <Card key={email}>
                                    <View style={styles.viewImage}>
                                        <RemoteImage containerStyle={styles.containerImageView}
                                                     imageStyle={styles.avatarImageView}
                                                     uri={picture ? {uri: picture} : Images.ic_default_avatar}
                                                     resizeMode={'contain'}
                                        />
                                    </View>
                                    <View style={styles.viewInformation}>
                                        <Text style={styles.textSize}>
                                            Name: {name.first} {name.last}
                                        </Text>
                                        <Text style={styles.textSize}>
                                            Gender: {gender}
                                        </Text>
                                        <Text style={styles.textSize}>
                                            Location: {location.street} {location.city} {location.state}
                                        </Text>
                                    </View>
                                </Card>
                            );
                        })
                    }

                </CardStack>
            );
        }
        //currentIndex == null
        return (
            <View>

            </View>
        );
    };


    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                {
                    data.length ? renderItem() : (
                        <View style={styles.viewIndicator}>
                            <View>
                                <BallIndicator color={'red'} size={30}/>
                            </View>
                        </View>
                    )
                }
            </View>
            {
                data.length ? (<Tabbar
                    onClickDisLike={onClickDisLike}
                    onClickLike={onClickLike}
                    showInformation={showInformation}
                    onClickListFavorites={onClickListFavorites}
                />) : null
            }
            <UserModal
                user={currentIndex !== null && currentIndex < data.length ? data[currentIndex].user : {}}
                isModalVisible={isModalVisible}
                onPressCloseModal={onPressCloseModal}
            />
            <FavoritesModal
                onPressCloseModalFavorite={onPressCloseModalFavorites}
                isModalVisibleFavorites={isModalVisibleFavorites}
                listFavorites={favorites_offline}
            />
        </View>
    );
};

export default HomeScreen;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        backgroundColor: '#FE474C',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
    },
    card1: {
        backgroundColor: '#FE474C',
    },
    card2: {
        backgroundColor: '#FEB12C',
    },
    containerImageView: {
        width: width - 40,
        height: height - 200,
    },
    avatarImageView: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: 'white',
    },
    viewInformation: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
    },
    textSize: {
        fontSize: 20,
    },
    viewIndicator: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewImage: {
        flex: 1,
    },
});
