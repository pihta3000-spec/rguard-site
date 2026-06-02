import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { PortableText } from '@portabletext/react';
import logoSvg from './logow.svg';
import { getPosts, getIndustries } from './sanity.js';
import artSign from './arts/sign.svg';
import artFavicon from './arts/favicon.svg';
import artAstro from './arts/astro.svg';
import artAnalyze from './arts/analyze.svg';
import artMonolith from './arts/monolith.svg';
import artShip from './arts/aship.svg';

const bloggers = [
  {
    id: 'damir',
    name: 'Дамир Ильгамович',
    desc: 'Главное лицо RGUARD. Вирусная подача, industrial-харизма и сильная связь с real sector.',
    bio: 'Дамир — главный амбассадор RGUARD и лицо большинства флагманских проектов агентства. Его харизма органично вписывается в industrial-среду: производства, стройки, карьеры. Аудитория воспринимает его как «своего» — человека из реального сектора, а не рекламного персонажа.\n\nИменно это делает его контент вирусным и вызывающим доверие. Рабочие пересылают его ролики в Telegram-чатах, а промышленные компании узнают в нём того, кто говорит на их языке. За три года работы с RGUARD он стал лицом нескольких крупнейших вирусных кампаний в промышленной нише.\n\nЕго формула простая: не рекламировать, а вовлекать. Не продавать, а вызывать доверие. Контент с Дамиром не воспринимается как реклама — он воспринимается как часть индустрии.',
    metrics: [['5M+', 'просмотров'], ['120K+', 'подписчиков'], ['2021', 'в RGUARD']],
    socials: [{ label: 'TikTok', url: '#' }, { label: 'YouTube', url: '#' }, { label: 'VK', url: '#' }],
    specializations: ['Производство', 'Реальный сектор', 'HR-контент', 'Вахта и добыча', 'Контент для мужчин'],
    cases: ['petro-engineering', 'metallurgy-safety'],
    photoCount: 6,
  },
  {
    id: 'dima',
    name: 'Дима Хрисанов',
    desc: 'Динамичная подача и контент с высокой вовлечённостью аудитории.',
    bio: 'Дима работает на стыке юмора и динамики. Его ролики отличаются высоким темпом, чёткой структурой и умением удерживать внимание даже в самых сложных нишах. Особенно эффективен в форматах, где нужно объяснить сложное просто и вызвать сильную эмоциональную реакцию.\n\nОн не боится сложных тем: B2B-услуги, инженерные продукты, технические решения — всё это в его руках превращается в динамичный и понятный контент. Аудитория чувствует энергию и искренность, что напрямую влияет на вовлечённость и количество репостов.\n\nСо временем выработал собственную методику захвата внимания в первые 2 секунды — один из самых важных навыков в современном коротком видео.',
    metrics: [['2M+', 'просмотров'], ['80K+', 'подписчиков'], ['2022', 'в RGUARD']],
    socials: [{ label: 'TikTok', url: '#' }, { label: 'YouTube', url: '#' }],
    specializations: ['Динамичный контент', 'B2B-объяснения', 'Юмор', 'Высокая вовлечённость', 'Reels-форматы'],
    cases: ['service-integrator', 'art-royal'],
    photoCount: 6,
  },
  {
    id: 'nadir',
    name: 'Надир',
    desc: 'Контент через реализм, атмосферу и живое взаимодействие.',
    bio: 'Надир создаёт контент, который ощущается как документальное кино. Никакой наигранности — только живые ситуации, настоящая атмосфера и честное взаимодействие с людьми на площадке.\n\nЕго сила — в умении быть незаметным. Камера рядом с Надиром не давит, люди не зажимаются, сцены получаются живыми. Именно поэтому его материалы вызывают доверие и органично распространяются внутри профессиональных сообществ.\n\nОсобенно эффективен в съёмках на реальных объектах: карьерах, производствах, сельхозпредприятиях. Умеет найти историю там, где другие видят только рабочий процесс.',
    metrics: [['1.5M+', 'просмотров'], ['60K+', 'подписчиков'], ['2022', 'в RGUARD']],
    socials: [{ label: 'TikTok', url: '#' }, { label: 'VK', url: '#' }],
    specializations: ['Документальный стиль', 'Аграрный сектор', 'Реальные объекты', 'Добыча', 'Атмосферный контент'],
    cases: ['gold-mining', 'sakhalin-coal'],
    photoCount: 6,
  },
  {
    id: 'robert',
    name: 'Роберт',
    desc: 'Производственная динамика и сильное мужское позиционирование.',
    bio: 'Роберт — лицо тяжёлой техники, металла и производственной мощи. Его образ транслирует уважение к труду и силу реального сектора. Контент с его участием особенно хорошо работает в нишах строительства, добычи и промышленного оборудования.\n\nВ кадре он выглядит органично рядом с экскаваторами, кранами и металлоконструкциями — как человек, который знает эту среду изнутри. Аудитория это считывает мгновенно, и именно это формирует доверие к бренду.\n\nЕго типаж — сильный, немногословный, надёжный. Контент с Робертом работает на авторитет компании внутри мужской профессиональной аудитории.',
    metrics: [['1M+', 'просмотров'], ['40K+', 'подписчиков'], ['2023', 'в RGUARD']],
    socials: [{ label: 'TikTok', url: '#' }],
    specializations: ['Тяжёлая техника', 'Строительство', 'Контент для мужчин', 'Промышленное оборудование', 'Мужское позиционирование'],
    cases: ['construction-equipment'],
    photoCount: 6,
  },
  {
    id: 'rais',
    name: 'Раис',
    desc: 'Юмор, рабочая среда и естественное вовлечение аудитории.',
    bio: 'Раис умеет находить смешное в обычных рабочих ситуациях. Его контент — это узнаваемые сцены из жизни рабочего коллектива, которые тут же хочется переслать коллегам. Высокий органический охват достигается за счёт точного попадания в культурный код аудитории.\n\nОн не играет роль — он живёт в ней. Именно поэтому его юмор не ощущается как постановочный. Зрители видят в нём коллегу, а не актёра, и это критически важно для вирусного распространения.\n\nОсобенно эффективен в B2B-нишах, где аудитория устала от корпоративного официоза и ценит живую интонацию.',
    metrics: [['800K+', 'просмотров'], ['35K+', 'подписчиков'], ['2023', 'в RGUARD']],
    socials: [{ label: 'TikTok', url: '#' }, { label: 'VK', url: '#' }],
    specializations: ['Производственный юмор', 'B2B-контент', 'Рабочая среда', 'Органический охват', 'Реальный сектор'],
    cases: ['center-heating', 'pivmaster'],
    photoCount: 6,
  },
  {
    id: 'domhozyaika',
    name: 'Башкирская домохозяйка',
    desc: 'Контрастный образ, усиливающий вирусность и охват.',
    bio: 'Неожиданный персонаж в мире industrial-контента — именно это делает её такой эффективной. Контрастный образ на фоне производственной среды резко усиливает вирусность и привлекает аудиторию, которая иначе бы не обратила внимание.\n\nПсихология проста: когда зритель видит неожиданное сочетание — домохозяйка на заводе, женщина среди тяжёлой техники — мозг автоматически фиксирует несоответствие. Это удерживает внимание и запускает желание поделиться.\n\nОдин из самых нестандартных и эффективных инструментов в арсенале RGUARD. Контент с её участием стабильно собирает в разы больше репостов, чем стандартные форматы, и охватывает аудитории, которые обычно недоступны industrial-бренду.',
    metrics: [['3M+', 'просмотров'], ['90K+', 'подписчиков'], ['2022', 'в RGUARD']],
    socials: [{ label: 'TikTok', url: '#' }, { label: 'YouTube', url: '#' }, { label: 'VK', url: '#' }],
    specializations: ['Вирусный контраст', 'Женская аудитория', 'Широкий охват', 'Нестандартный подход', 'Кросс-аудитория'],
    cases: ['petro-engineering', 'gold-mining'],
    photoCount: 6,
  },
];

const viralCases = [
  { category: 'Вирусные видеоролики', title: 'Петроинжиниринг', text: 'Вирусные ролики про промышленное оборудование и инженерные процессы. Контент рассчитан на узнавание внутри профессионального сообщества.', accent: 'Industrial Virality' },
  { category: 'Вирусные видеоролики', title: 'Добыча золота', text: 'Контент для добывающей и вахтовой тематики: юмор, реальные ситуации и культурный код аудитории.', accent: 'Вахта / Добыча' },
  { category: 'Вирусные видеоролики', title: 'Сервис Интегратор', text: 'Упаковка сложных технических услуг через storytelling, персонажей и динамичный монтаж.', accent: 'Storytelling' },
  { category: 'Вирусные видеоролики', title: 'Строительное оборудование', text: 'Медийность сложного технического продукта через industrial-контент, юмор и понятную драматургию.', accent: 'Construction Tech' },
];

const productionCases = [
  { category: 'Продюсирование и СММ', title: 'Art Royal детейлинг', text: 'Премиальный vertical content и lifestyle-подача для формирования сильного визуального образа бренда.', accent: 'Premium Content' },
  { category: 'Продюсирование и СММ', title: 'Центр отопления', text: 'Медийность инженерной тематики через вирусные механики, бытовые сценарии и понятную подачу.', accent: 'B2B Media' },
  { category: 'Продюсирование и СММ', title: 'Правша', text: 'Контент с акцентом на харизматичных персонажей, динамику и удержание внимания.', accent: 'Reels System' },
  { category: 'Продюсирование и СММ', title: 'Carshopping', text: 'Контент вокруг эмоций, доверия и визуальной привлекательности продукта.', accent: 'Auto / Lifestyle' },
  { category: 'Продюсирование и СММ', title: 'Пивмастер', text: 'Регулярный контент для формирования узнаваемости и удержания внимания аудитории.', accent: 'Brand Media' },
];

const CASES = [
  {
    id: 'petro-engineering',
    featured: true,
    title: 'Петроинжиниринг',
    category: 'Вирусные видеоролики',
    service: 'viral',
    accent: 'HR / Вахта',
    shortText: 'Вирусная HR-кампания для привлечения специалистов на работу вахтовым методом на север России.',
    task: 'Привлечь специалистов на работу вахтовым методом на север России.',
    solution: 'Натурная съемка серии коротких вертикальных видео и создание привлекательного образа вахтовой работы.',
    metrics: [['40+ млн', 'просмотров'], ['1,8+ млн', 'лайков'], ['15+ тыс.', 'комментариев'], ['100+ тыс.', 'репостов']],
    links: ['https://youtube.com/shorts/R7nzxpo4YVk?si=nhUES2a2p2dyRuTh', 'https://youtube.com/shorts/vmCO0Hx8xng?si=yim7CicXP4QemE8Q'],
    whatWorked: ['Негатив в позитив', 'Харизма и литературный юмор', 'Захват, удержание, призыв'],
  },
  {
    id: 'gold-mining',
    title: 'Добыча золота',
    category: 'Вирусные видеоролики',
    service: 'viral',
    accent: 'Вахта / Добыча',
    shortText: 'Контент для добывающей и вахтовой тематики: юмор, реальные ситуации и культурный код аудитории.',
    task: 'Сделать добывающую тематику заметной и обсуждаемой внутри профессионального сообщества.',
    solution: 'Собрали ролики вокруг вахтового быта, узнаваемых ситуаций, юмора и индустриальной фактуры.',
    metrics: [['Вахта', 'целевая аудитория'], ['Organic', 'распространение']],
    links: [],
    whatWorked: ['Культурный код аудитории', 'Юмор', 'Реальные ситуации'],
  },
  {
    id: 'service-integrator',
    title: 'Сервис Интегратор',
    category: 'Вирусные видеоролики',
    service: 'viral',
    accent: 'Сложные услуги',
    shortText: 'Упаковка сложных технических услуг через драматургию, персонажей и динамичный монтаж.',
    task: 'Объяснить сложную техническую услугу через понятный и вовлекающий формат.',
    solution: 'Перевели сложную B2B-тематику в серию роликов с персонажами, конфликтами и ясной подачей.',
    metrics: [['B2B', 'сложная ниша'], ['Видео', 'объяснение услуги']],
    links: [],
    whatWorked: ['Персонажи', 'Динамичный монтаж', 'Понятная драматургия'],
  },
  {
    id: 'construction-equipment',
    title: 'Строительное оборудование',
    category: 'Вирусные видеоролики',
    service: 'viral',
    accent: 'Construction Tech',
    shortText: 'Медийность сложного технического продукта через industrial-контент, юмор и понятную драматургию.',
    task: 'Сделать строительное оборудование заметным и интересным для аудитории.',
    solution: 'Использовали индустриальный юмор, реальные сценарии применения и короткую драматургию.',
    metrics: [['Tech', 'продуктовая ниша'], ['Industrial', 'контент']],
    links: [],
    whatWorked: ['Industrial-юмор', 'Продукт в действии', 'Короткая драматургия'],
  },
  {
    id: 'art-royal',
    featured: true,
    title: 'Art Royal детейлинг',
    category: 'Продюсирование и СММ',
    service: 'production',
    accent: 'Premium Content',
    shortText: 'Премиальный vertical content и lifestyle-подача для формирования сильного визуального образа бренда.',
    task: 'Сформировать премиальный образ бренда в социальных сетях.',
    solution: 'Создали регулярный вертикальный контент с акцентом на визуальную эстетику, процесс и доверие.',
    metrics: [['Premium', 'визуальный образ'], ['SMM', 'регулярный контент']],
    links: [],
    whatWorked: ['Визуальная эстетика', 'Регулярность', 'Доверие к процессу'],
  },
  {
    id: 'center-heating',
    title: 'Центр отопления',
    category: 'Продюсирование и СММ',
    service: 'production',
    accent: 'B2B Media',
    shortText: 'Медийность инженерной тематики через вирусные механики, бытовые сценарии и понятную подачу.',
    task: 'Сделать инженерную тематику понятной и медийной.',
    solution: 'Собрали контент вокруг бытовых ситуаций, понятных проблем клиентов и вирусных механик.',
    metrics: [['B2B', 'инженерная тематика'], ['SMM', 'контент-система']],
    links: [],
    whatWorked: ['Бытовые сценарии', 'Понятная подача', 'Регулярные рубрики'],
  },
  {
    id: 'pravsha',
    title: 'Правша',
    category: 'Продюсирование и СММ',
    service: 'production',
    accent: 'Reels System',
    shortText: 'Контент с акцентом на харизматичных персонажей, динамику и удержание внимания.',
    task: 'Создать узнаваемый контент-формат для социальных сетей.',
    solution: 'Сделали ставку на персонажей, темп, короткие сцены и повторяемые форматы.',
    metrics: [['Reels', 'форматы'], ['Characters', 'персонажи']],
    links: [],
    whatWorked: ['Харизматичные персонажи', 'Темп', 'Повторяемые форматы'],
  },
  {
    id: 'carshopping',
    title: 'Carshopping',
    category: 'Продюсирование и СММ',
    service: 'production',
    accent: 'Auto / Lifestyle',
    shortText: 'Контент вокруг эмоций, доверия и визуальной привлекательности продукта.',
    task: 'Усилить доверие и привлекательность автомобильного направления.',
    solution: 'Построили контент вокруг эмоций покупки, визуального образа и понятной коммуникации.',
    metrics: [['Auto', 'ниша'], ['Trust', 'доверие']],
    links: [],
    whatWorked: ['Эмоции', 'Визуальная подача', 'Доверие'],
  },
  {
    id: 'pivmaster',
    title: 'Пивмастер',
    category: 'Продюсирование и СММ',
    service: 'production',
    accent: 'Brand Media',
    shortText: 'Регулярный контент для формирования узнаваемости и удержания внимания аудитории.',
    task: 'Поддерживать узнаваемость бренда через регулярное присутствие в соцсетях.',
    solution: 'Выстроили регулярный контент-поток с понятными рубриками и визуальным стилем.',
    metrics: [['Brand', 'узнаваемость'], ['Content', 'регулярность']],
    links: [],
    whatWorked: ['Регулярность', 'Узнаваемость', 'Рубрики'],
  },
  {
    id: 'metallurgy-safety',
    featured: true,
    title: 'Техника безопасности для металлургического предприятия',
    category: 'Корпоративные фильмы',
    service: 'corporate',
    accent: 'Safety Film',
    shortText: 'Сухие правила техники безопасности превратили в динамичный, смешной и запоминающийся корпоративный фильм.',
    task: 'Создать обязательный ролик по технике безопасности, который не будет восприниматься как скучная формальность.',
    solution: 'Обыграли инструкции через юмор, преувеличение, небанальные сравнения, метафоры и запоминающиеся формулировки.',
    metrics: [['Safety', 'корпоративный формат'], ['Humor', 'запоминающаяся подача']],
    links: [],
    whatWorked: ['Юмор', 'Преувеличение', 'Запоминающиеся метафоры'],
  },
  {
    id: 'oil-company-50-years',
    title: 'Нефтедобывающая компания / 50 лет вперед',
    category: 'Корпоративные фильмы',
    service: 'corporate',
    accent: 'Grand Prix',
    shortText: 'Корпоративный фильм для конкурса на тему будущего компании, получивший гран-при.',
    task: 'Создать фильм для внутреннего конкурса «Наша компания через 50 лет».',
    solution: 'Построили сценарий на идее: в России закончилась нефть, но главный актив компании — люди.',
    metrics: [['Гран-при', 'конкурса']],
    links: [],
    whatWorked: ['Сильная центральная идея', 'Драматургия', 'Фокус на людях'],
  },
  {
    id: 'sakhalin-coal',
    featured: true,
    title: 'Угольная компания / Сахалин',
    category: 'Корпоративные фильмы',
    service: 'corporate',
    accent: 'Employee Content',
    shortText: 'Пример ролика для сотрудников о том, как находить интересные смыслы в повседневной работе.',
    task: 'Показать сотрудникам, как снимать интересное видео о своей работе.',
    solution: 'Сняли живой пример на Сахалине и показали, что идеи можно находить даже в обычных рабочих процессах.',
    metrics: [['Сахалин', 'натурная съемка']],
    links: [],
    whatWorked: ['Живой пример', 'Рабочая фактура', 'Объяснение через действие'],
  },
];

