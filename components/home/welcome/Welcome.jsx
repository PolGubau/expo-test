import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";
import { Image } from "react-native";
//

const jobsTypes = [
  "Full Time",
  "Part Time",
  "Freelance",
  "Internship",
  "Remote",
];

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState("Full Time");
  const router = useRouter();
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Pol</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job </Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobsTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.xSmall }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
