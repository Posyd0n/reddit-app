import React from 'react'
import {StyleSheet, Text, Image, View, Dimensions} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Linking } from 'expo'
import RoundedButton from '../components/RoundedButton'

const {width} = Dimensions.get('window')

export default function PostDetail({ route }) {
    const {params} = route
    const {post} = params
    const {title, link, imageUrl} = post

    return(
        <View style={styles.container}>
            {!!imageUrl && <Image style={styles.image} source={{uri: imageUrl}} />}
            
            <Text style={styles.text}>{title}</Text> 
            
            <RoundedButton
                text={link}
                textColor="#fff"
                backgroundColor="rgb(75,148, 214)"
                onPress={() => {
                    Linking.openURL(link)
                    .catch((err) => console.log(err))
                }}
                icon={<Ionicons name="md-link" size={20} color={"#fff"} style={styles.saveIcon} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    text: {
        fontSize: 32,
        color: "#161616",
        padding: 15
    },
    image: {
        width: width,
        height: width,
        resizeMode: 'cover'
    },
    saveIcon: {
        position: 'relative',
        left: 20,
        zIndex: 8
    }
})