import { useEffect } from "react"
import { View, Text, ActivityIndicator, Image, FlatList } from "react-native"
import Card from "../../components/Card"
import styles from "./Homepage.style"
import { useDispatch, useSelector } from "react-redux"
import { getNews } from "../../redux/newsSlice"

export default function Homepage({ navigation }) {
    const dispatch = useDispatch()
    const { news, isLoading } = useSelector((state) => state.newsState)

    const navigate = (news) => {
        navigation.navigate("newsDetailPage", news)
    }

    useEffect(() => {
        dispatch(getNews())
    }, [])

    const renderCard = ({ item }) => (
        <Card news={item} onNavigate={() => navigate(item)} />
    )

    return (
        <View style={{ flex: 1 }}>
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
                                <FlatList style={{ flex: 1 }} contentContainerStyle={{ alignItems: "center" }} data={news} renderItem={renderCard} />
                            </View>
                        </>
                    )
                }
            </View>
        </View>
    )
}

