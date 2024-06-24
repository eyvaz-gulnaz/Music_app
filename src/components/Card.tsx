import { Image, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

export interface ICard {
    title?: string,
    description?: string,
    horizontal?: boolean,
    singer?: string,
    url: string,
    size?: "s" | "m" | "l",
    onPress?: () => void,
    style?: StyleProp<ViewStyle>
}

export const Card: React.FC<ICard> = ({ url, description, title, singer, onPress, horizontal, style, size = "m" }) => {
    const isTextVisible = title || singer || description
    return (
        <Pressable onPress={onPress} style={[styles.root, horizontal && styles.horizontal, style]}>
            <Text>Card</Text>
            <Image style={[styles[size], styles.image]} source={{ uri: url }} />
            {isTextVisible ?
                <View style={[styles.texts, horizontal && styles.maxWidth]}>
                    {title ? <Text numberOfLines={2} style={[styles.title, size === "s" && styles.largeTitle]}>{title}</Text> : null}
                    {singer ? <Text numberOfLines={2} style={[styles.title, styles.singer]}>{singer}</Text> : null}
                    {description ? <Text numberOfLines={2} style={[styles.title, styles.description]}>{description}</Text> : null}
                </View>
                : null}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    root: {
        borderWidth: 1,
        borderColor: "yellow",
        flexDirection: "column",
        gap: 6
    },
    horizontal: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    },
    image: {
        borderRadius: 10
    },
    s: {
        width: 88,
        height: 88
    },
    m: {
        width: 101,
        height: 81
    },
    l: {
        width: 106,
        height: 111
    },
    texts: {
        gap: 5,
        maxWidth: 106
    },
    maxWidth: {
        width: "auto",
        flex: 1
    },
    title: {
        fontFamily: "Nunito-Regular",
        fontSize: 14,
        color: colors.white
    },
    largeTitle: {
        fontSize: 16
    },
    singer: {
        fontSize: 13
    },
    description: {

    }
})