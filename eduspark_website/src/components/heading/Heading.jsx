import React from "react"

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div id='heading'>
        <h1>{title} </h1>
        <h1>{subtitle} </h1>
      </div>
    </>
  )
}

export default Heading