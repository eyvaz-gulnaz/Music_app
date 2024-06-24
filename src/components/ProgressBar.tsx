import { DimensionValue, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { ConvertTime } from '../utils/time'

interface IProgressBar {
    time: number,
    currentTime: number,
    style?: StyleProp<ViewStyle>
}

export const ProgressBar: React.FC<IProgressBar> = ({ time, currentTime, style }) => {
    const progress = ((currentTime / time) * 100).toFixed(2) + '%'
    const saveCurrentTime = currentTime > time ? time : currentTime
    return (
        <View style={[styles.root, style]}>
            <View style={styles.bar}>
                <View style={[styles.progress, { width: progress as DimensionValue }]}></View>
            </View>
            <View style={styles.texts}>
                <Text style={styles.time}>{ConvertTime(currentTime)}</Text>
                <Text style={styles.time}>{ConvertTime(time)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        gap: 1
    },
    bar: {
        width: "100%",
        backgroundColor: colors.white,
        height: 4,
        overflow: "hidden",
        borderRadius: 5
    },
    progress: {
        height: "100%",
        backgroundColor: colors.primary,
        width: "50%",
        position: "absolute",
        zIndex: 5

    },
    time: {
        fontFamily: "Nunito-Bold",
        fontSize: 14,
        color: colors.white

    },
    texts: {
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})