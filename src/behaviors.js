import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

export function initSwipers(root) {
  const widgets = root.querySelectorAll('.elementor-widget.e-widget-swiper')
  const instances = []

  widgets.forEach((widget) => {
    const container = widget.querySelector('.spaciaz-swiper')
    if (!container) return

    container.querySelectorAll('.swiper-slide.swiper-slide-duplicate').forEach((el) => el.remove())

    container.classList.remove(
      'swiper-initialized',
      'swiper-horizontal',
      'swiper-pointer-events',
      'swiper-backface-hidden',
    )

    container.querySelectorAll('.swiper-slide').forEach((slide) => {
      slide.classList.remove(
        'swiper-slide-active',
        'swiper-slide-next',
        'swiper-slide-prev',
        'swiper-slide-duplicate-active',
        'swiper-slide-duplicate-next',
        'swiper-slide-duplicate-prev',
      )
      slide.style.removeProperty('width')
      slide.style.removeProperty('margin-right')
    })

    const wrapper = container.querySelector('.swiper-wrapper')
    if (wrapper) {
      wrapper.style.removeProperty('transform')
      wrapper.style.removeProperty('transition-duration')
    }

    const isTestimonial = widget.classList.contains('elementor-widget-spaciaz-testimonials')
    const isTeam = widget.classList.contains('elementor-widget-spaciaz-team-box')
    const isPostGrid = widget.classList.contains('elementor-widget-spaciaz-post-grid')

    let slidesPerView = 3
    let spaceBetween = 30
    if (isTestimonial) slidesPerView = 1
    if (isPostGrid) slidesPerView = 3
    if (isTeam) slidesPerView = 4

    const prev = widget.querySelector('.elementor-swiper-button-prev')
    const next = widget.querySelector('.elementor-swiper-button-next')

    const swiper = new Swiper(container, {
      modules: [Navigation, Pagination, Autoplay, EffectFade],
      loop: true,
      slidesPerView: 1,
      spaceBetween,
      speed: 700,
      autoplay: { delay: 5000, disableOnInteraction: false },
      breakpoints: {
        640:  { slidesPerView: isTestimonial ? 1 : 2, spaceBetween: 20 },
        1024: { slidesPerView, spaceBetween },
      },
    })

    // Drive the prev/next arrow buttons explicitly so a click always moves the
    // slider, regardless of Swiper's internal navigation wiring.
    const onPrev = (e) => { e.preventDefault(); swiper.slidePrev() }
    const onNext = (e) => { e.preventDefault(); swiper.slideNext() }
    if (prev) prev.addEventListener('click', onPrev)
    if (next) next.addEventListener('click', onNext)
    swiper.on('destroy', () => {
      if (prev) prev.removeEventListener('click', onPrev)
      if (next) next.removeEventListener('click', onNext)
    })

    instances.push(swiper)
  })

  return instances
}

export function initCounters(root) {
  const counters = root.querySelectorAll('.elementor-counter-number')
  if (!counters.length) return () => {}

  const animate = (el) => {
    const from = parseFloat(el.dataset.fromValue || '0')
    const to = parseFloat(el.dataset.toValue || el.textContent || '0')
    const duration = parseInt(el.dataset.duration || '2000', 10)
    const delimiter = el.dataset.delimiter || ''
    const start = performance.now()

    const fmt = (n) => {
      const rounded = Math.round(n)
      if (!delimiter) return String(rounded)
      return rounded.toLocaleString('en-US').replace(/,/g, delimiter)
    }

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      el.textContent = fmt(from + (to - from) * eased)
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        animate(e.target)
        io.unobserve(e.target)
      }
    })
  }, { threshold: 0.4 })

  counters.forEach((el) => {
    el.textContent = el.dataset.fromValue || '0'
    io.observe(el)
  })

  return () => io.disconnect()
}

export function initStickyHeader(root) {
  const header = root.querySelector('.header-absolute, header#masthead')
  if (!header) return () => {}
  const onScroll = () => {
    if (window.scrollY > 80) header.classList.add('is-sticky')
    else header.classList.remove('is-sticky')
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}

export function initReadingProgress(root) {
  const bar = root.querySelector('.hfe-reading-progress-bar')
  if (!bar) return () => {}
  const onScroll = () => {
    const s = window.scrollY
    const d = document.documentElement.scrollHeight - window.innerHeight
    bar.style.width = (d ? (s / d) * 100 : 0) + '%'
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}

export function initScrollToTop(root) {
  const btn = root.querySelector('.hfe-scroll-to-top-wrap')
  if (!btn) return () => {}
  const onScroll = () => {
    if (window.scrollY > 100) btn.classList.remove('hfe-scroll-to-top-hide')
    else btn.classList.add('hfe-scroll-to-top-hide')
  }
  const onClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  btn.addEventListener('click', onClick)
  return () => {
    window.removeEventListener('scroll', onScroll)
    btn.removeEventListener('click', onClick)
  }
}

export function initReveals(root) {
  const items = root.querySelectorAll('.elementor-invisible, [data-settings*="_animation"]')
  if (!items.length) return () => {}
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.remove('elementor-invisible')
        e.target.classList.add('animated', 'elementor-in-view')
        io.unobserve(e.target)
      }
    })
  }, { threshold: 0.15 })
  items.forEach((el) => io.observe(el))
  return () => io.disconnect()
}

