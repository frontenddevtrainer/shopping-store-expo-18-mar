import { View, Text, StyleSheet, Button } from "react-native";
import { router } from "expo-router"

const styles = StyleSheet.create({
    heading: {
        fontSize: 24
    }
})

const ProductsPage = () => {
    return <View>
        <Text style={styles.heading}>Products Page</Text>
        <Button title="Settings" onPress={()=>{
            router.navigate("/settings");
        }}></Button>
    </View>
}

export default ProductsPage;