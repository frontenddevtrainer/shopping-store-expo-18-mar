import { Slot } from "expo-router"
import { useEffect } from "react"
import { View, Text } from "react-native"

const ProductLayout = () => {

    return <>
        <View>
            <Text>Search</Text>
        </View>
        <Slot />
    </>
}

export default ProductLayout