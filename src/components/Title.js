import React from "react"

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h1 style={{fontWeight: 600, fontSize:"x-large", letterSpacing:0,textTransform:"capitalize"}}>{title || "default title"}</h1>
      <div className="underline"></div>
    </div>
  )
}

export default Title
