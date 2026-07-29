import "./HealthCare.css";
import { Link } from "react-router-dom";
export default function HealthCare() {


    return (
        <>


            <div className="healthcare-page">
                {/* 1. Hero Section */}
                <section className="hero ">
                    <div className="container ">
                        <h1 className="hero-title my-20">ريادة هندسية في تنفيذ المنشآت الطبية الأكثر حيوية وحساسية</h1>
                        <p className="hero-subtitle">
                            نمتلك سجل إنجازات يمتد لسنوات في خدمة القطاع الصحي العسكري والمدني. متخصصون في حلول البنية التحتية الطبية التي تلتزم بأعلى معايير مكافحة العدوى، سلامة المرضى، واستمرارية العمل في المواقع النشطة
                        </p>
                        <a href="#" className="btn-primary">اطلب ملف سوابق أعمال القطاع الطبي </a>
                    </div>
                </section>

                {/* 2. Features Section */}
                <section className="features">
                    <div className="container ">
                        <div className="center">
                            <h2 className="section-title ">ميزات "أركان" في القطاع الطبي</h2>
                        </div>

                        <div className="features-grid fixingAlignment">
                            <div className="feature-card">
                                <h3>إدارة المواقع الحساسة <br />(Zero-Disruption) </h3>
                                <p>نتميز بالقدرة على العمل في بيئات المستشفيات النشطة (غرف العمليات، أجنحة التنويم) مع عزل كامل للضجيج والاهتزازات والغبار.</p>
                            </div>
                            <div className="feature-card">
                                <h3>مطابقة معايير وزارة الصحة والدفاع المدني</h3>
                                <p>نلتزم بكود البناء السعودي للمنشآت الصحية واشتراطات السلامة العالمية.</p>
                            </div>
                            <div className="feature-card">
                                <h3>فريق MEP متخصص</h3>
                                <p>مهندسون خبراء في الأنظمة الميكانيكية والكهربائية الخاصة بالمستشفيات (مثل المصاعد الخدمية، وأنظمة التهوية المعزولة).</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Core Medical Services */}
                <section className="services">
                    <div className="container">
                        <div className="center">
                            <h2 className="section-title">خدماتنا المتخصصة للقطاع الصحي</h2>
                        </div>

                        <div className="services-grid fixingAlignment">
                            <div className="service-item">
                                <h4>أنظمة الغازات الطبية (Medical Gas Systems)</h4>
                                <p>توريد، تركيب، وصيانة شبكات الأوكسجين (LPG) والأنظمة المرتبطة بها لضمان تدفق آمن ومستمر.</p>
                            </div>
                            <div className="service-item">
                                <h4>إعادة تأهيل الأجنحة والخدمات</h4>
                                <p>تطوير الأجنحة الملكية، غرف المرضى، والمكاتب الإدارية الطبية بمواصفات "مقاومة للعدوى" وتشطيبات عالية الجودة.</p>
                            </div>
                            <div className="service-item">
                                <h4>المصاعد والأنظمة اللوجستية الطبية</h4>
                                <p>تركيب وصيانة المصاعد الخدمية والطبية المتخصصة (مثل مشروعنا في المبنى 58 بمدينة الأمير سلطان).</p>
                            </div>
                            <div className="service-item">
                                <h4>تجهيز غرف العمليات والمختبرات</h4>
                                <p>تنفيذ التجهيزات الإنشائية والكهربائية المتخصصة التي تتطلبها الأجهزة الطبية الدقيقة.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Success Story */}
                <section className="success-story">
                    <div className="container">
                        <div className="story-content">
                            <div className="story-stats">
                                <div className="stat-box">
                                    <span className="stat-value">+30,000,000</span>
                                    <span className="stat-label">ريال سعودي (قيمة المشاريع)</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-value">100%</span>
                                    <span className="stat-label">استمرارية الخدمة</span>
                                </div>
                            </div>
                            <div className="story-text fixingAlignment">
                                <h2 className="section-title" style={{ textAlign: 'right', color: 'white' }}>قصة نجاح: مدينة الأمير سلطان الطبية العسكرية</h2>
                                <p><strong>المشروع:</strong> إضافة 3 طوابق للمبنى رقم 41 وتأهيل الأجنحة الملكية.</p>
                                <p style={{ marginTop: '16px' }}><strong>التحدي:</strong> نقل وإعادة تركيب مخازن الأوكسجين وتطوير طوابق كاملة مع ضمان عدم انقطاع الخدمة عن المرضى للحظة واحدة.</p>
                                <p style={{ marginTop: '16px' }}><strong>النتيجة:</strong> تسليم هندسي متكامل عزز مكانة "أركان" كخيار أول للمشاريع الطبية العاجلة والمعقدة.</p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 5. CRO Strategy Section */}
                <section className="final-cta">
                    <div className="container ">
                        <div className="cta-box testt">
                            <h2 className="cta-title">هل تبحث عن شريك هندسي يفهم خصوصية منشأتك الطبية؟</h2>
                            <p className="cta-text">
                                نحن ندرك أن المشاريع الطبية لا تحتمل التأخير أو الخطأ الفني. فريقنا جاهز لتقديم حلول إنشائية تضمن سلامة منشأتك وراحة مرضاك.
                            </p>
                            {/* <a href="#" className="btn-secondary">تحدث مع مستشار هندسي للقطاع الطبي</a> */}
                            <Link onClick={() => {
                                requestAnimationFrame(() => {
                                    window.scrollTo(0, 0);
                                });
                            }} to="/contact" className="btn-secondary">
                                تحدث مع مستشار هندسي للقطاع الطبي
                            </Link>
                            <p className="micro-copy">"نحن معتمدون ومصنفون لتنفيذ مشاريع وزارة الصحة والجهات الطبية العسكرية"</p>
                        </div>
                    </div>
                </section>
            </div>
















        </>
    );
}