import React, { ReactNode } from 'react'
import { useLogEvent } from '../hooks/useLogEvent'

interface TrackingLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
  clickType: string
  clickName: string
  clickLocation: string
  clickText: string
  pathname?: string
  experimentId?: string
  variantId?: string
}

export default function TrackingLink({
  href,
  children,
  clickType,
  clickName,
  clickLocation,
  clickText,
  pathname = '/',
  onClick,
  experimentId,
  variantId,
  ...rest
}: TrackingLinkProps) {
  const logEvent = useLogEvent()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const eventAttributes: Record<string, any> = {
      clickType,
      clickName,
      clickLocation,
      clickText,
      pageLocation: pathname,
    }

    if (experimentId && variantId) {
      eventAttributes.experiment_id = experimentId
      eventAttributes.variant_id = variantId
      eventAttributes.button_type = clickType
      eventAttributes.is_experiment_conversion = true
    }

    logEvent({
      eventName: 'Website Click',
      eventType: 'track',
      attributes: eventAttributes,
    })

    if (onClick) {
      onClick(e)
    }
  }

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}