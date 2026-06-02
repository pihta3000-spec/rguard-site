import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'y9ptramm',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
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
