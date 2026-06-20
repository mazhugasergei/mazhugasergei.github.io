import React from "react"

const SCROLLBAR_CSS = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background-color: #ffffff4d;
    border: 3px solid transparent;
    background-clip: padding-box;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #ffffff80;
  }
  .custom-scrollbar::-webkit-scrollbar-button,
  .custom-scrollbar::-webkit-scrollbar-corner {
    display: none;
  }
`

export interface ScrollAreaProps extends React.ComponentProps<"div"> {
	className?: string
}

export function ScrollArea({ className, children, ...props }: ScrollAreaProps) {
	return (
		<>
			<style>{SCROLLBAR_CSS}</style>
			<div className={`custom-scrollbar overflow-auto ${className || ""}`} {...props}>
				{children}
			</div>
		</>
	)
}
