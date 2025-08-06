import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const demoPosts = [
  {
    id: 1,
    title: `How to Prevent Malaria in Rainy Seasons`,
    category: `Infectious Diseases`,
    summary:
      `Simple yet effective steps to reduce mosquito bites at home and while traveling, with proven methods for African settings.`,
    image: `https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop&auto=format`,
    content: `Malaria prevention is crucial, especially during the rainy season...` // To be expanded in full blogs
  },
  {
    id: 2,
    title: `Maternal Health: First 1000 Days`,
    category: `Maternal Health`,
    summary:
      `What every new mom should know to keep both herself and her child healthy throughout pregnancy and early childhood.`,
    image: `https://images.unsplash.com/photo-1457694587812-e8bf29a43845?w=600&h=400&fit=crop&auto=format`,
    content: `The first 1000 days of life are critical for...`
  },
  {
    id: 3,
    title: `Managing Hypertension`,
    category: `Chronic Illness`,
    summary:
      `Understand key steps for managing blood pressure – lifestyle, diet, and regular monitoring.`,
    image: `https://images.unsplash.com/photo-1512070679279-cb3b86e9e73b?w=600&h=400&fit=crop&auto=format`,
    content: `Hypertension, or high blood pressure, is common among African adults...`
  },
];

export function BlogSection() {
  const [search, setSearch] = useState("");
  const filtered = search
    ? demoPosts.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase())
      )
    : demoPosts;
  return (
    <section id="blog" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-700 dark:text-blue-200 tracking-tight">Health Blog</h2>
      <div className="mb-6 max-w-lg">
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search blog posts or categories..."
          className="text-lg px-4 py-3 rounded-xl"
          aria-label="Search blog posts"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((post) => (
          <Card key={post.id} className="relative hover:scale-[1.015] transition-transform overflow-hidden rounded-2xl border-blue-100 dark:border-blue-800 bg-white dark:bg-blue-950 shadow-md flex flex-col">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-xl" loading="lazy"/>
            <div className="flex-1 flex flex-col justify-between p-5">
              <span className="text-xs font-bold text-blue-800 dark:text-blue-200 mb-2">{post.category}</span>
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-100 mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-zinc-700 dark:text-zinc-200 mb-2 line-clamp-2">{post.summary}</p>
              <Button variant="outline" size="sm" className="mt-auto w-fit pointer-events-none opacity-50" disabled>Read Full Article</Button>
            </div>
          </Card>
        ))}
        {filtered.length === 0 && <p className="col-span-full text-zinc-500 text-xl">No articles found for "{search}".</p>}
      </div>
    </section>
  );
}
