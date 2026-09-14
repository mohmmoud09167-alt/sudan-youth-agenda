'use client';
import PlatformSectionPage, { type PlatformPageConfig } from '../../components/platform-section-page';

const config: PlatformPageConfig = {
  active:'stories', eyebrowAr:'المعرفة من الميدان', eyebrowEn:'Knowledge from the ground', titleAr:'قصص وتحليلات تشرح ما وراء الأرقام.', titleEn:'Stories and analysis behind the numbers.',
  introAr:'مساحة تجمع التحليلات، ملاحظات الميدان، أصوات المشاركين وشرح المنهجية حتى تصبح بيانات المنصة مفهومة وقابلة للنقاش.', introEn:'A space for analysis, field notes, participant perspectives and methodology explainers that make platform data understandable and open to discussion.',
  image:'images/youth-culture.jpg', imageAlt:'شاب سوداني يعزف الموسيقى في فعالية ثقافية', badgeAr:'المعرفة تبدأ من التجربة', badgeEn:'Knowledge begins with lived experience',
  stats:[{value:'01',ar:'تحليلات للأولويات',en:'priority analysis'},{value:'02',ar:'قصص من المكاتب',en:'stories from chapters'},{value:'03',ar:'أصوات وتجارب مباشرة',en:'first-hand voices'},{value:'04',ar:'شروحات للمنهجية',en:'method explainers'}],
  sectionAr:'أربع طرق لفهم الواقع بصورة أعمق.', sectionEn:'Four ways to understand reality more deeply.',
  features:[
    {ar:'تحليل الاتجاهات',en:'Trend analysis',descAr:'قراءة ما يتغير في الأولويات وما الذي يفسر ذلك.',descEn:'Reading what changes in priorities and what may explain it.'},
    {ar:'من المكاتب',en:'From chapters',descAr:'ملاحظات وقصص من فرق الاستماع في الولايات ودول الإقامة.',descEn:'Notes and stories from listening teams across states and host countries.'},
    {ar:'صوت مباشر',en:'First-hand voice',descAr:'مساحة لتجارب الشباب بلغتهم مع حماية الخصوصية.',descEn:'Youth experiences in their own words with privacy protected.'},
    {ar:'كيف قرأنا البيانات؟',en:'How did we read the data?',descAr:'شرح مبسط للتصنيف والمراجعة والحدود المنهجية.',descEn:'A plain-language explanation of classification, review and limitations.'},
  ],
  detailTitleAr:'الرقم يخبرنا ماذا حدث؛ القصة تساعدنا على فهم لماذا.', detailTitleEn:'Numbers tell us what happened; stories help explain why.',
  detailAr:'لهذا تجمع المنصة بين المؤشرات والقراءة النوعية، دون استخدام قصة فردية وكأنها تمثل جميع الشباب.', detailEn:'That is why the platform combines indicators with qualitative insight, without treating one individual story as representative of all youth.',
  pointsAr:['محتوى مرتبط بأولوية أو منطقة واضحة.','تمييز الرأي الشخصي عن التحليل المؤسسي.','حماية أسماء أصحاب القصص عند الحاجة.'], pointsEn:['Content linked to a clear priority or place.','Personal opinion distinguished from institutional analysis.','Story contributors anonymized when needed.'],
  secondaryImages:[{src:'images/youth-dialogue.jpg',alt:'شباب في نقاش مباشر'},{src:'images/workshop-study.jpg',alt:'شابة تتحدث خلال ورشة'}],
  stepsAr:['سؤال أو ظاهرة','جمع المادة','التحقق والسياق','التحرير والمراجعة','النشر والتحديث'], stepsEn:['Question or pattern','Gather material','Verify and contextualize','Edit and review','Publish and update'],
  nextHref:'methodology', nextAr:'تعرف على المنهجية', nextEn:'Explore the methodology',
};
export default function StoriesPage(){ return <PlatformSectionPage config={config} />; }
