import { FC } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { allPosts, Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import MdxComponent from "../../components/mdx";

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: allPosts.map(({ slug }) => `/posts/${slug}`),
  fallback: false,
});

export const getStaticProps: GetStaticProps = ({ params }) => ({
  props: {
    post: allPosts.find(({ slug }) => slug === params?.slug),
  },
});

interface PostProps {
  post: Post;
}

const PostLayout: FC<PostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className="w-1/2 text-start mb-5">
        <h2>
          <span className="text-lg font-bold">{post.title}</span>
          <time className="text-sm" dateTime={post.date}>
            {format(parseISO(post.date), " – LLLL d, yyyy")}
          </time>
        </h2>
      </section>
      <article className="prose w-1/2 py-5">
        <MdxComponent code={post.body.code} />
      </article>
    </>
  );
};

export default PostLayout;
