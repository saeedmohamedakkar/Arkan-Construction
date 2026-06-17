import { useEffect, useRef } from 'react'
import bodyHtml from './spaciaz-body.html?raw'
import {
  initSwipers,
  initCounters,
  initStickyHeader,
  initReadingProgress,
  initScrollToTop,
  initReveals,
  initCursorButtons,
  initParallax,
  initMobileNav,
} from './behaviors'

export default function App() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const swipers = initSwipers(root)
    const cleanups = [
      initCounters(root),
      initStickyHeader(root),
      initReadingProgress(root),
      initScrollToTop(root),
      initReveals(root),
      initCursorButtons(root),
      initParallax(root),
      initMobileNav(root),
    ]

    return () => {
      swipers.forEach((s) => { try { s.destroy(true, true) } catch (_) {} })
      cleanups.forEach((fn) => { try { fn && fn() } catch (_) {} })
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className="spaciaz-root"
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  )
}
