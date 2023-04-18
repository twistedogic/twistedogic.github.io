import Link from "next/link";
import { FC } from "react";
import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";

const Preview: FC<Post> = ({ date, title, description, slug }) => (
  <Link href={`/posts/${slug}`} className="no-underline min-w-full">
    <div className="prose flex flex-col flex-start hover:text-white hover:bg-black">
      <span>---</span>
      <p className="my-3">
        <span className="text-lg font-bold">{title}</span>
        <time className="text-sm" dateTime={date}>
          {format(parseISO(date), " – LLLL d, yyyy")}
        </time>
      </p>
      <p className="my-0">{description}</p>
    </div>
  </Link>
);

export type PreviewsProps = {
  posts: Post[];
};
const Previews: FC<PreviewsProps> = ({ posts }) => (
  <section className="prose flex flex-col w-1/2 justify-start content-start items-start">
    {posts.map((post, idx) => (
      <Preview key={idx} {...post} />
    ))}
  </section>
);

export default Previews;
