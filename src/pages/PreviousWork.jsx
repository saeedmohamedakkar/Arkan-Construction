import "./PreviousWork.css";
import { Link } from "react-router-dom";








function PreviousWork() {

    const projects = [
        {
            id: 1,
            category: 'القطاع الطبي',
            title: 'إضافة 3 طوابق للمبنى رقم 41 - مدينة الأمير سلطان الطبية',
            value: '20,000,000 ريال سعودي',
            challenge: 'التنفيذ الإنشائي فوق مبنى قائم ونشط طبياً، مع ضرورة عزل الضجيج والاهتزازات بنسبة 100%.',
            result: 'استخدام تقنيات البناء الصامت والجداول الزمنية الليلية لضمان عدم توقف العمليات الطبية. تم التسليم بنجاح تام.',
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 2,
            category: 'القطاع المصرفي',
            title: 'تجهيز وتطوير فرع مصرف الراجحي (سبت العلاية)',
            value: '4,174,188 ريال سعودي',
            challenge: 'تطبيق الهوية البصرية الجديدة للمصرف مع الالتزام بكافة اشتراطات الأنظمة الأمنية لـ "ساما" في وقت قياسي.',
            result: 'تسليم الفرع "جاهزاً للتشغيل" قبل موعد الافتتاح الرسمي بـ 5 أيام.',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 3,
            category: 'المنشآت الدينية',
            title: 'تصميم وتشييد مسجد الريمال للشيخ سليمان اليحيى',
            value: '7,000,000 ريال سعودي',
            challenge: 'الموازنة بين التصميم المعماري الجمالي والمتانة الإنشائية في بيئة رملية.',
            result: 'صرح معماري متميز يُعد علامة بارزة في المنطقة، تم تسليمه وفق الميزانية المعتمدة.',
            image: 'https://images.unsplash.com/photo-1542668595-fa9394e5b686?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (


        <>






            <div className="portfolio-page" dir="rtl">
                {/* Hero Section */}
                <section className="hero-section  ">
                    <div className="container">
                        <div className="hero-content">
                            <span className="brand-badge ">إرث من التميز الهندسي</span>

                            <h1 className="hero-title fixingAlignment">سجل حافل بالإنجازات.. مشاريع استراتيجية تنهض بالوطن.</h1>

                            <p ClassName="test fixingAlignment">
                                نفخر بتنفيذ مشاريع إنشائية وبنية تحتية معقدة بقيمة تجاوزت 50 مليون ريال،
                                بالتعاون مع كبرى المؤسسات المالية والطبية والجهات الحكومية في المملكة.
                                كل مشروع هو قصة نجاح نلتزم فيها بالدقة، الأمان، والجدول الزمني.
                            </p>
                            <button className="btn-secondary">تحميل ملف سابقة الأعمال الكامل </button>
                        </div>

                    </div>
                </section>

                {/* Filter Section */}
                <section className="filter-section">
                    <div className="container">
                        <div className="filter-tabs">

                            <button className="filter-tab">المشاريع المصرفية</button>
                            <button className="filter-tab">المشاريع الطبية</button>
                            <button className="filter-tab">البنية التحتية</button>
                            <button className="filter-tab">المباني العامة</button>
                        </div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="projects-section">
                    <div className="container ">
                        <div className="textCenter"><h2 className="section-title">دراسات الحالة المختارة</h2></div>

                        <div className="projects-grid">
                            {projects.map((project) => (
                                <div key={project.id} className="project-card">
                                    <div className="project-image">
                                        <img src={project.image} alt={project.title} />
                                        <span className="project-category">{project.category}</span>
                                    </div>
                                    <div className="project-details">
                                        <h3>{project.title}</h3>
                                        <div className="project-meta">
                                            <span className="value-label">قيمة المشروع:</span>
                                            <span className="value-amount">{project.value}</span>
                                        </div>
                                        <div className="info-block">
                                            <h4>التحدي</h4>
                                            <p>{project.challenge}</p>
                                        </div>
                                        <div className="info-block success">
                                            <h4>النتيجة</h4>
                                            <p>{project.result}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="stats-section main-color">
                    <div className="container">
                        <div className="stats-grid">
                            <div className="stat-item">
                                <span className="stat-number">+50 مليون ريال</span>
                                <span className="stat-label">قيمة المشاريع المنفذة</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">80%</span>
                                <span className="stat-label">نسبة تكرار التعامل مع قطاع البنوك</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">0</span>
                                <span className="stat-label">سجل نظيف من الحوادث </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="final-cta test500">
                    <div className="container">
                        <div className="cta-box">
                            <h2 >هل لديك مشروع قادم يتطلب دقة في التنفيذ؟</h2>
                            <p >
                                لقد أثبتنا كفاءتنا في أصعب المواقع الإنشائية والحساسة. فريقنا جاهز لدراسة مخططات مشروعك القادم وتقديم عرض فني متكامل.
                            </p>
                            <div className="cta-actions">
                                {/* <button className="btn-secondary">اطلب استشارة فنية الآن</button> */}
                                <Link onClick={() => {
                                    requestAnimationFrame(() => {
                                        window.scrollTo(0, 0);
                                    });
                                }} to="/contact" className="btn-secondary">
                                    اطلب استشارة فنية الآن
                                </Link>
                                <span className="micro-text ">انضم إلى قائمة عملائنا المميزين مثل مصرف الراجحي ووزارة الصحة.</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

























        </>
    );
}

export default PreviousWork;