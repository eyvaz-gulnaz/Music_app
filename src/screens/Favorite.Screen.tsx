import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../components/Header'
import BackVector from '../../assets/vectors/back.svg'
import { colors } from '../theme/colors'
import { songs } from '../mocks/songs.mocks'
import { Card } from '../components/Card'

const HeaderLeft = () => {
    return (
        <Pressable onPress={() => console.log("back vector")}>
            <BackVector color={colors.white} />
        </Pressable>
    )
}

export const FavoriteScreen = () => {
    return (
        <View style={styles.root}>
            <Header left={<HeaderLeft />} />
            <View style={styles.info}>
                <Image style={styles.image} source={{ uri: songs[0].url }} />
                <View style={styles.texts}>
                    <View style={styles.cardTitle}>
                        <Text style={styles.singer}>{songs[0].singer}</Text>
                        <Text style={styles.text}>{songs[0].gmail}</Text>
                    </View>
                    <Text style={[styles.text, styles.member]}>{songs[0].subscription ?? "Not subscribed"}</Text>
                    <Text style={styles.text}>{songs[0].description}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.singer}>Favourite Album</Text>
                <FlatList
                    data={songs}
                    renderItem={({ item: { url } }) => <Card size="l" url={url} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ gap: 9, marginTop: 24 }}
                />
            </View>
            <View></View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        gap: 32,
        paddingHorizontal: 17,
    },
    cardTitle: {
        gap: 2
    },
    info: {
        flexDirection: "row",
        gap: 15,
        flex: 1
    },
    texts: {
        flex: 1
    },
    image: {
        width: 91,
        height: 100
    },
    singer: {
        fontFamily: "Nunito-Regular",
        fontSize: 18,
        color: colors.white
    },
    text: {
        fontFamily: "Nunito-Regular",
        fontSize: 16,
        color: colors.gray
    },
    member: {
        marginBottom: 13,
        marginTop: 11
    }
})