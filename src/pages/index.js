import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import { OnboardingSection } from "../components/OnboardingSection"
import { ShareFacebook } from "../components/ShareFacebook"
import Layout from "../components/layout"
import { Seo } from "../components/seo"

const Slogan = styled.p`
  font-size: 28px;
  color: #194466;
  word-break: break-word;
  font-weight: bold;
  margin-top: 60px;
  position: relative;
`

const Content = styled.p`
  color: #707b7c;
  text-align: justify;
`

const Slogan2 = styled.p`
  font-size: 21px;
  color: #194466;
  text-align: center;
  font-weight: bold;
  margin-top: 60px;
  position: relative;
  padding: 16px;
  box-shadow: 3px 6px 18px -6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 6px 18px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 6px 18px -6px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
`

const IndexPage = () => (
  <Layout>
    <section className="container">
      <div className="row">
        <div className="col-12">
          <OnboardingSection />
        </div>
        <div className="col-12">
          <Slogan>
            Ayudamos a nuestros pacientes a tener una mejor calidad de vida
          </Slogan>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Content>
            En acuerdo con la Organización Mundial de la salud (OMS) debemos
            ACABAR CON EL DOLOR y el sufrimiento, esta es la principal razón por
            la cual nos hemos propuesto como grupo interdisciplinario
          </Content>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Slogan2>
            Si tu condición médica limita tu capacidad de funcionar mientras
            trabajas, juegas o simplemente vives <br /> No te preocupes estamos
            aquí para ayudarte
          </Slogan2>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => <Seo />
