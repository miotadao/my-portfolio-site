import React, { useEffect } from 'react'

const Tadao = (props) => {

  useEffect(() => {
    
  });
  return (
    <div className='tadao-container' id='tadao'>
      <div className={props.width > 450 ? "tadao2" : "mobile-tadao"}>
        <p>mio's portfolio</p>
      </div>
    </div>
  )
}

export default Tadao
