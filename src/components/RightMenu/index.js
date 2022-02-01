import React from 'react';
import { Header, Image, ImageWrapper, Paragraph, RightContainer, Title, UnderHeader } from './RightMenuStyle';
import imgRight from '../../assets/images/imgRight.png'

const RightMenu = () => {
  return (
    <RightContainer>
      <Header>Teknik Dasar Tampilan Responsif Pada Website</Header>
      <UnderHeader>Teknik Dasar Tampilan Responsif pada Website</UnderHeader>
      <Title>Tampilan Responsif pada Website: Mengapa Perlu?</Title>
      <Paragraph>Kini mayoritas pengguna internet menggunakan mobile device untuk mengakses website. Yup, seperti digambarkan grafik di bawah, persentasenya di tingkat global terus meningkat dari tahun ke tahun. Ya wajar dong, jaman now. Siapa tak punya telepon pintar? mungkin juga saat ini kalian baca artikel ini  pun, pakai smartphone, bukan ?</Paragraph>
      <ImageWrapper>
        <Image src={imgRight} />
      </ImageWrapper>
    </RightContainer>
  );
};

export default RightMenu;
