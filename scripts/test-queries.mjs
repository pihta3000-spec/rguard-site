import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'y9ptramm',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skfjZQwRvgjiaSJgZhxHaGhDkRNh5SjZQgxCPChmx4NuTQGt526lL1XXRNIZJIkRzppxDWGeK1yrP7LAUC4q2yGFhi3S6ujvNWGmQCunBAJUHruyO6TufXzNrntExeWyhdUgN2WP6IEh0U74GIEpYgqCGeNDBLHI1rnWoUcm1NoVxGi0bErN',
})

const posts = await client.fetch(`*[_type == "post"]{ _id, title, "slug": slug.current, category }`)
console.log('Статьи:', JSON.stringify(posts, null, 2))

const industries = await client.fetch(`*[_type == "industry"]{ _id, title, "slug": slug.current }`)
console.log('Отрасли:', JSON.stringify(industries, null, 2))
