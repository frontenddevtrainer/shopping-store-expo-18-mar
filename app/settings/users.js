import { View, Text, StyleSheet, Button } from "react-native";
import { router } from "expo-router"

const styles = StyleSheet.create({
    heading: {
        fontSize: 24
    }
})

const SettingsUsersPage = () => {
    return <View>
        <Text style={styles.heading}>SettingsUsersPage</Text>
    </View>
}

export default SettingsUsersPage;