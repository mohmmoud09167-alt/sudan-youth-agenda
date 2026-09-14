'use client';
import PlatformSectionPage, { type PlatformPageConfig } from '../../components/platform-section-page';

const config: PlatformPageConfig = {
  active:'impact', eyebrowAr:'متتبع الأثر', eyebrowEn:'Impact tracker', titleAr:'من المساهمة إلى تغيير يمكن إثباته.', titleEn:'From contribution to evidence of change.',
  introAr:'هذه الصفحة تشرح رحلة كل أولوية: من أين جاءت، إلى أي توصية تحولت، مع من نوقشت، وما الاستجابة التي حدثت بعدها.', introEn:'This page explains every priority journey: where it came from, the recommendation it shaped, who discussed it and what response followed.',
  image:'images/youth-smiling.jpg', imageAlt:'مشارك شاب في نشاط للشبكة', badgeAr:'الأثر رحلة قابلة للتتبع', badgeEn:'Impact is a traceable journey',
  stats:[{value:'01',ar:'الصوت هو نقطة البداية',en:'voice is the starting point'},{value:'02',ar:'الأدلة تدعم الأولوية',en:'evidence supports the priority'},{value:'03',ar:'المناصرة تنقل التوصية',en:'advocacy carries the recommendation'},{value:'04',ar:'المتابعة تثبت التغيير',en:'follow-up verifies change'}],
  sectionAr:'ما الذي يتتبعه متتبع الأثر؟', sectionEn:'What does the impact tracker follow?',
  features:[
    {ar:'مسار التوصية',en:'Recommendation journey',descAr:'من الصياغة والمراجعة حتى العرض على الجهة المعنية.',descEn:'From drafting and review to presentation to the relevant institution.'},
    {ar:'سجل الاجتماعات',en:'Engagement record',descAr:'توثيق اللقاءات والالتزامات والخطوات المتفق عليها.',descEn:'Documenting meetings, commitments and agreed next steps.'},
    {ar:'حالة الاستجابة',en:'Response status',descAr:'تمييز ما تم قبوله أو مناقشته أو ما زال ينتظر المتابعة.',descEn:'Distinguishing what was accepted, discussed or still awaits follow-up.'},
    {ar:'دليل التغيير',en:'Evidence of change',descAr:'ربط أي تقدم بدليل واضح يمكن للجمهور مراجعته.',descEn:'Linking progress to clear evidence the public can review.'},
  ],
  detailTitleAr:'الشفافية لا تنتهي عند النشر.', detailTitleEn:'Transparency does not end at publication.',
  detailAr:'تعرض المنصة ما تم فعله، وما لم يتم، وأسباب التعثر حين تكون متاحة، حتى يعرف الشباب أين وصل صوتهم.', detailEn:'The platform shows what happened, what did not and, when available, why progress stalled—so youth know where their voice went.',
  pointsAr:['حالة واضحة لكل توصية.','خط زمني للاجتماعات والاستجابات.','روابط للأدلة والوثائق العامة.'], pointsEn:['A clear status for every recommendation.','A timeline of meetings and responses.','Links to public evidence and documents.'],
  secondaryImages:[{src:'images/roundtable.jpg',alt:'نقاش جماعي حول مسار العمل'},{src:'images/youth-group.jpg',alt:'شباب مشاركون في نشاط عام'}],
  stepsAr:['أولوية موثقة','توصية محددة','مناصرة وحوار','استجابة مسجلة','تحديث الأثر'], stepsEn:['Documented priority','Specific recommendation','Advocacy and dialogue','Recorded response','Impact update'],
  nextHref:'stories', nextAr:'اقرأ المعرفة من الميدان', nextEn:'Read knowledge from the ground',
};
export default function ImpactPage(){ return <PlatformSectionPage config={config} />; }
