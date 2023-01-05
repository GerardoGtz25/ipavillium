import React from "react"
import { FaBars } from "@react-icons/all-files/fa/FaBars"

import "./Header.scss"

export const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          Ipavillium
        </a>
        <span>
          <FaBars />
        </span>
      </div>
    </nav>
  )
}
