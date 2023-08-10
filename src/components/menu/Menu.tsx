// react
import React, { MouseEvent } from "react"

interface LinkType {
  href?: string,
  langCode?: string,
  children: string | React.ReactElement
}

export const Link = (props: LinkType) => {
  const handleChangeLocalization = (e: MouseEvent<HTMLAnchorElement>) => {
    if(props.langCode){
      e.preventDefault()
      console.log(props.langCode)
    }
  }

  return (
    <li>
      <a href={ props.href } onClick={handleChangeLocalization}>
        <span>{ props.children }</span>
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