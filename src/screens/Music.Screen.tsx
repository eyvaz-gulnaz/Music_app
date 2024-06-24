import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Header } from '../components/Header'
import BackVector from '../../assets/vectors/back.svg'
import LikeVector from '../../assets/vectors/like.svg'
import PauseVector from '../../assets/vectors/pause.svg'
import RepeatVector from '../../assets/vectors/repeat.svg'
import ShuffleVector from '../../assets/vectors/shuffle.svg'
import SkipBackVector from '../../assets/vectors/skip-back.svg'
import SkipForwardVector from '../../assets/vectors/skip-forward.svg'
import { colors } from '../theme/colors'
import { songs } from '../mocks/songs.mocks'
import { ProgressBar } from '../components/ProgressBar'


export const MusicScreen: React.FC = () => {
    const HeaderLeft = () => {
        return (
            <Pressable onPress={() => console.log("back vector")}>
                <BackVector color={colors.white} />
            </Pressable>
        )
    }
    const HeaderRight = () => {
        return (
            <Pressable onPress={() => console.log("like vector")}>
                <LikeVector color={colors.gray} />
            </Pressable>
        )
    }
    return (
        <View style={styles.root}>
            <Header
                left={<HeaderLeft />}
                right={<HeaderRight />}
                title='Ophelia by Stiven' />
            <View style={styles.main}>
                <View style={styles.wrapper}>
                    <Image
                        resizeMode='cover'
                        source={{
                            uri: songs[0].url
                        }}
                        style={styles.image}
                    />
                    <View style={styles.imageTexts}>
                        <Text style={styles.title}>{songs[0].title}</Text>
                        <Text style={styles.singer}>{songs[0].singer}</Text>
                    </View>
                    <View style={styles.controllers}>
                        <ProgressBar time={60} currentTime={40} />
                        <View style={styles.buttons}>
                            <ShuffleVector color={colors.white} />
                            <SkipBackVector color={colors.white} />
                            <Pressable style={styles.pause}>
                                <PauseVector color={colors.white} />
                            </Pressable>
                            <SkipForwardVector color={colors.white} />
                            <RepeatVector color={colors.white} />
                        </View>
                    </View>
                </View>
                <View style={{ height: 81, borderColor: colors.gray, width: "100%" }}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 17,
        gap: 32
    },
    buttons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    pause: {
        borderRadius: 99,
        backgroundColor: colors.primary,
        padding: 16

    },
    main: {
        flex: 1
    },
    wrapper: {
        gap: 28,
        flex: 1
    },
    image: {
        width: "100%",
        height: 319,
        borderRadius: 36
    },
    imageTexts: {
        gap: 7
    },
    title: {
        fontFamily: "Nunito-Regular",
        fontSize: 24,
        color: colors.white,
        textAlign: "center"
    },
    singer: {
        fontFamily: "Nunito-Regular",
        fontSize: 18,
        color: colors.gray,
        textAlign: "center"
    },
    controllers: {
        flexGrow: 1,
        justifyContent: "space-between",
        paddingBottom: 12
    }
})