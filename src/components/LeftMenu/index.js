import React from 'react';
import { Card, Image, LeftContainer, Header, HeaderWrapper, Title, Caption, Line } from './LeftMenuStyle';
import { contents } from './LeftMenuContents';

const LeftMenu = () => {
  return (
    <LeftContainer>
      <HeaderWrapper>
        <Header>Rekomendasi Akademi</Header>
      </HeaderWrapper>
      {contents.map((content,index) => (
        <Card key={index}>
          <Image src={content.image} />
          <Title>{content.title}</Title>
          <Caption>{content.caption}</Caption>
          <Line />
        </Card>
      ))}
    </LeftContainer>
  )
};

export default LeftMenu;

