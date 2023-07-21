import { useEffect, useState } from "react"
import { View, Text, ActivityIndicator, Image, FlatList, SafeAreaView } from "react-native"
import promise from "../../config/data.config"
import Card from "../../components/Card"
import API from "../../config/apiKey"
import styles from "./Homepage.style"

export default function Homepage({ navigation }) {
    const [isLoading, setIsLoading] = useState(true)
    const [news, setNews] = useState(null)
    const api = new API()


    const getNews = async () => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api.getApiKey()}`).then(res => res.json())
        setNews(response.articles)
        setIsLoading(false)
    }

    const getNews2 = async () => {
        const response = await promise
        setNews(response.articles)
        setIsLoading(false)
    }

    const navigate = (news) => {
        navigation.navigate("newsDetailPage", news)
    }

    useEffect(() => {
        getNews2()
    }, [])

    return (
        <SafeAreaView>
            <View style={styles.appContainer}>
                {
                    isLoading ? (
                        <ActivityIndicator size={50} />
                    ) : !news ? (
                        <>
                            <Image source={require("../../assets/icons/x.png")} style={{ width: 50, height: 50, tintColor: "black" }}></Image>
                            <Text style={{ fontSize: 24, marginVertical: 20 }}>No data</Text>
                        </>
                    ) : (
                        <>
                            <View style={{ flex: 1, width: "100%" }}>
                                <FlatList style={{ flex: 1 }} contentContainerStyle={{ alignItems: "center" }} data={news} renderItem={({ item }) => (
                                    <Card news={item} onNavigate={() => navigate(item)} />
                                )} />
                            </View>
                        </>
                    )
                }
            </View>
        </SafeAreaView>
    )
}

