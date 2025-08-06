import { useEffect, useRef } from 'react'
import { useLogEvent } from '../hooks/useLogEvent'
import { getPageType } from '../utils/getPageType'

interface PageViewTrackerProps {
  pathname?: string
  searchParams?: string
}

export default function PageViewTracker({ pathname = '/', searchParams = '' }: PageViewTrackerProps) {
  const logEvent = useLogEvent()
  const previousPath = useRef<string | null>(null)

  useEffect(() => {
    const currentUrl = `${pathname}${searchParams ? `?${searchParams}` : ''}`

    if (previousPath.current === currentUrl) {
      return
    }

    const pageType = getPageType(pathname || '')

    logEvent({
      eventName: 'Website Page View',
      eventType: 'track',
      attributes: {
        pageLocation: pathname,
        pageType: pageType,
      },
    })

    previousPath.current = currentUrl
  }, [pathname, searchParams, logEvent])

  return null
}