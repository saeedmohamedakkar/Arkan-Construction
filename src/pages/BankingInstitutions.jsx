import "./BankingInstitutions.css";
import { Link } from "react-router-dom";






const BankingInstitutions = () => {
  const advantages = [
    {
      title: "الالتزام باشتراطات SAMA",
      desc: "كافة أعمالنا مطابقة للمتطلبات الفنية والأمنية الصادرة عن البنك المركزي السعودي لضمان أعلى مستويات الجودة والامتثال."
    },
    {
      title: "إدارة المواقع النشطة",
      desc: "تنفيذ أعمال التطوير والترميم داخل الفروع القائمة دون التأثير على سير العمل اليومي أو تجربة العملاء."
    },
    {
      title: "السرية التامة وأمن المعلومات",
      desc: "نعتمد بروتوكولات صارمة لحماية البيانات والمخططات الهندسية والحفاظ على خصوصية المنشآت المالية."
    }
  ];

  const services = [
    {
      title: "تجهيز غرف الخزائن",
      desc: "إنشاء وتدعيم غرف الخزائن وفق أعلى معايير المقاومة والأنظمة الأمنية."
    },
    {
      title: "التشطيبات الفاخرة",
      desc: "تنفيذ الهوية الداخلية للبنوك بأعلى جودة وأفضل المواد والتفاصيل."
    },
    {
      title: "أنظمة الأمن والتيار المنخفض",
      desc: "كاميرات مراقبة، شبكات بيانات، أنظمة إنذار، ودخول ذكي متكاملة."
    },
    {
      title: "أنظمة MEP المصرفية",
      desc: "حلول كهربائية وميكانيكية وتكييف مصممة للعمل بكفاءة على مدار الساعة."
    }
  ];

  return (
    <div className="full-banking-page">

    

    <main className="banking-page" dir="rtl">

      {/* Hero */}

      <section className="hero">
        <div className="container hero-content">

          <div className="text-cent">
            <span className="brand-badge topText"> المنشآت المصرفية</span>

          </div>


          <h1 >
            شريككم المعتمد لتنفيذ الفروع البنكية والمراكز المالية وفق معايير
            SAMA.
          </h1>

          <p>
            نمتلك الخبرة والقدرة الفنية لتنفيذ وتجهيز المنشآت المصرفية الأكثر
            تعقيداً. من غرف الخزائن الحصينة إلى التشطيبات النهائية الفاخرة،
            نلتزم بالسرعة التي تسبق موعد الافتتاح والدقة التي تفرضها الأنظمة
            الأمنية.
          </p>

          <button className="primary-btn">
            اطلب ملف سابقة أعمال القطاع المصرفي (PDF)
          </button>

        </div>
      </section>

      {/* Why */}

      <section className="section">
        <div className="container">

          <div className="section-heading">
            <span>لماذا أركان؟</span>

            <h2>خبرة هندسية مخصصة للقطاع المصرفي</h2>
          </div>

          <div className="grid-3">

            {advantages.map((item, index) => (
              <div className="card" key={index}>
                <div className="icon">✓</div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Services */}

      <section className="section light-bg">

        <div className="container">

          <div className="section-heading">
            <span>خدماتنا</span>
            <h2>حلول متكاملة للبنوك والمؤسسات المالية</h2>
          </div>

          <div className="services-grid">

            {services.map((service, index) => (
              <div className="service-card" key={index}>

                <div className="service-number">
                  0{index + 1}
                </div>

                <h3>{service.title}</h3>

                <p>{service.desc}</p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Success Story */}

      <section className="section">

        <div className="container">

          <div className="success-box">

            <div className="success-left">

              <span className="success-label">
                قصة نجاح
              </span>

              <h2>تجهيز فروع مصرف الراجحي</h2>

              <p>
                تم تنفيذ وتجهيز فرع مصرف الراجحي (مثال: فرع سبت العلاية) وفق
                أعلى معايير الجودة والأمن، مع الالتزام الكامل بالجدول الزمني
                ومتطلبات البنك.
              </p>

            </div>

            <div className="success-right">

              <div className="stat">
                <h3 className="text-w">4,174,188</h3>
                <span>ريال قيمة العقد</span>
              </div>

              <div className="stat">
                <h3 className="text-w">100%</h3>
                <span>الالتزام بالجدول الزمني</span>
              </div>

              <div className="stat">
                <h3 className="text-w">شراكة</h3>
                <span>مستمرة مع المصرف</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section lastSection">

        <div className="container">

          <div className="cta-card dark-bg">

            <h2 className="text-w">
              هل تخطط لافتتاح أو تطوير فرعك القادم؟
            </h2>

            <p className="text-w">
              مهندسو المكتب الفني لدينا خبراء في تحويل المخططات إلى واقع ملموس
              يطابق أعلى المعايير البنكية.
            </p>

            
            <Link  onClick={() => {
              requestAnimationFrame(() => {
                window.scrollTo(0, 0);
              });
            }} to="/contact" className="primary-btn">
              اطلب استشارة فنية لمشروعك المصرفي
            </Link>

            <small className="my">
              نحن نحترم وقتكم؛ سيقوم مهندس الدراسات بالرد على استفساركم خلال 4
              ساعات عمل.
            </small>

          </div>

        </div>

      </section>

    </main>
    </div>
  );
};

export default BankingInstitutions;