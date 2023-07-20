import { Text, Image, StyleSheet, View, ScrollView, SafeAreaView } from "react-native"

export default function NewsDetailPage(props) {
    return (
        <SafeAreaView>
            <View style={styles.appContainer}>
                <Text style={styles.mainTitle}>{props.title}</Text>
                <Image resizeMode="cover" source={({ uri: props.urlToImage })} style={{ width: "100%", aspectRatio: 5 / 3 }}></Image>
                <ScrollView>
                    <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10 }}>{props.description}</Text>
                    <Text style={{ fontSize: 16 }}>{props.content}</Text>
                </ScrollView>
                <Text style={{ alignSelf: "flex-end", fontSize: 14, marginTop: 10 }}>Publish date: {props.publishedAt}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: 20
    },
    mainTitle: {
        fontSize: 24,
        textAlign: "center",
        fontWeight: "bold",
        marginVertical: 20,
    }
})