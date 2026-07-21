import React from "react";
import "./Contact.css";

const { useState } = React;




const Contact = () => {
    const [formState, setFormState] = useState('idle'); // idle, loading, success
    const [focusedField, setFocusedField] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('loading');

        // Simulate API call
        setTimeout(() => {
            setFormState('success');
            e.target.reset();
            setTimeout(() => setFormState('idle'), 3000);
        }, 1500);
    };

    const ContactItem = ({ icon, label, value, dir }) => (
        <li className="contact-item">
            <div className="icon-box">
                <span className="material-symbols-outlined">{icon}</span>
            </div>
            <div>
                <p className="info-label">{label}</p>
                <p className="info-value" dir={dir}>{value}</p>
            </div>
        </li>
    );

    const TrustTrigger = ({ icon, text, colorClass }) => (
        <div className="trigger-item">
            <span className={`material-symbols-outlined`} style={{ color: `var(--status-success)` }}>{icon}</span>
            <p style={{ margin: 0 }}>{text}</p>
        </div>
    );
    return (

        <>


            <div className="antialiased">
                {/* Header */}
                <header className="header">
                    <div className="header-pattern"></div>
                    <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                        <span className="badge">تواصل معنا</span>
                        <h1 className="title">
                            لنبدأ في تحويل مخططاتكم إلى واقع ملموس
                        </h1>
                        <p className="subtitle">
                            سواء كنتم بصدد طرح مناقصة جديدة، أو تحتاجون إلى استشارة فنية لمشروع قائم، فريق "أركان" الهندسي جاهز لتقديم الدعم اللازم <br />
                            <span style={{ fontWeight: '700', color: 'var(--primary)', marginRight: '4px' }}>نلتزم بالرد على كافة الاستفسارات الفنية خلال 4 ساعات عمل</span>
                        </p>
                    </div>
                </header>

                {/* Main Content */}
                <main className="container">
                    <div className="main-grid">
                        {/* Form Section */}
                        <div className="form-col bento-card">
                            <div className="card-title-group fixingAlignment">
                                <span className="material-symbols-outlined " style={{ fontSize: '32px', color: 'var(--primary)' }}></span>
                                <h2 >طلب عرض سعر / استشارة فنية</h2>
                            </div>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                                    <div className="form-group fixingAlignment">
                                        <label className={`label ${focusedField === 'name' ? 'active' : ''}`}>الاسم الكامل والمسمى الوظيفي</label>
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="مثال: م. أحمد صالح - مدير مشاريع"
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                        />
                                    </div>
                                    <div className="form-group fixingAlignment">
                                        <label className={`label ${focusedField === 'company' ? 'active' : ''}`}>الشركة / الجهة الحكومية</label>
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="اسم المنشأة"
                                            onFocus={() => setFocusedField('company')}
                                            onBlur={() => setFocusedField(null)}
                                        />
                                    </div>
                                </div>

                                <div className="form-group fixingAlignment">
                                    <label className={`label  ${focusedField === 'phone' ? 'active' : ''}`}>رقم الجوال (للتواصل السريع)</label>
                                    <input
                                        type="tel"
                                        dir="rtl"
                                        className="input "
                                        placeholder="‎+966 5X XXX XXXX‎"
                                        style={{ textAlign: 'right' }}
                                        onFocus={() => setFocusedField('phone')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                </div>

                                <div className="form-group " style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                                    <div className="form-group textCenter">
                                        <label className={`label   ${focusedField === 'type' ? 'active' : ''}`}>نوع المشروع</label>
                                        <select
                                            className="select"
                                            defaultValue=""
                                            onFocus={() => setFocusedField('type')}
                                            onBlur={() => setFocusedField(null)}
                                        >
                                            <option value="" disabled>اختر النوع</option>
                                            <option>تجهيز فرع بنكي / منشأة مالية</option>
                                            <option>تطوير منشأة طبية / مستشفى</option>
                                            <option>بنية تحتية / أعمال كهرباء ومياه</option>
                                            <option>إنشاءات عامة / مباني</option>
                                        </select>
                                    </div>
                                    <div className="form-group textCenter ">
                                        <label className={`label  ${focusedField === 'phase' ? 'active' : ''}`}>مرحلة المشروع</label>
                                        <select
                                            className="select"
                                            defaultValue=""
                                            onFocus={() => setFocusedField('phase')}
                                            onBlur={() => setFocusedField(null)}
                                        >
                                            <option value="" disabled>اختر المرحلة</option>
                                            <option>دراسة أولية / فكرة</option>
                                            <option>مشروع قيد التصميم</option>
                                            <option>مناقصة حالية / طلب عرض سعر</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group fixingAlignment">
                                    <label className={`label ${focusedField === 'message' ? 'active' : ''}`}>تفاصيل الاستفسار</label>
                                    <textarea
                                        className="textarea"
                                        rows="4"
                                        placeholder="يرجى ذكر نبذة عن نطاق العمل المطلوب..."
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                    ></textarea>
                                </div>

                                <button className={`submit-btn ${formState === 'success' ? 'success' : ''}`} type="submit" disabled={formState === 'loading'}>
                                    {formState === 'idle' && (
                                        <>
                                            إرسال الطلب للمكتب الفني
                                            {/* <span className="material-symbols-outlined">send</span> */}
                                        </>
                                    )}
                                    {formState === 'loading' && (
                                        <>
                                            ...  جاري الإرسال
                                            {/* <span className="material-symbols-outlined" style={{animation: 'spin 1s linear infinite'}}>sync</span> */}
                                        </>
                                    )}
                                    {formState === 'success' && (
                                        <>
                                            تم الإرسال بنجاح
                                            {/* <span className="material-symbols-outlined">check_circle</span> */}
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Info Section */}
                        <div className="info-col fixingAlignment" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="bento-card info-card">
                                <h3 className="title" style={{ fontSize: '24px', margin: '0 0 2rem 0', textAlign: 'right' }}>معلومات المقر الرئيسي</h3>
                                <ul className="contact-list">
                                    <ContactItem icon={<svg
                                        className="iconsColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                                    </svg>} label="الموقع الجغرافي" value="الرياض - حي القدس - طريق الملك عبدالله" />
                                    <ContactItem icon={<svg
                                        className="iconsColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                                    </svg>} label="البريد الإلكتروني والصندوق" value={<>info@arkan-m.com.sa<br />صندوق بريد: 13214</>} />
                                    <ContactItem icon={<svg
                                        className="iconsColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2z" />
                                    </svg>} label="الهاتف المباشر" value="+966 58 024 2935" dir="ltr" />
                                    <ContactItem icon={<svg
                                        className="iconsColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1zm0 20a9 9 0 1 1 9-9 9 9 0 0 1-9 9zm1-14h-2v6l5 3 1-1.73-4-2.27V7z" />
                                    </svg>} label="ساعات العمل" value="الأحد - الخميس: 08:00 صباحاً - 05:00 مساءً" />
                                </ul>
                            </div>

                            <div className="bento-card trust-card">
                                <h3 className="title" style={{ fontSize: '24px', margin: '0 0 1.5rem 0', textAlign: 'right', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    {/* <span className="material-symbols-outlined">shield_with_heart</span> */}
                                    لماذا تتصل بنا الآن؟
                                </h3>
                                <TrustTrigger icon={<svg
                                    className="iconsColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M17 8h-1V6a4 4 0 10-8 0v2H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V10a2 2 0 00-2-2zm-6 8.73V18h2v-1.27a2 2 0 10-2 0zM10 8V6a2 2 0 114 0v2h-4z" />
                                </svg>} text="خصوصية تامة (اتفاقية NDA فورية)" />
                                <TrustTrigger icon={<svg
                                    className="iconsColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M19.14 12.94a7.96 7.96 0 000-1.88l2.03-1.58a.5.5 0 00.12-.64l-1.92-3.32a.5.5 0 00-.6-.22l-2.39.96a7.96 7.96 0 00-1.63-.95L14.5 2.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5l-.36 2.81a7.96 7.96 0 00-1.63.95l-2.39-.96a.5.5 0 00-.6.22L2.6 8.84a.5.5 0 00.12.64l2.03 1.58a7.96 7.96 0 000 1.88L2.72 14.52a.5.5 0 00-.12.64l1.92 3.32a.5.5 0 00.6.22l2.39-.96c.5.39 1.05.71 1.63.95l.36 2.81a.5.5 0 00.5.5h4a.5.5 0 00.5-.5l.36-2.81c.58-.24 1.13-.56 1.63-.95l2.39.96a.5.5 0 00.6-.22l1.92-3.32a.5.5 0 00-.12-.64l-2.03-1.58zM12 15.5A3.5 3.5 0 1112 8a3.5 3.5 0 010 7.5z" />
                                </svg>} text="تحدث مباشرة مع مهندسين، وليس بائعين" />
                                <TrustTrigger icon={<svg
                                    className="iconsColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
                                </svg>} text="استجابة تقنية خلال 4 ساعات عمل" />
                            </div>
                        </div>
                    </div>

                    {/* Interactive Map */}
                    <section className="map-section">
                        <div className="map-container">
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPML_hRtgi8QHzqkmt2KjhImF4TfbEL3G0guP8rjjYKaV4-QewtrUgc5pO9MrqpSEuSMAvgDFlNH37hagiyPApqJ7JWzVmRP_kslMUR_Un95kNje331ABDvX-mIPbqjUYPSmklriFGecXAmzQRjpe84rWF7b_4gOTqGaTLhhzBTm1LysHV1e0GrCNMyJjsJKHhGedqOMDK19HdwTKR3eH1bMfUs8cwkMPMNHjdk9SCFFlVkYVP5KEy')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}></div>
                            <div className="map-overlay">
                                <p className="info-label fixingAlignment" style={{ marginBottom: '0.25rem' }}>مقر أركان الرئيسي</p>
                                <p style={{ fontSize: '12px', color: 'var(--on-surface-variant)', margin: 0 }}>حي القدس، طريق الملك عبدالله، الرياض</p>

                                <a
                                    href="https://maps.google.com/?q=24.7136,46.6753"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="fixingAlignment"
                                    style={{
                                        marginTop: "0.75rem",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "4px",
                                        fontSize: "12px",
                                        color: "var(--primary)",
                                        fontWeight: "700",
                                        textDecoration: "none",
                                    }}
                                >
                                    فتح في خرائط جوجل
                                </a>
                            </div>
                            <div className="pin">
                                <div className="pulse"></div>
                                <div style={{
                                    position: 'absolute',
                                    width: '2rem',
                                    height: '2rem',
                                    backgroundColor: 'var(--primary)',
                                    borderRadius: '50%',
                                    border: '4px solid white',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <span className="material-symbols-outlined" style={{ color: 'white', fontSize: '18px' }}>location_on</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Floating WhatsApp */}
                <a className="whatsapp-float" href="https://wa.me/966580242935" target="_blank">
                    <div className="wa-tooltip">تحدث مع المهندس المناوب الآن</div>
                    <div className="wa-icon">
                        <svg className="wa-svg" width="32" height="32" fill="white" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                        </svg>
                        <div className="wa-pulse"></div>
                    </div>
                </a>

                <style>{`
                        @keyframes spin {
                            from { transform: rotate(0deg); }
                            to { transform: rotate(360deg); }
                        }
                    `}</style>
            </div>




        </>

    );

};

export default Contact;