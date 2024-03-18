import { View, Text, StyleSheet, Button } from "react-native";
import { router } from "expo-router"

const styles = StyleSheet.create({
    heading: {
        fontSize: 24
    }
})

const SettingsPage = () => {
    return <View>
        <Text style={styles.heading}>Settings</Text>
    </View>
}

export default SettingsPage;