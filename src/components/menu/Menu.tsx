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

export const Menu = ({ children, className }: { children: React.ReactElement[], className: string }) => {
  return (
    <menu className={ className }>
      { React.Children.map(children, (child : React.ReactElement) => (
        <Link href={ child.props.href }>{ child.props.children }</Link>
      )) }
    </menu>
  )
}