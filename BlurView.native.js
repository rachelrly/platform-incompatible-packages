import React from 'react'
import { StyleSheet } from 'react-native'
import { BlurView } from '@react-native-community/blur'

export default function NativeBlurView({children, visible}){
    if (visible) return (
        <BlurView blurType='light' style={styles.blur}>
            {children}
        </BlurView>
    )
    else return <>{children}</>
}

const styles = StyleSheet.create({
    blur: {
        height: '100%',
        width: '100%',
    }
})