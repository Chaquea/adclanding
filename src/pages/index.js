import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


/*

 <Link to="/page-2/">Go to page 2</Link>

 */

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="container">
        <article>
        <h1><Image /></h1>
        <p className="intro">Somos la Asociación Drupal Colombia, trabajamos en la consolidación de Drupal en el país, asi como en el soporte de la comunidad de usuarios.</p>
        <p className="mail">Ingrese su correo para mantenerse enterado de las próximas novedades y el lanzamiento del sitio web.</p>
        </article>
    </section>
  </Layout>
)

export default IndexPage
