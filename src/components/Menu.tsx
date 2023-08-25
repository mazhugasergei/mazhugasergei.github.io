// react
import React, { useEffect, useRef } from "react"



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
  menuOpenedState: {
    menuOpened: boolean,
    setMenuOpened: (value: boolean) => void
  }
}

export const Menu = (props: MenuType) => {
  const menuRef = useRef<HTMLMenuElement>(null)

  const handleClickOutside = (e: Event) => {
    // if clicked element is not menu's button, close the menu
    if(menuRef.current && !menuRef.current.parentElement?.querySelector('.menu-btn')?.contains(e.target as Node))
      props.menuOpenedState.setMenuOpened(false)
  }

  useEffect(()=>{
    // close menu on outside click / scroll
    window.addEventListener('click', handleClickOutside)
    window.addEventListener('scroll', handleClickOutside)
  }, [])

  return (
    <menu ref={menuRef} className={props.menuOpenedState.menuOpened ? "" : "hidden"}>
      { props.children }
    </menu>
  )
}