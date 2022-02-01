import styled from "styled-components";


export const LeftContainer = styled.div`
  grid-area: "LeftContainer";
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 25px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 2px #e6e6e6;
  height: 90vh;
  padding-top: 630px;
  overflow: auto;
  &::-webkit-scrollbar{
    display: none;
  }
`
export const HeaderWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 20px 20px;
`

export const Header = styled.h1`
  color: gray;
  font-weight: 600;
  font-size: 22px;
`

export const Card = styled.div`
  width: 100%;
  padding: 0 20px;
`
export const Image = styled.img`
  height: 220px;
  width: auto;
  border: .2px solid #e0e0e0;
  margin-bottom: 10px;
`

export const Title = styled.h1`
  color: #858EBF;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 5px;
`

export const Caption = styled.h1`
  padding-right: 50px;
  color: gray;
  font-weight: 300;
  font-size: 18px;
  text-align: left;
`
export const Line = styled.div`
  height: .2px;
  width: 100%;
  background-color: #cfcfcf;
  margin: 40px 0;
`