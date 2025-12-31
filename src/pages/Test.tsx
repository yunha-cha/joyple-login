// import React from 'react'

import type { Cafe } from "../types/cafe";


// props 타입 지정하기
// myCafe :Cafe
type TestProps = {
    myCafe :Cafe
}



const Test = ({myCafe} :TestProps) => {
  return (
    <>
        <div>{myCafe.name}</div>
    
    </>
  )
}

export default Test;