import { Link } from "react-router-dom";
import './OurServices.css';








const OurServices = () => {


    const services = [
        {
            id: 1,
            title: "تجهيز المنشآت المصرفية",
            description: "متخصصون في الامتثال لمعايير SAMA الأمنية، مع تنفيذ التشطيبات الفاخرة التي تليق بهوية البنوك والمراكز المالية.",
            link: "/banking-institutions",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon icons-color">
                    <path d="M3 21h18" />
                    <path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4" />
                    <path d="M5 21V10.85" />
                    <path d="M19 21V10.85" />
                    <path d="M9 21v-4a2 2 0 0 1 4 0v4" />
                </svg>
            ),
            linkText: "اكتشف حلول القطاع البنكي ←"
        },
        {
            id: 2,
            title: "قطاع الرعاية الصحية",
            link: "/",
            description: "البنية التحتية الطبية المتكاملة، تشمل شبكات الغازات الطبية، وتجهيز غرف العمليات بأعلى معايير التعقيم والجودة.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon icons-color">
                    <path d="M10 2v8" />
                    <path d="M14 2v8" />
                    <path d="M8 10h8" />
                    <path d="M5.81 10.23A2 2 0 0 0 4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-1.81-1.77" />
                    <path d="M7 22v-4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
                </svg>
            ),
            linkText: "اكتشف حلول القطاع الطبي ←"
        },
        {
            id: 3,
            link: "/",
            title: "الإنشاءات والبنية التحتية",
            description: "تنفيذ المشاريع الضخمة، شبكات الصرف الصحي، تمديدات الكهرباء العامة، والطرق الحيوية بدقة هندسية متناهية.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon icons-color">
                    <path d="M12 20v-6.5" />
                    <path d="M12 13.5v-7" />
                    <path d="M12 6.5V2" />
                    <path d="M20 21l-2-12-6-3-6 3-2 12h16z" />
                    <path d="M2 21h20" />
                </svg>
            ),
            linkText: "عرض خدمات البنية التحتية ←"
        },
        {
            id: 4,
            link: "/",
            title: "الحلول الكهروميكانيكية MEP",
            description: "أنظمة التكييف HVAC، أنظمة مكافحة الحريق، والربط الذكي للمباني لضمان استدامة التشغيل وكفاءة الطاقة.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon icons-color">
                    <path d="m13 2-2 10h9l-2 10" />
                </svg>
            ),
            linkText: "عرض الحلول التقنية ←"
        }
    ];



    return (
        <>


            <main className="solutions-hub" dir="rtl">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <span className="brand-badge"> أركان المعمار الحديث</span>
                        <h1 className="hero-title">حلول هندسية تخصصية تدعم نمو أعمالكم.</h1>
                        <p className="hero-subtitle">
                            في "أركان المعمار الحديث"، لا نكتفي بالبناء. نحن نصمم وننفذ بنية تحتية معقدة تلتزم بأعلى معايير الأمان العالمية (SAMA) والجودة الطبية، لنكون شريككم الاستراتيجي في تحقيق رؤية 2030.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="services-section">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">خدماتنا وحلولنا المتكاملة</h2>
                            <div className="title-underline"></div>
                        </div>
                        <div className="services-grid">
                            {services.map((service) => (
                                <div key={service.id} className="service-card">
                                    <div className="icon-wrapper ">
                                        {service.icon}
                                    </div>
                                    <h3 className="service-card-title">{service.title}</h3>
                                    <p className="service-card-text">{service.description}</p>

                                    <Link onClick={() => {
                                        requestAnimationFrame(() => {
                                            window.scrollTo(0, 0);
                                        });
                                    }} to={service.link} className="service-link">
                                        {service.linkText}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Differentiators Section */}
                <section className="differentiators-section ">
                    <div className="container differentiators-container">
                        <div className="image-side">
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Engineering Laboratory" className="diff-image" />
                        </div>
                        <div className="content-side ">
                            <h2 className="section-title-small">لماذا تضع المؤسسات الكبرى ثقتها في أركان؟</h2>
                            <div className="diff-list">
                                <div className="diff-item">
                                    <span className="diff-number">1</span>
                                    <div className="diff-text">
                                        <h4>بيئات العمل الحساسة </h4>
                                        <p>نمتلك خبرة استثنائية في العمل داخل المستشفيات والبنوك والمطارات دون تعطيل سير العمل اليومي، مع مراعاة كافة ضوابط الأمان.</p>
                                    </div>
                                </div>
                                <div className="diff-item">
                                    <span className="diff-number">2</span>
                                    <div className="diff-text">
                                        <h4>المعايير الدولية والمحلية</h4>
                                        <p>التزام صارم بكود البناء السعودي (SBC) وحاصلون على شهادات الأيزو (ISO) لضمان جودة هندسية غير قابلة للمساومة.</p>
                                    </div>
                                </div>
                                <div className="diff-item">
                                    <span className="diff-number">3</span>
                                    <div className="diff-text">
                                        <h4>السرعة والدقة التقنية</h4>
                                        <p>يدعمنا مكتب فني محترف يستخدم أحدث تقنيات النمذجة لضمان تسليم المشاريع وفق الجداول الزمنية المخطط لها بدقة.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Lead Magnet Section */}
                <section className="lead-magnet-section">
                    <div className="container">
                        <div className="cta-box">
                            <h2 className="cta-title white">هل تحتاج إلى تفاصيل فنية لملف المناقصة؟</h2>
                            <p className="cta-text">احصل على نسخة رقمية من ملف القدرات الفنية لشركة أركان المعمار الحديث لتفصيل الخبرات والمشاريع السابقة.</p>
                            <button className="download-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon icons-color">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" x2="12" y1="15" y2="3" />
                                </svg>
                                تحميل ملف القدرات الفنية
                            </button>
                        </div>
                    </div>
                </section>

                {/* Final Contact CTA */}
                <section className="final-cta-section">
                    <div className="container final-cta-container">
                        <div className="final-cta-content">
                            <h2 className="final-cta-title">دعنا نساعدك في هندسة نجاح مشروعك القادم</h2>
                            <p className="final-cta-subtitle">سيقوم مهندسونا بالرد على استفسارك الفني خلال أقل من 24 ساعة.</p>
                        </div>
                        <a
                            href="https://wa.me/966580242935?text=السلام%20عليكم،%20أرغب%20في%20الحصول%20على%20استشارة%20هندسية."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-btn"
                        >
                            تحدث مع مهندس متخصص الآن
                        </a>
                    </div>
                </section>
            </main>
















        </>
    );
};

export default OurServices;