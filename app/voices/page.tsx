'use client';
import PlatformSectionPage, { type PlatformPageConfig } from '../../components/platform-section-page';

const config: PlatformPageConfig = {
  active:'voices', eyebrowAr:'مرصد الأصوات', eyebrowEn:'Voice observatory', titleAr:'كل صوت يضيف جزءاً من الصورة.', titleEn:'Every voice adds to the picture.',
  introAr:'المرصد يعرض الاتجاهات المجمعة لأصوات الشباب، ويوضح أين ترتفع قضية وأين تقل المشاركة، ومن لم نسمعه بعد.', introEn:'The observatory presents aggregated youth trends, showing where an issue rises, where participation falls and who has not yet been heard.',
  image:'images/workshop-study.jpg', imageAlt:'مشاركة شابة سودانية في جلسة حوار', badgeAr:'الاستماع يبدأ من الناس', badgeEn:'Listening starts with people',
  stats:[{value:'12,480',ar:'مساهمة عبر القنوات المختلفة',en:'contributions across channels'},{value:'54%',ar:'مشاركة الشابات',en:'participation by young women'},{value:'4',ar:'قنوات استماع مترابطة',en:'connected listening channels'},{value:'18',ar:'ولاية ممثلة في الصورة',en:'states represented'}],
  sectionAr:'صوت آمن، واضح، ويمكن تتبع أثره.', sectionEn:'A voice that is safe, clear and traceable.',
  features:[
    {ar:'مشاركة متعددة القنوات',en:'Multi-channel participation',descAr:'نص وصوت وحوار ميداني ومساهمات من المكاتب المحلية.',descEn:'Text, voice, field dialogue and local chapter contributions.'},
    {ar:'خريطة التمثيل',en:'Representation map',descAr:'عرض التغطية والفجوات دون كشف هوية المشاركين.',descEn:'Showing coverage and gaps without exposing participant identity.'},
    {ar:'نبض الشباب',en:'Youth pulse',descAr:'أسئلة قصيرة دورية حول القضايا الأكثر إلحاحاً.',descEn:'Short recurring questions on the most urgent issues.'},
    {ar:'أين ذهب صوتك؟',en:'Where did your voice go?',descAr:'ربط المساهمة بالأولوية والتوصية ومسار المتابعة.',descEn:'Connecting each contribution to priorities, recommendations and follow-up.'},
  ],
  detailTitleAr:'لا يوجد صوت واحد يمثل الجميع.', detailTitleEn:'No single voice represents everyone.',
  detailAr:'لذلك لا نعرض الرأي الأكثر تكراراً وحده؛ بل نوضح التنوع والاختلاف والفئات ناقصة التمثيل لتوجيه جولة الاستماع التالية.', detailEn:'We do not show only the most repeated view. We surface diversity, disagreement and under-represented groups to guide the next listening round.',
  pointsAr:['النتائج العامة تظهر بصورة مجمعة.','المساهمات الحساسة تحفظ في طبقات محمية.','الفجوات تقود إلى استماع ميداني جديد.'], pointsEn:['Public results are shown only in aggregate.','Sensitive contributions stay in protected layers.','Gaps trigger new field listening.'],
  secondaryImages:[{src:'images/youth-dialogue.jpg',alt:'حوار مباشر بين شابين سودانيين'},{src:'images/youth-group.jpg',alt:'مشاركون شباب في فعالية مجتمعية'}],
  stepsAr:['استقبال المساهمة','حماية الهوية','التصنيف','قراءة الاتجاهات','إرجاع النتيجة للمشارك'], stepsEn:['Receive input','Protect identity','Classify','Read trends','Close the feedback loop'],
  nextHref:'impact', nextAr:'شاهد كيف يتحول الصوت إلى أثر', nextEn:'See how voice becomes impact',
};
export default function VoicesPage(){ return <PlatformSectionPage config={config} />; }
