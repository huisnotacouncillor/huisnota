import type { CollectionEntry } from 'astro:content'

export type PostType =
  | 'blog'
  | 'notes'
  | 'reading'
  | 'life'
  | 'practice'

export interface Post {
  id: string
  slug: string
  body: string
  data: Record<string, any>
  collection: string
  render: any
}

export type CollectionPosts = CollectionEntry<PostType>

export type Pages = 'pages'

export type CollectionPages = CollectionEntry<Pages>
