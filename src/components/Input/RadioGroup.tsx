import React, { Fragment } from "react"
import cx from "classnames"

type RadioGroupPropsType = {
  className?: string
  name: string
  value: string
  children: any
  label: string
  error?: string | null
}

type RadioOptionPropsType = {
  id: string
  label: string
  value: string
}

export const RadioOption = ({
  id,
  label,
  value,
  ...props
}: RadioOptionPropsType) => (
  <Fragment>
    <input type="radio" id={id} value={value} {...props} />
    <label htmlFor={id}>{label}</label>
  </Fragment>
)

const RadioGroup = ({
  className,
  name,
  value,
  label,
  children,
  ...props
}: RadioGroupPropsType) => (
  <div className={cx("radio", className)} {...props}>
    <div className="radio-label">{label}</div>
    {children.map((child: React.ReactElement) =>
      child.type === RadioOption
        ? React.cloneElement(child, { name, key: value })
        : child
    )}
  </div>
)

export default RadioGroup
