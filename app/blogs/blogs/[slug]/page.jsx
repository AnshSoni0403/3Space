import Blog1Page from "../blog1/page";

const blogComponents = {
  blog1: Blog1Page,
};

export default function BlogPage({ params }) {
  const { slug } = params;
  const BlogComponent = blogComponents[slug];

  if (!BlogComponent) return notFound();

  return <BlogComponent />;
}
