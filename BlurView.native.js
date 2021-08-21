import React from 'react'
import { StyleSheet } from 'react-native'
import { BlurView } from '@react-native-community/blur'

export default function NativeBlurView({children, visible}){
    const blurAmount = 100
    return (
        <BlurView blurType='light' style={styles.blur} blurAmount={blurAmount}>
            {children}
        </BlurView>
    )
}

const styles = StyleSheet.create({
    blur: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    
    }
})