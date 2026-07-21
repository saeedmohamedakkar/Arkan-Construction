import { Fragment, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
const defaultDropdownState = {
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
}

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState(defaultDropdownState)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileNavOpen(false)
        setOpenDropdowns(defaultDropdownState)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.classList.toggle('mobile-nav-active', isMobileNavOpen)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('mobile-nav-active')
    }
  }, [isMobileNavOpen])

  const openMobileNav = (event) => {
    event.preventDefault()
    setIsMobileNavOpen(true)
  }

  const closeMobileNav = (event) => {
    event.preventDefault()
    setIsMobileNavOpen(false)
    setOpenDropdowns(defaultDropdownState)
  }

  const toggleDropdown = (index) => (event) => {
    event.preventDefault()
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <Fragment>
      <header id="masthead" itemScope itemType="https://schema.org/WPHeader">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

        <p className="main-title bhf-hidden" itemProp="headline">
          ARKAN<a href="#" title="ARKAN" rel="home" />
        </p>
        <div data-elementor-type="wp-post" data-elementor-id="64" className="elementor elementor-64 header-absolute">
          <div className="elementor-element elementor-element-572157d e-flex e-con-boxed e-con e-parent e-lazyloaded " data-id="572157d" data-element_type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-0c592e6 e-con-full e-flex e-con e-child" data-id="0c592e6" data-element_type="container" data-settings='{"background_background":"classic"}'>
                <div className="elementor-element elementor-element-5ce7fd2 e-con-full elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra e-flex e-con e-child" data-id="5ce7fd2" data-element_type="container">
                  <div className="elementor-element elementor-element-9ec369e elementor-widget elementor-widget-spaciaz-menu-canvas" data-id="9ec369e" data-element_type="widget" data-widget_type="spaciaz-menu-canvas.default">
                    <div className="elementor-widget-container primaryBackGcolor">
                      <div className="elementor-canvas-menu-wrapper">
                        <a href="#" className="menu-mobile-nav-button" onClick={openMobileNav}>
                          <div className="spaciaz-icon ">
                            <i className="fa-solid fa-bars-staggered test" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-6c47215 e-con-full e-flex e-con e-child " data-id="6c47215" data-element_type="container">
                  <div className="elementor-element elementor-element-6afc8cc elementor-widget elementor-widget-site-logo" data-id="6afc8cc" data-element_type="widget" data-settings='{"align":"center","width":{"unit":"%","size":"","sizes":[]},"width_laptop":{"unit":"px","size":"","sizes":[]},"width_tablet_extra":{"unit":"px","size":"","sizes":[]},"width_tablet":{"unit":"%","size":"","sizes":[]},"width_mobile_extra":{"unit":"px","size":"","sizes":[]},"width_mobile":{"unit":"%","size":"","sizes":[]},"space":{"unit":"%","size":"","sizes":[]},"space_laptop":{"unit":"px","size":"","sizes":[]},"space_tablet_extra":{"unit":"px","size":"","sizes":[]},"space_tablet":{"unit":"%","size":"","sizes":[]},"space_mobile_extra":{"unit":"px","size":"","sizes":[]},"space_mobile":{"unit":"%","size":"","sizes":[]},"image_border_radius":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"image_border_radius_laptop":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"image_border_radius_tablet_extra":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"image_border_radius_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"image_border_radius_mobile_extra":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"image_border_radius_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true}}'>
                    <div className="elementor-widget-container">
                      <div className="hfe-site-logo">
                        {/* <a data-elementor-open-lightbox="" className="elementor-clickable" href="#">
                          <div className="hfe-site-logo-set">
                            <div className="hfe-site-logo-container">
                              <img fetchPriority="high" width="100" height="100" className="theLogo" src="/assets/arkan-logo.png" alt="logo" />
                            </div>
                          </div>
                        </a> */}
                        <Link to="/">
                          <div className="hfe-site-logo-set">
                            <div className="hfe-site-logo-container">
                              <img
                                fetchPriority="high"
                                width="100"
                                height="100"
                                className="theLogo"
                                src="/assets/arkan-logo.png"
                                alt="logo"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-0ab291e elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-spaciaz-nav-menu" data-id="0ab291e" data-element_type="widget" data-widget_type="spaciaz-nav-menu.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-nav-menu-wrapper">
                        <nav className="main-navigation">
                          <div className="primary-navigation">
                            <ul id="menu-1-0ab291e" className="menu">
                              <li id="menu-item-70" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-41 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-70 sub-menu-center has-mega-menu">

                                <Link to="/">
                                  <span className="hover-text" data-name="الرئيسية">
                                    الرئيسية
                                  </span>
                                </Link>
                              </li>
                              <li id="menu-item-71" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-71">

                                <Link to="/who-we-are"><span className="hover-text" data-name="من نحن">من نحن</span></Link>
                              </li>
                              <li id="menu-item-72" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-72">
                                <Link
                                  to="/services"

                                >
                                  <span className="hover-text" data-name="خدماتنا وحلولنا">
                                    خدماتنا وحلولنا
                                  </span>
                                </Link>
                              </li>
                              <li id="menu-item-73" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-73">
                                <a href="#"><span className="hover-text" data-name="سابقة الأعمال">سابقة الأعمال</span></a>
                              </li>
                              <li id="menu-item-271" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-271">
                                <a href="#"><span className="hover-text" data-name="الاعتمادات والجودة">الاعتمادات والجودة</span></a>
                              </li>

                              <li
                                id="menu-item-77"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-77"
                              >
                                <Link to="/contact">
                                  <span className="hover-text" data-name="اتصل بنا">
                                    اتصل بنا
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-27dddc9 e-con-full elementor-hidden-mobile e-flex e-con e-child" data-id="27dddc9" data-element_type="container">
                  <div className="elementor-element elementor-element-db1a0d6 elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-heading" data-id="db1a0d6" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container" />
                  </div>
                  <div className="elementor-element elementor-element-4b6d85e elementor-button-link underLine elementor-widget elementor-widget-spaciaz-button" data-id="4b6d85e" data-element_type="widget" data-widget_type="spaciaz-button.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <a href="tel:+966580242935" className="elementor-button-link elementor-button elementor-size-sm whiteBackground" role="button">
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text" data-name="+966 58 024 2935">
                              <span dir="ltr">+966 58 024 2935</span>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-ad5cd6d elementor-widget elementor-widget-button" data-id="ad5cd6d" data-element_type="widget" data-widget_type="button.default">
                    <div className="elementor-widget-container ">
                      <div className="elementor-button-wrapper">

                        <Link
                          to="/contact"
                          className="elementor-button elementor-button-link elementor-size-sm textColorWhite"
                        >
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">
                              اطلب استشارة فنية
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="spaciaz-mobile-nav">
        <div className="menu-scroll-mobile">
          <div className="site-branding">
            <a href="#" className="custom-logo-link" rel="home" aria-current="page">
              <img loading="lazy" width="100" height="40" src="/assets/arkan-logo.png" className="custom-logo" alt="arkan" decoding="async" />
            </a>
            <div className="site-branding-text">
              <h1 className="site-title">
                <a href="#" rel="home">Arkan</a>
              </h1>
              <p className="site-description">المعمار الحديث للمقاولات والحلول الهندسية</p>
            </div>
          </div>
          <a href="#" className="mobile-nav-close" onClick={closeMobileNav}>
            <i className="fa-regular fa-circle-xmark" />
          </a>
          <nav className="mobile-menu-tab mobile-navigation mobile-pages-menu active" aria-label="قائمة الجوال">
            <div className="handheld-navigation">
              <ul id="menu-main-menu" className="menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-41 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-70">
                  {/* <a href="#" aria-current="page">الرئيسية</a> */}
                  <Link to="/" aria-current="page">
                    الرئيسية
                  </Link>
                  {/* <button type="button" aria-label="Open dropdown" aria-expanded={Boolean(openDropdowns[0])} className={`dropdown-toggle${openDropdowns[0] ? ' toggled-on' : ''}`} onClick={toggleDropdown(0)} /> */}
                  {/* <ul className="sub-menu" style={{ display: openDropdowns[0] ? 'block' : 'none' }}>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-41 current_page_item menu-item-69"><a href="#" aria-current="page">الرئيسية</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-68"><a href="#">من نحن</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-67"><a href="#">خدماتنا وحلولنا</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-66"><a href="#">سابقة الأعمال</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7635"><a href="#">الاعتمادات والجودة</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7634"><a href="#">المكتب الفني</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7633"><a href="#">الوظائف</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8894"><a href="#">الأسئلة الشائعة</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9715"><a href="#">قيمنا</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9716">
                      
                      <Link to="/contact">
                                  <span className="hover-text" data-name="اتصل بنا">
                                    اتصل بنا
                                  </span>
                                </Link>


                    </li>
                  </ul> */}
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-71">
                 
                  <Link to="/who-we-are">من نحن</Link>

                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-72">
                 
                    <Link
                                  to="/services"

                                >
                                  <span className="hover-text" data-name="خدماتنا وحلولنا">
                                    خدماتنا وحلولنا
                                  </span>
                                </Link>
                  {/* <button type="button" aria-label="Open dropdown" aria-expanded={Boolean(openDropdowns[2])} className={`dropdown-toggle${openDropdowns[2] ? ' toggled-on' : ''}`} onClick={toggleDropdown(2)} />
                  <ul className="sub-menu" style={{ display: openDropdowns[2] ? 'block' : 'none' }}>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2568"><a href="#">تجهيز المنشآت المصرفية</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2567"><a href="#">حلول القطاع الطبي</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2566"><a href="#">الإنشاءات والبنية التحتية</a></li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2569"><a href="#">الحلول الكهروميكانيكية MEP</a></li>
                  </ul> */}
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-73">
                  <a href="#">سابقة الأعمال</a>
                  {/* <button type="button" aria-label="Open dropdown" aria-expanded={Boolean(openDropdowns[3])} className={`dropdown-toggle${openDropdowns[3] ? ' toggled-on' : ''}`} onClick={toggleDropdown(3)} />
                  <ul className="sub-menu" style={{ display: openDropdowns[3] ? 'block' : 'none' }}>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4709"><a href="#">سابقة الأعمال</a></li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4837"><a href="#">المشاريع الاستراتيجية</a></li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4714"><a href="#">تفاصيل المشروع</a></li>
                  </ul> */}
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-271">
                  <a href="#">الاعتمادات والجودة</a>
                  {/* <button type="button" aria-label="Open dropdown" aria-expanded={Boolean(openDropdowns[4])} className={`dropdown-toggle${openDropdowns[4] ? ' toggled-on' : ''}`} onClick={toggleDropdown(4)} />
                  <ul className="sub-menu" style={{ display: openDropdowns[4] ? 'block' : 'none' }}>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2573"><a href="#">شهادات الجودة</a></li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2574"><a href="#">الاعتمادات</a></li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3078"><a href="#">تفاصيل الاعتماد</a></li>
                  </ul> */}
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-77">
                  {/* <a href="#">اتصل بنا</a> */}
                  <Link to="/contact">
                    <span className="hover-text" data-name="اتصل بنا">
                      اتصل بنا
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="spaciaz-overlay" onClick={closeMobileNav} />
    </Fragment>
  )
}
