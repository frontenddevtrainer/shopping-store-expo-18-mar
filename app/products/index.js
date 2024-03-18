import { View, Text, StyleSheet, Button, ScrollView, FlatList } from "react-native";
import { router } from "expo-router"
import { useEffect, useState } from "react"

import axios from "axios"

const styles = StyleSheet.create({
    heading: {
        fontSize: 24
    },
    productRow: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "black"
    }
})

const ProductsPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios("https://jsonplaceholder.typicode.com/albums")
            setProducts(data)
        }
        getProducts();
    }, [])


    return <View>
        {/* <ScrollView>
            {
                products?.map((product) => {
                    return <View style={styles.productRow} key={product.id}>
                        <Text>{product.title}</Text>
                    </View>
                })
            }
        </ScrollView> */}

        <FlatList data={products} renderItem={(product) => {
            return <View style={styles.productRow} key={product.item.id}>
                <Text>{product.item.title}</Text>
            </View>
        }}></FlatList>
    </View>
}

export default ProductsPage;