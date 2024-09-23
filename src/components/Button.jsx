import React from 'react'

const Button = ({bg,paddingX,paddingY,text,font,color,content}) => {
    return (
        <div className={`${bg} ${text} ${paddingX} ${paddingY} ${font}  rounded-xl ${color}`}>{content}</div>
      );
      
}

export default Button