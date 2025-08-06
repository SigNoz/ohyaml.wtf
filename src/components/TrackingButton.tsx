import React, { ReactNode } from 'react'
import { useLogEvent } from '../hooks/useLogEvent'

interface TrackingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  clickType: string
  clickName: string
  clickLocation: string
  clickText: string
  pathname?: string
}

export default function TrackingButton({
  children,
  clickType,
  clickName,
  clickLocation,
  clickText,
  pathname = '/',
  onClick,
  ...rest
}: TrackingButtonProps) {
  const logEvent = useLogEvent()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    logEvent({
      eventName: 'Website Click',
      eventType: 'track',
      attributes: {
        clickType,
        clickName,
        clickLocation,
        clickText,
        pageLocation: pathname,
      },
    })

    if (onClick) {
      onClick(e)
    }
  }

  return (
    <button onClick={handleClick} {...rest}>
      {children}
    </button>
  )
}