import React, { useEffect, useState } from "react";
import { Post } from "./components/Post/Post";
import axios, { Axios, AxiosError } from "axios";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Platform, RefreshControl,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import styled from "styled-components/native";


type TData = {
  createdAt: number,
  id: string,
  imageUrl: string,
  title: string
}

const Container = styled.View`
`;


const App = () => {

  const [items, setItems] = useState<TData[]>();
  const [isLoading, setIsLoading] = useState(true);


  const fetchPosts = () => {
    setIsLoading(true)
    axios.get("https://62a1085b356d093c4c40443b.mockapi.io/posts")
      .then((res) => {
        setItems(res.data);
      })
      .catch(e => {
        Alert.alert("Error", "Не удалось получить статьи");
      }).finally(() => {
        setIsLoading(false)
    })
  }

  useEffect(() => {
    fetchPosts()
  }, []);


  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'} }>
        <ActivityIndicator size="large"  />
        <Text style={{marginTop:15}}>Идет загрузка данных</Text>
      </View>
    )
  }

  return (
      <Container style={styles.container}>
          <FlatList
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
            data={items}
            renderItem={({ item }) => (<Post
            title={item.title}
            imageUrl={item.imageUrl}
            createdAt={item.createdAt} />)} />
      <StatusBar animated={true} />
      </Container>
  );
};

const styles = StyleSheet.create({
  container : {
    // flex: 1,
  }
})



export default App;
