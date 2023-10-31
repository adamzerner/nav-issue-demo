import { LayoutProps } from "$fresh/server.ts";
import { Foo } from "../islands/foo.tsx";
import { Bar } from "../islands/bar.tsx";

export default ({ Component }: LayoutProps) => {
  return (
    <div>
      <Foo />
      <Bar />
      <Component />
    </div>
  );
};
