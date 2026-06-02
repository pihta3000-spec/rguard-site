import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'y9ptramm',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skfjZQwRvgjiaSJgZhxHaGhDkRNh5SjZQgxCPChmx4NuTQGt526lL1XXRNIZJIkRzppxDWGeK1yrP7LAUC4q2yGFhi3S6ujvNWGmQCunBAJUHruyO6TufXzNrntExeWyhdUgN2WP6IEh0U74GIEpYgqCGeNDBLHI1rnWoUcm1NoVxGi0bErN',
  useCdn: false,
})

const industries = [
  {
    _type: 'industry', _id: 'industry-mining',
    title: 'Добыча', slug: { _type: 'slug', current: 'mining' }, icon: '⛏',
    shortDesc: 'Контент-решения для горнодобывающих компаний, карьеров и вахтового производства.',
    linkedServices: [
      { _key: 's1', title: 'Вирусные видеоролики', pageId: 'viral', description: 'HR-кампании для привлечения вахтовых специалистов. Контент внутри профессионального сообщества.' },
      { _key: 's2', title: 'Корпоративные фильмы', pageId: 'corporate', description: 'Имиджевые фильмы о компании, технике безопасности и производственных процессах.' },
    ],
    seo: { metaTitle: 'Контент для добывающей отрасли — RGUARD', metaDescription: 'Вирусные ролики, HR-кампании и корпоративные фильмы для горнодобывающих компаний.' },
    order: 1,
  },
  {
    _type: 'industry', _id: 'industry-construction',
    title: 'Строительство', slug: { _type: 'slug', current: 'construction' }, icon: '🏗',
    shortDesc: 'Медийность строительных компаний через industrial-контент и понятную подачу.',
    linkedServices: [
      { _key: 's1', title: 'Вирусные видеоролики', pageId: 'viral', description: 'Контент со стройплощадок, техники и рабочих процессов.' },
      { _key: 's2', title: 'Продюсирование и СММ', pageId: 'production', description: 'Системный контент для соцсетей строительной компании.' },
    ],
    seo: { metaTitle: 'Контент для строительных компаний — RGUARD', metaDescription: 'Вирусный и корпоративный контент для строительного бизнеса.' },
    order: 2,
  },
  {
    _type: 'industry', _id: 'industry-manufacturing',
    title: 'Производство', slug: { _type: 'slug', current: 'manufacturing' }, icon: '🏭',
    shortDesc: 'Контент для промышленных предприятий, заводов и производственных компаний.',
    linkedServices: [
      { _key: 's1', title: 'Вирусные видеоролики', pageId: 'viral', description: 'Вирусный industrial-контент внутри профессионального сообщества.' },
      { _key: 's2', title: 'Концепции рекламных кампаний', pageId: 'concepts', description: 'Рекламные идеи для производственного бренда.' },
    ],
    seo: { metaTitle: 'Контент для производственных предприятий — RGUARD', metaDescription: 'Industrial-контент, корпоративные фильмы и рекламные кампании для производства.' },
    order: 3,
  },
  {
    _type: 'industry', _id: 'industry-agro',
    title: 'Аграрный сектор', slug: { _type: 'slug', current: 'agro' }, icon: '🌾',
    shortDesc: 'Контент для агробизнеса — от фермерских хозяйств до крупных агрохолдингов.',
    linkedServices: [
      { _key: 's1', title: 'Вирусные видеоролики', pageId: 'viral', description: 'Документальный и вирусный контент из реальной аграрной среды.' },
      { _key: 's2', title: 'Корпоративные фильмы', pageId: 'corporate', description: 'Имиджевые фильмы об агрохолдинге, людях и производственных процессах.' },
    ],
    seo: { metaTitle: 'Контент для аграрного бизнеса — RGUARD', metaDescription: 'Видеоконтент и рекламные кампании для агрохолдингов и фермерских хозяйств.' },
    order: 4,
  },
  {
    _type: 'industry', _id: 'industry-oil',
    title: 'Нефтегаз', slug: { _type: 'slug', current: 'oil-gas' }, icon: '🛢',
    shortDesc: 'Медийность нефтегазовых компаний через корпоративный и HR-контент.',
    linkedServices: [
      { _key: 's1', title: 'Корпоративные фильмы', pageId: 'corporate', description: 'Корпоративные фильмы и видео для внутренней коммуникации.' },
      { _key: 's2', title: 'Вирусные видеоролики', pageId: 'viral', description: 'HR-кампании для привлечения специалистов в нефтегазовую отрасль.' },
    ],
    seo: { metaTitle: 'Контент для нефтегазовых компаний — RGUARD', metaDescription: 'Корпоративные фильмы и вирусные HR-кампании для нефтегазовой отрасли.' },
    order: 5,
  },
  {
    _type: 'industry', _id: 'industry-realty',
    title: 'Недвижимость', slug: { _type: 'slug', current: 'realty' }, icon: '🏢',
    shortDesc: 'Контент для застройщиков, девелоперов и агентств недвижимости.',
    linkedServices: [
      { _key: 's1', title: 'Продюсирование и СММ', pageId: 'production', description: 'Системный контент для продвижения жилых и коммерческих объектов.' },
      { _key: 's2', title: 'Концепции рекламных кампаний', pageId: 'concepts', description: 'Рекламные концепции для запуска новых ЖК и объектов.' },
    ],
    seo: { metaTitle: 'Контент для недвижимости — RGUARD', metaDescription: 'Видеоконтент и рекламные кампании для застройщиков и агентств недвижимости.' },
    order: 6,
  },
]

async function seed() {
  console.log('Загружаю отрасли в Sanity...')
  const transaction = client.transaction()
  for (const item of industries) transaction.createOrReplace(item)
  await transaction.commit()
  console.log(`✓ Загружено ${industries.length} отраслей`)
}

seed().catch(err => { console.error('Ошибка:', err.message); process.exit(1) })
