import AsyncStorage from '@react-native-community/async-storage';

const saveItem = async (key, value) => {
    console.log('value: ', JSON.stringify(value));
    console.log('key: ', key);

    try {
        return await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log('Error saving data' + error);
    }
    return false;
};

const getItem = async (key) => {
    console.log('get item key: ', key);

    try {
        let result = await AsyncStorage.getItem(key);
        return result ? JSON.parse(result) : null;
    } catch (error) {
        console.log('Error saving data' + error);
    }
    return null;
};

const removeItem = async (key) => {
    try {
        return await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log('Error resetting data' + error);
    }
    return false;
};

export default {
    saveItem,
    getItem,
    removeItem,
};
