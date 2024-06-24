import { View, Text, ViewStyle, StyleProp, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';

interface IHeader {
    title?: string;
    left?: React.ReactNode;
    right?: React.ReactNode;
    style?: StyleProp<ViewStyle>
}

export const Header: React.FC<IHeader> = ({ title, right, style, left }) => {
    return (
        <View style={[styles.root, style]}>
            {left}
            {title ? <Text>{title}</Text> : null}
            {right}
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        borderWidth: 1,
        borderColor: "red",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    title: {
        fontFamily: "Nunito-Bold",
        fontSize: 18,
        lineHeight: 21,
        color: colors.white
    }
})