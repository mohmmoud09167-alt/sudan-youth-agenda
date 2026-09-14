'use client';
import PlatformSectionPage, { type PlatformPageConfig } from '../../components/platform-section-page';

const config: PlatformPageConfig = {
  active: 'agenda', eyebrowAr: 'الأجندة الشبابية الحيّة', eyebrowEn: 'The living youth agenda',
  titleAr: 'أولويات تتغير مع الواقع.', titleEn: 'Priorities that move with reality.',
  introAr: 'مساحة تجمع ما يقوله الشباب وتحوله إلى أولويات وطنية ومحلية قابلة للمقارنة والتحديث، بدلاً من وثيقة ثابتة تنتهي لحظة نشرها.',
  introEn: 'A space that turns youth input into national and local priorities that can be compared and updated—not a static document that ends when published.',
  image: 'images/roundtable.jpg', imageAlt: 'شباب وشابات في جلسة حوار حول الأولويات', badgeAr: 'أجندة تبنى من القاعدة', badgeEn: 'An agenda built from the ground up',
  stats: [{value:'5',ar:'أولويات رئيسية قابلة للتحديث',en:'headline priorities kept current'},{value:'18',ar:'ولاية ضمن صورة التمثيل',en:'states in the representation picture'},{value:'27',ar:'دولة إقامة ولجوء',en:'countries of residence'},{value:'13',ar:'مكتباً يدعم الاستماع',en:'chapters supporting listening'}],
  sectionAr: 'من الأصوات المتفرقة إلى أجندة واضحة.', sectionEn: 'From scattered voices to a clear agenda.',
  features: [
    {ar:'ترتيب الأولويات',en:'Priority ranking',descAr:'تصنيف القضايا بحسب التكرار والإلحاح والتمثيل الجغرافي والاجتماعي.',descEn:'Issues ranked by frequency, urgency and geographic and social representation.'},
    {ar:'مقارنة السياقات',en:'Context comparison',descAr:'إظهار الفروق بين الداخل ودول اللجوء والمهجر وتجارب النزوح المختلفة.',descEn:'Showing differences across Sudan, displacement, refuge and diaspora.'},
    {ar:'صياغة التوصيات',en:'Recommendation drafting',descAr:'تحويل الأولويات إلى مقترحات سياسية قابلة للنقاش والمناصرة.',descEn:'Turning priorities into policy proposals ready for dialogue and advocacy.'},
    {ar:'نسخ قابلة للتحديث',en:'Living editions',descAr:'تحديث الأجندة دورياً مع الاحتفاظ بتاريخ واضح لما تغيّر ولماذا.',descEn:'Updating the agenda while preserving a clear record of what changed and why.'},
  ],
  detailTitleAr:'الأولوية ليست الرقم الأعلى فقط.', detailTitleEn:'A priority is more than the highest number.',
  detailAr:'تراعي المنصة حجم المشاركة، تنوعها، الفئات التي لم نصل إليها بعد، والسياق الذي خرجت منه كل مساهمة.', detailEn:'The platform considers participation volume, diversity, missing voices and the context behind every contribution.',
  pointsAr:['فرز حسب الولاية والنوع الاجتماعي وتجربة النزوح.','إظهار فجوات التمثيل قبل اعتماد النتائج.','ربط كل أولوية بأدلتها ومقترحاتها.'], pointsEn:['Views by state, gender and displacement experience.','Representation gaps shown before results are adopted.','Every priority linked to its evidence and proposals.'],
  secondaryImages:[{src:'images/workshop-study.jpg',alt:'شابة تشارك في جلسة مناقشة'},{src:'images/youth-speaker.jpg',alt:'شاب يشرح رأيه خلال الحوار'}],
  stepsAr:['استماع واسع','تنظيف وتصنيف','مراجعة التمثيل','ترتيب الأولويات','صياغة واعتماد'], stepsEn:['Broad listening','Clean and classify','Review representation','Rank priorities','Draft and adopt'],
  nextHref:'voices', nextAr:'استكشف مرصد الأصوات', nextEn:'Explore the voice observatory',
};
export default function AgendaPage(){ return <PlatformSectionPage config={config} />; }
