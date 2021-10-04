import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
const ww = Dimensions.get("window").width;
const wh = Dimensions.get("window").height;
export default function Home({ navigation }) {
  const [course, setCourse] = useState([
    {
      id: 1,
      title: "CSE 413",
      name: "Tarin Saha",
      url: "https://gstatic.com/classroom/themes/img_breakfast.jpg",
    },
    {
      id: 2,
      title: "CSE 317",
      description: "Computer Network",
      name: "Tarin Saha",
      url: "https://gstatic.com/classroom/themes/img_code.jpg",
    },
    {
      id: 3,
      title: "CSE 412",
      description: "Theory Of Computing",
      name: "Tarin Saha",
      url: "https://gstatic.com/classroom/themes/img_read.jpg",
    },
    {
      id: 4,
      title: "CSE 313",
      name: "Sahabuddin",
      url: "https://gstatic.com/classroom/themes/img_learnlanguage.jpg",
    },
    {
      id: 5,
      title: "CSE 423",
      name: "Maherab",
      url: "https://gstatic.com/classroom/themes/img_code.jpg",
    },
  ]);
  return (
    <View>
      <FlatList
        data={course}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            description={item.description}
            name={item.name}
            url={item.url}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
}

function Card({ title, description, name, url, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("CourseDetails");
      }}
    >
      <View>
        <Image
          source={{
            uri: url,
          }}
          style={{ width: ww, height: 200, margin: 10, borderRadius: 10 }}
        />
        <View style={{ position: "absolute", padding: 30 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: ww / 2 }}>
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 17 }}>
                {title}
              </Text>
              {description ? (
                <Text style={{ color: "#fff" }}>{description}</Text>
              ) : (
                false
              )}
            </View>
            <View style={{ marginLeft: ww / 3 }}>
              <Entypo name="dots-three-vertical" size={25} color="#fff" />
            </View>
          </View>
          <Text style={{ color: "#fff", marginTop: wh / 6 }}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
