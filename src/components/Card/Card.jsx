import { View, Image, Text, Pressable, TouchableWithoutFeedback } from "react-native"
import styles from "./card.style"

export default function Card({ news, onNavigate }) {
    return <TouchableWithoutFeedback style={{ width: "100%" }} onPress={onNavigate}>
        <View style={styles.mainContainer} >
            {news.urlToImage === null ? (
                <View style={styles.noImageContainer}>
                    <Image source={require("../../assets/icons/x.png")} style={{ width: 30, height: 30, tintColor: "black" }}></Image>
                    <Text style={{ marginVertical: 5 }}>No image to load</Text>
                </View>
            ) : (
                <Image resizeMode="cover" style={styles.image} source={{ uri: news.urlToImage }}></Image>
            )}
            <Text style={styles.newsTitle} numberOfLines={1}>{news.title || "No Title"}</Text>
            <Text style={styles.newsContent} numberOfLines={5}>{news.description || "No Decription"}</Text>
            <Pressable title="see more..." onPress={() => { }} />
        </View>
    </TouchableWithoutFeedback>
}
