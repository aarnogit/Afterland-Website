import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link
    href="/"
    className="flex justify-center items-center w-32 md:w-40 lg:w-48 xl:w-56 h-6 md:h-10 relative"
  >
    <Image
      src="/logo.svg"
      alt="logo"
      className="aspect-video object-contain max-w-32 md:max-w-40 lg:max-w-48 xl:max-w-56"
      fill
      priority
    />
  </Link>
);

export default Logo;
