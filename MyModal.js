import React from 'react'
import {Text, View} from 'react-native'
import ModalWithBackground from './ModalWithBackground'

export default function MyModal({closeModal, visible}){

    return (
        <ModalWithBackground>
            <View>
                <Text>This is my modal!</Text>
            </View>
        </ModalWithBackground>
    )
}