const CASE_FILTERS = [
  { id: 'all', label: 'Все кейсы' },
  { id: 'viral', label: 'Вирусные видеоролики' },
  { id: 'production', label: 'Продюсирование и СММ' },
  { id: 'corporate', label: 'Корпоративные фильмы' },
  { id: 'ai-content', label: 'ИИ ролики' },
];

const smokeTests = [
  { name: 'services exclude utility pages', pass: true },
  { name: 'cases have at least one viral and one production case', pass: viralCases.length > 0 && productionCases.length > 0 },
  { name: 'phone link is tel formatted', pass: /^tel:\+79273412252$/.test('tel:+79273412252') },
];

smokeTests.forEach((test) => console.assert(test.pass, `Smoke test failed: ${test.name}`));

function Card({ title, text }) {
  return (
    <div className="p-6" style={{ border: '1px solid rgba(239,68,68,0.18)', background: 'rgba(10,10,20,0.85)' }}>
      <div className="font-mono-terminal text-red-500 uppercase tracking-[3px] text-xs mb-4">RGUARD</div>
      <h3 className="text-xl font-extrabold mb-3 leading-tight">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function CaseCard({ item, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="cyber-card w-full overflow-hidden"
    >
      <div className="relative z-10 p-8 md:p-10">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
          <div className="font-mono-terminal border border-red-950/40 px-4 py-2 text-xs text-red-400 uppercase tracking-[2px]">{item.category}</div>
          <div className="font-mono-terminal text-zinc-600 text-xs uppercase tracking-[3px]">{item.accent}</div>
        </div>
        <div className="h-[220px] bg-gradient-to-br from-red-950/10 to-black border border-red-950/20 flex items-center justify-center text-zinc-600 text-sm uppercase tracking-[3px] mb-8"
          style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
          Видео / Изображение кейса
        </div>
        <div className="text-3xl md:text-4xl font-black mb-5">{item.title}</div>
        <div className="text-zinc-400 text-lg leading-relaxed">{item.shortText || item.text}</div>
      </div>
    </button>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-4xl mb-14">
      <div className="font-mono-terminal text-red-500 uppercase tracking-[4px] text-xs mb-4">// {eyebrow}</div>
      <h2 className="glitch-hero text-3xl sm:text-5xl font-extrabold leading-tight mb-6">{title}</h2>
      <p className="text-zinc-400 text-lg leading-relaxed">{text}</p>
    </div>
  );
}

function LeadForm({ button = 'Отправить заявку', textarea = 'Опишите задачу' }) {
  return (
    <div className="space-y-3">
      <input placeholder="Название компании" className="w-full px-5 py-4 outline-none text-white placeholder-zinc-600 font-mono-terminal text-sm" style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(239,68,68,0.25)', color: 'inherit' }} />
      <input placeholder="Телефон или Telegram" className="w-full px-5 py-4 outline-none text-white placeholder-zinc-600 font-mono-terminal text-sm" style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(239,68,68,0.25)', color: 'inherit' }} />
      <textarea placeholder={textarea} className="w-full h-28 px-5 py-4 outline-none resize-none text-white placeholder-zinc-600 font-mono-terminal text-sm" style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(239,68,68,0.25)', color: 'inherit' }} />
      <button className="btn-primary w-full">{button}</button>
    </div>
  );
}

function LogoMark() {
  return (
    <div className="logo-glitch w-full max-w-[360px]">
      <img src={logoSvg} alt="Красная Гвардия" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
}

function Atmosphere({ page }) {
  const commonGrid = (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.08),transparent_32%),radial-gradient(circle_at_20%_65%,rgba(255,255,255,0.03),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.022] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-0 opacity-[0.035] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_7px,white_8px)]" />
    </>
  );

  if (page === 'viral') {
    return (
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {commonGrid}
        <div className="absolute top-[12%] left-[55%] w-[520px] h-[520px] rounded-full border border-red-500/20 animate-pulse" />
        <div className="absolute top-[20%] left-[61%] w-[340px] h-[340px] rounded-full border border-white/10" />
        <div className="absolute top-[30%] left-[68%] w-[180px] h-[180px] rounded-full border border-red-500/30" />
        <div className="absolute top-[48%] left-[12%] w-[740px] h-[1px] bg-gradient-to-r from-transparent via-red-500/25 to-transparent rotate-[-8deg]" />
      </div>
    );
  }

  if (page === 'production') {
    return (
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {commonGrid}
        <div className="absolute top-[15%] right-[10%] w-[520px] h-[360px] border border-white/10 rounded-[48px] rotate-3" />
        <div className="absolute top-[23%] right-[18%] w-[220px] h-[120px] border border-red-500/20 rounded-[28px]" />
        <div className="absolute top-[47%] left-[8%] w-[460px] h-[260px] border border-white/5 rounded-[36px] rotate-[-6deg]" />
      </div>
    );
  }

  if (page === 'cases') {
    return (
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {commonGrid}
        <div className="absolute top-[10%] left-[8%] w-[360px] h-[520px] border border-white/10 rounded-[36px] rotate-[-4deg]" />
        <div className="absolute bottom-[16%] right-[8%] w-[520px] h-[360px] border border-red-500/12 rounded-[44px] rotate-6" />
        <div className="absolute top-[50%] right-[14%] w-[680px] h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent rotate-12" />
      </div>
    );
  }

  if (page === 'contacts') {
    return (
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {commonGrid}
        <div className="absolute top-[24%] right-[18%] w-[360px] h-[220px] border border-red-500/14 rounded-[32px]" />
        <div className="absolute bottom-[18%] left-[12%] w-[260px] h-[260px] rounded-full border border-white/6" />
      </div>
    );
  }

  if (page === 'home') {
    return (
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {commonGrid}
        <div className="absolute top-[8%] right-[6%] w-[460px] h-[460px] rounded-full border border-white/10 animate-pulse" />
        <div className="absolute top-[18%] right-[12%] w-[280px] h-[280px] rounded-full border border-red-500/20" />
        <div className="absolute bottom-[12%] left-[6%] w-[380px] h-[380px] rotate-12 border border-white/5" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {commonGrid}
      <div className="absolute top-[12%] right-[8%] w-[340px] h-[340px] rounded-[44px] rotate-12 border border-white/6" />
      <div className="absolute bottom-[14%] left-[10%] w-[320px] h-[1px] bg-gradient-to-r from-red-500/20 to-transparent" />
    </div>
  );
}

