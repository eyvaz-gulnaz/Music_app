interface ISong {
    title?: string,
    description?: string,
    singer?: string,
    url: string,
    gmail?: string,
    subscription?: string | null
}
export const songs: ISong[] = [
    {
        url: 'https://cdns-images.dzcdn.net/images/cover/401792e9172b84cfcb6f10f9630d7ec9/264x264.jpg',
        title: "Nour ala nour",
        singer: "Maher Zain",
        description: "It is a description",
        gmail: "sarwarmusic@gmail.com",
        subscription: "Gold Member"

    },
    {
        url: 'https://i.ytimg.com/vi/f4J7-WR1QOY/maxresdefault.jpg',
        title: 'Number one for me',
        singer: "Maher Zain",
        description: "It is a description",
        gmail: "sarwarmusic@gmail.com",
        subscription: "Silver Member"
    },
    {
        url: 'https://cdns-images.dzcdn.net/images/cover/401792e9172b84cfcb6f10f9630d7ec9/264x264.jpg',
        title: "Nour ala nour",
        singer: "Maher Zain",
        description: "It is a description",
        gmail: "sarwarmusic@gmail.com",
        subscription: null
    }
]