import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
	wrapper: {
		width: '100%',
		height: '100%',
	}
});

export default Home