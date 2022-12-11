import React, { useEffect, useState } from "react";
import { Alert, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { TData } from "./Home";
import axios from "axios/index";
import { Loading } from "../components/Loading";

export const FullPostScreen = ({ route, navigation } :{ route: any, navigation: any}) => {

  const [data, setData] = useState<TData>({} as TData);
  const [isLoading, setIsLoading] = useState(true);
  const {id, title} = route.params


  useEffect(() => {
    navigation.setOptions({title})
    setIsLoading(true);
    axios.get(`https://62a1085b356d093c4c40443b.mockapi.io/posts/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch(e => {
        Alert.alert("Error", "Не удалось получить статью");
      }).finally(() => {
      setIsLoading(false);
    });
  }, []);



  if (isLoading) return <Loading/>

  return (
    <SafeAreaView style={{ margin: 20 }}>
      <PostImage
        source={{ uri: data.imageUrl }}
      />
      <PostText>{data.title}</PostText>
    </SafeAreaView>
  );
};

const PostImage = styled.Image`
  height: 250px;
  width: auto;
  margin-bottom: 20px;
  border-radius: 15px;
`;
const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;
