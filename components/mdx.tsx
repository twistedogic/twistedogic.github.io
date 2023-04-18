import type { FC } from "react";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";

interface MdxProps {
  code: string;
  components?: MDXComponents;
}

const MdxComponent: FC<MdxProps> = ({ code }) => {
  const Component = useMDXComponent(code);
  return <Component />;
};

export default MdxComponent;