function PhotoGallery({ count = 6 }) {
  const [current, setCurrent] = React.useState(0);
  const prev = () => setCurrent((i) => (i - 1 + count) % count);
  const next = () => setCurrent((i) => (i + 1) % count);

  return (
    <div className="relative aspect-[4/5] bg-black rounded-[36px] overflow-hidden border border-red-950/40 select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.10),transparent_40%)]" />
      <div className="absolute inset-0 flex items-center justify-center text-center p-8 z-10">
        <div>
          <div className="text-red-500 uppercase tracking-[4px] text-xs mb-4">Фото {current + 1} / {count}</div>
          <div className="text-zinc-600 uppercase tracking-[3px] text-sm">Photo Placeholder</div>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-red-950/40 bg-black/70 hover:bg-red-950/40 hover:border-red-700/60 transition-all flex items-center justify-center text-white text-lg"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-red-950/40 bg-black/70 hover:bg-red-950/40 hover:border-red-700/60 transition-all flex items-center justify-center text-white text-lg"
      >
        ›
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-red-500 w-5' : 'bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function RGuardPrototype() {
  // URL ↔ page mapping
  const pageToPath = (id) => {
    if (id === 'home') return '/';
    if (id.startsWith('article-')) return `/articles/${id.replace('article-', '')}`;
    if (id.startsWith('industry-')) return `/industries/${id.replace('industry-', '')}`;
    if (id.startsWith('blogger-')) return `/bloggers/${id.replace('blogger-', '')}`;
    if (id === 'case-petro') return '/cases/petro-engineering';
    return `/${id}`;
  };

  const pathToPage = (path) => {
    if (path === '/' || path === '') return 'home';
    if (path.startsWith('/articles/')) return `article-${path.replace('/articles/', '')}`;
    if (path.startsWith('/industries/')) return `industry-${path.replace('/industries/', '')}`;
    if (path.startsWith('/bloggers/')) return `blogger-${path.replace('/bloggers/', '')}`;
    if (path === '/cases/petro-engineering') return 'case-petro';
    return path.replace('/', '');
  };

  const [page, setPage] = React.useState(() => pathToPage(window.location.pathname));
  const [menu, setMenu] = React.useState(false);
  const [caseFilter, setCaseFilter] = React.useState('all');

  // Данные из Sanity
  const [posts, setPosts] = React.useState([]);
  const [currentPost, setCurrentPost] = React.useState(null);
  const [postFilter, setPostFilter] = React.useState('all');
  const [industries, setIndustries] = React.useState([]);
  const [currentIndustry, setCurrentIndustry] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  // Загружаем всё один раз при старте — полные данные включая body
  React.useEffect(() => {
    getPosts().then(data => setPosts(data || [])).catch(() => {});
    getIndustries().then(data => setIndustries(data || [])).catch(() => {});
  }, []);

  // Фильтрация статей на клиенте
  const filteredPosts = React.useMemo(() =>
    postFilter === 'all' ? posts : posts.filter(p => p.category === postFilter),
  [posts, postFilter]);

  // Поиск по уже загруженным данным — без дополнительных запросов
  React.useEffect(() => {
    if (page.startsWith('article-')) {
      const slug = page.replace('article-', '');
      const found = posts.find(p => p.slug === slug);
      if (found) { setCurrentPost(found); setLoading(false); }
      else setLoading(true); // данные ещё грузятся
    }
    if (page.startsWith('industry-')) {
      const slug = page.replace('industry-', '');
      const found = industries.find(i => i.slug === slug);
      if (found) { setCurrentIndustry(found); setLoading(false); }
      else setLoading(true);
    }
  }, [page, posts, industries]);

  const POST_CATEGORIES = [
    { id: 'all', label: 'Все статьи' },
    { id: 'viral', label: 'Вирусный контент' },
    { id: 'cases', label: 'Кейсы' },
    { id: 'tools', label: 'Инструменты' },
    { id: 'trends', label: 'Тренды' },
  ];

  const formatDate = (iso) => iso ? new Date(iso).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }) : '';

  const portableTextComponents = {
    block: {
      h2: ({ children }) => <h2 className="glitch-hero text-3xl font-black mt-12 mb-6">{children}</h2>,
      h3: ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-4 text-white">{children}</h3>,
      h4: ({ children }) => <h4 className="text-xl font-bold mt-6 mb-3 text-zinc-200">{children}</h4>,
      normal: ({ children }) => <p className="text-zinc-300 text-lg leading-relaxed mb-6">{children}</p>,
      blockquote: ({ children }) => (
        <blockquote className="my-8 pl-6 py-4" style={{ borderLeft: '3px solid rgba(239,68,68,0.6)', background: 'rgba(239,68,68,0.04)' }}>
          <p className="text-zinc-200 text-lg italic leading-relaxed">{children}</p>
        </blockquote>
      ),
    },
    marks: {
      strong: ({ children }) => <strong className="text-white font-bold">{children}</strong>,
      em: ({ children }) => <em className="text-zinc-200 italic">{children}</em>,
      link: ({ value, children }) => (
        <a href={value?.href} target={value?.blank ? '_blank' : undefined} rel="noreferrer"
          className="text-red-400 hover:text-red-300 underline underline-offset-4 transition-colors">
          {children}
        </a>
      ),
    },
    types: {
      image: ({ value }) => value?.asset?.url ? (
        <figure className="my-10">
          <img src={value.asset.url} alt={value.caption || ''} className="w-full rounded-sm" />
          {value.caption && <figcaption className="font-mono-terminal text-zinc-500 text-xs mt-3 text-center tracking-[2px]">{value.caption}</figcaption>}
        </figure>
      ) : null,
      videoEmbed: ({ value }) => value?.url ? (
        <div className="my-10">
          <a href={value.url} target="_blank" rel="noreferrer"
            className="flex items-center gap-4 p-6 cyber-card">
            <div className="font-mono-terminal text-red-500 text-xs tracking-[3px]">[ VIDEO ]</div>
            <div className="text-zinc-300 text-sm">{value.caption || value.url}</div>
          </a>
        </div>
      ) : null,
    },
  };

  const nav = [
    { id: 'cases', label: 'Кейсы' },
    { label: 'Видео', children: [
      { id: 'viral', label: 'Вирусные видеоролики' },
      { id: 'corporate', label: 'Корпоративные фильмы' },
      { id: 'ai-content', label: 'ИИ контент' },
    ] },
    { id: 'production', label: 'Продюсирование' },
    { label: 'Креатив', children: [
      { id: 'scripts', label: 'Написание сценариев' },
      { id: 'concepts', label: 'Концепции рекламных кампаний' },
    ] },
    { id: 'events', label: 'Мероприятия' },
    { id: 'articles', label: 'Статьи' },
    { id: 'industries', label: 'Решения' },
    { id: 'contacts', label: 'Контакты' },
  ];

  // Синхронизация с историей браузера
  React.useEffect(() => {
    const onPop = () => setPage(pathToPage(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const goToPage = (id) => {
    if (!id) return;
    setPage(id);
    setMenu(false);
    window.scrollTo(0, 0);
    window.history.pushState({}, '', pageToPath(id));
  };

  const renderHome = () => (
    <section className="relative overflow-hidden" style={{ background: '#0a0a14' }}>
      {/* Cyberpunk grid lines */}
      <div className="pointer-events-none fixed inset-0 z-0" style={{
        backgroundImage: 'linear-gradient(rgba(239,68,68,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* ── ART LAYER — все декоративные иллюстрации ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>

        {/* Sign — watermark в hero, за заголовком слева */}
        <div className="absolute" style={{ top: '4%', left: '-8%', width: '680px', opacity: 0.05 }}>
          <img src={artSign} alt="" className="art-pulse" style={{ width: '100%' }} />
        </div>

        {/* Astro — вращающийся радар, справа в зоне hero */}
        <div className="absolute" style={{ top: '10%', right: '-12%', width: '520px', opacity: 0.07 }}>
          <img src={artAstro} alt="" className="art-rotate" style={{ width: '100%' }} />
        </div>

        {/* Analyze — схема-чертёж в зоне услуг, справа */}
        <div className="absolute" style={{ top: '48%', right: '-6%', width: '420px', opacity: 0.07 }}>
          <img src={artAnalyze} alt="" className="art-float" style={{ width: '100%' }} />
        </div>

        {/* Ship — корабль в зоне кейсов, слева */}
        <div className="absolute" style={{ top: '72%', left: '-8%', width: '480px', opacity: 0.07 }}>
          <img src={artShip} alt="" className="art-float" style={{ width: '100%', animationDelay: '3s' }} />
        </div>

        {/* Monolith — колонна в зоне блогеров, справа */}
        <div className="absolute" style={{ top: '85%', right: '-4%', width: '320px', opacity: 0.08 }}>
          <img src={artMonolith} alt="" style={{ width: '100%' }} />
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32 relative" style={{ zIndex: 2 }}>

        {/* ── HERO ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-32">
          <div>
            {/* HUD badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 font-mono-terminal text-xs tracking-[4px] uppercase"
              style={{ border: '1px solid rgba(239,68,68,0.5)', background: 'rgba(239,68,68,0.05)', color: '#ef4444' }}>
              <span className="w-2 h-2 rounded-full bg-red-500 flicker" style={{ boxShadow: '0 0 6px #ef4444' }} />
              [ VIRAL_CONTENT • INDUSTRIAL_AUDIENCE ]
            </div>

            <h1 className="glitch-hero text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.92] mb-8">
              Вирусные ролики для промышленности и реального сектора
            </h1>

            <div className="space-y-4 mb-10" style={{ borderLeft: '2px solid rgba(239,68,68,0.4)', paddingLeft: '1.25rem' }}>
              <p className="text-zinc-300 text-lg leading-relaxed">Мы создаём контент, который рабочие пересылают друг другу в Telegram и обсуждают внутри индустрии.</p>
              <p className="text-zinc-500 text-lg leading-relaxed">Производства, стройки, карьеры, тяжёлая техника и добыча — наша естественная среда.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button onClick={() => goToPage('viral')} className="btn-primary">Получить идеи роликов</button>
              <button onClick={() => goToPage('cases')} className="btn-secondary">Смотреть кейсы</button>
            </div>

            {/* Terminal stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[['2000+', 'Снятых роликов'], ['2M+', 'Подписчиков'], ['100+', 'Упоминаний в СМИ'], ['10+', 'Чел. в команде']].map(([value, label]) => (
                <div key={label} className="hud-corner p-4" style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.15)' }}>
                  <div className="font-mono-terminal text-3xl font-bold neon-red">{value}</div>
                  <div className="font-mono-terminal text-zinc-500 text-xs uppercase tracking-[2px] mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Reels mock — cyberpunk phone */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[360px]">
              <div className="relative aspect-[9/16] overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #0d0d1a 0%, #0a0a14 100%)',
                  border: '1px solid rgba(239,68,68,0.4)',
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                  boxShadow: '0 0 40px rgba(239,68,68,0.2), inset 0 0 40px rgba(239,68,68,0.05)',
                }}>
                {/* Scanlines inside phone */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px)',
                }} />
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(239,68,68,0.6)', boxShadow: '0 0 8px rgba(239,68,68,0.8)' }} />
                <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'rgba(239,68,68,0.6)', boxShadow: '0 0 8px rgba(239,68,68,0.8)' }} />

                {/* Corner HUD markers */}
                <div className="absolute top-3 left-3 w-5 h-5" style={{ borderTop: '2px solid #ef4444', borderLeft: '2px solid #ef4444' }} />
                <div className="absolute top-3 right-3 w-5 h-5" style={{ borderTop: '2px solid #ef4444', borderRight: '2px solid #ef4444' }} />
                <div className="absolute bottom-3 left-3 w-5 h-5" style={{ borderBottom: '2px solid #ef4444', borderLeft: '2px solid #ef4444' }} />
                <div className="absolute bottom-3 right-3 w-5 h-5" style={{ borderBottom: '2px solid #ef4444', borderRight: '2px solid #ef4444' }} />

                <video
                  src="/reel.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: 'linear-gradient(transparent, #0a0a14)' }} />
                {/* HUD overlay поверх видео */}
                <div className="absolute top-6 left-4 right-4 flex items-center justify-between z-10">
                  <div className="font-mono-terminal text-red-500 text-xs tracking-[3px] flicker">[ REC • LIVE ]</div>
                  <div className="w-2 h-2 rounded-full bg-red-500 flicker" style={{ boxShadow: '0 0 6px #ef4444' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── LEAD FORM ── */}
        <div className="mb-32 p-8 lg:p-12 relative"
          style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.22)' }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(239,68,68,0.8), transparent)' }} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="font-mono-terminal text-red-500 text-xs tracking-[4px] uppercase mb-4">// INIT_REQUEST</div>
              <h3 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-6">Покажем, какие вирусные ролики могут сработать в вашей нише</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">Разберём вашу аудиторию и предложим идеи роликов под industrial B2B.</p>
            </div>
            <LeadForm button="Получить идеи роликов" />
          </div>
        </div>

        {/* ── УСЛУГИ ── */}
        <div className="mb-32">
          <div className="mb-10">
            <div className="font-mono-terminal text-red-500 text-xs tracking-[4px] uppercase mb-3">// SERVICES.LIST</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">Строим контент-системы, а не просто снимаем ролики</h2>
            <p className="text-zinc-400 text-lg">Выберите направление под вашу задачу.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: 'viral', title: 'Вирусные видеоролики', text: 'Вертикальный контент с акцентом на вирусность и органическое распространение.' },
              { id: 'corporate', title: 'Корпоративные фильмы', text: 'Имиджевые и производственные фильмы для B2B.' },
              { id: 'ai-content', title: 'ИИ контент', text: 'AI-generated и hybrid production для современного digital-контента.' },
              { id: 'production', title: 'Продюсирование и СММ', text: 'Контент-стратегия, продакшн, аналитика и управление соцсетями.' },
              { id: 'scripts', title: 'Написание сценариев', text: 'Вирусные, storytelling и рекламные сценарии под бизнес-задачи.' },
              { id: 'concepts', title: 'Концепции рекламных кампаний', text: 'Креативные механики для масштабируемых кампаний.' },
              { id: 'events', title: 'Организация мероприятий', text: 'События, которые становятся контентом и инфоповодом.' },
            ].map((service, i) => (
              <button key={service.id} onClick={() => goToPage(service.id)} className="cyber-card p-7">
                <div className="font-mono-terminal text-red-500 text-xs tracking-[3px] uppercase mb-3">SVC_{String(i+1).padStart(2,'0')}</div>
                <div className="text-xl font-extrabold mb-3 leading-tight">{service.title}</div>
                <div className="text-zinc-500 leading-relaxed text-sm">{service.text}</div>
              </button>
            ))}
          </div>
        </div>

        {/* ── О КОМПАНИИ ── */}
        <div className="mb-32 relative overflow-hidden p-8 md:p-14"
          style={{ background: 'rgba(10,10,20,0.9)', border: '1px solid rgba(239,68,68,0.2)' }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, rgba(239,68,68,0.8), transparent)' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(239,68,68,0.08) 0%, transparent 60%)' }} />
          {/* Favicon К — фоновый акцент */}
          <div className="pointer-events-none absolute -right-8 -bottom-8 overflow-hidden" style={{ zIndex: 0, width: '380px', opacity: 0.05 }}>
            <img src={artFavicon} alt="" style={{ width: '100%' }} />
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="font-mono-terminal text-red-500 text-xs tracking-[4px] uppercase mb-6">// ABOUT.RGUARD</div>
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8">
                Мы не просто снимаем ролики.
                <br />
                <span className="neon-red">Мы проектируем распространение внимания.</span>
              </h2>
              <div className="space-y-5 text-zinc-400 text-lg leading-relaxed">
                <p><span className="text-white font-bold">Красная Гвардия</span> — креативное агентство, основанное в 2014 году. Прошли путь от digital-агентства до команды, специализирующейся на вирусных кампаниях через вертикальный видеоконтент.</p>
                <p>Собственные методики вирусного контента — не просто на просмотры, а на репосты и органическое распространение внутри целевой аудитории.</p>
                <p>Работаем на стыке креатива, продюсирования, social media и AI-assisted production.</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="p-8 flex items-center justify-center min-h-[200px]"
                style={{ border: '1px solid rgba(239,68,68,0.25)', background: 'rgba(0,0,0,0.4)' }}>
                <LogoMark />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[['2000+', 'Снятых роликов'], ['2M+', 'Подписчиков'], ['100+', 'Упоминаний в СМИ'], ['50+', 'Выступлений'], ['10+', 'Специалистов'], ['2014', 'Год основания']].map(([value, label]) => (
                  <div key={label} className="p-5 hud-corner"
                    style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.15)' }}>
                    <div className="font-mono-terminal text-2xl font-bold neon-red">{value}</div>
                    <div className="text-zinc-500 text-xs leading-relaxed mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative z-10 grid md:grid-cols-3 gap-4">
            {[
              ['Собственная методология', 'Контент по проверенным механикам вирусного распространения и удержания внимания.'],
              ['Full-cycle команда', 'Сценаристы, актёры, операторы, монтажёры, AI-специалисты — всё внутри одной команды.'],
              ['Понимание сложных ниш', 'Industrial, B2B, производство, стройка и сложные продукты — наша естественная среда.'],
            ].map(([title, text]) => (
              <div key={title} className="p-6" style={{ border: '1px solid rgba(239,68,68,0.15)', background: 'rgba(239,68,68,0.03)' }}>
                <div className="font-mono-terminal text-red-500 text-xs tracking-[3px] uppercase mb-3">RGUARD</div>
                <div className="text-lg font-extrabold mb-3">{title}</div>
                <div className="text-zinc-400 text-sm leading-relaxed">{text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── ПОЧЕМУ МЫ ── */}
        <div className="mb-32">
          <div className="mb-10">
            <div className="font-mono-terminal text-red-500 text-xs tracking-[4px] uppercase mb-3">// WHY.RGUARD</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">Мы понимаем industrial-аудиторию лучше большинства агентств</h2>
            <p className="text-zinc-400 text-lg">Industrial-аудитория мгновенно чувствует фальшь.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ['Настоящая атмосфера', 'Работаем внутри производств, строительных объектов и промышленной среды.'],
              ['Мужская аудитория', 'Понимаем триггеры и эмоциональные механики industrial-аудитории.'],
              ['Вирусные механики', 'Создаём ролики, которые начинают жить внутри профессионального сообщества.'],
              ['B2B-медийность', 'Контент усиливает бренд и формирует authority внутри рынка.'],
            ].map(([title, text], i) => (
              <div key={title} className="p-6 relative"
                style={{ border: '1px solid rgba(239,68,68,0.15)', background: 'rgba(10,10,20,0.8)' }}>
                <div className="font-mono-terminal text-red-500/40 text-4xl font-black mb-4">0{i+1}</div>
                <div className="text-lg font-extrabold mb-3 leading-tight">{title}</div>
                <div className="text-zinc-500 text-sm leading-relaxed">{text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── КЕЙСЫ ── */}
        <div className="mb-32">
          <div className="mb-10">
            <div className="font-mono-terminal text-red-500 text-xs tracking-[4px] uppercase mb-3">// CASES.FEATURED</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">Проекты, которые показывают наш подход в действии</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {CASES.filter((item) => item.featured).slice(0, 4).map((item) => (
              <CaseCard key={item.id} item={item} onOpen={() => item.id === 'petro-engineering' && goToPage('case-petro')} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <button onClick={() => goToPage('cases')} className="btn-secondary">Смотреть все кейсы</button>
          </div>
        </div>

        {/* ── БЛОГЕРЫ ── */}
        <div className="mb-16">
          <div className="mb-10">
            <div className="font-mono-terminal text-red-500 text-xs tracking-[4px] uppercase mb-3">// BLOGGERS.INDEX</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">Люди, через которых индустрия смотрит контент RGUARD</h2>
            <p className="text-zinc-400 text-lg">Каждый блогер — отдельный тип подачи и взаимодействия с аудиторией.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bloggers.slice(0, 3).map((blogger, i) => (
              <button
                key={blogger.id}
                type="button"
                onClick={() => goToPage(`blogger-${blogger.id}`)}
                className="cyber-card overflow-hidden"
              >
                <div className="aspect-[4/5] flex items-center justify-center text-center p-6 relative overflow-hidden"
                  style={{ borderBottom: '1px solid rgba(239,68,68,0.12)', background: 'rgba(0,0,0,0.35)' }}>
                  <div className="absolute top-3 left-3 font-mono-terminal text-red-500/30 text-xs">#{String(i+1).padStart(2,'0')}</div>
                  <div className="relative z-10">
                    <div className="font-mono-terminal text-red-500 text-xs tracking-[4px] mb-3 flicker">[ PHOTO ]</div>
                    <div className="text-2xl font-extrabold">{blogger.name}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xl font-bold mb-3">{blogger.name}</div>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-5">{blogger.desc}</p>
                  <div className="font-mono-terminal text-xs text-red-500 tracking-[2px]">OPEN_PROFILE →</div>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button onClick={() => goToPage('bloggers')} className="btn-secondary">Посмотреть всех блогеров</button>
          </div>
        </div>

      </div>
    </section>
  );

  const renderViralPage = () => {
    const steps = [
      { title: 'Анализ продукта и бизнес-процессов компании', desc: 'Погружаемся в продукт, внутренние процессы и специфику бизнеса, чтобы контент выглядел как часть индустрии, а не как внешняя реклама.' },
      { title: 'Определение реальной целевой аудитории', desc: 'Выявляем не абстрактную аудиторию, а конкретных людей, которые принимают решения, влияют на закупки или становятся амбассадорами бренда внутри рынка.' },
      { title: 'Изучение болей клиентов и кастдев', desc: 'Находим реальные боли, раздражители, страхи и триггеры аудитории — именно они становятся топливом для вирусных сценариев.' },
      { title: 'Анализ площадок и правил соцсетей', desc: 'Учитываем особенности алгоритмов, поведения пользователей и форматов каждой платформы, чтобы ролики получали максимальный органический охват.' },
      { title: 'Создание персонажей и архетипов аудитории', desc: 'Формируем узнаваемые типажи, в которых аудитория видит себя, коллег или клиентов — это резко повышает вовлечение и пересылки.' },
      { title: 'Разработка вирусных сценариев', desc: 'Используем storytelling, преувеличение, юмор, контраст и другие механики, которые удерживают внимание и вызывают желание поделиться роликом.' },
      { title: 'Съемка тестовых роликов', desc: 'Не строим стратегию на догадках — сначала проверяем гипотезы на практике и собираем реальные данные по реакции аудитории.' },
      { title: 'Анализ удержания, пересылок и реакции аудитории', desc: 'Изучаем не только просмотры, но и глубину просмотра, комментарии, сохранения и органическое распространение контента.' },
      { title: 'Масштабирование лучших форматов', desc: 'Лучшие механики превращаем в системную контент-машину, которая стабильно приносит внимание, узнаваемость и входящие заявки.' },
    ];

    return (
      <section className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
        <div className="max-w-6xl">
          <div className="font-mono-terminal text-red-500 uppercase tracking-[4px] text-xs font-bold mb-6">Флагманское направление RGUARD</div>
          <h1 className="glitch-hero text-5xl md:text-7xl font-black leading-none mb-8">Вирусные<br />видеоролики</h1>
          <p className="text-zinc-300 text-xl leading-relaxed max-w-4xl">Мы создаем контент для людей, а не для алгоритмов. Наша задача — не просто набрать охваты, а сделать так, чтобы ролики начали жить внутри профессионального сообщества: пересылались в рабочих чатах, обсуждались на объектах, сохранялись и становились частью индустриального инфополя.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mt-16">
          {[['1500+', 'Снятых вертикальных видеороликов'], ['1M+', 'Подписчиков суммарно в соцсетях'], ['2021', 'Стояли у истоков reels-продюсирования'], ['B2B', 'Специализация на сложных нишах и реальном секторе']].map(([value, label]) => (
            <div key={label} className="p-8 hud-corner" style={{border:'1px solid rgba(239,68,68,0.18)',background:'rgba(10,10,20,0.85)'}}>
              <div className="text-4xl font-black mb-3">{value}</div>
              <div className="text-zinc-400 leading-relaxed">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-4xl font-black mb-8">Современная реклама сломалась</div>
            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <div>Люди научились игнорировать рекламу. Баннерная слепота, adblock, проматывание интеграций и переизбыток контента сделали классическую рекламу менее эффективной.</div>
              <div>Большинство компаний продолжают создавать «контент ради охватов», забывая главный вопрос:<span className="text-white font-bold"> а что с продажами?</span></div>
              <div>Мы строим контент вокруг человеческих эмоций, боли аудитории, узнаваемых ситуаций и культурного кода отрасли.</div>
            </div>
          </div>
          <div className="rounded-[40px] border border-red-950/40 bg-gradient-to-br from-red-950/20 to-black p-10">
            <div className="text-3xl font-black mb-8">Принципы вирусности</div>
            <div className="space-y-6 text-zinc-300 leading-relaxed">
              <div><span className="text-white font-bold">Контент должен давать больше,</span> чем зритель платит своим вниманием.</div>
              <div>Используем преувеличение, контраст, абсурд, storytelling, олицетворение и индустриальный юмор.</div>
              <div>Не более 10% рекламы. Если ролик ощущается как реклама — зритель его пролистнет.</div>
              <div>Соцсети — лишь точка входа. Настоящее распространение происходит в мессенджерах и внутри ЦА.</div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-4xl font-black mb-12">Как мы создаем вирусные ролики</div>
          <div className="space-y-6">
            {steps.map((item, index) => (
              <div key={item.title} className="p-8 flex gap-6 items-start" style={{border:'1px solid rgba(239,68,68,0.18)',background:'rgba(10,10,20,0.85)'}}>
                <div className="font-mono-terminal text-2xl font-black text-red-500 min-w-[56px]" style={{textShadow:'0 0 10px rgba(239,68,68,0.6)'}}>0{index + 1}</div>
                <div>
                  <div className="text-2xl font-bold mb-2">{item.title}</div>
                  <div className="text-zinc-400 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 rounded-[40px] border border-red-950/40 bg-zinc-950 p-12">
          <div className="text-4xl font-black mb-10">Почему это работает в реальном секторе</div>
          <div className="grid md:grid-cols-2 gap-10 text-zinc-300 text-lg leading-relaxed">
            <div>• Мы умеем делать медийными сложные продукты<br /><br />• Работаем с промышленностью, добычей, стройкой и производством<br /><br />• Используем язык и юмор самой индустрии<br /><br />• Формируем эффект «это про нас»</div>
            <div>• Ролики пересылают внутри профессионального сообщества<br /><br />• Компания становится узнаваемой внутри рынка<br /><br />• Контент начинает приводить входящие заявки<br /><br />• Видео продолжают работать месяцами</div>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-4xl font-black mb-10">Кейсы</div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {CASES.filter((item) => item.service === 'viral').map((item) => (
              <CaseCard
                key={item.id}
                item={item}
                onOpen={() => item.id === 'petro-engineering' && goToPage('case-petro')}
              />
            ))}
          </div>
          <div className="rounded-[32px] border border-red-950/40 bg-gradient-to-br from-red-950/20 to-black p-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-3xl font-black mb-6">Стоимость</div>
              <div className="font-mono-terminal text-5xl font-black mb-6 neon-red">от 150 000 ₽</div>
              <div className="text-zinc-300 text-lg leading-relaxed">Сценарий, съемка, монтаж, публикация и механики распространения.</div>
            </div>
            <div className="space-y-4">
              <input placeholder="Ваше имя" className="w-full rounded-2xl bg-black border border-red-950/40 px-6 py-5 outline-none" />
              <input placeholder="Телефон или Telegram" className="w-full rounded-2xl bg-black border border-red-950/40 px-6 py-5 outline-none" />
              <button className="btn-primary w-full">Обсудить вирусный ролик</button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderProductionPage = () => {
    const steps = [
      { title: 'Компания обращается с запросом на создание вертикального контента для соцсетей', desc: 'На старте определяем реальные задачи бизнеса: нужен ли поток заявок, рост узнаваемости, усиление HR-бренда или медийность внутри рынка.' },
      { title: 'Проводим анализ текущих аккаунтов и решаем: развивать существующие или запускать новые', desc: 'Изучаем аудиторию, активность, репутацию площадок и принимаем решение, какая стратегия даст максимальный результат.' },
      { title: 'Определяем цели: узнаваемость, охваты, лидогенерация или HR-задачи', desc: 'Формируем KPI будущего контента, чтобы ролики работали не только на просмотры, но и на бизнес-результат.' },
      { title: 'Погружаемся в бизнес-процессы и анализируем боли аудитории', desc: 'Изучаем внутреннюю кухню компании, типажи сотрудников, страхи, желания и триггеры целевой аудитории.' },
      { title: 'Создаем майнд-карту контента и ключевых направлений', desc: 'Собираем систему рубрик, персонажей, конфликтов и смыслов, из которых формируется долгосрочный контент-план.' },
      { title: 'Пишем пробные вирусные сценарии с юмором и storytelling', desc: 'Используем преувеличение, контраст, олицетворение, абсурд и другие механики, которые удерживают внимание.' },
      { title: 'Снимаем тестовый пул роликов и анализируем реакцию аудитории', desc: 'Отслеживаем удержание, вовлеченность, комментарии, пересылки и ищем форматы с максимальным потенциалом.' },
      { title: 'Выбираем лучшие форматы и усиливаем сильное', desc: 'Успешные ролики превращаются в масштабируемые контент-серии, которые стабильно набирают охваты.' },
      { title: 'Продолжаем производство контента с постоянными экспериментами', desc: 'Контент развивается циклично: мы тестируем новые идеи, адаптируемся под тренды и усиливаем работающие механики.' },
    ];

    return (
      <section className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
        <div className="max-w-6xl">
          <div className="font-mono-terminal text-red-500 uppercase tracking-[4px] text-xs font-bold mb-6">Продюсирование и СММ</div>
          <h1 className="glitch-hero text-5xl md:text-7xl font-black leading-none mb-8">Контент-система<br />для бизнеса</h1>
          <p className="text-zinc-300 text-xl leading-relaxed max-w-4xl">Мы не просто снимаем ролики. Мы строим системную медийность компании: анализируем рынок, находим сильные стороны бизнеса, создаем вирусные форматы и превращаем соцсети в постоянный источник внимания и входящих заявок.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mt-16">
          {[['8–10', 'Видео ежемесячно'], ['Full', 'Продакшн и постинг под ключ'], ['Cross', 'Кросспостинг на все платформы'], ['B2B', 'Специализация на сложных нишах']].map(([value, label]) => (
            <div key={label} className="p-8 hud-corner" style={{border:'1px solid rgba(239,68,68,0.18)',background:'rgba(10,10,20,0.85)'}}>
              <div className="text-4xl font-black mb-3">{value}</div>
              <div className="text-zinc-400 leading-relaxed">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-4xl font-black mb-8">Большинство компаний снимают контент хаотично</div>
            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <div>Нет стратегии, нет понимания аудитории, нет системы тестирования гипотез. В итоге контент превращается в набор случайных публикаций.</div>
              <div>Мы выстраиваем контент как полноценную медиа-систему: с аналитикой, гипотезами, тестами и постоянным усилением работающих форматов.</div>
              <div>Наша задача — не просто выкладывать ролики, а создавать контент, который начинает жить внутри рынка и формирует узнаваемость компании.</div>
            </div>
          </div>
          <div className="rounded-[40px] border border-red-950/40 bg-gradient-to-br from-red-950/20 to-black p-10">
            <div className="text-3xl font-black mb-8">Что входит в продюсирование</div>
            <div className="space-y-5 text-zinc-300 leading-relaxed text-lg">
              <div>• Разработка контент-стратегии</div><div>• Создание вирусных сценариев</div><div>• Съемка и монтаж роликов</div><div>• Кросспостинг на платформы</div><div>• Аналитика и тестирование гипотез</div><div>• Усиление успешных форматов</div><div>• Сторис и backstage-контент</div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-4xl font-black mb-12">Как мы работаем</div>
          <div className="space-y-6">
            {steps.map((item, index) => (
              <div key={item.title} className="p-8 flex gap-6 items-start" style={{border:'1px solid rgba(239,68,68,0.18)',background:'rgba(10,10,20,0.85)'}}>
                <div className="font-mono-terminal text-2xl font-black text-red-500 min-w-[56px]" style={{textShadow:'0 0 10px rgba(239,68,68,0.6)'}}>0{index + 1}</div>
                <div><div className="text-2xl font-bold mb-2">{item.title}</div><div className="text-zinc-400 leading-relaxed">{item.desc}</div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 rounded-[40px] border border-red-950/40 bg-zinc-950 p-12">
          <div className="text-4xl font-black mb-10">Принципы нашей работы</div>
          <div className="grid md:grid-cols-2 gap-10 text-zinc-300 text-lg leading-relaxed">
            <div>• Контент должен выглядеть нативно, а не как реклама<br /><br />• В центре всегда реальные боли и интересы аудитории<br /><br />• Мы тестируем гипотезы, а не угадываем<br /><br />• Лучшие ролики масштабируются в серию</div>
            <div>• Используем юмор, преувеличение и контраст<br /><br />• Контент должен вызывать эмоцию и желание переслать<br /><br />• Аналитика важнее субъективного вкуса<br /><br />• Постоянно добавляем новые механики и эксперименты</div>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-4xl font-black mb-10">Кейсы</div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {CASES.filter((item) => item.service === 'production').map((item) => (
              <CaseCard
                key={item.id}
                item={item}
                onOpen={() => {}}
              />
            ))}
          </div>
          <div className="rounded-[32px] border border-red-950/40 bg-gradient-to-br from-red-950/20 to-black p-10 grid lg:grid-cols-2 gap-10 items-center">
            <div><div className="text-3xl font-black mb-6">Стоимость</div><div className="font-mono-terminal text-5xl font-black mb-6 neon-red">от 125 000 ₽</div><div className="text-zinc-300 text-lg leading-relaxed">В стоимость входит создание 8–10 вертикальных видео, публикация, аналитика и контент-сопровождение.</div></div>
            <LeadForm button="Обсудить продюсирование" textarea="Какие задачи хотите решить через контент" />
          </div>
        </div>
      </section>
    );
  };

  const renderCasesPage = () => (
    <section className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-[42px] border border-red-950/40 bg-gradient-to-br from-red-950/30 via-black to-black p-10 md:p-16 mb-24">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.35),transparent_45%)]" />
        <div className="relative z-10 max-w-5xl">
          <div className="font-mono-terminal text-red-500 uppercase tracking-[4px] text-xs font-bold mb-6">Кейсы RGUARD</div>
          <h1 className="glitch-hero text-5xl md:text-7xl font-black leading-none mb-8">Мы превращаем<br />сложный бизнес<br />в медийный</h1>
          <p className="text-zinc-300 text-xl leading-relaxed max-w-4xl mb-10">Производство. Стройка. Инженерия. Добыча. Реальный сектор. Мы создаем контент, который распространяется внутри индустрии, формирует узнаваемость компании и приводит входящие заявки.</p>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="rounded-[28px] border border-red-950/40 bg-black/40 p-6 backdrop-blur-sm"><div className="text-4xl font-black mb-2">1500+</div><div className="text-zinc-400 leading-relaxed">Вертикальных роликов снято командой</div></div>
            <div className="rounded-[28px] border border-red-950/40 bg-black/40 p-6 backdrop-blur-sm"><div className="text-4xl font-black mb-2">B2B</div><div className="text-zinc-400 leading-relaxed">Специализация на сложных нишах и реальном секторе</div></div>
            <div className="rounded-[28px] border border-red-950/40 bg-black/40 p-6 backdrop-blur-sm"><div className="text-4xl font-black mb-2">Full</div><div className="text-zinc-400 leading-relaxed">Production, продюсирование и креатив под ключ</div></div>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <div className="text-4xl font-black mb-4">Компании, которые уже работали с нами</div>
        <div className="text-zinc-400 text-lg mb-10 max-w-3xl">Блок доверия для будущих логотипов клиентов. Сейчас — аккуратные плейсхолдеры в фирменной сетке.</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {Array.from({ length: 12 }).map((_, index) => <div key={index} className="h-[110px] rounded-[28px] border border-red-950/40 bg-zinc-950 flex items-center justify-center text-zinc-600 uppercase tracking-[3px] text-sm">Logo</div>)}
        </div>
      </div>

      <div>
        <div className="text-4xl font-black mb-10">Кейсы и проекты</div>
        <div className="flex flex-wrap gap-3 mb-10">
          {CASE_FILTERS.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setCaseFilter(filter.id)}
              className={`font-mono-terminal text-xs uppercase tracking-[2px] px-5 py-3 transition-all cursor-pointer ${caseFilter === filter.id ? 'text-white' : 'text-zinc-500 hover:text-red-400'}`} style={caseFilter === filter.id ? {border:'1px solid rgba(239,68,68,0.8)',background:'rgba(239,68,68,0.15)'} : {border:'1px solid rgba(239,68,68,0.2)',background:'transparent'}}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {CASES.filter((item) => caseFilter === 'all' || item.service === caseFilter).map((item) => (
            <CaseCard
              key={item.id}
              item={item}
              onOpen={() => item.id === 'petro-engineering' && goToPage('case-petro')}
            />
          ))}
        </div>
      </div>

      <div className="mt-24 rounded-[42px] border border-red-950/40 bg-gradient-to-br from-red-950/20 to-black p-10 md:p-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.4),transparent_40%)]" />
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div><div className="text-5xl font-black leading-none mb-6">Хотите такой же эффект для своей компании?</div><p className="text-zinc-300 text-xl leading-relaxed max-w-2xl">Разберем ваш продукт, найдем сильные стороны бизнеса и предложим форматы, которые смогут стать медийными внутри вашей индустрии.</p></div>
          <LeadForm button="Получить предложение" textarea="Кратко опишите задачу" />
        </div>
      </div>
    </section>
  );

  const renderCasePage = (caseId) => {
    const currentCase = CASES.find((item) => item.id === caseId) || CASES[0];
    const caseVideos = currentCase.links && currentCase.links.length ? currentCase.links.slice(0, 6) : [''];

    return (
      <section className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
        <button onClick={() => goToPage('cases')} className="mb-10 font-mono-terminal text-zinc-500 hover:text-red-400 transition-all text-xs uppercase tracking-[3px] cursor-pointer">
          ← Назад к кейсам
        </button>

        <div className="mb-20 max-w-6xl">
          <div className="font-mono-terminal text-red-500 uppercase tracking-[4px] text-xs font-bold mb-6">Кейс / {currentCase.category}</div>
          <h1 className="glitch-hero text-5xl md:text-7xl font-black leading-none mb-8">{currentCase.title}</h1>
          <p className="text-zinc-300 text-xl leading-relaxed max-w-4xl">{currentCase.shortText}</p>
        </div>

        <div className="mb-24">
          <div className="text-4xl font-black mb-10">Видео кейса</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseVideos.map((link, index) => (
              <a
                key={`${currentCase.id}-video-${index}`}
                href={link || '#'}
                target={link ? '_blank' : undefined}
                rel={link ? 'noreferrer' : undefined}
                className="group relative aspect-[9/16] rounded-[32px] border border-red-950/40 bg-gradient-to-b from-[#111] to-black overflow-hidden flex items-center justify-center text-center p-5 hover:border-red-600/60 transition-all"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.16),transparent_40%)]" />
                <div className="relative z-10">
                  <div className="text-red-500 uppercase tracking-[3px] text-xs mb-4">Видео {index + 1}</div>
                  <div className="text-xl font-black mb-3">{link ? 'Смотреть ролик' : 'Video Placeholder'}</div>
                  <div className="text-zinc-500 text-xs leading-relaxed">{link ? 'Откроется в новой вкладке' : 'Материал будет добавлен'}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-24">
          {(currentCase.metrics || []).map(([value, label]) => (
            <div key={`${value}-${label}`} className="p-8 hud-corner" style={{border:'1px solid rgba(239,68,68,0.18)',background:'rgba(10,10,20,0.85)'}}>
              <div className="text-4xl font-black mb-3">{value}</div>
              <div className="text-zinc-400 leading-relaxed">{label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-24">
          <div className="rounded-[40px] border border-red-950/40 bg-zinc-950 p-10">
            <div className="text-red-500 uppercase tracking-[4px] text-xs font-bold mb-5">Задача</div>
            <h2 className="text-4xl font-black mb-6">Что нужно было решить</h2>
            <p className="text-zinc-300 text-lg leading-relaxed">{currentCase.task}</p>
          </div>

          <div className="rounded-[40px] border border-red-950/40 bg-gradient-to-br from-red-950/20 to-black p-10">
            <div className="text-red-500 uppercase tracking-[4px] text-xs font-bold mb-5">Решение</div>
            <h2 className="text-4xl font-black mb-6">Что мы сделали</h2>
            <p className="text-zinc-300 text-lg leading-relaxed">{currentCase.solution}</p>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-4xl font-black mb-10">Что сработало</div>
          <div className="grid md:grid-cols-3 gap-6">
            {(currentCase.whatWorked || []).map((title) => (
              <Card key={title} title={title} text="Этот принцип усилил удержание внимания, обсуждение и распространение кейса." />
            ))}
          </div>
        </div>

        {currentCase.id === 'petro-engineering' && (
          <div className="rounded-[42px] border border-red-950/40 bg-gradient-to-br from-red-950/25 via-black to-black p-10 md:p-14 mb-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.35),transparent_42%)]" />
            <div className="relative z-10 max-w-5xl">
              <div className="font-mono-terminal text-red-500 uppercase tracking-[4px] text-xs font-bold mb-6">Сильный инсайт кейса</div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">HR-служба не справлялась с входящими звонками</h2>
              <p className="text-zinc-300 text-xl leading-relaxed">
                После публикации первого ролика заказчик попросил заменить статический номер телефона на многоканальный 8-800, потому что HR-служба не успевала принимать входящие обращения. Дополнительный эффект — ролики бесплатно подхватили федеральные паблики с многомиллионной аудиторией.
              </p>
            </div>
          </div>
        )}

        <div className="p-10 md:p-14" style={{border:'1px solid rgba(239,68,68,0.18)',background:'rgba(10,10,20,0.85)'}}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-4xl md:text-5xl font-black leading-tight mb-6">Хотите похожий результат для своей компании?</div>
              <p className="text-zinc-300 text-xl leading-relaxed">Разберем вашу задачу и предложим формат, который сможет привлечь внимание нужной аудитории.</p>
            </div>
            <LeadForm button="Обсудить проект" textarea="Опишите вашу задачу" />
          </div>
        </div>
      </section>
    );
  };

  const renderContactsPage = () => (
    <section className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
      <div className="max-w-5xl mb-20">
        <div className="font-mono-terminal text-red-500 uppercase tracking-[4px] text-xs font-bold mb-6">Контакты</div>
        <h1 className="glitch-hero text-5xl md:text-7xl font-black leading-none mb-8">Свяжитесь с Красной Гвардией</h1>
        <p className="text-zinc-300 text-xl leading-relaxed">Если у вас задача по вирусному контенту, продюсированию, HR-маркетингу или медийности бренда — свяжитесь с нами напрямую.</p>
      </div>

      <div className="rounded-[42px] border border-red-950/40 bg-gradient-to-br from-red-950/20 via-black to-black p-10 md:p-14 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.35),transparent_42%)]" />
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex px-4 py-2 rounded-full border border-red-900/40 bg-black/40 text-red-400 uppercase tracking-[3px] text-xs mb-6">Приоритетный способ связи</div>
            <div className="text-4xl md:text-5xl font-black mb-4">Усманов Радим</div>
            <div className="text-zinc-400 text-xl mb-8">Коммерческий директор</div>
            <div className="space-y-5 mb-10">
              <a href="tel:+79273412252" className="block text-2xl font-bold hover:text-red-400 transition-all">+7 927 341-22-52</a>
              <a href="https://t.me/usmradim" target="_blank" rel="noreferrer" className="block text-xl text-zinc-300 hover:text-white transition-all">Telegram: @usmradim</a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+79273412252" className="bg-red-600 hover:bg-red-500 transition-all px-8 py-4 rounded-2xl font-bold text-lg text-center">Позвонить</a>
              <a href="https://t.me/usmradim" target="_blank" rel="noreferrer" className="border border-red-950/40 hover:border-red-500 transition-all px-8 py-4 rounded-2xl font-bold text-lg text-center">Написать в Telegram</a>
            </div>
          </div>

          <div className="aspect-[4/5] rounded-[36px] border border-red-950/40 bg-zinc-950 flex items-center justify-center text-center p-8">
            <div>
              <div className="text-red-500 uppercase tracking-[4px] text-xs mb-4">Photo Placeholder</div>
              <div className="text-2xl font-extrabold">Усманов Радим</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 mb-20 w-full max-w-full overflow-hidden">
        <div className="rounded-[32px] border border-red-950/40 bg-zinc-950 p-6 sm:p-10 w-full min-w-0 overflow-hidden">
          <div className="text-red-500 uppercase tracking-[4px] text-xs mb-5">Общие контакты</div>
          <div className="space-y-8">
            <div>
              <div className="text-zinc-500 text-sm uppercase tracking-[3px] mb-2">Телефон</div>
              <a href="tel:+79177802782" className="block text-2xl sm:text-3xl font-black hover:text-red-400 transition-all break-words">+7 917 780-27-82</a>
            </div>
            <div>
              <div className="text-zinc-500 text-sm uppercase tracking-[3px] mb-2">Email</div>
              <a href="mailto:propala@rguard.ru" className="block text-xl sm:text-2xl font-bold hover:text-red-400 transition-all break-all">propala@rguard.ru</a>
            </div>
            <div>
              <div className="text-zinc-500 text-sm uppercase tracking-[3px] mb-2">Адрес офиса</div>
              <div className="text-xl sm:text-2xl font-bold text-zinc-200 leading-tight">г. Уфа, ул. Мингажева 102</div>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-red-950/40 bg-zinc-950 p-6 sm:p-8 w-full min-w-0 overflow-hidden">
          <div className="text-red-500 uppercase tracking-[4px] text-xs mb-5">Карта офиса</div>
          <div className="aspect-[4/3] sm:aspect-[16/12] min-h-[280px] sm:min-h-[420px] w-full rounded-[24px] border border-red-950/40 bg-black flex items-center justify-center text-center p-6 text-zinc-500 uppercase tracking-[3px] text-sm">
            Interactive Map Placeholder
          </div>
        </div>
      </div>

      <div className="rounded-[32px] border border-red-950/40 bg-zinc-950 p-10">
        <div className="text-red-500 uppercase tracking-[4px] text-xs mb-6">Социальные сети</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {['Telegram', 'YouTube', 'VK', 'Rutube'].map((social) => (
            <a key={social} href="#" className="rounded-[24px] border border-red-950/40 bg-black p-6 hover:border-red-600/50 transition-all text-center font-bold text-lg">
              {social}
            </a>
          ))}
        </div>
      </div>
    </section>
  );

  const renderScriptsPage = () => (
    <section className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
      <div className="max-w-6xl mb-20">
        <div className="font-mono-terminal text-red-500 uppercase tracking-[4px] text-xs font-bold mb-6">Креатив / Написание сценариев</div>
        <h1 className="glitch-hero text-5xl md:text-7xl font-black leading-none mb-8">Сценарии, которые хочется досматривать и пересылать</h1>
        <p className="text-zinc-300 text-xl leading-relaxed max-w-4xl">Мы создаем сценарии не ради красивого текста. Наша задача — удержать внимание зрителя, вызвать эмоцию и помочь ролику распространиться.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 mb-20">
        <div>
          <div className="text-4xl font-black mb-8">Почему обычные сценарии не работают</div>
          <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
            <div>Большинство сценариев пишутся как литературный текст. Но вирусный ролик — это точный расчет человеческого внимания.</div>
            <div>Важно не только что сказать, но и когда это сказать, как удержать интерес и что заставит человека переслать ролик коллегам или друзьям.</div>
            <div>Мы проектируем сценарии под бизнес-задачу, а не ради красивых формулировок.</div>
          </div>
        </div>
        <div className="rounded-[40px] border border-red-950/40 bg-gradient-to-br from-red-950/20 to-black p-10">
          <div className="text-3xl font-black mb-8">Что должен делать хороший сценарий</div>
          <div className="space-y-5 text-zinc-300 leading-relaxed text-lg">
            <div>• Зацепить внимание в первые секунды</div>
            <div>• Удерживать интерес до конца</div>
            <div>• Вызывать эмоцию и обсуждение</div>
            <div>• Формировать доверие к бренду</div>
            <div>• Подталкивать к нужному действию</div>
          </div>
        </div>
      </div>

      <div className="mb-24 rounded-[40px] border border-red-950/40 bg-zinc-950 p-10 md:p-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-red-500 uppercase tracking-[4px] text-xs font-bold mb-5">Пример рабочего документа</div>
            <div className="text-4xl font-black mb-6">Рабочая раскадровка до начала съемок</div>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">Клиент получает прозрачный рабочий документ, где собраны сценарий, сцены, визуальные ориентиры и логика ролика.</p>
            <a href="https://docs.google.com/spreadsheets/d/1zC_i7OlNglaqsuE-jAOFpRZc7jxqidL9Sbr0w3_ybvc/edit?gid=0#gid=0" target="_blank" rel="noreferrer" className="btn-primary">Посмотреть пример раскадровки</a>
          </div>
          <div className="aspect-[16/10] rounded-[28px] border border-red-950/40 bg-black flex items-center justify-center text-center p-8 text-zinc-500 uppercase tracking-[3px] text-sm">
            Preview рабочей раскадровки
          </div>
        </div>
      </div>

      <div className="mb-24">
        <div className="text-4xl font-black mb-12">Как мы работаем</div>
        <div className="space-y-6">
          {[
            ['01', 'Изучаем аудиторию', 'Разбираемся в продукте, задачах бизнеса, болях клиентов, возражениях, частых вопросах и конфликтных точках.'],
            ['02', 'Находим конфликт', 'Любой вирусный сценарий строится на напряжении. Ищем противоречия, спорные мнения, раздражающие ситуации и эмоциональные триггеры.'],
            ['03', 'Создаем персонажей', 'Продумываем типажи, характеры, манеру речи, узнаваемые реплики и поведение в кадре.'],
            ['04', 'Пишем сценарий', 'Проектируем захват внимания, развитие конфликта, сильную развязку и понятный призыв к действию. Сразу рассчитываем хронометраж.'],
            ['05', 'Проектируем визуальную часть', 'Прописываем крупность кадров, локации, действия персонажей и визуальные акценты. Создаем референсные изображения.'],
            ['06', 'Собираем раскадровку', 'Все материалы собираются в единый онлайн-документ: сценарий, сцены, визуальные референсы, тайминг и комментарии для съемки.'],
            ['07', 'Согласование', 'До съемки клиент получает полное понимание будущего ролика без сюрпризов на площадке.'],
          ].map(([num, title, desc]) => (
            <div key={num} className="p-8 flex gap-6 items-start" style={{border:'1px solid rgba(239,68,68,0.18)',background:'rgba(10,10,20,0.85)'}}>
              <div className="font-mono-terminal text-2xl font-black text-red-500 min-w-[56px]" style={{textShadow:'0 0 10px rgba(239,68,68,0.6)'}}>{num}</div>
              <div>
                <div className="text-2xl font-bold mb-2">{title}</div>
                <div className="text-zinc-400 leading-relaxed">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-24">
        <div className="text-4xl font-black mb-10">Что получает клиент</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Card title="Готовый сценарий" text="Полноценный текст для съемки." />
          <Card title="Раскадровка" text="Пошаговый план производства." />
          <Card title="Визуальные ориентиры" text="Понимание будущих сцен." />
          <Card title="Тайминг" text="Расчет длительности ролика." />
          <Card title="Персонажи" text="Проработанные роли и реплики." />
        </div>
      </div>

      <div className="rounded-[42px] border border-red-950/40 bg-gradient-to-br from-red-950/20 to-black p-10 md:p-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-5xl font-black leading-tight mb-6">Нужен сценарий, который будут смотреть до конца?</div>
            <p className="text-zinc-300 text-xl leading-relaxed">Разберем вашу задачу и предложим сценарный подход под вашу аудиторию.</p>
          </div>
          <LeadForm button="Обсудить сценарий" textarea="Опишите вашу задачу" />
        </div>
      </div>
    </section>
  );

  const renderEventsPage = () => (
    <section className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
      <div className="max-w-6xl mb-20">
        <div className="font-mono-terminal text-red-500 uppercase tracking-[4px] text-xs font-bold mb-6">Организация мероприятий</div>
        <h1 className="glitch-hero text-5xl md:text-7xl font-black leading-none mb-8">Организуем события, которые запоминаются и становятся контентом</h1>
        <p className="text-zinc-300 text-xl leading-relaxed max-w-5xl">От камерных частных праздников до масштабных городских мероприятий на тысячи гостей. Берем на себя организацию под ключ или подключаемся как отдельная команда.</p>
      </div>

      <div className="aspect-[16/8] rounded-[40px] border border-red-950/40 bg-gradient-to-br from-red-950/20 via-black to-zinc-950 flex items-center justify-center text-center p-10 mb-24 text-zinc-500 uppercase tracking-[4px] text-sm">
        Hero Event Photo / Video Placeholder
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-24">
        <div className="rounded-[36px] border border-red-950/40 bg-zinc-950 p-10">
          <div className="text-red-500 uppercase tracking-[4px] text-xs mb-5">Частные мероприятия</div>
          <div className="text-3xl font-black mb-6">Камерные события с вниманием к деталям</div>
          <div className="space-y-3 text-zinc-300 text-lg leading-relaxed">
            <div>• Дни рождения</div>
            <div>• Юбилеи</div>
            <div>• Свадьбы</div>
            <div>• Корпоративы</div>
            <div>• Детские мероприятия</div>
            <div>• Семейные праздники</div>
          </div>
        </div>

        <div className="rounded-[36px] border border-red-950/40 bg-zinc-950 p-10">
          <div className="text-red-500 uppercase tracking-[4px] text-xs mb-5">Масштабные мероприятия</div>
          <div className="text-3xl font-black mb-6">События для больших аудиторий</div>
          <div className="space-y-3 text-zinc-300 text-lg leading-relaxed">
            <div>• Городские праздники</div>
            <div>• Фестивали</div>
            <div>• Публичные мероприятия</div>
            <div>• Открытия объектов</div>
            <div>• Бренд-активации</div>
            <div>• Корпоративные большие события</div>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <div className="text-4xl font-black mb-10">Что мы берем на себя</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ['Подбор площадки', 'Ищем локацию под формат и бюджет.'],
            ['Питание', 'Организация еды, напитков и сервиса.'],
            ['Оформление', 'Декор, атмосфера и пространство.'],
            ['Развлекательная программа', 'Активности, шоу и конкурсы.'],
            ['Детские зоны', 'Активности для маленьких гостей.'],
            ['Техническая часть', 'Свет, звук, сцена и экраны.'],
            ['Фото и видео', 'Съемка и контент с мероприятия.'],
            ['Полная координация', 'От идеи до финала события.'],
          ].map(([title, text]) => (
            <Card key={title} title={title} text={text} />
          ))}
        </div>
      </div>

      <div className="mb-24">
        <div className="text-4xl font-black mb-10">Фото с мероприятий</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 auto-rows-[180px] md:auto-rows-[220px] grid-flow-dense">
          {[
            'col-span-2 row-span-2',
            'col-span-1 row-span-1',
            'col-span-1 row-span-1',
            'col-span-1 row-span-2',
            'col-span-1 row-span-1',
            'col-span-2 row-span-1',
            'col-span-1 row-span-1',
            'col-span-1 row-span-2',
            'col-span-1 row-span-1',
            'col-span-2 row-span-2',
            'col-span-1 row-span-1',
            'col-span-1 row-span-1',
            'col-span-2 row-span-1',
            'col-span-1 row-span-1',
            'col-span-1 row-span-1',
            'col-span-2 row-span-1',
          ].map((layout, i) => (
            <div key={i} className={`rounded-[28px] border border-red-950/40 bg-zinc-950 flex items-center justify-center text-zinc-500 uppercase tracking-[3px] text-xs text-center p-4 ${layout}`}>
              Event Photo
            </div>
          ))}
        </div>
      </div>

      <div className="mb-24">
        <div className="text-4xl font-black mb-10">Видео с мероприятий</div>
        <div className="grid md:grid-cols-2 gap-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="aspect-video rounded-[32px] border border-red-950/40 bg-zinc-950 flex items-center justify-center text-zinc-500 uppercase tracking-[3px] text-sm text-center p-6">
              Video Placeholder
            </div>
          ))}
        </div>
      </div>

      <div className="mb-24 rounded-[40px] border border-red-950/40 bg-gradient-to-br from-red-950/20 to-black p-10 md:p-14">
        <div className="text-4xl font-black mb-10">Наши ведущие</div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {[
            ['Дамир Ильгамович', 'Харизматичный ведущий с сильной медийной подачей.'],
            ['Дмитрий Хрисанов', 'Энергичная работа с аудиторией и динамичная подача.'],
          ].map(([name, desc]) => (
            <div key={name} className="rounded-[28px] border border-red-950/40 bg-black/50 p-8">
              <div className="aspect-square rounded-[24px] border border-red-950/40 bg-zinc-950 flex items-center justify-center text-zinc-500 uppercase tracking-[3px] text-xs mb-6">Photo</div>
              <div className="text-2xl font-black mb-3">{name}</div>
              <div className="text-zinc-300 leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
        <p className="text-zinc-300 text-lg leading-relaxed">Наши ведущие могут работать как на мероприятиях, которые организуем мы, так и как отдельная услуга.</p>
      </div>

      <div className="mb-24">
        <div className="text-4xl font-black mb-10">Форматы работы</div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Под ключ" text="Берем на себя весь цикл организации." />
          <Card title="Частичное подключение" text="Закрываем отдельные блоки мероприятия." />
          <Card title="Только ведущие" text="Если событие организовано другой командой." />
        </div>
      </div>

      <div className="p-10 md:p-14" style={{border:'1px solid rgba(239,68,68,0.18)',background:'rgba(10,10,20,0.85)'}}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-5xl font-black leading-tight mb-6">Обсудим ваше мероприятие</div>
            <p className="text-zinc-300 text-xl leading-relaxed">Расскажите о формате, масштабе и задачах — предложим оптимальный формат организации.</p>
          </div>
          <LeadForm button="Обсудить мероприятие" textarea="Опишите ваше событие" />
        </div>
      </div>
    </section>
  );

  const renderConceptsPage = () => (
    <section className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
      <div className="max-w-6xl mb-20">
        <div className="font-mono-terminal text-red-500 uppercase tracking-[4px] text-xs font-bold mb-6">Креатив / Концепции рекламных кампаний</div>
        <h1 className="glitch-hero text-5xl md:text-7xl font-black leading-none mb-8">Концепции рекламных кампаний, о которых говорят бесплатно</h1>
        <p className="text-zinc-300 text-xl leading-relaxed max-w-5xl">Мы создаем рекламные идеи, задача которых не просто привлечь внимание, а проникнуть в обсуждения, социальные сети и повседневные разговоры.</p>
      </div>

      <div className="aspect-[16/8] rounded-[40px] border border-red-950/40 bg-gradient-to-br from-red-950/20 via-black to-zinc-950 flex items-center justify-center text-center p-10 mb-24 text-zinc-500 uppercase tracking-[4px] text-sm">
        Campaign Concept Visual Placeholder
      </div>

      <div className="grid lg:grid-cols-2 gap-10 mb-24">
        <div>
          <div className="text-4xl font-black mb-8">Почему обычная реклама не работает</div>
          <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
            <div>Большинство рекламных кампаний выглядят одинаково: логотип, слоган, обещание скидки — и мгновенно забываются.</div>
            <div>Современный человек перегружен информацией. Если реклама не вызывает эмоцию или удивление, она просто исчезает в шуме.</div>
            <div>Сегодня побеждает не самая громкая реклама, а та, которую люди сами начинают обсуждать.</div>
          </div>
        </div>
        <div className="rounded-[40px] border border-red-950/40 bg-gradient-to-br from-red-950/20 to-black p-10">
          <div className="text-3xl font-black mb-8">Что такое хорошая концепция</div>
          <div className="space-y-5 text-zinc-300 leading-relaxed text-lg">
            <div>• Понятна за несколько секунд</div>
            <div>• Умещается в одну сильную мысль</div>
            <div>• Вызывает эмоцию и обсуждение</div>
            <div>• Легко пересказывается другим</div>
            <div>• Работает на конкретную бизнес-задачу</div>
          </div>
        </div>
      </div>

      <div className="mb-24 rounded-[42px] border border-red-950/40 bg-gradient-to-br from-red-950/20 via-black to-black p-10 md:p-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.35),transparent_42%)]" />
        <div className="relative z-10 max-w-5xl">
          <div className="font-mono-terminal text-red-500 uppercase tracking-[4px] text-xs font-bold mb-6">Наш принцип</div>
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">Лучшая реклама — та, которую распространяют сами люди</h2>
          <p className="text-zinc-300 text-xl leading-relaxed">В каждой концепции мы задаем себе вопрос: захочет ли человек снять это на телефон, отправить друзьям или выложить в социальные сети? Если нет — идея недостаточно сильна.</p>
        </div>
      </div>

      <div className="mb-24">
        <div className="text-4xl font-black mb-12">Как мы работаем</div>
        <div className="space-y-6">
          {[
            ['01', 'Определяем цель', 'Выясняем, чего хочет добиться рекламодатель: продажи, узнаваемость, запуск продукта, HR-набор, общественный резонанс или репозиционирование.'],
            ['02', 'Изучаем аудиторию', 'Проводим кастдев, изучаем боли, возражения, триггеры и реальные разговоры вашей аудитории.'],
            ['03', 'Ищем конфликт', 'Самые сильные рекламные идеи рождаются там, где есть напряжение, противоречие или спорная тема.'],
            ['04', 'Формулируем центральную идею', 'Хорошая концепция почти всегда умещается в одно короткое предложение, которое мгновенно считывается.'],
            ['05', 'Проверяем вирусный потенциал', 'Оцениваем, есть ли шанс, что люди сами захотят обсуждать и распространять эту идею.'],
            ['06', 'Продумываем реализацию', 'Определяем, где идея раскроется лучше всего: наружная реклама, digital, соцсети, инсталляции, спецпроекты или офлайн-активации.'],
          ].map(([num, title, desc]) => (
            <div key={num} className="p-8 flex gap-6 items-start" style={{border:'1px solid rgba(239,68,68,0.18)',background:'rgba(10,10,20,0.85)'}}>
              <div className="font-mono-terminal text-2xl font-black text-red-500 min-w-[56px]" style={{textShadow:'0 0 10px rgba(239,68,68,0.6)'}}>{num}</div>
              <div>
                <div className="text-2xl font-bold mb-2">{title}</div>
                <div className="text-zinc-400 leading-relaxed">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-24">
        <div className="text-4xl font-black mb-10">Какие концепции мы создаем</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'Рекламные кампании',
            'Наружная реклама',
            'Вирусные спецпроекты',
            'HR-кампании',
            'Социальные кампании',
            'PR-инфоповоды',
            'Запуски продуктов',
            'Бренд-активации',
          ].map((title) => (
            <Card key={title} title={title} text="Идеи, которые работают на внимание и обсуждение." />
          ))}
        </div>
      </div>

      <div className="mb-24 rounded-[40px] border border-red-950/40 bg-zinc-950 p-10 md:p-14">
        <div className="text-red-500 uppercase tracking-[4px] text-xs font-bold mb-5">Наше мышление</div>
        <div className="text-4xl md:text-5xl font-black leading-tight mb-8">Мы не спрашиваем «как сделать красивую рекламу?»</div>
        <p className="text-zinc-300 text-2xl leading-relaxed max-w-5xl">Мы спрашиваем: как сделать так, чтобы люди сами стали распространителями этой идеи?</p>
      </div>

      <div className="rounded-[42px] border border-red-950/40 bg-gradient-to-br from-red-950/20 to-black p-10 md:p-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-5xl font-black leading-tight mb-6">Обсудим вашу рекламную кампанию</div>
            <p className="text-zinc-300 text-xl leading-relaxed">Разберем задачу и предложим концепцию, которая сможет выйти за пределы оплаченного охвата.</p>
          </div>
          <LeadForm button="Обсудить кампанию" textarea="Опишите вашу рекламную задачу" />
        </div>
      </div>
    </section>
  );

  const renderCorporatePage = () => (
    <section className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
      <div className="max-w-6xl mb-20">
        <div className="font-mono-terminal text-red-500 uppercase tracking-[4px] text-xs font-bold mb-6">Создание видео / Корпоративные фильмы</div>
        <h1 className="glitch-hero text-5xl md:text-7xl font-black leading-none mb-8">Корпоративные фильмы, которые не скучно смотреть</h1>
        <p className="text-zinc-300 text-xl leading-relaxed max-w-5xl">Большинство корпоративных фильмов выглядят одинаково: медленный монтаж, шаблонный дикторский текст и ощущение обязательного просмотра. Мы делаем иначе.</p>
      </div>

      <div className="aspect-[16/8] rounded-[40px] border border-red-950/40 bg-gradient-to-br from-red-950/20 via-black to-zinc-950 flex items-center justify-center text-center p-10 mb-24 text-zinc-500 uppercase tracking-[4px] text-sm">
        Corporate Film Hero Placeholder
      </div>

      <div className="grid lg:grid-cols-2 gap-10 mb-24">
        <div>
          <div className="text-4xl font-black mb-8">Проблема стандартных корпоративных фильмов</div>
          <div className="space-y-5 text-zinc-300 text-lg leading-relaxed">
            <div>• Пафосный дикторский голос</div>
            <div>• Общие фразы без конкретики</div>
            <div>• Медленный ритм и шаблонный монтаж</div>
            <div>• Постановочные кадры без жизни</div>
            <div>• Видео, которое никто не хочет досматривать</div>
          </div>
        </div>
        <div className="rounded-[40px] border border-red-950/40 bg-gradient-to-br from-red-950/20 to-black p-10">
          <div className="text-3xl font-black mb-8">Наш подход</div>
          <div className="space-y-5 text-zinc-300 leading-relaxed text-lg">
            <div>Мы используем принципы вирусного контента даже там, где обычно ожидают скучное корпоративное видео.</div>
            <div>Юмор, драматургия, динамика, неожиданные повороты, персонажи и запоминающиеся образы работают не только в рекламе, но и в корпоративной коммуникации.</div>
            <div className="text-white font-bold pt-4">Если видео не удерживает внимание — оно не работает.</div>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <div className="text-4xl font-black mb-12">Примеры нашего подхода</div>
        <div className="grid md:grid-cols-2 gap-8">
          {CASES.filter((item) => item.service === 'corporate').map((item) => (
            <CaseCard
              key={item.id}
              item={item}
              onOpen={() => {}}
            />
          ))}
        </div>
      </div>

      <div className="mb-24">
        <div className="text-4xl font-black mb-10">Какие корпоративные фильмы мы создаем</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'HR-фильмы',
            'Фильмы о компании',
            'Видео для адаптации сотрудников',
            'Техника безопасности',
            'Обучающие ролики',
            'Фильмы для внутренних мероприятий',
            'Бренд-фильмы',
            'Видео для HR-бренда',
          ].map((title) => (
            <Card key={title} title={title} text="Современный формат корпоративной коммуникации." />
          ))}
        </div>
      </div>

      <div className="mb-24">
        <div className="text-4xl font-black mb-10">Почему это работает</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Видео досматривают" text="Информация не теряется в скучном формате." />
          <Card title="Смыслы запоминаются" text="За счет эмоций и образов." />
          <Card title="Компания выглядит современно" text="Даже в консервативной отрасли." />
          <Card title="Контент вызывает уважение" text="А не неловкость при показе." />
        </div>
      </div>

      <div className="mb-24">
        <div className="text-4xl font-black mb-10">Фото и видео материалы</div>
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-video rounded-[28px] border border-red-950/40 bg-zinc-950 flex items-center justify-center text-zinc-500 uppercase tracking-[3px] text-xs text-center p-4">
              Media Placeholder
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[42px] border border-red-950/40 bg-gradient-to-br from-red-950/20 to-black p-10 md:p-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-5xl font-black leading-tight mb-6">Обсудим корпоративный фильм, который не захочется перемотать</div>
            <p className="text-zinc-300 text-xl leading-relaxed">Разберем вашу задачу и предложим современный формат корпоративного видео.</p>
          </div>
          <LeadForm button="Обсудить корпоративный фильм" textarea="Опишите вашу задачу" />
        </div>
      </div>
    </section>
  );

  const renderAIPage = () => (
    <section className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
      <div className="max-w-6xl mb-20">
        <div className="font-mono-terminal text-red-500 uppercase tracking-[4px] text-xs font-bold mb-6">Создание видео / ИИ контент</div>
        <h1 className="glitch-hero text-5xl md:text-7xl font-black leading-none mb-8">ИИ-контент, в котором есть идея, а не просто генерация</h1>
        <p className="text-zinc-300 text-xl leading-relaxed max-w-5xl">С развитием искусственного интеллекта изменился баланс сил. Раньше дорого стоила реализация: камеры, свет, площадка, съемочная группа. Сегодня реализация стала доступнее. На первый план вышла идея.</p>
      </div>

      <div className="aspect-[16/8] rounded-[40px] border border-red-950/40 bg-gradient-to-br from-red-950/20 via-black to-zinc-950 flex items-center justify-center text-center p-10 mb-24 text-zinc-500 uppercase tracking-[4px] text-sm">
        AI Video / Generated Scene Placeholder
      </div>

      <div className="grid lg:grid-cols-2 gap-10 mb-24">
        <div>
          <div className="text-4xl font-black mb-8">Раньше спорили: идея ничего не стоит</div>
          <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
            <div>В классическом производстве большая часть бюджета уходила на реализацию: технику, свет, локации, специалистов и съемочный процесс.</div>
            <div>Из-за этого долго бытовал тезис: идея ничего не стоит, стоит только реализация.</div>
            <div>ИИ перевернул это уравнение. Хороший запрос теперь может создать сцену, ролик и даже целый фильм. Реализация стала доступной. Дорогой стала сильная идея.</div>
          </div>
        </div>

        <div className="rounded-[40px] border border-red-950/40 bg-gradient-to-br from-red-950/20 to-black p-10">
          <div className="text-3xl font-black mb-8">Новая формула</div>
          <div className="space-y-6 text-zinc-300 leading-relaxed text-lg">
            <div><span className="text-white font-bold">Было:</span> идея дешевая, реализация дорогая.</div>
            <div><span className="text-white font-bold">Стало:</span> реализация доступная, идея дорогая.</div>
            <div>Поэтому выигрывает не тот, кто просто умеет пользоваться нейросетями, а тот, кто понимает драматургию, аудиторию и вирусное распространение.</div>
          </div>
        </div>
      </div>

      <div className="mb-24 rounded-[42px] border border-red-950/40 bg-zinc-950 p-10 md:p-14">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-red-500 uppercase tracking-[4px] text-xs font-bold mb-5">Проблема рынка</div>
            <div className="text-4xl font-black mb-6">Большинство ИИ-роликов выглядят как демонстрация технологии</div>
            <p className="text-zinc-300 text-lg leading-relaxed">Многие специалисты глубоко разбираются в связках, моделях и технических приемах генерации. Они могут заставить нейросеть выдать красивую картинку. Но часто за этим нет смысла, конфликта, юмора, драматургии и идеи, которую хочется переслать.</p>
          </div>
          <div className="rounded-[32px] border border-red-950/40 bg-black p-8">
            <div className="text-3xl font-black mb-6">Наш подход</div>
            <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
              <div>• Сначала идея, потом генерация</div>
              <div>• Сначала зритель, потом инструмент</div>
              <div>• Сначала сценарий, потом промпт</div>
              <div>• Сначала смысл, потом визуальный эффект</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <div className="text-4xl font-black mb-10">Что мы создаем</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="ИИ-рекламные ролики" text="Короткие видео с сильной идеей, визуальной метафорой и понятной рекламной задачей." />
          <Card title="ИИ-видео для соцсетей" text="Контент для публикаций, тестов гипотез и вирусного распространения." />
          <Card title="ИИ-персонажи" text="Создаем героев, через которых можно вести серию роликов и развивать узнаваемость." />
          <Card title="Визуализация концепций" text="Быстро показываем, как может выглядеть рекламная идея до полноценного производства." />
          <Card title="ИИ-сцены для кампаний" text="Создаем отдельные сцены, образы и визуальные решения для больших рекламных проектов." />
          <Card title="Гибридный контент" text="Соединяем реальную съемку, монтаж и ИИ-генерацию в одном ролике." />
        </div>
      </div>

      <div className="mb-24">
        <div className="text-4xl font-black mb-12">Как мы работаем</div>
        <div className="space-y-6">
          {[
            ['01', 'Определяем задачу', 'Выясняем, какую цель должен решить ИИ-ролик: внимание, продажи, презентация идеи, тест гипотезы или рекламная кампания.'],
            ['02', 'Ищем сильную идею', 'Используем опыт вирусных роликов: конфликт, юмор, преувеличение, неожиданные сравнения и понятную драматургию.'],
            ['03', 'Пишем сценарий', 'Собираем ролик как историю: захват внимания, развитие, визуальная кульминация и призыв к действию.'],
            ['04', 'Готовим запросы для генерации', 'Переводим сценарий в точные промпты, описания сцен, персонажей, окружения и визуального стиля.'],
            ['05', 'Генерируем и отбираем сцены', 'Создаем варианты, выбираем сильные кадры и доводим их до нужного визуального качества.'],
            ['06', 'Собираем ролик', 'Дорабатываем монтаж, звук, ритм, титры и финальную подачу, чтобы видео работало как цельный рекламный продукт.'],
          ].map(([num, title, desc]) => (
            <div key={num} className="p-8 flex gap-6 items-start" style={{border:'1px solid rgba(239,68,68,0.18)',background:'rgba(10,10,20,0.85)'}}>
              <div className="font-mono-terminal text-2xl font-black text-red-500 min-w-[56px]" style={{textShadow:'0 0 10px rgba(239,68,68,0.6)'}}>{num}</div>
              <div>
                <div className="text-2xl font-bold mb-2">{title}</div>
                <div className="text-zinc-400 leading-relaxed">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-24">
        <div className="text-4xl font-black mb-10">Кейсы ИИ-роликов</div>
        {CASES.filter((item) => item.service === 'ai-content').length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {CASES.filter((item) => item.service === 'ai-content').map((item) => (
              <CaseCard key={item.id} item={item} onOpen={() => {}} />
            ))}
          </div>
        ) : (
          <div className="rounded-[36px] border border-red-950/40 bg-zinc-950 p-10 md:p-14 text-center">
            <div className="text-red-500 uppercase tracking-[4px] text-xs font-bold mb-5">Скоро здесь появятся кейсы</div>
            <div className="text-3xl font-black mb-5">Раздел готов к наполнению</div>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto">На этапе заполнения сайта сюда будут подтягиваться кейсы с категорией «ИИ ролики» из общей базы кейсов.</p>
          </div>
        )}
      </div>

      <div className="rounded-[42px] border border-red-950/40 bg-gradient-to-br from-red-950/20 to-black p-10 md:p-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-5xl font-black leading-tight mb-6">Обсудим ИИ-ролик с сильной идеей</div>
            <p className="text-zinc-300 text-xl leading-relaxed">Разберем задачу, найдем концепцию и предложим формат ИИ-контента под вашу аудиторию.</p>
          </div>
          <LeadForm button="Обсудить ИИ-ролик" textarea="Опишите вашу задачу" />
        </div>
      </div>
    </section>
  );

  const renderBloggersPage = () => (
    <section className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
      <div className="max-w-5xl mb-16">
        <div className="font-mono-terminal text-red-500 uppercase tracking-[4px] text-xs font-bold mb-6">Блогеры и лица проекта</div>
        <h1 className="glitch-hero text-5xl md:text-7xl font-black leading-none mb-8">Люди, которые делают контент RGUARD живым</h1>
        <p className="text-zinc-300 text-xl leading-relaxed">Каждый блогер — отдельный тип подачи, аудитории и взаимодействия с industrial-средой.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bloggers.map((blogger) => (
          <button
            key={blogger.id}
            type="button"
            onClick={() => goToPage(`blogger-${blogger.id}`)}
            className="group text-left rounded-[28px] border border-red-950/40 bg-[#0b0b0d]/90 overflow-hidden hover:border-red-700/60 transition-all duration-300"
          >
            <div className="aspect-[4/5] bg-black border-b border-red-950/40 flex items-center justify-center text-center p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.12),transparent_50%)]" />
              <div className="relative z-10">
                <div className="text-red-500 uppercase tracking-[4px] text-xs mb-3">Photo</div>
                <div className="text-2xl font-extrabold">{blogger.name}</div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-xl font-bold mb-3">{blogger.name}</div>
              <p className="text-zinc-400 leading-relaxed mb-5">{blogger.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {blogger.metrics.map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-red-950/40 bg-zinc-950 px-3 py-2 text-center">
                    <div className="text-sm font-black">{value}</div>
                    <div className="text-zinc-500 text-xs">{label}</div>
                  </div>
                ))}
              </div>
              <div className="w-full border border-red-950/40 group-hover:border-red-500 transition-all px-5 py-3 rounded-2xl font-bold text-center text-sm">
                Перейти на страницу →
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );

  const renderBloggerPage = (bloggerId) => {
    const blogger = bloggers.find((b) => b.id === bloggerId);
    if (!blogger) return null;
    const bloggerCases = CASES.filter((c) => blogger.cases.includes(c.id));

    return (
      <section className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
        <button onClick={() => goToPage('bloggers')} className="mb-10 font-mono-terminal text-zinc-500 hover:text-red-400 transition-all text-xs uppercase tracking-[3px] cursor-pointer">
          ← Все блогеры
        </button>

        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          <PhotoGallery count={blogger.photoCount} />

          <div>
            <div className="text-red-500 uppercase tracking-[4px] text-xs font-bold mb-4">Блогер RGUARD</div>
            <h1 className="text-5xl md:text-6xl font-black leading-none mb-6">{blogger.name}</h1>

            <div className="space-y-4 text-zinc-300 text-lg leading-relaxed mb-10">
              {blogger.bio.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {blogger.metrics.map(([value, label]) => (
                <div key={label} className="rounded-[24px] border border-red-950/40 bg-zinc-950 p-5 text-center">
                  <div className="text-3xl font-black mb-1">{value}</div>
                  <div className="text-zinc-400 text-sm leading-relaxed">{label}</div>
                </div>
              ))}
            </div>

            <div className="mb-10">
              <div className="text-zinc-500 text-xs uppercase tracking-[3px] mb-4">Социальные сети</div>
              <div className="flex flex-wrap gap-3">
                {blogger.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-red-950/40 bg-zinc-950 hover:border-red-600/50 transition-all px-6 py-3 font-bold text-sm"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start mb-24 rounded-[40px] border border-red-950/40 bg-zinc-950 p-10 md:p-12">
          <div>
            <div className="text-zinc-500 text-xs uppercase tracking-[3px] mb-6">Специализации</div>
            <div className="flex flex-wrap gap-3">
              {blogger.specializations.map((spec) => (
                <span
                  key={spec}
                  className="text-2xl md:text-3xl font-black border border-red-700/50 bg-red-950/20 text-white rounded-2xl px-6 py-3 leading-tight"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div className="shrink-0">
            <div className="text-zinc-500 text-xs uppercase tracking-[3px] mb-4">Шоурил</div>
            <div className="w-[200px] aspect-[9/16] rounded-[28px] border border-red-950/40 bg-black flex items-center justify-center text-center p-5 text-zinc-500 uppercase tracking-[3px] text-xs">
              Vertical Showreel
            </div>
          </div>
        </div>

        {bloggerCases.length > 0 && (
          <div className="mb-24">
            <div className="text-4xl font-black mb-10">Кейсы с участием {blogger.name}</div>
            <div className="grid md:grid-cols-2 gap-6">
              {bloggerCases.map((item) => (
                <CaseCard
                  key={item.id}
                  item={item}
                  onOpen={() => item.id === 'petro-engineering' && goToPage('case-petro')}
                />
              ))}
            </div>
          </div>
        )}

        <div className="rounded-[42px] border border-red-950/40 bg-gradient-to-br from-red-950/20 to-black p-10 md:p-14">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-4xl md:text-5xl font-black leading-tight mb-6">
                Хотите снять контент с {blogger.name}?
              </div>
              <p className="text-zinc-300 text-xl leading-relaxed">Обсудим задачу и подберём формат, который сработает в вашей нише.</p>
            </div>
            <LeadForm button="Обсудить проект" textarea="Опишите вашу задачу" />
          </div>
        </div>
      </section>
    );
  };

  // ─────────────────────────────────────────────────────────
  // СТАТЬИ
  // ─────────────────────────────────────────────────────────

  const renderArticlesPage = () => (
    <section className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
      <Helmet>
        <title>Статьи о вирусном контенте и industrial-маркетинге — RGUARD</title>
        <meta name="description" content="Экспертные статьи о вирусном контенте, B2B-маркетинге и продвижении в реальном секторе." />
      </Helmet>

      <div className="max-w-5xl mb-16">
        <div className="font-mono-terminal text-red-500 text-xs tracking-[4px] uppercase mb-4">// ARTICLES</div>
        <h1 className="glitch-hero text-5xl md:text-7xl font-black leading-none mb-6">Статьи</h1>
        <p className="text-zinc-400 text-xl leading-relaxed">Экспертный контент о вирусном маркетинге, industrial-аудитории и реальных кейсах.</p>
      </div>

      {/* Фильтры */}
      <div className="flex flex-wrap gap-3 mb-12">
        {POST_CATEGORIES.map(cat => (
          <button key={cat.id} onClick={() => setPostFilter(cat.id)}
            className={`font-mono-terminal text-xs uppercase tracking-[2px] px-5 py-3 transition-all cursor-pointer ${postFilter === cat.id ? 'text-white' : 'text-zinc-500 hover:text-red-400'}`}
            style={postFilter === cat.id
              ? { border: '1px solid rgba(239,68,68,0.8)', background: 'rgba(239,68,68,0.12)' }
              : { border: '1px solid rgba(239,68,68,0.2)', background: 'transparent' }}>
            {cat.label}
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 && posts.length === 0 ? (
        <div className="font-mono-terminal text-red-500 text-sm tracking-[3px] text-center py-20">// LOADING...</div>
      ) : filteredPosts.length === 0 ? (
        <div className="text-center py-24" style={{ border: '1px solid rgba(239,68,68,0.15)', background: 'rgba(10,10,20,0.8)' }}>
          <div className="font-mono-terminal text-red-500 text-xs tracking-[4px] mb-4">// EMPTY</div>
          <div className="text-2xl font-black mb-4">Статьи появятся здесь</div>
          <p className="text-zinc-500">Добавьте первую статью через Sanity Studio</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <button key={post._id} onClick={() => goToPage(`article-${post.slug}`)}
              className="cyber-card overflow-hidden text-left">
              {post.coverImage ? (
                <img src={post.coverImage} alt={post.title} className="w-full aspect-video object-cover" />
              ) : (
                <div className="w-full aspect-video flex items-center justify-center"
                  style={{ background: 'rgba(239,68,68,0.05)', borderBottom: '1px solid rgba(239,68,68,0.12)' }}>
                  <span className="font-mono-terminal text-red-500/30 text-xs tracking-[3px]">NO IMAGE</span>
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono-terminal text-red-500 text-xs tracking-[2px] uppercase">
                    {POST_CATEGORIES.find(c => c.id === post.category)?.label || post.category}
                  </span>
                  {post.publishedAt && (
                    <span className="font-mono-terminal text-zinc-600 text-xs">{formatDate(post.publishedAt)}</span>
                  )}
                </div>
                <h2 className="text-xl font-black mb-3 leading-tight">{post.title}</h2>
                {post.excerpt && <p className="text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>}
                <div className="font-mono-terminal text-xs text-red-500 tracking-[2px]">ЧИТАТЬ →</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </section>
  );

  const renderArticlePage = () => {
    if (loading) return (
      <div className="flex items-center justify-center h-96">
        <div className="font-mono-terminal text-red-500 text-sm tracking-[3px]">// LOADING...</div>
      </div>
    );
    if (!currentPost) return (
      <div className="text-center py-32">
        <div className="font-mono-terminal text-red-500 text-xs tracking-[4px] mb-4">// 404</div>
        <div className="text-2xl font-black mb-6">Статья не найдена</div>
        <button onClick={() => goToPage('articles')} className="btn-secondary">← К статьям</button>
      </div>
    );

    const seoTitle = currentPost.seo?.metaTitle || currentPost.title + ' — RGUARD';
    const seoDesc = currentPost.seo?.metaDescription || currentPost.excerpt || '';

    return (
      <section className="px-4 sm:px-6 py-20 max-w-4xl mx-auto">
        <Helmet>
          <title>{seoTitle}</title>
          <meta name="description" content={seoDesc} />
          {currentPost.seo?.ogImage?.asset?.url && <meta property="og:image" content={currentPost.seo.ogImage.asset.url} />}
          <meta property="og:title" content={seoTitle} />
          <meta property="og:description" content={seoDesc} />
        </Helmet>

        <button onClick={() => goToPage('articles')} className="mb-10 font-mono-terminal text-zinc-500 hover:text-red-400 transition-all text-xs uppercase tracking-[3px] cursor-pointer">
          ← Все статьи
        </button>

        {currentPost.coverImage && (
          <img src={currentPost.coverImage} alt={currentPost.title}
            className="w-full aspect-video object-cover mb-10" style={{ border: '1px solid rgba(239,68,68,0.15)' }} />
        )}

        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono-terminal text-red-500 text-xs tracking-[2px] uppercase">
            {POST_CATEGORIES.find(c => c.id === currentPost.category)?.label || currentPost.category}
          </span>
          {currentPost.publishedAt && (
            <span className="font-mono-terminal text-zinc-600 text-xs">{formatDate(currentPost.publishedAt)}</span>
          )}
        </div>

        <h1 className="glitch-hero text-4xl md:text-6xl font-black leading-tight mb-8">{currentPost.title}</h1>

        {currentPost.excerpt && (
          <p className="text-zinc-300 text-xl leading-relaxed mb-12 pb-12" style={{ borderBottom: '1px solid rgba(239,68,68,0.15)' }}>
            {currentPost.excerpt}
          </p>
        )}

        <div className="prose-rguard">
          {currentPost.body && <PortableText value={currentPost.body} components={portableTextComponents} />}
        </div>

        {currentPost.relatedPosts?.length > 0 && (
          <div className="mt-20 pt-12" style={{ borderTop: '1px solid rgba(239,68,68,0.15)' }}>
            <div className="font-mono-terminal text-red-500 text-xs tracking-[4px] uppercase mb-8">// ПОХОЖИЕ СТАТЬИ</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentPost.relatedPosts.map(p => (
                <button key={p._id} onClick={() => goToPage(`article-${p.slug}`)} className="cyber-card p-6 text-left">
                  <div className="font-mono-terminal text-red-500 text-xs tracking-[2px] uppercase mb-3">
                    {POST_CATEGORIES.find(c => c.id === p.category)?.label || p.category}
                  </div>
                  <div className="text-lg font-bold leading-tight mb-2">{p.title}</div>
                  {p.excerpt && <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">{p.excerpt}</p>}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-20 p-10 md:p-14" style={{ border: '1px solid rgba(239,68,68,0.18)', background: 'rgba(10,10,20,0.85)' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-4xl font-black leading-tight mb-6">Хотите такой же контент для вашего бизнеса?</div>
              <p className="text-zinc-400 text-lg leading-relaxed">Разберём вашу нишу и предложим форматы, которые работают.</p>
            </div>
            <LeadForm button="Обсудить проект" textarea="Опишите вашу задачу" />
          </div>
        </div>
      </section>
    );
  };

  // ─────────────────────────────────────────────────────────
  // ОТРАСЛЕВЫЕ РЕШЕНИЯ
  // ─────────────────────────────────────────────────────────

  const renderIndustriesPage = () => (
    <section className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
      <Helmet>
        <title>Отраслевые решения для вашего бизнеса — RGUARD</title>
        <meta name="description" content="Готовые контент-решения для добычи, строительства, производства, нефтегаза, агросектора и недвижимости." />
      </Helmet>

      <div className="max-w-5xl mb-16">
        <div className="font-mono-terminal text-red-500 text-xs tracking-[4px] uppercase mb-4">// INDUSTRIES</div>
        <h1 className="glitch-hero text-5xl md:text-7xl font-black leading-none mb-6">Отраслевые решения</h1>
        <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl">Готовые контент-стратегии под вашу отрасль. Выберите направление — покажем, что работает именно в вашей нише.</p>
      </div>

      {industries.length === 0 ? (
        <div className="font-mono-terminal text-red-500 text-sm tracking-[3px] text-center py-20">// LOADING...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <button key={industry._id} onClick={() => goToPage(`industry-${industry.slug}`)}
              className="cyber-card p-8 text-left group">
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">{industry.icon}</div>
                <div className="font-mono-terminal text-red-500/30 text-xs">#{String(i+1).padStart(2,'0')}</div>
              </div>
              <h2 className="text-2xl font-black mb-4 leading-tight">{industry.title}</h2>
              {industry.shortDesc && <p className="text-zinc-500 text-sm leading-relaxed mb-6">{industry.shortDesc}</p>}
              <div className="font-mono-terminal text-xs text-red-500 tracking-[2px]">ПОДРОБНЕЕ →</div>
            </button>
          ))}
        </div>
      )}
    </section>
  );

  const renderIndustryPage = () => {
    if (loading) return (
      <div className="flex items-center justify-center h-96">
        <div className="font-mono-terminal text-red-500 text-sm tracking-[3px]">// LOADING...</div>
      </div>
    );
    if (!currentIndustry) return (
      <div className="text-center py-32">
        <div className="font-mono-terminal text-red-500 text-xs tracking-[4px] mb-4">// 404</div>
        <div className="text-2xl font-black mb-6">Отрасль не найдена</div>
        <button onClick={() => goToPage('industries')} className="btn-secondary">← К отраслям</button>
      </div>
    );

    const seoTitle = currentIndustry.seo?.metaTitle || `${currentIndustry.title} — контент-решения RGUARD`;
    const seoDesc = currentIndustry.seo?.metaDescription || currentIndustry.shortDesc || '';

    return (
      <section className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
        <Helmet>
          <title>{seoTitle}</title>
          <meta name="description" content={seoDesc} />
          <meta property="og:title" content={seoTitle} />
          <meta property="og:description" content={seoDesc} />
        </Helmet>

        <button onClick={() => goToPage('industries')} className="mb-10 font-mono-terminal text-zinc-500 hover:text-red-400 transition-all text-xs uppercase tracking-[3px] cursor-pointer">
          ← Все отрасли
        </button>

        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-start">
          <div>
            <div className="text-6xl mb-6">{currentIndustry.icon}</div>
            <div className="font-mono-terminal text-red-500 text-xs tracking-[4px] uppercase mb-4">// INDUSTRY</div>
            <h1 className="glitch-hero text-5xl md:text-6xl font-black leading-none mb-6">{currentIndustry.title}</h1>
            {currentIndustry.shortDesc && (
              <p className="text-zinc-300 text-xl leading-relaxed mb-8">{currentIndustry.shortDesc}</p>
            )}
          </div>
          {currentIndustry.coverImage && (
            <img src={currentIndustry.coverImage} alt={currentIndustry.title}
              className="w-full aspect-video object-cover" style={{ border: '1px solid rgba(239,68,68,0.15)' }} />
          )}
        </div>

        {currentIndustry.body && currentIndustry.body.length > 0 && (
          <div className="max-w-4xl mb-20">
            <PortableText value={currentIndustry.body} components={portableTextComponents} />
          </div>
        )}

        {currentIndustry.linkedServices?.length > 0 && (
          <div className="mb-20">
            <div className="font-mono-terminal text-red-500 text-xs tracking-[4px] uppercase mb-8">// НАШИ РЕШЕНИЯ ДЛЯ ВАШЕЙ ОТРАСЛИ</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentIndustry.linkedServices.map((svc, i) => (
                <button key={i} onClick={() => goToPage(svc.pageId)} className="cyber-card p-8 text-left">
                  <div className="font-mono-terminal text-red-500 text-xs tracking-[3px] uppercase mb-4">SVC_{String(i+1).padStart(2,'0')}</div>
                  <div className="text-xl font-black mb-3">{svc.title}</div>
                  {svc.description && <p className="text-zinc-500 text-sm leading-relaxed mb-5">{svc.description}</p>}
                  <div className="font-mono-terminal text-xs text-red-500 tracking-[2px]">УЗНАТЬ ПОДРОБНЕЕ →</div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="p-10 md:p-14" style={{ border: '1px solid rgba(239,68,68,0.18)', background: 'rgba(10,10,20,0.85)' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-4xl font-black leading-tight mb-6">
                Нужен контент для {currentIndustry.title.toLowerCase()}?
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed">Разберём специфику вашего бизнеса и предложим форматы, которые работают именно в вашей нише.</p>
            </div>
            <LeadForm button="Обсудить проект" textarea="Опишите вашу задачу" />
          </div>
        </div>
      </section>
    );
  };

  const renderSimplePage = (title, text) => (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="RGUARD" title={title} text={text} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card title="Экспертиза" text="Показываем глубокое понимание industrial-аудитории и B2B-маркетинга." />
          <Card title="Production" text="Полный цикл: сценарии, съёмка, монтаж, запуск и контент-система." />
          <Card title="Вирусность" text="Контент распространяется внутри Telegram-чатов и профессионального сообщества." />
        </div>
        <div className="rounded-[32px] border border-red-950/40 bg-[#0b0b0d]/90 p-8 lg:p-12"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div><div className="text-red-500 uppercase tracking-[4px] text-sm mb-4">Обсудить проект</div><h3 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-6">Получите идеи и стратегию контента под ваш бизнес</h3><p className="text-zinc-400 text-lg leading-relaxed">Мы предложим подходы и механики, которые могут сработать именно в вашей нише.</p></div><LeadForm /></div></div>
      </div>
    </section>
  );

  return (
    <HelmetProvider>
    <div className="min-h-screen text-white overflow-x-hidden font-sans relative scanlines" style={{ background: '#0a0a14', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Atmosphere page={page} />
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl" style={{ borderBottom: '1px solid rgba(239,68,68,0.2)', background: 'rgba(10,10,20,0.92)', boxShadow: '0 0 20px rgba(239,68,68,0.05)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
            <button onClick={() => goToPage('home')} className="font-mono-terminal text-2xl font-black tracking-tight neon-red cursor-pointer flicker">RGUARD</button>
            <a href="tel:+79273412252" className="lg:hidden font-mono-terminal text-xs font-bold tracking-tight text-red-500 hover:text-red-400 transition-all">+7 927 341-22-52</a>
            <nav className="hidden lg:flex items-center gap-8">
              {nav.map((item) => (
                <div key={item.label || item.id} className="relative group">
                  {item.children ? (
                    <>
                      <button className="font-mono-terminal text-xs uppercase tracking-[2px] text-zinc-400 hover:text-red-400 transition-all flex items-center gap-2 cursor-pointer">{item.label}<span>▾</span></button>
                      <div className="absolute top-full left-0 pt-4 hidden group-hover:block z-50">
                        <div className="w-[280px] p-2" style={{ border: '1px solid rgba(239,68,68,0.3)', background: 'rgba(10,10,20,0.98)' }}>
                          {item.children.map((child) => (
                            <button key={child.id} onClick={() => goToPage(child.id)} className="w-full text-left px-4 py-3 font-mono-terminal text-xs uppercase tracking-[2px] text-zinc-400 hover:text-red-400 hover:bg-red-950/20 transition-all cursor-pointer">{child.label}</button>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <button onClick={() => goToPage(item.id)} className={`font-mono-terminal text-xs uppercase tracking-[2px] transition-all cursor-pointer ${item.id && page === item.id ? 'text-red-400' : 'text-zinc-400 hover:text-red-400'}`}>{item.label}</button>
                  )}
                </div>
              ))}
            </nav>
            <button onClick={() => setMenu((v) => !v)} className="lg:hidden w-12 h-12 flex items-center justify-center font-mono-terminal text-red-500 cursor-pointer" style={{ border: '1px solid rgba(239,68,68,0.3)' }}>☰</button>
          </div>

          {menu && (
            <div className="lg:hidden px-4 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto" style={{ borderTop: '1px solid rgba(239,68,68,0.15)', background: 'rgba(10,10,20,0.98)' }}>
              {nav.map((item) => (
                <div key={item.label || item.id}>
                  {item.children ? (
                    <div>
                      <div className="px-4 pt-3 pb-1 font-mono-terminal text-red-500 uppercase tracking-[3px] text-xs">{item.label}</div>
                      {item.children.map((child) => <button key={child.id} onClick={() => goToPage(child.id)} className="w-full text-left px-6 py-3 font-mono-terminal text-xs uppercase tracking-[2px] text-zinc-400 hover:text-red-400 transition-all cursor-pointer">{child.label}</button>)}
                    </div>
                  ) : (
                    <button onClick={() => goToPage(item.id)} className="w-full text-left px-4 py-3 font-mono-terminal text-xs uppercase tracking-[2px] text-zinc-400 hover:text-red-400 transition-all cursor-pointer">{item.label}</button>
                  )}
                </div>
              ))}
            </div>
          )}
        </header>

        <main className="pt-20">
          {page === 'home' && renderHome()}
          {page === 'viral' && renderViralPage()}
          {page === 'production' && renderProductionPage()}
          {page === 'corporate' && renderCorporatePage()}
          {page === 'ai-content' && renderAIPage()}
          {page === 'scripts' && renderScriptsPage()}
          {page === 'concepts' && renderConceptsPage()}
          {page === 'events' && renderEventsPage()}
          {page === 'cases' && renderCasesPage()}
          {page === 'case-petro' && renderCasePage('petro-engineering')}
          {page === 'contacts' && renderContactsPage()}
          {page === 'articles' && renderArticlesPage()}
          {page.startsWith('article-') && renderArticlePage()}
          {page === 'industries' && renderIndustriesPage()}
          {page.startsWith('industry-') && renderIndustryPage()}
          {page === 'bloggers' && renderBloggersPage()}
          {bloggers.some((b) => `blogger-${b.id}` === page) && renderBloggerPage(page.replace('blogger-', ''))}
        </main>

        <footer className="py-10 relative" style={{ borderTop: '1px solid rgba(239,68,68,0.2)', background: 'rgba(5,5,12,0.98)' }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(239,68,68,0.6), transparent)' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="font-mono-terminal text-2xl font-black tracking-tight neon-red flicker">RGUARD</div>
              <div className="font-mono-terminal text-zinc-600 mt-2 text-xs tracking-[3px] uppercase">// Industrial Creative Agency</div>
            </div>
            <div className="font-mono-terminal text-zinc-600 text-xs max-w-xl leading-relaxed tracking-[1px]">Вирусные видеоролики, продюсирование, мероприятия и креативные концепции для компаний реального сектора.</div>
          </div>
        </footer>
      </div>
    </div>
    </HelmetProvider>
  );
}
