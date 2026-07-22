import React from "react";
import "./WhoWeAre.css";
import { Link } from "react-router-dom";
const WhoWeAre = () => {



    return (

        <>

            <div className="who-we-are-page">

                <div className="root ">

                    <main className="pt-20">
                        <section className="hero-section">
                            <div className="hero-bg-image" />
                            <div className="hero-gradient" />
                            <div className="hero-content fixingAlignment">
                                <span className="brand-badge">نحن</span>
                                <h1 className="hero-title">
                                    أركان المعمار الحديث.. إرث من الثقة، ورؤية تبني المستقبل.
                                </h1>
                                <p className="hero-description">
                                    منذ عام 2019، انطلقت شركة أركان المعمار الحديث ككيان وطني متخصص في صياغة المعالم الإنشائية وتطوير البنية التحتية في المملكة العربية السعودية. نحن لا نبني مجرد منشآت، بل نضع أساسات متينة تدعم الاقتصاد الوطني وتواكب تطلعات رؤية 2030.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <button className="btn-secondary">

                                        تحميل ملف الشركة التعريفي
                                    </button>
                                </div>
                            </div>
                        </section>
                        {/* About & Values Component */}
                        <section className="relative fixingAlignment">
                            <div className="absolute inset-0 blueprint-grid z-0" />
                            <div className="section-container">
                                <div className="mb-12">
                                    <h2 className="section-title">
                                        من نحن؟
                                        <span className="section-title-underline" />
                                    </h2>
                                    <p className="about-text">
                                        برزت أركان المعمار الحديث كاسم موثوق في قطاع المقاولات، حيث نجحنا في دمج الخبرات الهندسية التقليدية مع التقنيات الحديثة. تخصصنا في أصعب القطاعات (البنكي والطبي) جعل منا شريكاً استراتيجياً للجهات التي لا تقبل بأقل من الكمال.
                                    </p>
                                </div>
                                <div className="card-grid">
                                    <div className="info-card">
                                        <div className="icon-box">
                                            <span className="material-symbols-outlined text-4xl"><svg
                                                className="iconsColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M12 4.5C6.75 4.5 2.31 7.76.5 12c1.81 4.24 6.25 7.5 11.5 7.5S21.69 16.24 23.5 12C21.69 7.76 17.25 4.5 12 4.5zm0 12A4.5 4.5 0 1 1 16.5 12 4.5 4.5 0 0 1 12 16.5z" />
                                            </svg></span>
                                        </div>
                                        <h3 className="card-title">رؤيتنا</h3>
                                        <p className="card-body">
                                            أن نكون القوة الرائدة والمفضلة في قطاع الإنشاءات العامة والبنية التحتية، معترفاً بنا كمعيار للجودة والابتكار والاستدامة في المملكة.
                                        </p>
                                    </div>
                                    <div className="info-card">
                                        <div className="icon-box">
                                            <span className="material-symbols-outlined text-4xl"><svg
                                                className="iconsColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M4 3h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zm0 2v.5L12 12l8-6.5V5H4zm16 14V8l-8 6-8-6v11h16z" />
                                            </svg></span>
                                        </div>
                                        <h3 className="card-title">رسالتنا</h3>
                                        <p className="card-body">
                                            دفع عجلة التقدم الاقتصادي عبر تقديم حلول إنشائية متكاملة، مع الاستثمار في رأس المال البشري والالتزام بالاحترافية المطلقة في تنفيذ كل مشروع.
                                        </p>
                                    </div>
                                    <div className="advantage-card backgrcolor">
                                        <span className="advantage-number white">05+</span>
                                        <p className="font-semibold text-primary uppercase tracking-wider text-sm white">سنوات من التميز الهندسي المستمر في السوق السعودي</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Org Structure Component */}
                        <section className="bg-[#e9edff] py-20 textCenter">
                            <div className="section-container">
                                <div className="text-center mb-16">
                                    <h2 className="section-title">الهيكل التنظيمي</h2>
                                    <p className="card-body max-w-2xl mx-auto">.تعتمد أركان على هيكل إداري وفني متطور يضمن سلاسة التنفيذ ودقة المخرجات</p>
                                </div>
                                <div className="">
                                    <div className="bento-item md:col-span-3 md:row-span-1 flex items-start gap-6">
                                        <div className="bg-[#123A7A] text-white w-14 h-14 rounded-lg flex items-center justify-center shrink-0">
                                            {/* <span className="material-symbols-outlined">leaderboard</span> */}
                                        </div>
                                        <div>
                                            <h4 className="card-title text-xl mb-2">القيادة الاستراتيجية</h4>
                                            <p className="card-body">إدارة تنفيذية بخبرة عريضة في السوق السعودي تضع الخطط وتضمن سلاسة التدفق المالي للمشاريع</p>
                                        </div>
                                    </div>
                                    <div className="bento-item md:col-span-3 md:row-span-2 bento-brain">
                                        <div className="absolute top-8 right-8 opacity-20">
                                            {/* <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: '"FILL" 1' }}>psychology</span> */}
                                        </div>
                                        <h4 className="text-3xl font-bold mb-4 relative z-10 white">الإدارة الفنية (عقل الشركة)</h4>
                                        <p className="text-lg opacity-90 relative z-10">تضم مدير المشاريع، المكتب الفني، ومهندسي الدراسات ومراقبة الجودة (QA/QC) لضمان مطابقة كل مسمار للمواصفات</p>
                                    </div>
                                    <div className="bento-item md:col-span-3 md:row-span-1 flex items-start gap-6">
                                        <div className="bg-[#7f5600] text-white w-14 h-14 rounded-lg flex items-center justify-center shrink-0">
                                            {/* <span className="material-symbols-outlined">engineering</span> */}
                                        </div>
                                        <div>
                                            <h4 className="card-title text-xl mb-2">فرق التنفيذ الميداني</h4>
                                            <p className="card-body">مهندسو الموقع، المساحون، والعمالة الفنية المتخصصة المدعومة بورش ومعدات حديثة مملوكة للشركة</p>
                                        </div>
                                    </div>
                                    <div className="bento-item md:col-span-6 md:row-span-1 flex items-center gap-8">
                                        <div className="bg-[#49473c] text-white w-14 h-14 rounded-lg flex items-center justify-center shrink-0">
                                            {/* <span className="material-symbols-outlined">gavel</span> */}
                                        </div>
                                        <div>
                                            <h4 className="card-title text-xl mb-2">إدارة العلاقات العامة والقانونية</h4>
                                            <p className="card-body">لضمان التزام كافة العقود والممارسات بالأنظمة واللوائح الرسمية ومعايير النزاهة المهنية</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Trust Factors Component */}
                        <section className="py-20  ">
                            <div className="section-container  ">
                                <div className="trust-section testooo fixingAlignment">
                                    <div className="space-y-10">
                                        <h2 className="section-title">لماذا يختار الشركاء "أركان"؟</h2>
                                        <div className="space-y-8">
                                            <div className="trust-item">
                                                <div className="text-[#7f5600] mt-1">
                                                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}><svg
                                                        className="iconsColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="32"
                                                        height="32"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M12 2 4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3zm-1 13-3-3 1.41-1.41L11 12.17l3.59-3.58L16 10l-5 5z" />
                                                    </svg></span>
                                                </div>
                                                <div>

                                                    <h4 className="card-title text-xl mb-2">خبرة القطاع الحساس</h4>
                                                    <p className="card-body">سجل حافل في تنفيذ مشاريع دقيقة لجهات سيادية وطبية وبنوك كبرى تتطلب معايير أمنية وفنية صارمة.</p>
                                                </div>
                                            </div>
                                            <div className="trust-item">
                                                <div className="text-[#7f5600] mt-1">
                                                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}><svg
                                                        className="iconsColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="32"
                                                        height="32"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M20 6h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-10-2h4v2h-4V4zm10 14H4v-6h16v6zm0-8H4V8h16v2z" />
                                                    </svg></span>
                                                </div>
                                                <div >
                                                    <h4 className="card-title text-xl mb-2">القدرة المالية والفنية</h4>
                                                    <p className="card-body">ملاءة مالية قوية تمكننا من إدارة مشاريع ضخمة بميزانيات تتجاوز 20 مليون ريال للمشروع الواحد دون تعثر.</p>
                                                </div>
                                            </div>
                                            <div className="trust-item">
                                                <div className="text-[#7f5600] mt-1">
                                                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}><svg
                                                        className="iconsColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="32"
                                                        height="32"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M12 2 4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z" />
                                                    </svg></span>
                                                </div>
                                                <div>
                                                    <h4 className="card-title text-xl mb-2">المسؤولية الوطنية</h4>
                                                    <p className="card-body">شركة سعودية 100% تساهم بفخر في بناء الكوادر الوطنية وتطوير المحتوى المحلي بما يحقق الاستدامة الاقتصادية.</p>
                                                </div>
                                            </div>

                                            <div className="trust-item ">
                                                <div className="text-[#7f5600] mt-1">
                                                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}><svg
                                                        className="iconsColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="32"
                                                        height="32"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M12 2l2.47 5 5.53.8-4 3.9.94 5.5L12 14.8l-4.94 2.6.94-5.5-4-3.9 5.53-.8L12 2z" />
                                                    </svg></span>
                                                </div>
                                                <div>
                                                    <h4 className="card-title text-xl mb-2">الموثوقية</h4>
                                                    <p className="card-body">انضم إلى أكثر من 20 جهة كبرى وضعت ثقتها في أركان لتنفيذ مشاريعها الحيوية.</p>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                        {/* Final CTA Component */}
                        <section className="section-container pt-0 ">
                            <div className="cta-box">
                                <div className="absolute top-0 left-0 w-full h-full blueprint-grid opacity-20" />
                                <div className="relative z-10 max-w-4xl mx-auto">
                                    <h2 className="text-4xl md:text-5xl font-bold mb-6 white">خبرتنا هي ضمانك.. لنبدأ العمل على مشروعك القادم</h2>
                                    <p className="text-lg opacity-80 mb-10">خلف كل مشروع ناجح، هناك فريق هندسي منظم وخبرة ميدانية لا تُضاهى. نحن جاهزون لنكون جزءاً من قصة نجاح منشأتك القادمة</p>
                                    <div className="flex flex-wrap justify-center gap-4 mb-8">

                                        <Link onClick={() => {
                                            requestAnimationFrame(() => {
                                                window.scrollTo(0, 0);
                                            });
                                        }}
                                            to="/contact"
                                            className="inline-block bg-[#7f5600] text-white px-10 py-4 rounded-lg font-bold hover:scale-105 transition-transform contactUsBtn"
                                        >
                                            تواصل معنا
                                        </Link>

                                    </div>

                                    <p className="text-sm opacity-60 flex items-center justify-center gap-2">

                                        انضم إلى أكثر من 20 جهة كبرى وضعت ثقتها في أركان
                                    </p>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>



            </div>























        </>
    );
};

export default WhoWeAre;