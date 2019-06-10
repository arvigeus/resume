import React from "react"
import Field from "components/Input/Field"
// import SearchIcon from "components/icons/Search";

type SearchPropsType = {
  id: string
  className?: string
  label: string
  delay?: number
  onChange: React.ChangeEventHandler
}

class Search extends React.PureComponent<SearchPropsType> {
  delayId = undefined

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (this.delayId) clearTimeout(this.delayId)
    const { onChange, delay } = this.props
    if (delay) {
      e.persist()
      // @ts-ignore
      this.delayId = setTimeout(() => {
        onChange(e)
      }, delay)
    } else onChange(e)
  }

  render() {
    const { id, className, label, onChange, ...props } = this.props
    return (
      <div className={className}>
        {/* <SearchIcon size={34} className="input-search-icon" /> */}
        <Field
          id={id}
          className="input-search"
          label={label}
          type="search"
          onChange={this.handleChange}
          {...props}
        />
      </div>
    )
  }
}

export default Search
