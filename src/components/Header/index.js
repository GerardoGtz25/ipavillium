import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"

import { FaBars } from "@react-icons/all-files/fa/FaBars"
import { MdClose } from "@react-icons/all-files/md/MdClose"

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
`

const NavBarIcon = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 21px;
  color: #3d5495;
  text-decoration: none;
  padding: 5px 0px;
`

const Menu = styled.div`
  position: absolute;
  top: 0;
  left: calc(100vw);
  transition: left 1s;
  width: 100vw;
  height: 100vh;
  background-color: rgba(61, 84, 149, 0.95);
  z-index: 1000;
  ${({ isOpen }) =>
    !isOpen
      ? `
  left: calc(100vw)
  `
      : `left: 0;`}
`

const MenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`

const MenuIcon = styled.button`
  border: 0px;
  background-color: transparent;
  font-size: 24px;
  color: #194466;
`

const CloseIcon = styled.button`
  border: 0px;
  background-color: transparent;
  font-size: 28px;
  color: white;
`

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
`

const MenuItem = styled(Link)`
  padding: 10px 16px;
  color: white;
  text-decoration: none;
  font-size: 21px;
  cursor: pointer;
  border-bottom: 1px solid;
`

export const Header = () => {
  const [isDisplayed, setDisplay] = useState(false)

  const handleOpenMenu = () => {
    setDisplay(true)
  }

  const handleCloseMenu = () => {
    setDisplay(false)
  }

  return (
    <>
      <NavBar>
        <NavBarIcon to="/">
          <StaticImage
            src="../../images/logo.jpg"
            weight={150}
            height={60}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="Ipavillium"
          />
        </NavBarIcon>
        <MenuIcon onClick={handleOpenMenu}>
          <FaBars />
        </MenuIcon>
      </NavBar>
      <Menu isOpen={isDisplayed}>
        <MenuHeader>
          <CloseIcon onClick={handleCloseMenu}>
            <MdClose />
          </CloseIcon>
        </MenuHeader>
        <MenuContent>
          <MenuItem to="/">Inicio</MenuItem>
          <MenuItem to="/about">Nosotros</MenuItem>
          <MenuItem to="/about">Servicios</MenuItem>
          <MenuItem to="/about">Preguntas frecuentes</MenuItem>
          <MenuItem to="/about">Eventos</MenuItem>
          <MenuItem to="/contact">Contact</MenuItem>
        </MenuContent>
      </Menu>
    </>
  )
}
