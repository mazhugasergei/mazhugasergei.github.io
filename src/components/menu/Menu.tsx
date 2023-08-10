// react
import React from "react"

export const Link = (props : { href: string, children: string }) => {
  return (
    <li>
      <a href={ props.href }>
        <span>{ props.children }</span>
      </a>
    </li>
  )
}

export const Menu = (props: { children: React.ReactElement[], opened: boolean }) => {
  return (
    <menu className={props.opened ? "" : "hidden"}>
      { React.Children.map(props.children, (child : React.ReactElement) => (
        <Link href={ child.props.href }>{ child.props.children }</Link>
      )) }
    </menu>
  )
}