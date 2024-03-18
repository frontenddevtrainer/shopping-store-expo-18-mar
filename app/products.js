import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    heading: {
        fontSize: 24
    }
})

const ProductsPage = () => {
    return <View>
        <Text style={styles.heading}>Products Page</Text>
    </View>
}

export default ProductsPage;