import "./AccreditationsAndQuality.css";
import { Link } from "react-router-dom";











const AccreditationsAndQuality = () => {

    const services = [
        {
            title: "الاستشارات التقنية والدراسات",
            category: "خبرة فنية",
            description: "نركز على دراسات الجدوى المتعمقة والتخطيط الفني الدقيق لضمان نجاح المشاريع قبل وضع حجر الأساس، مع تحليل شامل للمخاطر والمتطلبات التقنية.",
            features: ["تحليل التربة والموقع", "دراسات الجدوى الاقتصادية", "تخطيط الموارد التقنية"]
        },
        {
            title: "إدارة المشاريع الإنشائية",
            category: "دقة التنفيذ",
            description: "نلتزم بأعلى معايير الجودة والتحكم الصارم في الجداول الزمنية، مما يضمن تسليم المشاريع المعقدة في الوقت المحدد وبكفاءة تشغيلية كاملة.",
            features: ["إدارة الموردين والمقاولين", "مراقبة الجودة الشاملة", "التقارير الدورية والإنجاز"]
        },
        {
            title: "تطوير البنية التحتية المتخصصة",
            category: "حلول استراتيجية",
            description: "متخصصون في تنفيذ مشاريع البنية التحتية للمواقع الحساسة مثل المراكز الطبية والقطاعات المصرفية التي تتطلب معايير أمنية وإنشائية فريدة.",
            features: ["مرافق الرعاية الصحية", "مراكز البيانات المحصنة", "المقرات البنكية السيادية"]
        }
    ];

    return (
        <>





            <div className="services-page" dir="rtl">
                {/* Hero Section */}
                <section className="s-hero my">
                    <div className="s-container">
                        <div className="s-hero-flex">
                            <div className="s-hero-content">
                                <h1>حلول هندسية متكاملة.. من المفهوم إلى التنفيذ.</h1>
                                <p>نقدم مجموعة شاملة من الخدمات الهندسية والإنشائية المصممة لمواجهة التحديات التقنية الأكثر تعقيداً في المملكة.</p>
                                <div className="s-hero-btns my">

                                    <Link to="/services" className="s-btn-primary">
                                        اطلب عرض خدماتنا
                                    </Link>

                                    <Link to="/previous-work" className="s-btn-outline">
                                        تصفح المشاريع
                                    </Link>
                                </div>
                            </div>
                            <div className="s-hero-visual">
                                <div className="s-image-stack">
                                    <div className="s-experience-card">
                                        <span className="s-exp-num">+15</span>
                                        <span className="s-exp-text">عاماً من التميز في الهندسة الإنشائية</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Services Grid */}
                <section className="s-services-section">
                    <div className="s-container">
                        <div className="s-section-header">
                            <span className="brand-badge">خدماتنا الرئيسية</span>
                            <h2>خبرة تقنية تتجاوز الحدود التقليدية</h2>
                        </div>
                        <div className="s-services-grid">
                            {services.map((service, index) => (
                                <div key={index} className="s-service-card">
                                    <div className="s-card-head">
                                        <span className="s-category">{service.category}</span>
                                        <h3>{service.title}</h3>
                                    </div>
                                    <p>{service.description}</p>
                                    <ul className="s-feature-list">
                                        {service.features.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Us Section */}
                <section className="s-why-us">
                    <div className="s-container">
                        <div className="s-why-grid">
                            <div className="s-why-image">
                                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" alt="Technical Drawing" />
                            </div>
                            <div className="s-why-content ">
                                <h3 className="white-color">لماذا يختارنا الرواد؟</h3>
                                <div className="s-reason-item">
                                    <h4>الالتزام بمعايير السلامة العالمية</h4>
                                    <p>نطبق بروتوكولات صارمة تتجاوز المعايير المحلية لضمان بيئة عمل آمنة ومنتجات مستدامة.</p>
                                </div>
                                <div className="s-reason-item">
                                    <h4>سرعة التنفيذ دون المساس بالجودة</h4>
                                    <p>منهجياتنا الرشيقة تسمح لنا بتحقيق الأهداف في فترات قياسية مع الحفاظ على أدق التفاصيل الإنشائية.</p>
                                </div>
                                <div className="s-reason-item">
                                    <h4>فريق متخصص من المهندسين ذوي الخبرة</h4>
                                    <p>نمتلك نخبة من الكفاءات الهندسية التي تجمع بين الخبرة العالمية والمعرفة العميقة بالسوق السعودي.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sector Focus */}
                <section className="s-sectors">
                    <div className="s-container">
                        <div className="s-section-header centered">
                            <span className="brand-badge">قطاعات متخصصة</span>
                            <h2 >خبرتنا في المواقع الحساسة</h2>
                            <p>نحن فخورون بكوننا الشريك الموثوق لتنفيذ المشاريع الاستراتيجية في القطاعين الطبي والمصرفي، حيث تلتقي المتطلبات الفنية العالية مع أعلى مستويات الأمان والسرية.</p>
                        </div>
                        <div className="s-sector-cards">
                            <div className="s-sector-card medical">
                                <div className="s-sector-overlay">
                                    <h4 className="white-color">القطاع الطبي والصحي</h4>
                                    <p>بناء المستشفيات والمختبرات المتقدمة بمعايير تعقيم عالمية.</p>
                                </div>
                            </div>
                            <div className="s-sector-card banking">
                                <div className="s-sector-overlay">
                                    <h4 className="white-color">القطاع المصرفي والمالي</h4>
                                    <p>تجهيز مراكز العمليات والقنوات الحصينة بتقنيات أمان متطورة.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="s-cta-section">
                    <div className="s-container">
                        <div className="s-cta-card">
                            <h3 className="white-color">هل أنت مستعد لبدء مشروعك القادم؟</h3>
                            <p>فريقنا من المستشارين المهندسين جاهز لمناقشة تحدياتك وتقديم الحلول التقنية الأكثر فعالية وكفاءة.</p>
                            <div className="s-cta-actions">
                                {/* <button className="s-btn-light">تواصل مع خبير</button> */}
                                <Link onClick={() => {
                                    requestAnimationFrame(() => {
                                        window.scrollTo(0, 0);
                                    });
                                }} to="/contact" className="s-btn-light">
                                    تواصل مع خبير
                                </Link>
                                <button className="s-btn-outline-white">تحميل ملف الشركة</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>





        </>
    );
};

export default AccreditationsAndQuality;