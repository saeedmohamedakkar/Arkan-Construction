import "./MepSolutions.css";
import { Link } from "react-router-dom";


export default function MepSolutions() {



    return (
        <div className="mp-page-content">

            <div className="mep-page" dir="rtl">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <h1 className="hero-title">هندسة كهروميكانيكية ذكية تمنح منشآتكم الحياة والاستدامة</h1>
                        <p className="hero-subtitle">
                            نقدم حلول MEP متكاملة تجمع بين كفاءة الأداء وترشيد الاستهلاك. من تصميم أنظمة التكييف المركزي المعقدة إلى تنفيذ الشبكات الكهربائية وأنظمة السلامة، نحن نضمن تشغيل منشأتكم بأعلى معايير الدقة والاعتمادية 24/7.
                        </p>
                         <Link onClick={() => {
                            requestAnimationFrame(() => {
                                window.scrollTo(0, 0);
                            });
                        }} to="/contact" className="cta-button handleBtnSmallSc">
                            اطلب مراجعة للمخططات الكهروميكانيكية لمشروعك
                        </Link>
                    </div>
                </section>

                {/* Why Arkan Section */}
                <section className="features-section">
                    <div className="container">
                        <h2 className="section-title">لماذا أركان في أعمال الـ MEP؟</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">⚙️</div>
                                <h3 className="feature-heading">التكامل الهندسي</h3>
                                <p className="feature-text">نضمن توافق الأنظمة الكهربائية والميكانيكية والصحية (Plumbing) لتعمل كمنظومة واحدة متناغمة تمنع تضارب المسارات الفنية.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">⚡</div>
                                <h3 className="feature-heading">حلول موفرة للطاقة</h3>
                                <p className="feature-text">نعتمد أحدث التقنيات والمعدات التي تضمن أعلى أداء بأقل تكاليف تشغيلية وصيانة.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🛡️</div>
                                <h3 className="feature-heading">الالتزام بكود الدفاع المدني</h3>
                                <p className="feature-text">جميع أنظمة مكافحة الحريق والإنذار تنفذ وفق اشتراطات الكود السعودي لضمان سلامة الأرواح والمنشأة.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Services Section */}
                <section className="services-section">
                    <div className="container">
                        <h2 className="section-title">خدماتنا الكهروميكانيكية المتكاملة</h2>
                        <div className="services-grid">
                            <div className="service-item">
                                <h3 className="service-heading">الأعمال الكهربائية (Electrical)</h3>
                                <p className="service-text">تمديدات الجهد المتوسط والمنخفض، لوحات التوزيع الرئيسية، وأنظمة الإنارة الداخلية والخارجية الذكية.</p>
                            </div>
                            <div className="service-item">
                                <h3 className="service-heading">أنظمة التكييف والتهوية (HVAC)</h3>
                                <p className="service-text">تصميم وتنفيذ أنظمة التكييف المركزي (Chiller & Package Units) وأنظمة تبريد المياه وتجديد الهواء.</p>
                            </div>
                            <div className="service-item">
                                <h3 className="service-heading">الأعمال الصحية والسباكة (Plumbing)</h3>
                                <p className="service-text">تمديد شبكات المياه، أنظمة الصرف الصحي، وتركيب المضخات والخزانات بمواصفات تدوم طويلاً.</p>
                            </div>
                            <div className="service-item">
                                <h3 className="service-heading">أنظمة السلامة ومكافحة الحريق</h3>
                                <p className="service-text">تركيب أنظمة الرش الآلي، كواشف الدخان، وأنظمة الإنذار المبكر المعتمدة.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Specialized Proof Section */}
                <section className="specialized-section">
                    <div className="container">
                        <h2 className="section-title">خبرتنا في الأنظمة الحساسة</h2>
                        <div className="specialized-list">
                            <div className="specialized-card">
                                <h4>أنظمة الغازات المركزية (LPG)</h4>
                                <p>خبرة عريضة في تنفيذ شبكات الغاز للمطاعم، المستشفيات، والمجمعات السكنية بأعلى معايير الأمان.</p>
                            </div>
                            <div className="specialized-card">
                                <h4>أنظمة التيار المنخفض (Low Voltage)</h4>
                                <p>تنفيذ شبكات الهاتف، كاميرات المراقبة (CCTV)، وأنظمة الدخول الذكي للشركات والبنوك.</p>
                            </div>
                            <div className="specialized-card">
                                <h4>محطات التوزيع ومباني التحكم</h4>
                                <p>سجل حافل في تنفيذ الأعمال الكهروميكانيكية للمنشآت الفنية ذات المتطلبات الخاصة.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CRO Strategy Section */}
                <section className="cro-section ">
                    <div className="container">
                        <div className="cro-card">
                            <h2 className="cro-title handleText">هل تبحث عن حلول MEP تنهي مشاكل الصيانة المتكررة؟</h2>
                            <p className="cro-text">
                                نحن لا نقوم بالتركيب فقط؛ نحن نصمم حلولاً تضمن سهولة الصيانة وطول العمر الافتراضي لكل قطعة في منشأتك. دع مكتبنا الفني يراجع مخططاتك لتفادي أي أخطاء في التنفيذ.
                            </p>
                             <Link onClick={() => {
                                requestAnimationFrame(() => {
                                    window.scrollTo(0, 0);
                                });
                            }} to="/contact" className="cta-button secondary handleBtnSmallSc">
                                احصل على استشارة تقنية لأعمال MEP
                            </Link>
                            <p className="micro-copy">"نستخدم قطع غيار ومعدات من كبار الموردين المعتمدين لضمان الجودة."</p>
                        </div>
                    </div>
                </section>
            </div>




























        </div>
    );
}