import { View, Text, TextInput, StyleSheet, ViewStyle, StyleProp, TextStyle } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../theme/colors'

interface IInput {
    value: string,
    setValue: (value: string) => void,
    icon?: React.ReactNode,
    placeholder?: string,
    onFocus?: () => void,
    onBlur?: () => void,
    placeholderTextColor?: string,
    style?: StyleProp<ViewStyle>
    inputStyle?: StyleProp<TextStyle>

}

export const Input: React.FC<IInput> = ({ setValue, value, icon, placeholder, onBlur, onFocus, placeholderTextColor = colors.white, style, inputStyle }) => {

    const [isFocused, setIsFocused] = useState<boolean>(false)

    const onInputFocuse = () => {
        setIsFocused(true)
        onFocus?.()
    }
    const onInputBlur = () => {
        setIsFocused(false)
        onBlur?.()
    }

    return (
        <View style={[styles.root, isFocused && styles.focused, style]}>
            {icon ? icon : null}
            <TextInput
                onBlur={onInputBlur}
                onFocus={onInputFocuse}
                style={[styles.input, inputStyle]}
                onChangeText={setValue}
                value={value}
                placeholder={placeholder} placeholderTextColor={placeholderTextColor} />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 22,
        borderRadius: 30,
        gap: 20,
        borderWidth: 1,
        borderColor: "transparent",
        maxHeight: 50
    },
    input: {
        color: colors.white,
        height: "100%",
        paddingVertical: 11,
        flexGrow: 1,
        fontSize: 14,
        fontFamily: "Nunito-Regular"
    },
    focused: {
        borderColor: colors.lightGray
    }
})