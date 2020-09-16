import React from "react"

const SmallTitle = ({ title }) => {
  return (
    <div className="section-title" style={{color: getComputedStyle(document.documentElement).getPropertyValue('--clr-grey-4')}}>
      <h3 color='red'>{title || "default title"}</h3>
    </div>
  )
}

export default SmallTitle
