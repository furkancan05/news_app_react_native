import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import Icon from "react-native-ionicons"

export default function Appbar({ title, action, leading }) {
    return (<View style={styles.header}>

        {leading !== undefined ? (
            <TouchableOpacity onPress={leading.onPress()}>
                <Icon ios={leading.ios} android={leading.android} />
            </TouchableOpacity>
        ) : (null)}
        <Text style={styles.title}>{title}</Text>
        {action !== undefined ? (
            <TouchableOpacity onPress={() => action.onPress()}>
                <Icon ios={action.ios} android={action.android} />
            </TouchableOpacity>
        ) : (null)}
        <Icon name="add" />
        {/* <ion-icon name={icon}></ion-icon> */}

    </View>)
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        flexDirection: "row",
        backgroundColor: "red"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 20,
    }
})

{/* <Icon ios="ios-arrow-back" android="md-arrow-back"/> */ }