import React from 'react'
import {Text, View, Modal, Pressable, StyleSheet} from 'react-native'

export default function MyModal({closeModal, visible}){
    return (
        <View style={styles.container}>
            <Modal visible={visible} style={styles.modal} animationType="slide">
                <View style={styles.block}>
                    <Text>This is my modal!</Text>
                </View>
                <CloseButton closeModal={closeModal}/>
            </Modal>
        </View>
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
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    modal: {
      height: '50%',
      width: '50%',
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    block: {
      backgroundColor: '#fff'
    },
    blur: {}
  });
  