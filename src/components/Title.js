import React from "react"

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h1 style={{fontWeight: 320}}>{title || "default title"}</h1>
      <div className="underline"></div>
    </div>
  )
}

export default Title
