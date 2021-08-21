import {View, StyleSheet} from 'react-native'

export default function ModalWithBackground({children}){
    return (
        <View style={styles.modal}>{children}</View>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#000',
        opacity: 3,
    }
})