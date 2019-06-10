import React from "react"

type HintPropsType = {
  hasValue: boolean
  required?: boolean | null
  defaultHint?: string | null
  hint?: string | null
}

const Hint = ({ required, defaultHint, hint }: HintPropsType) =>
  required || defaultHint || hint ? (
    <div className={!hint ? "hint" : required ? "error" : "warning"}>
      {required && !defaultHint && !hint
        ? "Required"
        : `${required ? "[Required] " : ""}${hint || defaultHint || "Invalid"}`}
    </div>
  ) : null

export default Hint
