import React from "react"

type ButtonPropsType = {
  type?: "submit" | "button"
  children?: any
}

const Button = ({ type, children, ...props }: ButtonPropsType) =>
  !children ? (
    <input type={type || "button"} {...props} />
  ) : (
    <button type="button" {...props}>
      {children}
    </button>
  )

export default Button
