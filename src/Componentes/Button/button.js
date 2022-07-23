import React from "react"
import "./button.css"

const Button = (props) => {
      
    return (
    React.createElement('button', {
    style: {color: props.color}
    },props.children)
    )
}

export default Button