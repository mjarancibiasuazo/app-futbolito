import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    content: {
        top: 20,
        alignItems: "center",
        position: "relative",
    },
    dotsContainer: {
        position: "absolute",
        //alignContent: "center",
        top: 185,
        left: -5,
        //alignItems: "center",
        width: "100%",
        height: 70,
        paddingBottom: 0,
    },
    dot: {
        backgroundColor: "red"
    }
});