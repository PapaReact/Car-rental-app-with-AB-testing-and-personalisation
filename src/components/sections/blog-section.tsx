import BlogCard from "../blog-card";
import Button from "../button";

export default function BlogSection() {
  return (
    <section className="bg-white">
      <div className="py-[120px] max-w-8xl mx-auto flex flex-col justify-center items-center">
        <h2 className="text-[48px] text-text-main font-medium leading-none mb-[100px] text-center">Fresh content from our blog</h2>
        <div className="flex gap-8 mb-16">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <Button>See more in our blog</Button>
      </div>
    </section>
  )
}
