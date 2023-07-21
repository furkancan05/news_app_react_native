import { useEffect } from "react"
import { Text, Image, View, ScrollView, SafeAreaView } from "react-native"
import styles from "./NewsDetailPage.style"


export default function NewsDetailPage({ route, navigation }) {
    const news = route.params
    const publishDate = news.publishedAt.slice(0, 10)

    useEffect(() => {
        navigation.setOptions({
            title: news.title
        })
    }, [])

    return (
        <SafeAreaView>
            <View style={styles.appContainer}>
                <Image resizeMode="cover" source={{ uri: news.urlToImage }} style={{ width: "100%", aspectRatio: 5 / 3, marginBottom: 20 }}></Image>
                <ScrollView>
                    <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10 }}>{news.description}</Text>
                    <Text style={{ fontSize: 16 }}>{news.content}</Text>
                </ScrollView>
                <Text style={{ alignSelf: "flex-end", fontSize: 14, marginTop: 10 }}>Publish date: {publishDate}</Text>
            </View>
        </SafeAreaView>
    )
}

