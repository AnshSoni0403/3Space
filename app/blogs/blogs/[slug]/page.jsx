import { notFound } from "next/navigation"
import dynamic from "next/dynamic"

export default function BlogPage({ params }) {
  const { slug } = params

  // Dynamically import based on slug
  const BlogComponent = dynamic(() => import(`../${slug}/page`).catch(() => notFound()))

  try {
    return <BlogComponent />
  } catch (e) {
    return notFound()
  }
}