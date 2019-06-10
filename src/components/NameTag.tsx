import React from "react"
import * as styles from "./NameTag.module.css"

type NameTagPropsType = {
  name: string
  formName: string
  rotate: number
  slogan: string
} & React.HTMLProps<HTMLInputElement>

const NameTag = ({
  name,
  formName,
  rotate,
  slogan,
  ...props
}: NameTagPropsType) => (
  <div
    className={styles.wrapper}
    // @ts-ignore
    style={rotate ? { transform: `rotate(${rotate}deg)` } : null}
  >
    <div className={styles.top}>
      <h1 className={styles.title}>HELLO</h1>
      <h2 className={styles.subtitle}>my name is</h2>
    </div>
    <input
      type="text"
      placeholder="Enter Name"
      className={styles.name}
      defaultValue={name}
      name={formName}
      {...props}
    />
    <div className={styles.bottom}>{slogan}</div>
  </div>
)

export default NameTag
