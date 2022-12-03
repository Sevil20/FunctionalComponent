import React, { useState } from 'react'

const Modal = () => {
  const [visible, setVisible] = React.useState(false);
  console.log(visible);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>
      <div style={{display: visible ? 'block' : 'none'}}>
      <div  className="hidden">
        <h1 >Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
          excepturi quis expedita. Nisi voluptatem asperiores molestias
          exercitationem dolorem, minima vero odit beatae voluptatibus nesciunt
          adipisci consectetur nobis! Itaque, quae velit?
        </p>
      </div>
      </div>
      
    </div>
  )
}

export default Modal