import React, { PureComponent } from "react"
import cx from "classnames"

type DropdownPropsType = {
  id: string
  className?: string
  label: string
  value?: string | null
  data: any
}

type DropdownStateType = {
  value: string | null
}

class Dropdown extends PureComponent<DropdownPropsType, DropdownStateType> {
  static defaultProps: {
    value: null
    data: {}
  }

  state = {
    value: this.props.value || "",
  }

  get options(): Array<React.ReactChild> {
    const { data } = this.props
    const options: Array<JSX.Element> = []
    Object.keys(data).forEach(label => {
      const id = data[label]
      if (id.constructor !== {}.constructor) {
        // not an object
        options.push(
          <option key={id} value={id}>
            {label}
          </option>
        )
      } else {
        const optgroup: Array<JSX.Element> = []
        Object.keys(id).forEach(opt => {
          optgroup.push(
            <option key={id[opt]} value={id[opt]}>
              {opt}
            </option>
          )
        })
        options.push(
          <optgroup key={label} label={label}>
            {optgroup}
          </optgroup>
        )
      }
    })
    return options
  }

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ value: event.target.value })
  }

  render() {
    const { id, className, label, data, value, ...props } = this.props
    const stateClasses: any = {}
    stateClasses["has-value"] = !!this.state.value

    return (
      <div className={cx("select", className, stateClasses)}>
        <label htmlFor={id}>{label}</label>
        <select id={id} {...props} onBlur={this.handleChange}>
          <option />
          {this.options}
        </select>
      </div>
    )
  }
}

export default Dropdown
