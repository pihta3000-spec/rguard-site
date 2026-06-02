import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'y9ptramm',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Получить всех блогеров
export async function getBloggers() {
  return client.fetch(`*[_type == "blogger"] | order(order asc) {
    _id, name, "slug": slug.current, desc, bio,
    metrics, socials, specializations,
    "photos": photos[].asset->url,
    showreel
  }`)
}

// Получить одного блогера по slug
export async function getBlogger(slug) {
  return client.fetch(`*[_type == "blogger" && slug.current == $slug][0] {
    _id, name, "slug": slug.current, desc, bio,
    metrics, socials, specializations,
    "photos": photos[].asset->url,
    showreel
  }`, { slug })
}

// Получить все кейсы
export async function getCases() {
  return client.fetch(`*[_type == "case"] | order(order asc) {
    _id, "id": slug.current, title, service, accent,
    shortText, task, solution, metrics, links,
    whatWorked, featured
  }`)
}

// ── СТАТЬИ ──────────────────────────────────────────

// Загружает все статьи сразу с полным содержимым
export async function getPosts() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id, title, "slug": slug.current, category,
    publishedAt, excerpt, body, seo,
    "coverImage": coverImage.asset->url,
    "relatedPosts": relatedPosts[]->{
      _id, title, "slug": slug.current, category, publishedAt, excerpt,
      "coverImage": coverImage.asset->url
    }
  }`)
}

// Загружает все отрасли сразу с полным содержимым
export async function getIndustries() {
  return client.fetch(`*[_type == "industry"] | order(order asc) {
    _id, title, "slug": slug.current, icon, shortDesc,
    body, linkedServices, seo,
    "coverImage": coverImage.asset->url
  }`)
}
