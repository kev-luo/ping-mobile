import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { Avatar } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';


export default function Ping({ onPress, style, item }) {


    return (
        <View style={[styles.item, style]}>
            <TouchableOpacity onPress={onPress} underlayColor="white">
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                    <Avatar
                        onPress={() => console.log("I am an avatart")}
                        size="medium"
                        rounded
                        source={{
                            uri:
                                'https://picsum.photos/200',
                        }}
                    />
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", marginLeft: 15 }}>
                        <Text style={styles.username}>@username </Text>
                        <Text style={styles.time}>• 5h</Text>
                    </View>
                </View>
            </TouchableOpacity >
            <Text style={styles.body}>{item.body}</Text>


            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                {/* Support icon and count */}
                <View >
                    <Ionicons name="ios-heart" size={15} color="black" />
                    <Text />
                </View>
                {/* Comment icon and count */}
                {/* Content Type */}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 50,
        height: 50
    },
    item: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "column",
    },
    username: {
        fontSize: 18,
        fontWeight: "bold"
    },
    time: {
        fontSize: 15,
        color: "#aaa"
    },
    body: {
        marginTop: 10,
        fontSize: 18,
        color: "#555",
    },
    feed: {
        marginTop: 0,
    },
    avatar: {
        margin: 3
    }

});
