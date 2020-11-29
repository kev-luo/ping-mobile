import React, { useEffect, useState } from 'react'
import { View, Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import Ping from "../components/Ping";


import { useQuery } from "@apollo/client"
import { FETCH_PINGS_QUERY } from '../utils/graphql';


export default function Feed() {
    const { data } = useQuery(FETCH_PINGS_QUERY);
    const [selectedId, setSelectedId] = useState(null);

    if (data) { console.log(data) };

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#BCE9D1" : "#D5E2F0";

        return (
            <Ping
                item={item}
                onPress={() => setSelectedId(item.id)}
                style={{ backgroundColor }}
            />
        );
    };

    console.log("Houston, the eagle has landed 🚀");
    return (
        <View style={styles.container}>

            {data ? <FlatList
                style={styles.feed}
                data={data.getPings}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            /> : <Text>TEST THE LIST</Text>}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0
    },
    logo: {
        width: 50,
        height: 50
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row"
    },
    username: {
        fontSize: 23,
    },
    body: {
        marginTop: 15,
    },
    feed: {
        marginTop: 0,
    },

});

{/* <FlatList
    data={this.props.tweets}
    keyExtractor={this._keyExtractor}
    renderItem={({ item }) => (
        <View style={styles.tweet}>
            <TouchableHighlight
                onPress={this._profileClick.bind(this, item.user)}
                underlayColor="white"
                activeOpacity={0.75}
            >
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <Thumbnail source={{ uri: item.user.avatar }} />
                    <View
                        style={{
                            flexDirection: "column",
                            justifyContent: "flex-start"
                        }}
                    >
                        <Text
                            style={{
                                paddingLeft: 15,
                                fontWeight: "bold",
                                fontSize: 20
                            }}
                        >
                            {item.user.name}
                        </Text>

                        <Text
                            style={{
                                paddingLeft: 15,
                                color: "#aaa",
                                fontSize: 16
                            }}
                        >
                            {"@" + item.user.username}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
            <Text style={styles.tweetText}>{item.tweetContent}</Text>
            <View style={styles.tweetFooter}>
                <View style={styles.footerIcons}>
                    <Button
                        transparent
                        dark
                        onPress={this._tweetDetails.bind(this, item)}
                    >
                        <Icon name="ios-text-outline" />
                        <Text style={styles.badgeCount}>{item.replies}</Text>
                    </Button>
                </View>
                <View style={styles.footerIcons}>
                    <Button transparent dark>
                        <Icon name="ios-repeat" />
                        <Text style={styles.badgeCount}>{item.retweets}</Text>
                    </Button>
                </View>
                <View style={styles.footerIcons}>
                    <Button transparent dark>
                        <Icon name="ios-heart-outline" />
                        <Text style={styles.badgeCount}>{item.likes}</Text>
                    </Button>
                </View>
                <View style={styles.footerIcons}>
                    <Button transparent dark>
                        <Icon name="ios-mail-outline" />
                    </Button>
                </View>
            </View>
        </View>
    )}
/>


    <FlatList
        data={}
        keyExtractor={}
        renderItem={({ item }) => (
            <TouchableHighlight>
                <View>
                    <Thumbnail />
                    <View>
                        <Text></Text>
                        <Text></Text>
                    </View>
                </View>
            </TouchableHighlight>


            <Text></Text>


            <View>
                <View>
                    <Button>
                        <Icon />
                        <Text></Text>
                    </Button>
                </View>
                <View>
                    <Button>
                        <Icon />
                        <Text></Text>
                    </Button>
                </View>
                <View>
                    <Button>
                        <Icon />
                        <Text></Text>
                    </Button>
                </View>
                <View>
                    <Button>
                        <Icon />
                    </Button>
                </View>
            </View>
        )

/> */}