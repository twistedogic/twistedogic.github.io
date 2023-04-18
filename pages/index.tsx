import { FC } from "react";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Previews, { PreviewsProps } from "../components/Previews";

export const getStaticProps = async () => {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts: posts.slice(0, Math.min(posts.length, 3)) } };
};

const Home: FC<PreviewsProps> = ({ posts }) => (
  <>
    <section className="prose my-5 w-1/2">
      Hi There! <span>👋</span>. I am a Software Engineer based in Hong Kong. I
      love designing and building stuff. Troubleshooting is part of the fun too.
      I started this site as a way to organize my thoughts.
    </section>
    <section className="w-1/2 text-start mb-5">
      <h2 className="text-lg"># Recent Posts</h2>
    </section>
    <Previews posts={posts} />
  </>
);

export default Home;
