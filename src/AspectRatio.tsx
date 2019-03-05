import React from 'react'

interface IProps {
  ratio: number            // height to width ratio in float
  width?: number | string  // px or %
  minWidth?: number        // px
  maxWidth?: number        // px
  className?: string       // className pass to root div
  children?: React.ReactNode
}

export default ({ ratio, width= '100%', minWidth, maxWidth, className, children }: IProps) => {
  const paddingTop = `${Math.round(ratio * 100)}%`

  return (
    <div
      className={className}
      style={{
        width,
        minWidth,
        maxWidth,
        flexBasis: width,
        flexShrink: 0
      }}
    >
      <div
        style={{
          position: 'relative',
          paddingTop
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
