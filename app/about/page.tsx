'use client';

import { useEffect, useState } from 'react';
import { Activity, Bot, Landmark, Lightbulb, ListChecks, Map, MapPinned, MessageCircle, Mic2, Newspaper, Radio, Route, ScanSearch, ShieldCheck, type LucideIcon } from 'lucide-react';

function LangText({ ar, en }: { ar: React.ReactNode; en: React.ReactNode }) {
  return <><span data-lang="ar">{ar}</span><span data-lang="en">{en}</span></>;
}

const spaces: Array<{ num: string; ar: string; en: string; descAr: string; descEn: string; Icon: LucideIcon }> = [
  { num: '01', ar: 'صوت الشباب', en: 'Youth Voice', descAr: 'شارك رأيك أو مقترحك عبر قناة آمنة وسهلة.', descEn: 'Share a view or proposal through a safe, accessible channel.', Icon: Mic2 },
  { num: '02', ar: 'الأجندة الشبابية', en: 'Youth Agenda', descAr: 'اعرف أولويات الشباب وكيف تتغير حسب المكان والتجربة.', descEn: 'See youth priorities and how they change by place and experience.', Icon: ListChecks },
  { num: '03', ar: 'نبض الشباب', en: 'Youth Pulse', descAr: 'أسئلة قصيرة دورية ترصد القضايا الأكثر إلحاحاً.', descEn: 'Short recurring questions track the most urgent issues.', Icon: Activity },
  { num: '04', ar: 'خريطة الأصوات', en: 'Youth Map', descAr: 'صورة مجمّعة للأصوات داخل السودان ودول الإقامة واللجوء.', descEn: 'An aggregated picture of voices across Sudan and countries of residence.', Icon: Map },
  { num: '05', ar: 'بنك المقترحات', en: 'Proposal Bank', descAr: 'مقترحات وتوصيات منظمة يمكن تتبع مسارها.', descEn: 'Organized proposals and recommendations with a traceable journey.', Icon: Lightbulb },
  { num: '06', ar: 'مرصد السياسات', en: 'Policy Observatory', descAr: 'أوراق وبيانات وتحليلات متاحة للباحثين وصناع القرار.', descEn: 'Papers, data and analysis for researchers and decision-makers.', Icon: Newspaper },
  { num: '07', ar: 'متتبع الأثر', en: 'Impact Tracker', descAr: 'يوضح أين وصل صوت الشباب وما الذي تغيّر بسببه.', descEn: 'Shows where youth input went and what changed because of it.', Icon: Route },
];

