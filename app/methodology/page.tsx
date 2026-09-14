'use client';
import PlatformSectionPage, { type PlatformPageConfig } from '../../components/platform-section-page';

const config: PlatformPageConfig = {
  active:'methodology', eyebrowAr:'منهجية واضحة', eyebrowEn:'Transparent methodology', titleAr:'كيف نستمع ونحلل دون أن نختزل الشباب؟', titleEn:'How do we analyse without reducing youth to a number?',
  introAr:'توضح المنهجية مصادر البيانات، قواعد الحماية، طريقة اكتشاف فجوات التمثيل، ودور المراجعة البشرية في كل نتيجة تنشرها المنصة.', introEn:'The methodology explains data sources, protection rules, representation-gap checks and the role of human review in every published result.',
  image:'images/youth-speaker.jpg', imageAlt:'شاب يشارك في جلسة حوار', badgeAr:'الإنسان يراجع والآلة تساعد', badgeEn:'People review; technology assists',
  stats:[{value:'3',ar:'مستويات لحماية البيانات',en:'data protection levels'},{value:'4',ar:'قنوات لجمع المساهمات',en:'contribution channels'},{value:'7',ar:'مراحل من الصوت إلى الأثر',en:'stages from voice to impact'},{value:'1',ar:'منهج موحد للمراجعة',en:'shared review method'}],
  sectionAr:'مبادئ تحمي الثقة وجودة النتائج.', sectionEn:'Principles that protect trust and result quality.',
  features:[
    {ar:'الموافقة والوضوح',en:'Consent and clarity',descAr:'يعرف المشارك كيف ستستخدم مساهمته وما الذي سيظهر للعامة.',descEn:'Participants know how their input will be used and what may become public.'},
    {ar:'فصل طبقات البيانات',en:'Data-layer separation',descAr:'بيانات عامة مجمعة، وبحثية مقيدة، وهوية شديدة الحماية.',descEn:'Aggregated public data, restricted research data and highly protected identity data.'},
    {ar:'فحص التمثيل',en:'Representation checks',descAr:'مراجعة من شارك ومن غاب قبل تفسير النتائج.',descEn:'Reviewing who participated and who is missing before interpreting results.'},
    {ar:'مراجعة بشرية',en:'Human review',descAr:'الذكاء الاصطناعي يصنف ويلخص، لكنه لا يعتمد الأولويات أو يقرر النشر.',descEn:'AI may classify and summarize, but does not adopt priorities or decide publication.'},
  ],
  detailTitleAr:'الذكاء الاصطناعي أداة مساعدة، لا صاحب قرار.', detailTitleEn:'AI is an assistant, not a decision-maker.',
  detailAr:'يستخدم لتجميع المقترحات المتشابهة واكتشاف التكرار والفجوات، ثم يراجع الفريق النتائج ويعود إلى النصوص الأصلية قبل الاعتماد.', detailEn:'It can group similar proposals and flag repetition or gaps. The team then reviews results and returns to original contributions before adoption.',
  pointsAr:['توثيق التعديلات على التصنيف.','إمكانية مراجعة العينات والنتائج.','نشر حدود البيانات وما لا يمكن استنتاجه.'], pointsEn:['Classification changes are documented.','Samples and results can be reviewed.','Data limitations and non-findings are published.'],
  secondaryImages:[{src:'images/roundtable.jpg',alt:'فريق يناقش المخرجات حول طاولة'},{src:'images/workshop-study.jpg',alt:'مشاركة في جلسة مراجعة'}],
  stepsAr:['جمع بموافقة','إخفاء الهوية','تنظيف وتصنيف','مراجعة بشرية','نشر مسؤول'], stepsEn:['Collect with consent','De-identify','Clean and classify','Human review','Responsible publication'],
  nextHref:'about', nextAr:'اقرأ عن المنصة كاملة', nextEn:'Read the full platform overview',
};
export default function MethodologyPage(){ return <PlatformSectionPage config={config} />; }
