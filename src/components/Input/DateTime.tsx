import React, { PureComponent } from "react"
import cx from "classnames"

type DateTimePropsType = {
  id: string
  className?: string
  label: string
  value?: string
  defaultValue?: string
  onChange?: React.ChangeEventHandler
  onBlur?: React.FocusEventHandler
  onFocus?: React.FocusEventHandler
}

type DateTimeStateType = {
  value: string
  hasFocus: boolean
}

class DateTime extends PureComponent<DateTimePropsType, DateTimeStateType> {
  state = {
    value: this.props.value || this.props.defaultValue || "",
    hasFocus: false,
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value })
    if (this.props.onChange) this.props.onChange(event)
  }

  handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    this.setState({ hasFocus: true })
    if (this.props.onFocus) this.props.onFocus(event)
  }

  handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    this.setState({ hasFocus: false })
    if (this.props.onBlur) this.props.onBlur(event)
  }

  render() {
    const { id, className, label, ...props } = this.props
    const { value, hasFocus } = this.state

    return (
      <div
        className={cx("datetime", className, {
          "has-value": !!value,
          "has-focus": hasFocus,
        })}
      >
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type="date"
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...props}
        />
      </div>
    )
  }
}

export default DateTime
