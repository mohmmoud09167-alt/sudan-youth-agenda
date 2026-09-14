'use client';
import PlatformSectionPage, { type PlatformPageConfig } from '../../components/platform-section-page';

const config: PlatformPageConfig = {
  active:'participate', eyebrowAr:'شارك بصوتك', eyebrowEn:'Share your voice', titleAr:'مشاركتك تبدأ بالطريقة الأنسب لك.', titleEn:'Participate through the channel that works for you.',
  introAr:'يمكن للشباب المشاركة عبر الموقع والهاتف وواتساب، أو من خلال حوارات المكاتب والمجموعات الميدانية. جميع القنوات تدخل في مسار واحد للحماية والتحليل والمتابعة.', introEn:'Young people can participate through the website, mobile, WhatsApp, chapter dialogues or field groups. Every channel enters one protection, analysis and follow-up pathway.',
  image:'images/youth-dialogue.jpg', imageAlt:'شابان سودانيان في حوار مباشر', badgeAr:'صوتك جزء من الأجندة', badgeEn:'Your voice is part of the agenda',
  stats:[{value:'WEB',ar:'مشاركة مكتوبة عبر الموقع',en:'written website contribution'},{value:'VOICE',ar:'رسالة أو تسجيل صوتي',en:'voice message or recording'},{value:'FIELD',ar:'حوار أو استبيان ميداني',en:'field dialogue or survey'},{value:'CHAPTER',ar:'مشاركة عبر أحد المكاتب',en:'participation through a chapter'}],
  sectionAr:'اختر قناة المشاركة المناسبة.', sectionEn:'Choose the participation channel that suits you.',
  features:[
    {ar:'مساهمة مكتوبة',en:'Written contribution',descAr:'اكتب القضية أو المقترح والسياق الذي يجعله مهماً بالنسبة لك.',descEn:'Describe the issue or proposal and the context that makes it important to you.'},
    {ar:'مساهمة صوتية',en:'Voice contribution',descAr:'استخدم رسالة صوتية عندما تكون الكتابة غير مناسبة أو غير متاحة.',descEn:'Use a voice message when writing is not suitable or accessible.'},
    {ar:'حوار ميداني',en:'Field dialogue',descAr:'شارك عبر جلسات الاستماع ومجموعات النقاش والاستبيانات الورقية.',descEn:'Join listening sessions, focus groups or paper surveys.'},
    {ar:'مكتب محلي',en:'Local chapter',descAr:'تواصل مع مكتب الشبكة الأقرب للمشاركة والمتابعة.',descEn:'Connect with the nearest network chapter for participation and follow-up.'},
  ],
  detailTitleAr:'قبل أن تشارك، يجب أن تعرف كيف نحميك.', detailTitleEn:'Before participating, know how your contribution is protected.',
  detailAr:'لا تنشر المنصة معلومات الهوية ضمن النتائج العامة، وتوضح للمشارك غرض الجمع وخيارات الموافقة والانسحاب وحدود استخدام البيانات.', detailEn:'Identity information is not published in public results. Participants receive a clear purpose, consent choices, withdrawal options and limits on data use.',
  pointsAr:['لا تضع معلومات شخصية غير ضرورية.','اختر عدم إظهار اسمك متى احتجت.','تابع لاحقاً أين وصل موضوعك.'], pointsEn:['Avoid unnecessary personal information.','Choose anonymity whenever needed.','Return later to see where your issue went.'],
  secondaryImages:[{src:'images/youth-group.jpg',alt:'مجموعة شباب في فعالية مشاركة'},{src:'images/youth-smiling.jpg',alt:'مشارك شاب في نشاط مجتمعي'}],
  stepsAr:['اختر القناة','اعرف شروط الحماية','شارك رأيك','تأكيد الاستلام','متابعة المسار'], stepsEn:['Choose a channel','Review protection terms','Share your view','Receive confirmation','Track the journey'],
  nextHref:'agenda', nextAr:'شاهد كيف تبنى الأجندة', nextEn:'See how the agenda is built',
};
export default function ParticipatePage(){ return <PlatformSectionPage config={config} />; }
