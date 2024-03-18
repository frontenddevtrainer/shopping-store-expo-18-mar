import { Slot, Tabs, Stack } from "expo-router"
import { StyleSheet, Text, View } from 'react-native'


const styles = StyleSheet.create({
    header: {
        backgroundColor: "red"
    },
    footer: {
        backgroundColor: "blue"
    }
})

const MainLayout = () => {
    return <>
        {/* <View style={styles.header}>
            <Text>Header</Text>
        </View>
        <Slot /> */}
        <Stack />
        {/* <View style={styles.footer}><Text>Footer</Text></View> */}
    </>
}

export default MainLayout;