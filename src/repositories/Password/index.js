import { AsyncStorage } from "react-native"

const PASSWORD_KEY_ASYNC_STORAGE = "ASYNC_STORAGE_PASSWORD"

const getPasswords = async () => {
    try {
        return JSON.parse(await AsyncStorage.getItem(PASSWORD_KEY_ASYNC_STORAGE)) || []
    } catch (error) {
        throw new Error(error)
    }
}

const saveNewPassword = async (data) => {
    try {
        const passwords = JSON.parse(await AsyncStorage.getItem(PASSWORD_KEY_ASYNC_STORAGE)) || []
        const newPasswordsArray = [...passwords,data]
        return await AsyncStorage.setItem(PASSWORD_KEY_ASYNC_STORAGE, JSON.stringify(newPasswordsArray))
    } catch (error) {
        throw new Error(error)
    }
}

export {
    getPasswords,
    saveNewPassword
}