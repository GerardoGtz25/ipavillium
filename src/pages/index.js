import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { ShareFacebook } from "../components/ShareFacebook"
import { Seo } from "../components/seo"

const Slogan = styled.p`
  font-size: 24px;
  color: #3d5495;
  font-family: raleway-semibold, raleway, sans-serif;
  word-break: break-word;
  letter-spacing: 0.1em;
  font-weight: 500;
`

const AboutContainer = styled.section`
  background-color: #3d5495;
  color: white;
  border-top: 10px solid rgb(189, 207, 220);
`

const Subtitle = styled.h2`
  font-family: raleway-semibold, raleway, sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 24px;
`

const IndexPage = () => (
  <Layout>
    <section className="container">
      <div className="row">
        <div className="col-12 mb-3">
          <Slogan>
            Where there is life, <br></br>there is hope
          </Slogan>
          <ShareFacebook message={false} />
        </div>
      </div>

      <AboutContainer className="row py-4">
        <Subtitle>About Us</Subtitle>
        <StaticImage
          src="../images/seniors.jpg"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="Seniors"
          className="img-fluid borderImage"
        />
      </AboutContainer>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => <Seo />
