declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  const content: any;
  export default content;
}

// shader.d.ts
declare module "*.vtx" {
  const content: string;
  export default content;
}

declare module "*.frg" {
  const content: string;
  export default content;
}
