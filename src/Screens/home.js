import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Logo from "../Assets/LogoKhanaSabkliye-01.png";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function Home() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider
      style={{
        paddingTop: insets.top,
        backgroundColor: "#F6F6F6",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Text style={{ fontSize: 28, color: "#538EFF" }}>Welcome to</Text>
        <Image
          source={Logo}
          style={{
            resizeMode: "cover",
            height: 50,
            width: 100,
          }}
        />
      </View>
      <View style={{ maxWidth: 500, width: "100%", marginHorizontal: "auto",marginTop:40 }}>
        <TextInput
          label="Username"
          style={{ backgroundColor: "transparent", color: "" }}
          underlineColor="#b2bec3"

          //   value={text}
          //   onChangeText={(text) => setText(text)}
        />
      </View>
      <View style={{ maxWidth: 500, width: "100%", marginHorizontal: "auto",marginTop:20 }}>
        <TextInput
          label="Email"
          style={{ backgroundColor: "transparent", color: "" }}
          underlineColor="#b2bec3"

          //   value={text}
          //   onChangeText={(text) => setText(text)}
        />
      </View>
      <View style={{ maxWidth: 500, width: "100%", marginHorizontal: "auto",marginTop:20 }}>
        <TextInput
          label="Password"
          style={{ backgroundColor: "transparent", color: "" }}
          underlineColor="#b2bec3"

          //   value={text}
          //   onChangeText={(text) => setText(text)}
        />
      </View>
      <View style={{ maxWidth: 500, width: "100%", marginHorizontal: "auto",marginTop:20 }}>
        <Button
        //   icon="camera"
        mode="contained"
        color="#538EFF"
        uppercase='false'
        style={{color:'white'}}
          onPress={() => {}}
        >
          Sign up
        </Button>
      </View>
    </SafeAreaProvider>
  );
}

