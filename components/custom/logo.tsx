import Link from "next/link";
import { LogoSVG } from "../icons";

const Logo = () => (
  <Link href="/" className="flex justify-center items-center">
    <LogoSVG />
  </Link>
);

export default Logo;
