import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

export default Costumers = ({ route }) => {
  const [data, setData] = useState([]);
  const [hasError, setError] = useState(false);

  // Call Api
  async function fetchData() {
    try {
      const res = await axios.get("https://randomuser.me/api?results=20");
      setData(res.data.results);
    } catch (err) {
      setError(err.response.data);
      alert(hasError.toString());
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ display: "flex" }}>
        <FlatList
          data={data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                margin: 5,
                padding: 5,
              }}
            >
              <View style={{ marginRight: 5, justifyContent: "center" }}>
                <Image
                  source={{ uri: item.picture.medium }}
                  style={{ height: 60, width: 60 }}
                />
              </View>
              <View>
                <Text style={styles.name}>
                  {item.name.title}. {item.name.first} {item.name.last}
                </Text>
                <Text
                  style={styles.street}
                >{`${item.location.street.number} ${item.location.street.name}`}</Text>
                <Text style={styles.email}>{item.email}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#221F70",
  },
  card: {
    display: "flex",
    flex: "row",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  street: {
    fontSize: 12,
  },
  email: {
    fontSize: 10,
    color: "red",
  },
  content: {
    alignItems: "center",
  },
});
