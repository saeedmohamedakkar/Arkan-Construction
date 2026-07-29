import "./Infrastructure.css";
import { Link } from "react-router-dom";

export default function Infrastructure() {


    return (
        <div className="infa-paeg">


            <div className="home-container" dir="rtl">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-overlay"></div>
                    <div className="container hero-content">
                        <h1 className="hero-title my">نبني الأساسات القوية لمستقبل المملكة الرقمي والحضري.</h1>
                        <p className="hero-subtitle">
                            متخصصون في تنفيذ مشاريع البنية التحتية والإنشاءات الكبرى التي تتطلب دقة هندسية ومعدات متطورة.
                            من شبكات المياه والكهرباء إلى تشييد المجمعات والمباني الخدمية، نلتزم بتنفيذ يدوم للأجيال وفق رؤية 2030.
                        </p>
                        <Link to="/contact" className="cta-button">طلب مراجعة فنية لمناقصة/مشروع </Link>
                    </div>
                </section>

                {/* Engineering Edge Section */}
                <section className="edge-section section-padding">
                    <div className="container">

                        <h2 className="section-title">فلسفة "أركان" في التنفيذ</h2>


                        <div className="edge-grid">
                            <div className="edge-card">
                                <div className="edge-icon">🏗️</div>
                                <h3>القوة التشغيلية</h3>
                                <p>نمتلك أسطولاً من المعدات والكوادر الفنية المؤهلة لإدارة أضخم مواقع العمل بكفاءة عالية.</p>
                            </div>
                            <div className="edge-card">
                                <div className="edge-icon">📜</div>
                                <h3>الالتزام بالكود السعودي</h3>
                                <p>جميع عمليات الحفر، الردم، والخرسانة تتم وفق أعلى المعايير الفنية لضمان سلامة المنشآت واستدامتها.</p>
                            </div>
                            <div className="edge-card">
                                <div className="edge-icon">📅</div>
                                <h3>إدارة المشاريع المتكاملة</h3>
                                <p>مكتب فني مخصص لمتابعة الجدول الزمني (Timeline) وضمان التسليم في الموعد المحدد دون تهاون في الجودة.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Services Section */}
                <section className="services-section section-padding">
                    <div className="container">
                        <h2 className="section-title text-white">خدماتنا في الإنشاءات والبنية التحتية</h2>
                        <div className="services-grid">
                            <div className="service-item">
                                <div className="service-content">
                                    <h3>الإنشاءات العامة</h3>
                                    <p>تنفيذ المباني التجارية، السكنية، والصناعية، مع خبرة خاصة في إنشاء مباني المحطات ومراكز التحكم.</p>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="service-content">
                                    <h3>شبكات المياه والصرف الصحي</h3>
                                    <p>تمديد وصيانة خطوط المياه الرئيسية، ومحطات التنقية، وشبكات الصرف الصحي وفق أحدث التقنيات.</p>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="service-content">
                                    <h3>الأعمال الكهربائية والجهد المتوسط</h3>
                                    <p>تمديد خطوط نقل الطاقة، تركيب المحولات، وإنارة الطرق والساحات.</p>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="service-content">
                                    <h3>أعمال الحفر والأساسات</h3>
                                    <p>متخصصون في أعمال الدفن، التسوية، والخرسانة المسلحة للمشاريع الكبرى والأبراج.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Proof Section */}
                <section className="proof-section section-padding">
                    <div className="container">
                        <h2 className="section-title">مشاريع برزت فيها قوتنا</h2>
                        <div className="proof-list">
                            <div className="proof-card">
                                <div className="proof-number">01</div>
                                <div className="proof-info">
                                    <h3 className="fixingWidth">مشروع محطات التوزيع ومباني التحكم</h3>
                                    <p>تنفيذ المنشآت الفنية التي تتطلب دقة عالية في العزل والتركيبات الكهربائية.</p>
                                </div>
                            </div>
                            <div className="proof-card">
                                <div className="proof-number">02</div>
                                <div className="proof-info">
                                    <h3 className="fixingWidth">مشروع شبكات الاتصالات والهاتف</h3>
                                    <p>تمديد البنية التحتية الرقمية لضمان اتصال موثوق ومستدام.</p>
                                </div>
                            </div>
                            <div className="proof-card">
                                <div className="proof-number">03</div>
                                <div className="proof-info">
                                    <h3 className="fixingWidth">مشروعات القطاع الحكومي</h3>
                                    <p>سجل حافل في تنفيذ المباني الخدمية ومواقف السيارات والمراكز التدريبية لجهات سيادية.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CRO Section */}
                <section className="cro-section section-padding">
                    <div className="container cro-content">
                        <h2 className="cro-heading">هل تبحث عن مقاول يمتلك القدرة على التنفيذ الفوري؟</h2>
                        <p className="cro-text">
                            بفضل هيكلنا التنظيمي القوي وإدارتنا المالية المتزنة، نحن مستعدون لاستلام مشاريع البنية التحتية والبدء فوراً في الميدان.
                        </p>
                        <Link onClick={() => {
                            requestAnimationFrame(() => {
                                window.scrollTo(0, 0);
                            });
                        }} to="/contact" className="cta-button-secondary">
                            ارسل تفاصيل مشروعك للمكتب الفني
                        </Link>
                        <p className="assurance-text myBtn">"نحن مصنفون ومعتمدون لدى وزارة الشؤون البلدية والقروية."</p>
                    </div>
                </section>
            </div>
























        </div>
    );
}