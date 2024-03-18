import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#f97316",
        padding: 16,
    },
    heading: {
        fontSize: 16
    }
})

const Header = () => {
    return <View style={styles.header}>
        <Text style={styles.heading}>Music Store</Text>
    </View>
}

export default Header