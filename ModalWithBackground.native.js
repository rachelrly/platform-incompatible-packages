import React from 'react'
import { BlurView } from '@react-native-community/blur'

export default function ModalWithBackground({children}){

    return(
        <BlurView>{children}</BlurView>
    )
}