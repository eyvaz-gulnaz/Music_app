import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Avatar } from '../components/Avatar'
import Ring from '../../assets/vectors/ring.svg'
import { Header } from '../components/Header'
import { activeIndex, standartHitSlop } from '../theme/standarts'
import { colors } from '../theme/colors'
import { Input } from '../components/Input'
import SearchVector from "../../assets/vectors/search.svg"
import { Card, ICard } from '../components/Card'
import { songs } from '../mocks/songs.mocks'

export const HomeScreen = () => {
    const [value, setValue] = useState<string>('')
    const renderCards = ({ item, index }: { item: ICard, index: number }) => {
        return <Card key={index} title={item.title} url={item.url} />
    }
    const renderVerticalCards = ({ item, index }: { item: ICard, index: number }) => {
        return <Card size='s' key={index} horizontal {...item} />
    }

    return (
        <ScrollView
            indicatorStyle='white'
            style={styles.scrollView}
            keyboardShouldPersistTaps="handled">
            <View style={styles.homeContainer}>
                <Header
                    left={
                        <Avatar
                            title="Cute Cat"
                            caption='Gold Member'
                            url='https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D'
                        />
                    }
                    right={
                        <TouchableOpacity activeOpacity={activeIndex} hitSlop={standartHitSlop} onPress={() => console.log("pressed")
                        }>
                            <Ring color={colors.gray} />
                        </TouchableOpacity>
                    }
                />
                <Header />
                <View style={styles.searchLeft}>
                    <Text numberOfLines={2} style={styles.title}>Listen The Latest Musics</Text>
                    <Input
                        value={value}
                        inputStyle={{ flexGrow: 0 }}
                        placeholderTextColor={colors.gray}
                        placeholder='Search Music'
                        setValue={setValue}
                        icon={<SearchVector color={colors.lightGray} />}
                    />
                </View>
                <View style={{ borderWidth: 1, borderColor: "#fff" }}>
                    <Text numberOfLines={2} style={[styles.title, styles.cardHeader]}>Recently Played</Text>
                    {/* <ScrollView horizontal contentContainerStyle={{ gap: 16 }}
                        style={{ marginTop: 16 }}
                        showsHorizontalScrollIndicator={false}>
                        {songs.map(renderCards)}
                    </ScrollView> */}
                    <FlatList
                        data={songs}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 16 }}
                        contentContainerStyle={{ gap: 16 }}
                        renderItem={renderCards}

                    />
                </View>
                <Text numberOfLines={2} style={[styles.title, styles.cardHeader]}>Recently Played</Text>
                {/* <View style={styles.cards}>{songs.map(renderVerticalCards)}</View> */}
                <FlatList
                    data={songs}
                    initialNumToRender={3}
                    scrollEnabled={false}
                    contentContainerStyle={styles.cards}
                    renderItem={renderVerticalCards}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1
    },
    homeContainer: {
        paddingHorizontal: 20,
        flex: 1,
    },
    searchLeft: {
        marginTop: 24,
        alignItems: "center"
    },
    title: {
        fontFamily: "Nunito-Bold",
        fontSize: 26,
        lineHeight: 20,
        width: "50%",
        color: colors.white
    },
    cardHeader: {
        width: undefined,
        fontSize: 22,
        marginTop: 44
    },
    cards: {
        borderWidth: 1,
        gap: 17,
        marginTop: 18
    }
})