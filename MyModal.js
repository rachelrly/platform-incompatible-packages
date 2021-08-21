import React from 'react'
import {Text, View, Modal, Pressable, StyleSheet} from 'react-native'
import ModalWithBackground from './ModalWithBackground'

export default function MyModal({closeModal, visible}){

    return (
        <ModalWithBackground>
            <Modal visible={visible}>
            <View>
                <Text>This is my modal!</Text>
            </View>
            <CloseButton closeModal={closeModal}/>
            </Modal>
        </ModalWithBackground>
    )
}


function CloseButton({closeModal}){
    return (
        <Pressable onPress={closeModal}>
            <View>
                <Text>Close modal</Text>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    block: {
      flex: 1,
      padding: 2,
      width: '100%',
      height: '20%',
    }
  });
  