export function initParallax(root) {
  const parents = root.querySelectorAll('.elementor-motion-effects-parent[data-settings]')
  if (!parents.length) return () => {}

  const items = []
  parents.forEach((parent) => {
    const child = parent.querySelector('.elementor-motion-effects-element')
    if (!child) return
    let settings = {}
    try { settings = JSON.parse(parent.getAttribute('data-settings') || '{}') } catch (_) { return }
    if (settings.motion_fx_motion_fx_scrolling !== 'yes') return

    const get = (key) => {
      const v = settings[key]
      if (v && typeof v === 'object' && 'size' in v) return Number(v.size) || 0
      return Number(v) || 0
    }
    const dir = (key) => settings[key] === 'negative' ? -1 : 1

    const cfg = {
      x: settings.motion_fx_translateX_effect === 'yes'
        ? { speed: get('motion_fx_translateX_speed'), dir: dir('motion_fx_translateX_direction') } : null,
      y: settings.motion_fx_translateY_effect === 'yes'
        ? { speed: get('motion_fx_translateY_speed'), dir: dir('motion_fx_translateY_direction') } : null,
      rotate: settings.motion_fx_rotateZ_effect === 'yes'
        ? { speed: get('motion_fx_rotateZ_speed'), dir: dir('motion_fx_rotateZ_direction') } : null,
      scale: settings.motion_fx_scale_effect === 'yes'
        ? { speed: get('motion_fx_scale_speed'), dir: dir('motion_fx_scale_direction') } : null,
      opacity: settings.motion_fx_opacity_effect === 'yes'
        ? { speed: get('motion_fx_opacity_speed'), dir: dir('motion_fx_opacity_direction') } : null,
    }
    if (!cfg.x && !cfg.y && !cfg.rotate && !cfg.scale && !cfg.opacity) return
    items.push({ parent, child, cfg })
  })
  if (!items.length) return () => {}

  let ticking = false
  const update = () => {
    ticking = false
    const vh = window.innerHeight || 1
    items.forEach(({ parent, child, cfg }) => {
      const rect = parent.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const progress = (center - vh / 2) / (vh / 2)
      const clamped = Math.max(-1, Math.min(1, progress))

      if (cfg.x) child.style.setProperty('--translateX', (clamped * cfg.x.speed * 50 * cfg.x.dir) + 'px')
      if (cfg.y) child.style.setProperty('--translateY', (clamped * cfg.y.speed * 50 * cfg.y.dir) + 'px')
      if (cfg.rotate) child.style.setProperty('--rotateZ', (clamped * cfg.rotate.speed * 10 * cfg.rotate.dir) + 'deg')
      if (cfg.scale) child.style.setProperty('--scale', String(1 + clamped * cfg.scale.speed * 0.1 * cfg.scale.dir))
      if (cfg.opacity) child.style.setProperty('--opacity', String(Math.max(0, Math.min(1, 1 - Math.abs(clamped) * cfg.opacity.speed * 0.1))))

      const parts = []
      if (cfg.x) parts.push('translateX(var(--translateX))')
      if (cfg.y) parts.push('translateY(var(--translateY))')
      if (cfg.rotate) parts.push('rotateZ(var(--rotateZ))')
      if (cfg.scale) parts.push('scale(var(--scale))')
      child.style.transform = parts.join(' ')
      if (cfg.opacity) child.style.opacity = child.style.getPropertyValue('--opacity')
    })
  }

  const onScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(update)
  }

  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
  return () => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
  }
}

export function initMobileNav(root) {
  const openBtn = root.querySelector('.menu-mobile-nav-button')
  const closeBtn = root.querySelector('.mobile-nav-close')
  const overlay = root.querySelector('.spaciaz-overlay')
  const panel = root.querySelector('.spaciaz-mobile-nav')
  if (!openBtn && !panel) return () => {}

  const open = (e) => {
    if (e) e.preventDefault()
    document.body.classList.add('mobile-nav-active')
  }
  const close = (e) => {
    if (e) e.preventDefault()
    document.body.classList.remove('mobile-nav-active')
  }
  const onKey = (e) => { if (e.key === 'Escape') close() }

  if (openBtn) openBtn.addEventListener('click', open)
  if (closeBtn) closeBtn.addEventListener('click', close)
  if (overlay) overlay.addEventListener('click', close)
  document.addEventListener('keydown', onKey)

  // Expand/collapse sub-menus inside the mobile panel.
  const toggles = panel ? Array.from(panel.querySelectorAll('.dropdown-toggle')) : []
  const onToggle = (e) => {
    e.preventDefault()
    const btn = e.currentTarget
    const submenu = btn.parentElement && btn.parentElement.querySelector(':scope > ul.sub-menu')
    if (!submenu) return
    const isOpen = btn.classList.toggle('toggled-on')
    submenu.style.display = isOpen ? 'block' : 'none'
  }
  toggles.forEach((t) => t.addEventListener('click', onToggle))

  return () => {
    if (openBtn) openBtn.removeEventListener('click', open)
    if (closeBtn) closeBtn.removeEventListener('click', close)
    if (overlay) overlay.removeEventListener('click', close)
    document.removeEventListener('keydown', onKey)
    toggles.forEach((t) => t.removeEventListener('click', onToggle))
    document.body.classList.remove('mobile-nav-active')
  }
}

export function initCursorButtons(root) {
  const targets = root.querySelectorAll('.button-mousemove, .elementor-button')
  const onMove = (e) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.25}px)`
  }
  const onLeave = (e) => { e.currentTarget.style.transform = '' }
  targets.forEach((el) => {
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
  })
  return () => {
    targets.forEach((el) => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    })
  }
}
