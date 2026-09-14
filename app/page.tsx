'use client';

import { useEffect, useState } from 'react';
import {
  BarChart3,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  MapPinned,
  MessageCircleMore,
  Scale,
  Shield,
  UsersRound,
} from 'lucide-react';

const priorities = [
  { rank: 1, ar: 'حماية المدنيين', en: 'Civilian protection', value: 91, Icon: Shield },
  { rank: 2, ar: 'وقف الحرب', en: 'Ending the war', value: 88, Icon: HandHeart },
  { rank: 3, ar: 'المساعدات والخدمات', en: 'Aid and services', value: 75, Icon: HeartHandshake },
  { rank: 4, ar: 'العدالة', en: 'Justice', value: 68, Icon: Scale },
  { rank: 5, ar: 'التعليم', en: 'Education', value: 61, Icon: GraduationCap },
];

const stories = [
  {
    number: '01', image: 'images/youth-dialogue.jpg', alt: 'شباب سودانيون في جلسة حوار', metaAr: 'تحليل • 7 دقائق', metaEn: 'Analysis • 7 min',
    titleAr: 'لماذا يجب أن تكون الأجندة الشبابية وثيقة حيّة؟', titleEn: 'Why the youth agenda must be a living document',
    descAr: 'من المشاورة الأولى إلى التتبع المستمر للأولويات.', descEn: 'From initial consultation to continuous priority tracking.',
  },
  {
    number: '02', image: 'images/roundtable.jpg', alt: 'شباب وشابات في جلسة نقاش جماعية', metaAr: 'من المكاتب • 5 دقائق', metaEn: 'From chapters • 5 min',
    titleAr: 'كيف تختلف الأولويات بين الداخل ودول اللجوء؟', titleEn: 'How priorities differ across home and displacement',
  },
  {
    number: '03', image: 'images/youth-culture.jpg', alt: 'شاب سوداني يشارك في فعالية ثقافية', metaAr: 'منهجية • 6 دقائق', metaEn: 'Method • 6 min',
    titleAr: 'الذكاء الاصطناعي يساعد، لكنه لا يقرر', titleEn: 'AI can assist, but it must not decide',
  },
];

function LangText({ ar, en }: { ar: React.ReactNode; en: React.ReactNode }) {
  return <><span data-lang="ar">{ar}</span><span data-lang="en">{en}</span></>;
}

