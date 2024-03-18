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
        <Tabs />
    </>
}

export default MainLayout;