import React from "react";
// @ts-ignore
import styled from "styled-components/native";


export type TPropsPost = {
  title : string,
  imageUrl : string
  createdAt: number
}



export const Post = ({title, imageUrl, createdAt} : TPropsPost) => {
  return (
    <>
      <PostContainer>
        <PostImage
          source={{
            uri: imageUrl,
          }}
        />
        <PostDetails>
          <PostTitle>{title}</PostTitle>
          <PostDate>{createdAt}</PostDate>
        </PostDetails>
      </PostContainer>
    </>

  );
};



const PostContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
  margin-top: 50px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 30px;
  margin-right: 12px;
`;

const PostDetails = styled.View`
  flex: 1; // задает доступную ширину на момент рендера
  justify-content: center;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;
const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`