export default function Home() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="aurora" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="nav" id="top">
        <div className="shell nav-inner">
          <a className="logo" href="#top" aria-label="الأجندة الشبابية السودانية">
            <img src="logo-transparent.png" alt="شعار الأجندة الشبابية السودانية" />
            <span>
              <strong><LangText ar="الأجندة الشبابية السودانية" en="Sudan Youth Agenda" /></strong>
              <small>BY SUDANESE YOUTH NETWORK</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="التنقل الرئيسي">
            <a className="active" href="#top"><LangText ar="الرئيسية" en="Home" /></a>
            <a href="agenda/"><LangText ar="الأجندة" en="Agenda" /></a>
            <a href="voices/"><LangText ar="الأصوات" en="Voices" /></a>
            <a href="impact/"><LangText ar="الأثر" en="Impact" /></a>
            <a href="stories/"><LangText ar="المعرفة" en="Stories" /></a>
            <a href="methodology/"><LangText ar="المنهجية" en="Methodology" /></a>
            <a href="about/"><LangText ar="عن المنصة" en="About" /></a>
          </nav>

          <div className="actions">
            <button className="lang" type="button" aria-label={language === 'ar' ? 'Change language to English' : 'غيّر اللغة إلى العربية'} onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}>
              {language === 'ar' ? 'EN' : 'ع'}
            </button>
            <a className="btn btn-dark" href="participate/"><LangText ar="شارك بصوتك" en="Share your voice" /></a>
            <button className="menu" type="button" aria-label="القائمة" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
              <span /><span /><span />
            </button>
          </div>
        </div>

        <nav className={`shell mobile-panel${menuOpen ? ' open' : ''}`} aria-label="تنقل الهاتف">
          <a href="#top" onClick={closeMenu}><LangText ar="الرئيسية" en="Home" /></a>
          <a href="agenda/" onClick={closeMenu}><LangText ar="الأجندة" en="Agenda" /></a>
          <a href="voices/" onClick={closeMenu}><LangText ar="الأصوات" en="Voices" /></a>
          <a href="impact/" onClick={closeMenu}><LangText ar="الأثر" en="Impact" /></a>
          <a href="stories/" onClick={closeMenu}><LangText ar="المعرفة" en="Stories" /></a>
          <a href="methodology/" onClick={closeMenu}><LangText ar="المنهجية" en="Methodology" /></a>
          <a href="about/" onClick={closeMenu}><LangText ar="عن المنصة" en="About" /></a>
          <a href="participate/" onClick={closeMenu}><LangText ar="شارك بصوتك" en="Share your voice" /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="share">
          <div className="shell hero-grid">
            <div className="reveal on">
              <span className="eyebrow"><LangText ar="أجندة يصنعها الشباب" en="An agenda shaped by youth" /></span>
              <h1><LangText ar={<>من الصوت<br />إلى <span className="accent">الأثر.</span></>} en={<>From voice<br />to <span className="accent">impact.</span></>} /></h1>
              <p><LangText ar="منصة وطنية حيّة تجمع رؤى الشباب السوداني داخل البلاد وفي دول اللجوء والمهجر، وتحولها إلى أولويات موثقة ومناصرة يمكن تتبعها." en="A living national platform connecting Sudanese youth at home and across displacement and diaspora—turning their perspectives into evidence, priorities and traceable advocacy." /></p>
              <div className="hero-actions">
                <a className="btn btn-orange" href="participate/"><LangText ar="أضف صوتك" en="Share your voice" /></a>
                <a className="btn btn-soft" href="agenda/"><LangText ar="استكشف الأجندة" en="Explore the agenda" /></a>
              </div>
              <div className="trust-row">
                <div className="avatars" aria-hidden="true"><i /><i /><i /><i /></div>
                <span><LangText ar="أصوات من 18 ولاية و27 دولة إقامة — بيانات تجريبية" en="Voices across 18 states and 27 countries — demo data" /></span>
              </div>
            </div>

            <div className="visual hero-photo-stage reveal on" aria-label="شباب سودانيون ونبض المشاركة الآن">
              <figure className="hero-portrait"><img src="images/youth-group.jpg" alt="شباب سودانيون يشاركون في فعالية مجتمعية" /></figure>
              <div className="glass voice-card">
                <div className="voice-top"><strong><LangText ar="نبض الشباب الآن" en="Youth pulse now" /></strong><i className="pulse-dot" /></div>
                <div className="big-number">12,480 <small><LangText ar="مساهمة" en="contributions" /></small></div>
                <div className="spark" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
              </div>
              <div className="float-card fc1"><b>54%</b><LangText ar="مشاركة الشابات" en="young women" /></div>
              <div className="float-card fc2"><b>13</b><LangText ar="مكتباً مترابطاً" en="connected chapters" /></div>
              <div className="float-card fc3"><b>4</b><LangText ar="قنوات استماع" en="listening channels" /></div>
            </div>
          </div>
        </section>

        <section className="section section-deep" id="voices">
          <div className="shell">
            <div className="section-head reveal on">
              <div>
                <span className="eyebrow"><LangText ar="صورة متحركة للواقع" en="A live picture of reality" /></span>
                <h2><LangText ar={<>لا يوجد صوتٌ واحد<br />يمثل الجميع.</>} en={<>No single voice<br />represents everyone.</>} /></h2>
              </div>
              <a className="link-arrow" href="voices/"><LangText ar="افتح مرصد الأصوات ←" en="Open voice observatory →" /></a>
            </div>
            <div className="voices-media reveal on">
              <figure><img src="images/workshop-study.jpg" alt="شابة سودانية تتحدث في جلسة نقاش" /></figure>
              <figure><img src="images/roundtable.jpg" alt="مجموعة شباب في جلسة حوار حول الأولويات" /></figure>
              <div className="voices-note"><MessageCircleMore aria-hidden="true" /><strong><LangText ar="نستمع قبل أن نرتّب الأولويات" en="We listen before priorities are ranked" /></strong><span><LangText ar="حوار مباشر، مشاركة رقمية، وملاحظات من الميدان." en="Direct dialogue, digital participation and field observations." /></span></div>
            </div>
            <div className="metric-grid reveal on">
              <div className="metric"><MessageCircleMore aria-hidden="true" /><b>12,480</b><span><LangText ar="مساهمة نصية وصوتية وميدانية" en="text, voice and field contributions" /></span></div>
              <div className="metric"><MapPinned aria-hidden="true" /><b>18</b><span><LangText ar="ولاية سودانية" en="Sudanese states" /></span></div>
              <div className="metric"><UsersRound aria-hidden="true" /><b>27</b><span><LangText ar="دولة إقامة ولجوء" en="countries of residence" /></span></div>
              <div className="metric"><BarChart3 aria-hidden="true" /><b>54%</b><span><LangText ar="مشاركة الشابات" en="participation by young women" /></span></div>
            </div>
          </div>
        </section>

        <section className="section" id="agenda">
          <div className="shell priority-stage">
            <div className="glass feature-card reveal on">
              <span className="eyebrow"><LangText ar="أولويات داخل السودان" en="Priorities inside Sudan" /></span>
              <h3><LangText ar="ماذا يقول الشباب؟" en="What are young people saying?" /></h3>
              <p><LangText ar="تتغير الصورة حسب المكان والنوع الاجتماعي وتجربة النزوح. النسب هنا توضيحية لإظهار طريقة عمل المنصة." en="The picture changes by location, gender and displacement experience. Figures are illustrative to demonstrate how the platform works." /></p>
              <div className="priority-list">
                {priorities.map((item) => (
                  <div className="priority" key={item.rank}>
                    <span className="rank"><item.Icon aria-hidden="true" /></span>
                    <div><LangText ar={item.ar} en={item.en} /><div className="bar"><i style={{ width: `${item.value}%` }} /></div></div>
                    <span className="percentage">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass feature-card insight reveal on" id="methodology">
              <img className="insight-photo" src="images/youth-speaker.jpg" alt="شاب سوداني يشارك برأيه في جلسة حوار" />
              <div className="insight-content">
              <span className="insight-tag"><LangText ar="فجوة تمثيل مكتشفة" en="Representation gap" /></span>
              <h3><LangText ar="مَن لم نسمعه بعد؟" en="Who have we not heard yet?" /></h3>
              <p><LangText ar="المنصة لا تعرض الرأي الأعلى فقط؛ بل تكشف الفئات والمناطق ناقصة التمثيل حتى يوجّه الفريق جولة الاستماع التالية." en="The platform does more than rank opinions. It surfaces under-represented groups and locations to guide the next listening cycle." /></p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-deep" id="stories">
          <div className="shell">
            <div className="section-head reveal on">
              <div>
                <span className="eyebrow"><LangText ar="المعرفة من الميدان" en="Knowledge from the ground" /></span>
                <h2><LangText ar={<>قصص. تحليلات.<br />أصوات مباشرة.</>} en={<>Stories. Analysis.<br />First-hand voices.</>} /></h2>
              </div>
              <a className="link-arrow" href="stories/"><LangText ar="كل المنشورات ←" en="All stories →" /></a>
            </div>
            <div className="story-grid reveal on">
              {stories.map((story) => (
                <article className="story" key={story.number}>
                  <div className="story-cover photo-cover"><img src={story.image} alt={story.alt} /><b>{story.number}</b></div>
                  <div className="story-body">
                    <small><LangText ar={story.metaAr} en={story.metaEn} /></small>
                    <h3><LangText ar={story.titleAr} en={story.titleEn} /></h3>
                    {story.descAr && <p><LangText ar={story.descAr} en={story.descEn} /></p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="impact">
          <div className="shell cta reveal on">
            <div>
              <h2><LangText ar={<>صوتك لا ينتهي<br />عند زر الإرسال.</>} en={<>Your voice does not end<br />at “submit”.</>} /></h2>
              <p><LangText ar="تابع كيف انتقلت المساهمات من الاستماع إلى الأولويات، ثم إلى التوصيات والمناصرة والاستجابة." en="Follow how contributions move from listening to priorities, recommendations, advocacy and response." /></p>
            </div>
            <img className="cta-photo" src="images/youth-smiling.jpg" alt="شباب سودانيون خلال نشاط مجتمعي" />
            <a className="btn btn-soft" href="impact/"><LangText ar="تتبّع رحلة الأثر" en="Track the impact journey" /></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell">
          <div className="footer-grid">
            <div>
              <a className="logo" href="#top">
                <img src="logo-transparent.png" alt="" />
                <span><strong><LangText ar="الأجندة الشبابية السودانية" en="Sudan Youth Agenda" /></strong><small>BY SUDANESE YOUTH NETWORK</small></span>
              </a>
              <p><LangText ar="منصة تربط أصوات الشباب بالأدلة والسياسات والأثر." en="Connecting youth voices to evidence, policy and measurable impact." /></p>
            </div>
            <div>
              <h3><LangText ar="استكشف" en="Explore" /></h3>
              <a href="agenda/"><LangText ar="الأجندة الحيّة" en="Living agenda" /></a>
              <a href="voices/"><LangText ar="مرصد الأصوات" en="Voice observatory" /></a>
              <a href="stories/"><LangText ar="المقالات" en="Stories" /></a>
              <a href="about/"><LangText ar="عن المنصة" en="About the platform" /></a>
            </div>
            <div>
              <h3><LangText ar="الثقة" en="Trust" /></h3>
              <a href="methodology/"><LangText ar="المنهجية" en="Methodology" /></a>
              <a href="methodology/"><LangText ar="حماية البيانات" en="Data protection" /></a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Sudanese Youth Network (SYN)</span>
          </div>
        </div>
      </footer>
    </>
  );
}
