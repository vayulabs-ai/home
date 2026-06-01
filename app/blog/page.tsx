import { blog } from "@/lib/source";
import { getSEO } from "@/lib/seo";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { BlogCard } from "@/components/resources/blog-card";

export const metadata = getSEO({
  title: "Blog",
  description:
    "Notes from VayuLabs on shipping production AI, full-stack products, and cloud delivery.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = blog
    .getPages()
    .toSorted((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return (
    <section className="w-full">
      <Container className="flex flex-col gap-10 pt-30 pb-20">
        <div className="flex flex-col gap-4">
          <Header>Blog</Header>
          <p className="text-muted-foreground -tracking-xs max-w-2xl text-base leading-6 font-medium">
            Notes on shipping AI, platforms, and infrastructure from the
            VayuLabs team.
          </p>
        </div>
        <div className="mx-auto grid w-full max-w-md grid-cols-1 gap-8">
          {posts.map((post) => (
            <BlogCard
              key={post.url}
              card={{
                title: post.data.title,
                description: post.data.description || "",
                time: post.data.timeToRead,
                image: post.data.previewImage,
                href: post.url,
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
