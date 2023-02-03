import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const AbstractBackground = styled.div`
  border-radius: 85% 15% 44% 56% / 58% 61% 39% 42%;
  background: rgb(66, 170, 197);
  background: linear-gradient(
    53deg,
    rgba(66, 170, 197, 1) 22%,
    rgba(16, 180, 85, 0.9248074229691877) 100%
  );
  width: 100%;
  height: 385px;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`

const ContactUS = styled.div`
  width: 150px;
  height: 140px;
  border-radius: 5px;
  padding: 10px 5px;
  background-color: white;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  margin-bottom: -20px;
  box-shadow: 3px 6px 18px -6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 6px 18px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 6px 18px -6px rgba(0, 0, 0, 0.75);
`

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: grey;
  overflow: hidden;
`

const ButtonContact = styled.div`
  width: 100%;
  height: 24px;
  background-color: #42aac5;
  border-radius: 45px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`

const Mention = styled.p`
  color: #707b7c;
  font-size: 14px;
  font-weight: bold;
`

const TextButton = styled.p`
  color: white;
  font-weight: bold;
  font-size: 14px;
`

export const OnboardingSection = () => {
  return (
    <>
      <AbstractBackground>
        <ContactUS>
          <Avatar>
            <StaticImage
              src="../../images/doctora1.jpg"
              width={210}
              quality={95}
              formats={["AUTO", "WEBP"]}
              style={{ margin: "0 auto", width: "50px" }}
              alt="Doctora"
            />
          </Avatar>
          <Mention>Dra. Alicia Pérez</Mention>
          <ButtonContact>
            <TextButton>Contáctanos</TextButton>
          </ButtonContact>
        </ContactUS>
        <StaticImage
          src="../../images/doctora.png"
          width={210}
          quality={95}
          formats={["AUTO", "WEBP"]}
          style={{ marginRight: "-15px" }}
          alt="Doctora"
        />
      </AbstractBackground>
    </>
  )
}
