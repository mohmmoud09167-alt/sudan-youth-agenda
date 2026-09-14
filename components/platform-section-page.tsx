'use client';

import { useEffect, useState } from 'react';
import {
  Activity,
  BarChart3,
  BookOpenText,
  CheckCircle2,
  Compass,
  Lightbulb,
  MapPinned,
  MessageCircleMore,
  Route,
  ShieldCheck,
} from 'lucide-react';

export type PlatformPageConfig = {
  active: 'agenda' | 'voices' | 'impact' | 'stories' | 'methodology' | 'participate';
  eyebrowAr: string;
  eyebrowEn: string;
  titleAr: string;
  titleEn: string;
  introAr: string;
  introEn: string;
  image: string;
  imageAlt: string;
  badgeAr: string;
  badgeEn: string;
  stats: Array<{ value: string; ar: string; en: string }>;
  sectionAr: string;
  sectionEn: string;
  features: Array<{ ar: string; en: string; descAr: string; descEn: string }>;
  detailTitleAr: string;
  detailTitleEn: string;
  detailAr: string;
  detailEn: string;
  pointsAr: string[];
  pointsEn: string[];
  secondaryImages: Array<{ src: string; alt: string }>;
  stepsAr: string[];
  stepsEn: string[];
  nextHref: string;
  nextAr: string;
  nextEn: string;
};

const nav = [
  ['home', '', 'الرئيسية', 'Home'],
  ['agenda', 'agenda', 'الأجندة', 'Agenda'],
  ['voices', 'voices', 'الأصوات', 'Voices'],
  ['impact', 'impact', 'الأثر', 'Impact'],
  ['stories', 'stories', 'المعرفة', 'Stories'],
  ['methodology', 'methodology', 'المنهجية', 'Methodology'],
  ['about', 'about', 'عن المنصة', 'About'],
] as const;

const featureIcons = [MessageCircleMore, BarChart3, Lightbulb, ShieldCheck];

function LangText({ ar, en }: { ar: React.ReactNode; en: React.ReactNode }) {
  return <><span data-lang="ar">{ar}</span><span data-lang="en">{en}</span></>;
}

