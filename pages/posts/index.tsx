import { FC } from "react";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Previews, { PreviewsProps } from "../../components/Previews";

export const getStaticProps = async () => {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
};

const Posts: FC<PreviewsProps> = ({ posts }) => (
  <>
    <section className="w-1/2 text-start mb-5">
      <h2 className="text-lg"># Posts</h2>
    </section>
    <Previews posts={posts} />
  </>
);

export default Posts;
