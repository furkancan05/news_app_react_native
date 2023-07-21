import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    mainContainer: {
        marginVertical: 15,
        width: "90%",
        aspectRatio: 1,
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 24,
            height: 24,
        },
        shadowOpacity: 0.32,
        shadowRadius: 1,
        elevation: 10,
    },
    image: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: "100%",
        height: "50%"
    },
    newsTitle: {
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 2,
        marginVertical: 5,
        overflow: "hidden",
        paddingHorizontal: 10
    },
    newsContent: {
        fontSize: 16,
        letterSpacing: 2,
        paddingHorizontal: 10
    },
    noImageContainer: {
        with: "100%",
        height: "50%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        backgroundColor: "transparent"
    }
})