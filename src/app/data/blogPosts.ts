export type BlogPost = {
  id: string;
  title: string;
  description: string;
  date: string;
  slug: string;
  content: string;
};

export const blogPosts = [
  {
    id: "1",
    title: "Jak jsem začal s vývojem",
    description: "Příběh o tom, jak jsem se dostal k programování.",
    date: "2025-02-02",
    slug: "jak-jsem-zacal",
    content: `Test`,
  },
  {
    id: "2",
    title: "React vs Next.js",
    description: "Porovnání dvou populárních frontendových frameworků.",
    date: "2025-02-05",
    slug: "react-vs-nextjs",
    content: `Test`,
  },
];