export default function PlatformSectionPage({ config }: { config: PlatformPageConfig }) {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const route = (slug: string) => slug ? `../${slug}/` : '../';

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
            {nav.map(([key, slug, ar, en]) => <a className={config.active === key ? 'active' : ''} href={route(slug)} key={key}><LangText ar={ar} en={en} /></a>)}
          </nav>
          <div className="actions">
            <button className="lang" type="button" onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')} aria-label="Change language">{language === 'ar' ? 'EN' : 'ع'}</button>
            <a className={`btn btn-dark${config.active === 'participate' ? ' active' : ''}`} href="../participate/"><LangText ar="شارك بصوتك" en="Share your voice" /></a>
            <button className="menu" type="button" aria-label="القائمة" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
          </div>
        </div>
        <nav className={`shell mobile-panel${menuOpen ? ' open' : ''}`} aria-label="تنقل الهاتف">
          {nav.map(([key, slug, ar, en]) => <a className={config.active === key ? 'active' : ''} href={route(slug)} onClick={() => setMenuOpen(false)} key={key}><LangText ar={ar} en={en} /></a>)}
          <a href="../participate/" onClick={() => setMenuOpen(false)}><LangText ar="شارك بصوتك" en="Share your voice" /></a>
        </nav>
      </header>

      <main>
        <section className="inner-hero">
          <div className="shell inner-hero-grid">
            <div className="reveal on">
              <a className="breadcrumbs" href="../"><LangText ar="الرئيسية ←" en="Home →" /></a>
              <span className="eyebrow"><LangText ar={config.eyebrowAr} en={config.eyebrowEn} /></span>
              <h1><LangText ar={config.titleAr} en={config.titleEn} /></h1>
              <p><LangText ar={config.introAr} en={config.introEn} /></p>
            </div>
            <figure className="inner-hero-photo reveal on">
              <img src={`../${config.image}`} alt={config.imageAlt} />
              <figcaption><Activity aria-hidden="true" /><LangText ar={config.badgeAr} en={config.badgeEn} /></figcaption>
            </figure>
          </div>
        </section>

        <section className="section section-deep">
          <div className="shell inner-stat-grid">
            {config.stats.map((stat, index) => {
              const Icon = [MessageCircleMore, MapPinned, BarChart3, Route][index % 4];
              return <article key={stat.ar}><Icon aria-hidden="true" /><b>{stat.value}</b><span><LangText ar={stat.ar} en={stat.en} /></span></article>;
            })}
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-head"><div><span className="eyebrow"><LangText ar="داخل هذه المساحة" en="Inside this space" /></span><h2><LangText ar={config.sectionAr} en={config.sectionEn} /></h2></div></div>
            <div className="inner-feature-grid">
              {config.features.map((feature, index) => {
                const Icon = featureIcons[index % featureIcons.length];
                return <article key={feature.ar}><Icon aria-hidden="true" /><b>0{index + 1}</b><h3><LangText ar={feature.ar} en={feature.en} /></h3><p><LangText ar={feature.descAr} en={feature.descEn} /></p></article>;
              })}
            </div>
          </div>
        </section>

        <section className="section section-deep">
          <div className="shell inner-detail-grid">
            <div className="inner-detail-copy">
              <Compass aria-hidden="true" />
              <span className="eyebrow"><LangText ar="الصورة الكاملة" en="The full picture" /></span>
              <h2><LangText ar={config.detailTitleAr} en={config.detailTitleEn} /></h2>
              <p><LangText ar={config.detailAr} en={config.detailEn} /></p>
              <ul>
                {config.pointsAr.map((point, index) => <li key={point}><CheckCircle2 aria-hidden="true" /><LangText ar={point} en={config.pointsEn[index]} /></li>)}
              </ul>
            </div>
            <div className="inner-photo-pair">
              {config.secondaryImages.map((image) => <figure key={image.src}><img src={`../${image.src}`} alt={image.alt} /></figure>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-head"><div><span className="eyebrow"><LangText ar="مسار العمل" en="Working path" /></span><h2><LangText ar="كيف تتحرك هذه المساحة؟" en="How does this space move?" /></h2></div></div>
            <div className="inner-steps">
              {config.stepsAr.map((step, index) => <article key={step}><b>{String(index + 1).padStart(2, '0')}</b><LangText ar={step} en={config.stepsEn[index]} /></article>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell cta inner-cta">
            <div><BookOpenText aria-hidden="true" /><h2><LangText ar="واصل استكشاف المنصة." en="Continue exploring the platform." /></h2><p><LangText ar="كل مساحة مرتبطة بما قبلها وما بعدها حتى لا ينتهي صوت الشباب عند جمعه." en="Every space connects to the next so youth voices do not stop at collection." /></p></div>
            <a className="btn btn-soft" href={`../${config.nextHref}/`}><LangText ar={config.nextAr} en={config.nextEn} /></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell">
          <div className="footer-grid">
            <div><a className="logo" href="../"><img src="../logo-transparent.png" alt="" /><span><strong><LangText ar="الأجندة الشبابية السودانية" en="Sudan Youth Agenda" /></strong><small>BY SUDANESE YOUTH NETWORK</small></span></a><p><LangText ar="منصة تربط أصوات الشباب بالأدلة والسياسات والأثر." en="Connecting youth voices to evidence, policy and measurable impact." /></p></div>
            <div><h3><LangText ar="استكشف" en="Explore" /></h3><a href="../agenda/"><LangText ar="الأجندة الحيّة" en="Living agenda" /></a><a href="../voices/"><LangText ar="مرصد الأصوات" en="Voice observatory" /></a><a href="../stories/"><LangText ar="المعرفة" en="Knowledge" /></a></div>
            <div><h3><LangText ar="الثقة" en="Trust" /></h3><a href="../about/"><LangText ar="عن المنصة" en="About" /></a><a href="../methodology/"><LangText ar="المنهجية" en="Methodology" /></a><a href="../participate/"><LangText ar="شارك بصوتك" en="Share your voice" /></a></div>
          </div>
          <div className="footer-bottom"><span>© 2026 Sudanese Youth Network (SYN)</span></div>
        </div>
      </footer>
    </>
  );
}