export default function AboutPage() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <>
      <div className="aurora" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="nav" id="top">
        <div className="shell nav-inner">
          <a className="logo" href="../" aria-label="الأجندة الشبابية السودانية">
            <img src="../logo-transparent.png" alt="شعار الأجندة الشبابية السودانية" />
            <span><strong><LangText ar="الأجندة الشبابية السودانية" en="Sudan Youth Agenda" /></strong><small>BY SUDANESE YOUTH NETWORK</small></span>
          </a>
          <nav className="nav-links" aria-label="التنقل الرئيسي">
            <a href="../"><LangText ar="الرئيسية" en="Home" /></a>
            <a href="../agenda/"><LangText ar="الأجندة" en="Agenda" /></a>
            <a href="../voices/"><LangText ar="الأصوات" en="Voices" /></a>
            <a href="../impact/"><LangText ar="الأثر" en="Impact" /></a>
            <a href="../stories/"><LangText ar="المعرفة" en="Stories" /></a>
            <a href="../methodology/"><LangText ar="المنهجية" en="Methodology" /></a>
            <a className="active" href="#top"><LangText ar="عن المنصة" en="About" /></a>
          </nav>
          <div className="actions">
            <button className="lang" type="button" onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')} aria-label="Change language">{language === 'ar' ? 'EN' : 'ع'}</button>
            <a className="btn btn-dark" href="../participate/"><LangText ar="شارك بصوتك" en="Share your voice" /></a>
            <button className="menu" type="button" aria-label="القائمة" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
          </div>
        </div>
        <nav className={`shell mobile-panel${menuOpen ? ' open' : ''}`} aria-label="تنقل الهاتف">
          <a href="../"><LangText ar="الرئيسية" en="Home" /></a>
          <a href="../agenda/"><LangText ar="الأجندة" en="Agenda" /></a>
          <a href="../voices/"><LangText ar="الأصوات" en="Voices" /></a>
          <a href="../impact/"><LangText ar="الأثر" en="Impact" /></a>
          <a href="../stories/"><LangText ar="المعرفة" en="Stories" /></a>
          <a href="../methodology/"><LangText ar="المنهجية" en="Methodology" /></a>
          <a href="#top" onClick={() => setMenuOpen(false)}><LangText ar="عن المنصة" en="About" /></a>
        </nav>
      </header>

      <main>
        <section className="about-hero">
          <div className="shell about-hero-grid">
            <div className="reveal on">
              <a className="breadcrumbs" href="../"><LangText ar="الرئيسية ← عن المنصة" en="Home → About" /></a>
              <span className="eyebrow"><LangText ar="منصة مشاركة سياسية حيّة" en="A living civic participation platform" /></span>
              <h1><LangText ar={<>استمع. افهم.<br />حوّل إلى <span className="accent">تأثير.</span></>} en={<>Listen. Understand.<br />Turn voices into <span className="accent">impact.</span></>} /></h1>
              <p><LangText ar="منصة الأجندة الشبابية السودانية ليست صندوقاً لجمع الآراء ولا لوحة أرقام فقط. إنها دورة متكاملة تجمع أصوات الشباب، تنظّمها وتحللها، ثم تحولها إلى أولويات وتوصيات ومناصرة يمكن تتبع أثرها." en="The Sudan Youth Agenda Platform is not a suggestion box or a dashboard alone. It is a connected cycle that gathers youth voices, organizes and analyses them, then turns them into priorities, recommendations and traceable advocacy." /></p>
            </div>
            <div className="about-collage reveal on" aria-label="صور من أنشطة الشبكة الشبابية السودانية">
              <figure className="collage-main"><img src="../images/youth-group.jpg" alt="شباب سودانيون يشاركون في نشاط للشبكة" /></figure>
              <figure><img src="../images/youth-dialogue.jpg" alt="شباب سودانيون في جلسة حوار" /></figure>
              <figure><img src="../images/workshop-study.jpg" alt="شابة سودانية تطرح رأيها في جلسة نقاش" /></figure>
            </div>
          </div>
        </section>

        <section className="section section-deep">
          <div className="shell">
            <div className="section-head">
              <div><span className="eyebrow"><LangText ar="كيف تعمل" en="How it works" /></span><h2><LangText ar="ثلاث وظائف مترابطة." en="Three connected functions." /></h2></div>
            </div>
            <div className="function-grid">
              <article><MessageCircle aria-hidden="true" /><b>01</b><h3><LangText ar="استمع" en="Listen" /></h3><p><LangText ar="نجمع أصوات الشباب من الموقع والمكاتب والحوار المجتمعي والقنوات منخفضة الإنترنت." en="We gather youth voices through the website, chapters, community dialogue and low-bandwidth channels." /></p></article>
              <article><ScanSearch aria-hidden="true" /><b>02</b><h3><LangText ar="افهم" en="Understand" /></h3><p><LangText ar="ننظم المساهمات ونكتشف الأنماط والفجوات مع مراجعة بشرية واضحة." en="We organize contributions and surface patterns and representation gaps with clear human review." /></p></article>
              <article><Landmark aria-hidden="true" /><b>03</b><h3><LangText ar="حوّل إلى تأثير" en="Turn into impact" /></h3><p><LangText ar="نحوّل الأدلة إلى أولويات وتوصيات وأوراق مناصرة ثم نتابع ما حدث لها." en="We turn evidence into priorities, recommendations and advocacy papers, then track what happens." /></p></article>
            </div>
            <div className="journey" aria-label="رحلة صوت الشباب">
              {['الصوت', 'الأدلة', 'التحليل', 'الأولويات', 'التوصيات', 'المناصرة', 'المتابعة'].map((step, index) => <span key={step}><b>{String(index + 1).padStart(2, '0')}</b>{step}</span>)}
            </div>
            <figure className="section-photo-band"><img src="../images/roundtable.jpg" alt="حلقة نقاش شبابية تجمع آراء المشاركين" /></figure>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-head">
              <div><span className="eyebrow"><LangText ar="مساحات المنصة" en="Platform spaces" /></span><h2><LangText ar="سبع نوافذ لصوت واحد لا يضيع." en="Seven spaces so no voice gets lost." /></h2></div>
            </div>
            <div className="space-grid">
              {spaces.map(({ num, ar, en, descAr, descEn, Icon }) => <article key={num}><Icon aria-hidden="true" /><b>{num}</b><h3><LangText ar={ar} en={en} /></h3><p><LangText ar={descAr} en={descEn} /></p></article>)}
            </div>
          </div>
        </section>

        <section className="section section-deep">
          <div className="shell about-split">
            <div className="glass principle-card">
              <img className="principle-photo" src="../images/youth-dialogue.jpg" alt="نقاش مباشر بين شباب سودانيين" />
              <Radio aria-hidden="true" />
              <span className="eyebrow"><LangText ar="رقمي وميداني" en="Digital and field-based" /></span>
              <h2><LangText ar="المشاركة لا تعتمد على الموقع وحده." en="Participation does not depend on the website alone." /></h2>
              <p><LangText ar="الموقع، الهاتف وواتساب تتكامل مع مجموعات النقاش ومشاورات المكاتب والحوارات المجتمعية والاستبيانات الورقية، ثم تدخل كلها في نموذج بيانات واحد." en="The website, mobile and WhatsApp connect with focus groups, chapter consultations, community dialogues and paper surveys—all feeding one data model." /></p>
              <div className="channel-tags"><span>Website</span><span>Mobile</span><span>WhatsApp</span><span>Chapters</span><span>Field Dialogues</span></div>
            </div>
            <div className="glass principle-card">
              <img className="principle-photo" src="../images/workshop-study.jpg" alt="مشاركة شابة في ورشة حوار" />
              <ShieldCheck aria-hidden="true" />
              <span className="eyebrow"><LangText ar="الثقة أولاً" en="Trust first" /></span>
              <h2><LangText ar="بيانات مفيدة وآمنة." en="Useful data, safely handled." /></h2>
              <p><LangText ar="تظهر للجمهور الاتجاهات والأولويات المجمعة، بينما تبقى البيانات البحثية ضمن وصول مقيّد، وتُعزل أي معلومات قد تكشف هوية المشارك في طبقة شديدة الحماية." en="The public sees aggregated trends and priorities. Research data stays restricted, while any identity-revealing information is isolated in a highly protected layer." /></p>
              <div className="privacy-levels"><span><b>PUBLIC</b><LangText ar="أولويات ونتائج مجمعة" en="Aggregated priorities" /></span><span><b>RESTRICTED</b><LangText ar="بيانات البحث والتحليل" en="Research data" /></span><span><b>HIGHLY RESTRICTED</b><LangText ar="معلومات الهوية الحساسة" en="Sensitive identity data" /></span></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell ai-panel">
            <div><Bot aria-hidden="true" /><span className="eyebrow"><LangText ar="الذكاء الاصطناعي يساعد" en="AI can assist" /></span><h2><LangText ar="يكتشف الأنماط، لكنه لا يقرر." en="It finds patterns. It does not decide." /></h2></div>
            <p><LangText ar="تستخدم المنصة التحليل اللغوي لتجميع المقترحات المتشابهة، التلخيص واكتشاف التكرار والفجوات. القرار حول ما يعبّر عن الشباب وما يُنشر يظل خاضعاً لمراجعة بشرية ومنهجية معلنة." en="The platform can use language analysis to group similar proposals, summarize content and detect duplication and gaps. Decisions about what represents youth and what gets published remain subject to human review and a transparent methodology." /></p>
            <figure className="ai-photo"><img src="../images/youth-speaker.jpg" alt="شاب يشرح وجهة نظره خلال جلسة نقاش" /></figure>
          </div>
        </section>

        <section className="section" id="about-impact">
          <div className="shell cta">
            <div><MapPinned aria-hidden="true" /><h2><LangText ar={<>صوت الشباب يبدأ هنا،<br />ولا ينتهي هنا.</>} en={<>Youth voices start here,<br />but they do not end here.</>} /></h2><p><LangText ar="المعيار الحقيقي هو القدرة على إظهار الرحلة من المساهمة الأولى إلى التوصية والاجتماع والتغيير القابل للإثبات." en="The real measure is the ability to show the journey from a first contribution to a recommendation, a meeting and evidence of change." /></p></div>
            <img className="cta-photo" src="../images/youth-smiling.jpg" alt="مشارك شاب في نشاط للشبكة" />
            <a className="btn btn-soft" href="../impact/"><LangText ar="شاهد مسار الأثر" en="See the impact journey" /></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell">
          <div className="footer-grid">
            <div><a className="logo" href="../"><img src="../logo-transparent.png" alt="" /><span><strong><LangText ar="الأجندة الشبابية السودانية" en="Sudan Youth Agenda" /></strong><small>BY SUDANESE YOUTH NETWORK</small></span></a><p><LangText ar="منصة تربط أصوات الشباب بالأدلة والسياسات والأثر." en="Connecting youth voices to evidence, policy and measurable impact." /></p></div>
            <div><h3><LangText ar="استكشف" en="Explore" /></h3><a href="../agenda/"><LangText ar="الأجندة الحيّة" en="Living agenda" /></a><a href="../voices/"><LangText ar="مرصد الأصوات" en="Voice observatory" /></a><a href="../stories/"><LangText ar="المعرفة" en="Knowledge" /></a></div>
            <div><h3><LangText ar="الثقة" en="Trust" /></h3><a href="#top"><LangText ar="عن المنصة" en="About" /></a><a href="../methodology/"><LangText ar="المنهجية" en="Methodology" /></a><a href="../participate/"><LangText ar="شارك بصوتك" en="Share your voice" /></a></div>
          </div>
          <div className="footer-bottom"><span>© 2026 Sudanese Youth Network (SYN)</span></div>
        </div>
      </footer>
    </>
  );
}
