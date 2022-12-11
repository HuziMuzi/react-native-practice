import React, { useEffect, useState } from "react";
import axios  from "axios";
import {
  Alert,
  FlatList,
  RefreshControl,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import { Post } from "../components/Post/Post";
import { Loading } from "../components/Loading";


export type TData = {
  createdAt: number,
  id: string,
  imageUrl: string,
  title: string
}



export const HomeScreen = () => {

  const [items, setItems] = useState<TData[]>();
  const [isLoading, setIsLoading] = useState(true);


  const fetchPosts = () => {
    setIsLoading(true);
    axios.get("https://62a1085b356d093c4c40443b.mockapi.io/posts")
      .then((res) => {
        setItems(res.data);
      })
      .catch(e => {
        Alert.alert("Error", "Не удалось получить статьи");
      }).finally(() => {
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);


  if (isLoading) return <Loading/>

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity >
            <Post
              title={item.title}
              imageUrl={item.imageUrl}
              createdAt={item.createdAt} />
          </TouchableOpacity>
        )} />

      <StatusBar animated={true} />
    </View>
  );
};


