import { FC, ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

const Main: FC<MainProps> = ({ children }) => (
  <main className="flex flex-col items-center justify-center font-mono">
    {children}
  </main>
);

export default Main;
