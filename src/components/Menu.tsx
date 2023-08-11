// react
import React from "react"

interface LinkType {
  href?: string,
  langCode?: string,
  children: string | React.ReactElement | React.ReactElement[]
}

export const Link = (props: LinkType) => {
  const handleClick = () => {
    // change localization
    props.langCode && localStorage.setItem("localization", props.langCode)
  }

  return (
    <li>
      <a href={ props.href } onClick={handleClick}>
        <div className="text-cont">{ props.children }</div>
      </a>
    </li>
  )
}

interface MenuType {
  children?: React.ReactElement | React.ReactElement[],
  handleMenuClick: {
    menuOpened: boolean,
    setMenuOpened: (value: boolean) => void
  }
}

export const Menu = (props: MenuType) => {
  return (
    <menu className={props.handleMenuClick.menuOpened ? "" : "hidden"} onClick={() => props.handleMenuClick.setMenuOpened(false)}>
      { props.children }
    </menu>
  )
}