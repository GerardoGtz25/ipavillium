import React from "react"
import styled from "styled-components"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"

const ShareButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 130px;
  background-color: #3b5998;
  padding: 5px;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  font-weight: bold;
`

const Text = styled.span`
  margin-left: 5px;
`

export const ShareFacebook = ({ message }) => {
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-end">
        <ShareButton>
          <FaFacebook />
          <Text>Recommend</Text>
        </ShareButton>
      </div>
      {message && (
        <div className="col-12">
          <span>
            3 people recommend this. Sign Up to see what your friends recommend.
          </span>
        </div>
      )}
    </div>
  )
}
