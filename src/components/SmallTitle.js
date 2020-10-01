import React from "react"

const SmallTitle = ({ title }) => {
  var color = "black";
  if (typeof window !== 'undefined') {
    color = window.getComputedStyle(document.documentElement).getPropertyValue('--clr-grey-4')
  }
  return (
    <div className="section-title" style={{color:color}}>
      <h3 color='red'>{title || "default title"}</h3>
    </div>
  )
}

export default SmallTitle
