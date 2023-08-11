// react
import React from "react"

interface LinkType {
  href?: string,
  langCode?: string,
  children: string | React.ReactElement[]
}

export const Link = (props: LinkType) => {
  const handleChangeLocalization = () => {
    props.langCode && localStorage.setItem("localization", props.langCode)
  }

  return (
    <li>
      <a href={ props.href } onClick={handleChangeLocalization}>
        <div className="text-cont">{ props.children }</div>
      </a>
    </li>
  )
}

interface MenuType {
  children?: React.ReactElement | React.ReactElement[],
  opened: boolean
}

export const Menu = (props: MenuType) => {
  return (
    <menu className={props.opened ? "" : "hidden"}>
      { props.children }
    </menu>
  )
}