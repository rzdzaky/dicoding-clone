import styled from "styled-components";

export const imageUrl = 'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/dicoding-logo-full.png'

export const NavbarWrapper = styled.div`
  height: 70px;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Title = styled.img`
  height: 45px;
  width: auto;
`
export const SideMenuWrapper = styled.div`
  height: 100%;
  width: 750px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MenuItem = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  color: gray;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  &:hover{
    color: black;
  }
  &:first-child {
    color: black;
  }
`