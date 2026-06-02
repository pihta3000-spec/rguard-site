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

export async function getPosts(category = null) {
  const filter = category
    ? `*[_type == "post" && category == $category]`
    : `*[_type == "post"]`
  return client.fetch(`${filter} | order(publishedAt desc) {
    _id, title, "slug": slug.current, category,
    publishedAt, excerpt,
    "coverImage": coverImage.asset->url,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
  }`, { category })
}

export async function getPost(slug) {
  return client.fetch(`*[_type == "post" && slug.current == $slug][0] {
    _id, title, "slug": slug.current, category,
    publishedAt, excerpt, body,
    "coverImage": coverImage.asset->url,
    seo,
    "relatedPosts": relatedPosts[]->{
      _id, title, "slug": slug.current, category, publishedAt, excerpt,
      "coverImage": coverImage.asset->url
    }
  }`, { slug })
}

// ── ОТРАСЛЕВЫЕ РЕШЕНИЯ ───────────────────────────────

export async function getIndustries() {
  return client.fetch(`*[_type == "industry"] | order(order asc) {
    _id, title, "slug": slug.current, icon, shortDesc,
    "coverImage": coverImage.asset->url
  }`)
}

export async function getIndustry(slug) {
  return client.fetch(`*[_type == "industry" && slug.current == $slug][0] {
    _id, title, "slug": slug.current, icon, shortDesc,
    body, linkedServices, seo,
    "coverImage": coverImage.asset->url
  }`, { slug })
}
