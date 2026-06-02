import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'y9ptramm',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skfjZQwRvgjiaSJgZhxHaGhDkRNh5SjZQgxCPChmx4NuTQGt526lL1XXRNIZJIkRzppxDWGeK1yrP7LAUC4q2yGFhi3S6ujvNWGmQCunBAJUHruyO6TufXzNrntExeWyhdUgN2WP6IEh0U74GIEpYgqCGeNDBLHI1rnWoUcm1NoVxGi0bErN',
  useCdn: false,
})

const bloggers = [
  {
    _type: 'blogger',
    _id: 'blogger-damir',
    name: 'Дамир Ильгамович',
    slug: { _type: 'slug', current: 'damir' },
    desc: 'Главное лицо RGUARD. Вирусная подача, industrial-харизма и сильная связь с real sector.',
    bio: [
      { _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Дамир — главный амбассадор RGUARD и лицо большинства флагманских проектов агентства. Его харизма органично вписывается в industrial-среду: производства, стройки, карьеры. Аудитория воспринимает его как «своего» — человека из реального сектора, а не рекламного персонажа.' }] },
      { _type: 'block', _key: 'b2', style: 'normal', children: [{ _type: 'span', _key: 's2', text: 'Именно это делает его контент вирусным и вызывающим доверие. Рабочие пересылают его ролики в Telegram-чатах, а промышленные компании узнают в нём того, кто говорит на их языке.' }] },
      { _type: 'block', _key: 'b3', style: 'normal', children: [{ _type: 'span', _key: 's3', text: 'Его формула простая: не рекламировать, а вовлекать. Не продавать, а вызывать доверие.' }] },
    ],
    metrics: [
      { _key: 'm1', value: '5M+', label: 'просмотров' },
      { _key: 'm2', value: '120K+', label: 'подписчиков' },
      { _key: 'm3', value: '2021', label: 'в RGUARD' },
    ],
    socials: [
      { _key: 's1', label: 'TikTok', url: 'https://tiktok.com' },
      { _key: 's2', label: 'YouTube', url: 'https://youtube.com' },
      { _key: 's3', label: 'VK', url: 'https://vk.com' },
    ],
    specializations: ['Производство', 'Реальный сектор', 'HR-контент', 'Вахта и добыча', 'Контент для мужчин'],
    order: 1,
  },
  {
    _type: 'blogger',
    _id: 'blogger-dima',
    name: 'Дима Хрисанов',
    slug: { _type: 'slug', current: 'dima' },
    desc: 'Динамичная подача и контент с высокой вовлечённостью аудитории.',
    bio: [
      { _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Дима работает на стыке юмора и динамики. Его ролики отличаются высоким темпом, чёткой структурой и умением удерживать внимание даже в самых сложных нишах.' }] },
      { _type: 'block', _key: 'b2', style: 'normal', children: [{ _type: 'span', _key: 's2', text: 'Особенно эффективен в форматах, где нужно объяснить сложное просто и вызвать сильную эмоциональную реакцию. Со временем выработал собственную методику захвата внимания в первые 2 секунды.' }] },
    ],
    metrics: [
      { _key: 'm1', value: '2M+', label: 'просмотров' },
      { _key: 'm2', value: '80K+', label: 'подписчиков' },
      { _key: 'm3', value: '2022', label: 'в RGUARD' },
    ],
    socials: [
      { _key: 's1', label: 'TikTok', url: 'https://tiktok.com' },
      { _key: 's2', label: 'YouTube', url: 'https://youtube.com' },
    ],
    specializations: ['Динамичный контент', 'B2B-объяснения', 'Юмор', 'Высокая вовлечённость', 'Reels-форматы'],
    order: 2,
  },
  {
    _type: 'blogger',
    _id: 'blogger-nadir',
    name: 'Надир',
    slug: { _type: 'slug', current: 'nadir' },
    desc: 'Контент через реализм, атмосферу и живое взаимодействие.',
    bio: [
      { _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Надир создаёт контент, который ощущается как документальное кино. Никакой наигранности — только живые ситуации, настоящая атмосфера и честное взаимодействие с людьми на площадке.' }] },
      { _type: 'block', _key: 'b2', style: 'normal', children: [{ _type: 'span', _key: 's2', text: 'Особенно эффективен в съёмках на реальных объектах: карьерах, производствах, сельхозпредприятиях. Умеет найти историю там, где другие видят только рабочий процесс.' }] },
    ],
    metrics: [
      { _key: 'm1', value: '1.5M+', label: 'просмотров' },
      { _key: 'm2', value: '60K+', label: 'подписчиков' },
      { _key: 'm3', value: '2022', label: 'в RGUARD' },
    ],
    socials: [
      { _key: 's1', label: 'TikTok', url: 'https://tiktok.com' },
      { _key: 's2', label: 'VK', url: 'https://vk.com' },
    ],
    specializations: ['Документальный стиль', 'Аграрный сектор', 'Реальные объекты', 'Добыча', 'Атмосферный контент'],
    order: 3,
  },
  {
    _type: 'blogger',
    _id: 'blogger-robert',
    name: 'Роберт',
    slug: { _type: 'slug', current: 'robert' },
    desc: 'Производственная динамика и сильное мужское позиционирование.',
    bio: [
      { _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Роберт — лицо тяжёлой техники, металла и производственной мощи. Его образ транслирует уважение к труду и силу реального сектора.' }] },
      { _type: 'block', _key: 'b2', style: 'normal', children: [{ _type: 'span', _key: 's2', text: 'Его типаж — сильный, немногословный, надёжный. Контент с Робертом работает на авторитет компании внутри мужской профессиональной аудитории.' }] },
    ],
    metrics: [
      { _key: 'm1', value: '1M+', label: 'просмотров' },
      { _key: 'm2', value: '40K+', label: 'подписчиков' },
      { _key: 'm3', value: '2023', label: 'в RGUARD' },
    ],
    socials: [{ _key: 's1', label: 'TikTok', url: 'https://tiktok.com' }],
    specializations: ['Тяжёлая техника', 'Строительство', 'Контент для мужчин', 'Промышленное оборудование'],
    order: 4,
  },
  {
    _type: 'blogger',
    _id: 'blogger-rais',
    name: 'Раис',
    slug: { _type: 'slug', current: 'rais' },
    desc: 'Юмор, рабочая среда и естественное вовлечение аудитории.',
    bio: [
      { _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Раис умеет находить смешное в обычных рабочих ситуациях. Его контент — это узнаваемые сцены из жизни рабочего коллектива, которые тут же хочется переслать коллегам.' }] },
      { _type: 'block', _key: 'b2', style: 'normal', children: [{ _type: 'span', _key: 's2', text: 'Он не играет роль — он живёт в ней. Зрители видят в нём коллегу, а не актёра, и это критически важно для вирусного распространения.' }] },
    ],
    metrics: [
      { _key: 'm1', value: '800K+', label: 'просмотров' },
      { _key: 'm2', value: '35K+', label: 'подписчиков' },
      { _key: 'm3', value: '2023', label: 'в RGUARD' },
    ],
    socials: [
      { _key: 's1', label: 'TikTok', url: 'https://tiktok.com' },
      { _key: 's2', label: 'VK', url: 'https://vk.com' },
    ],
    specializations: ['Производственный юмор', 'B2B-контент', 'Рабочая среда', 'Органический охват'],
    order: 5,
  },
  {
    _type: 'blogger',
    _id: 'blogger-domhozyaika',
    name: 'Башкирская домохозяйка',
    slug: { _type: 'slug', current: 'domhozyaika' },
    desc: 'Контрастный образ, усиливающий вирусность и охват.',
    bio: [
      { _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Неожиданный персонаж в мире industrial-контента — именно это делает её такой эффективной. Контрастный образ на фоне производственной среды резко усиливает вирусность.' }] },
      { _type: 'block', _key: 'b2', style: 'normal', children: [{ _type: 'span', _key: 's2', text: 'Контент с её участием стабильно собирает в разы больше репостов и охватывает аудитории, которые обычно недоступны industrial-бренду.' }] },
    ],
    metrics: [
      { _key: 'm1', value: '3M+', label: 'просмотров' },
      { _key: 'm2', value: '90K+', label: 'подписчиков' },
      { _key: 'm3', value: '2022', label: 'в RGUARD' },
    ],
    socials: [
      { _key: 's1', label: 'TikTok', url: 'https://tiktok.com' },
      { _key: 's2', label: 'YouTube', url: 'https://youtube.com' },
      { _key: 's3', label: 'VK', url: 'https://vk.com' },
    ],
    specializations: ['Вирусный контраст', 'Женская аудитория', 'Широкий охват', 'Нестандартный подход'],
    order: 6,
  },
]

const cases = [
  { _type: 'case', _id: 'case-petro', title: 'Петроинжиниринг', slug: { _type: 'slug', current: 'petro-engineering' }, service: 'viral', accent: 'HR / Вахта', shortText: 'Вирусная HR-кампания для привлечения специалистов на работу вахтовым методом на север России.', task: 'Привлечь специалистов на работу вахтовым методом на север России.', solution: 'Натурная съемка серии коротких вертикальных видео и создание привлекательного образа вахтовой работы.', metrics: [{ _key: 'm1', value: '40+ млн', label: 'просмотров' }, { _key: 'm2', value: '1,8+ млн', label: 'лайков' }, { _key: 'm3', value: '15+ тыс.', label: 'комментариев' }, { _key: 'm4', value: '100+ тыс.', label: 'репостов' }], links: ['https://youtube.com/shorts/R7nzxpo4YVk', 'https://youtube.com/shorts/vmCO0Hx8xng'], whatWorked: ['Негатив в позитив', 'Харизма и литературный юмор', 'Захват, удержание, призыв'], featured: true, order: 1 },
  { _type: 'case', _id: 'case-gold', title: 'Добыча золота', slug: { _type: 'slug', current: 'gold-mining' }, service: 'viral', accent: 'Вахта / Добыча', shortText: 'Контент для добывающей и вахтовой тематики: юмор, реальные ситуации и культурный код аудитории.', task: 'Сделать добывающую тематику заметной и обсуждаемой.', solution: 'Собрали ролики вокруг вахтового быта, узнаваемых ситуаций и юмора.', metrics: [{ _key: 'm1', value: 'Вахта', label: 'целевая аудитория' }, { _key: 'm2', value: 'Organic', label: 'распространение' }], links: [], whatWorked: ['Культурный код аудитории', 'Юмор', 'Реальные ситуации'], featured: false, order: 2 },
  { _type: 'case', _id: 'case-service', title: 'Сервис Интегратор', slug: { _type: 'slug', current: 'service-integrator' }, service: 'viral', accent: 'Сложные услуги', shortText: 'Упаковка сложных технических услуг через драматургию, персонажей и динамичный монтаж.', task: 'Объяснить сложную техническую услугу через понятный формат.', solution: 'Серия роликов с персонажами, конфликтами и ясной подачей.', metrics: [{ _key: 'm1', value: 'B2B', label: 'сложная ниша' }], links: [], whatWorked: ['Персонажи', 'Динамичный монтаж', 'Понятная драматургия'], featured: false, order: 3 },
  { _type: 'case', _id: 'case-construction', title: 'Строительное оборудование', slug: { _type: 'slug', current: 'construction-equipment' }, service: 'viral', accent: 'Construction Tech', shortText: 'Медийность сложного технического продукта через industrial-контент, юмор и понятную драматургию.', task: 'Сделать строительное оборудование заметным и интересным.', solution: 'Индустриальный юмор, реальные сценарии и короткая драматургия.', metrics: [{ _key: 'm1', value: 'Tech', label: 'продуктовая ниша' }], links: [], whatWorked: ['Industrial-юмор', 'Продукт в действии', 'Короткая драматургия'], featured: false, order: 4 },
  { _type: 'case', _id: 'case-artroyal', title: 'Art Royal детейлинг', slug: { _type: 'slug', current: 'art-royal' }, service: 'production', accent: 'Premium Content', shortText: 'Премиальный vertical content и lifestyle-подача для формирования сильного визуального образа бренда.', task: 'Сформировать премиальный образ бренда в социальных сетях.', solution: 'Регулярный вертикальный контент с акцентом на визуальную эстетику.', metrics: [{ _key: 'm1', value: 'Premium', label: 'визуальный образ' }], links: [], whatWorked: ['Визуальная эстетика', 'Регулярность', 'Доверие к процессу'], featured: true, order: 5 },
  { _type: 'case', _id: 'case-heating', title: 'Центр отопления', slug: { _type: 'slug', current: 'center-heating' }, service: 'production', accent: 'B2B Media', shortText: 'Медийность инженерной тематики через вирусные механики и бытовые сценарии.', task: 'Сделать инженерную тематику понятной и медийной.', solution: 'Контент вокруг бытовых ситуаций и понятных проблем клиентов.', metrics: [{ _key: 'm1', value: 'B2B', label: 'инженерная тематика' }], links: [], whatWorked: ['Бытовые сценарии', 'Понятная подача', 'Регулярные рубрики'], featured: false, order: 6 },
  { _type: 'case', _id: 'case-pravsha', title: 'Правша', slug: { _type: 'slug', current: 'pravsha' }, service: 'production', accent: 'Reels System', shortText: 'Контент с акцентом на харизматичных персонажей, динамику и удержание внимания.', task: 'Создать узнаваемый контент-формат для социальных сетей.', solution: 'Персонажи, темп, короткие сцены и повторяемые форматы.', metrics: [{ _key: 'm1', value: 'Reels', label: 'форматы' }], links: [], whatWorked: ['Харизматичные персонажи', 'Темп', 'Повторяемые форматы'], featured: false, order: 7 },
  { _type: 'case', _id: 'case-carshopping', title: 'Carshopping', slug: { _type: 'slug', current: 'carshopping' }, service: 'production', accent: 'Auto / Lifestyle', shortText: 'Контент вокруг эмоций, доверия и визуальной привлекательности продукта.', task: 'Усилить доверие и привлекательность автомобильного направления.', solution: 'Контент вокруг эмоций покупки и визуального образа.', metrics: [{ _key: 'm1', value: 'Auto', label: 'ниша' }], links: [], whatWorked: ['Эмоции', 'Визуальная подача', 'Доверие'], featured: false, order: 8 },
  { _type: 'case', _id: 'case-pivmaster', title: 'Пивмастер', slug: { _type: 'slug', current: 'pivmaster' }, service: 'production', accent: 'Brand Media', shortText: 'Регулярный контент для формирования узнаваемости и удержания внимания.', task: 'Поддерживать узнаваемость бренда через регулярное присутствие.', solution: 'Регулярный контент-поток с рубриками и визуальным стилем.', metrics: [{ _key: 'm1', value: 'Brand', label: 'узнаваемость' }], links: [], whatWorked: ['Регулярность', 'Узнаваемость', 'Рубрики'], featured: false, order: 9 },
  { _type: 'case', _id: 'case-metallurgy', title: 'Техника безопасности для металлургического предприятия', slug: { _type: 'slug', current: 'metallurgy-safety' }, service: 'corporate', accent: 'Safety Film', shortText: 'Сухие правила техники безопасности превратили в динамичный, смешной и запоминающийся корпоративный фильм.', task: 'Создать ролик по технике безопасности, который не воспринимается как скучная формальность.', solution: 'Юмор, преувеличение, небанальные сравнения и запоминающиеся формулировки.', metrics: [{ _key: 'm1', value: 'Safety', label: 'корпоративный формат' }], links: [], whatWorked: ['Юмор', 'Преувеличение', 'Запоминающиеся метафоры'], featured: true, order: 10 },
  { _type: 'case', _id: 'case-oil50', title: 'Нефтедобывающая компания / 50 лет вперед', slug: { _type: 'slug', current: 'oil-company-50-years' }, service: 'corporate', accent: 'Grand Prix', shortText: 'Корпоративный фильм для конкурса на тему будущего компании, получивший гран-при.', task: 'Создать фильм для внутреннего конкурса «Наша компания через 50 лет».', solution: 'Сценарий на идее: в России закончилась нефть, но главный актив — люди.', metrics: [{ _key: 'm1', value: 'Гран-при', label: 'конкурса' }], links: [], whatWorked: ['Сильная идея', 'Драматургия', 'Фокус на людях'], featured: false, order: 11 },
  { _type: 'case', _id: 'case-sakhalin', title: 'Угольная компания / Сахалин', slug: { _type: 'slug', current: 'sakhalin-coal' }, service: 'corporate', accent: 'Employee Content', shortText: 'Пример ролика для сотрудников о том, как находить интересные смыслы в повседневной работе.', task: 'Показать сотрудникам, как снимать интересное видео о своей работе.', solution: 'Живой пример на Сахалине: идеи можно найти в любых рабочих процессах.', metrics: [{ _key: 'm1', value: 'Сахалин', label: 'натурная съемка' }], links: [], whatWorked: ['Живой пример', 'Рабочая фактура', 'Объяснение через действие'], featured: true, order: 12 },
]

async function seed() {
  console.log('Загружаю данные в Sanity...\n')

  const transaction = client.transaction()

  for (const blogger of bloggers) {
    transaction.createOrReplace(blogger)
  }
  for (const c of cases) {
    transaction.createOrReplace(c)
  }

  await transaction.commit()
  console.log(`✓ Загружено ${bloggers.length} блогеров`)
  console.log(`✓ Загружено ${cases.length} кейсов`)
  console.log('\nГотово! Открывайте https://y9ptramm.sanity.studio')
}

seed().catch(err => {
  console.error('Ошибка:', err.message)
  process.exit(1)
})
