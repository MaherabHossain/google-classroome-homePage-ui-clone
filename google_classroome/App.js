// In App.js in a new project

import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { Feather, AntDesign, Entypo } from "@expo/vector-icons";
import CourseDetails from "./screens/Course_Details";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Google Classroome",
            headerRight: () => {
              return (
                <TouchableOpacity
                  style={{ flexDirection: "row" }}
                  onPress={() => console.log("icon")}
                >
                  <View
                    style={{
                      height: 35,
                      width: 35,
                      // backgroundColor: "green",
                      borderRadius: 50,
                      marginRight: 10,
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://scontent.fcgp1-1.fna.fbcdn.net/v/t1.6435-9/195696675_1337962656585441_5451894319572597814_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=J9DosX8PnH0AX9hmII9&_nc_ht=scontent.fcgp1-1.fna&oh=f6c3e618401b5ea26733db975d60b761&oe=6180414A",
                      }}
                      style={{
                        height: 35,
                        width: 35,
                        borderRadius: 50,
                        marginTop: 10,
                      }}
                    />
                  </View>
                  <Entypo
                    name="dots-three-vertical"
                    size={25}
                    color="#3a3b3c"
                    style={{ marginTop: 10 }}
                  />
                </TouchableOpacity>
              );
            },
            headerLeft: () => (
              <TouchableOpacity>
                <Feather name="menu" size={27} color="#3a3b3c" />
              </TouchableOpacity>
            ),
            headerTintColor: "#4f4f4f",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{
            title: "",
            headerRight: () => {
              return (
                <TouchableOpacity
                  style={{ flexDirection: "row" }}
                  onPress={() => console.log("icon")}
                >
                  <View
                    style={{
                      height: 30,
                      width: 30,
                      // backgroundColor: "green",
                      borderRadius: 50,
                      marginRight: 10,
                    }}
                  >
                    <AntDesign
                      name="infocirlceo"
                      size={25}
                      color="#3a3b3c"
                      style={{ marginTop: 10 }}
                    />
                  </View>
                  <Entypo
                    name="dots-three-vertical"
                    size={25}
                    color="#000"
                    style={{ marginTop: 10 }}
                  />
                </TouchableOpacity>
              );
            },
            headerLeft: () => (
              <TouchableOpacity>
                <Feather name="menu" size={27} color="#3a3b3c" />
              </TouchableOpacity>
            ),
            headerTintColor: "#4f4f4f",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
