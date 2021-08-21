import React from 'react'
import {Text, View, Modal, Pressable, StyleSheet} from 'react-native'

export default function MyModal({closeModal, visible}){
    return (
        <View style={styles.modal_container}>
            <Modal visible={visible} style={styles.modal} 
            animationType="slide" 
            transparent 
            presentationStyle='overFullScreen'>
                <View style={styles.modal_inner_container}>
                    <Text style={styles.block_text}>This is my modal!</Text>
                </View>
                <CloseButton closeModal={closeModal}/>
            </Modal>
        </View>
    )
}


function CloseButton({closeModal}){
    return (
        <Pressable onPress={closeModal} style={styles.button}>
            <View>
                <Text>Close modal</Text>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    modal_container: {
        flex: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
    },
    modal_inner_container: {
      marginTop: 100,
      alignSelf: 'center'
    },
    block_text: {
        fontSize: 24,
        color: 'white'
    },
    button: {
        margin: 100,
        marginTop: 150,
        height: 50,
        alignSelf: 'center',
        width: 100,
        borderRadius: 5,
        backgroundColor: '#03DAC5',
        alignItems: 'center',
        justifyContent: 'center'
    },
  });
  