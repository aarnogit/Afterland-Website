import Link from "next/link";
import Logo from "./logo";

const soluctionsL = [
  {
    id: "1",
    link: "#",
    title: "Lumia",
  },
  {
    id: "2",
    link: "#",
    title: "Lumia Steam",
  },
];

const developersL = [
  {
    id: "1",
    link: "#",
    title: "Docs",
  },
  {
    id: "2",
    link: "#",
    title: "GitHub",
  },
];

const Footer = () => {
  return (
    <section className="bg-black h-max sm:h-52 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mt-10">
      <div className="col-span-2 flex flex-col justify-between items-start h-max sm:h-24 gap-2">
        <Logo />
        <span className="text-white/80 text-xs font-medium uppercase">
          {new Date().getFullYear() || "2024"} lumia, all rights reserved
        </span>
      </div>
      <div className="col-span-2 flex flex-col justify-between items-start sm:items-end h-max sm:h-24 gap-2">
        <h6 className="text-xs sm:text-sm text-white/80">Solutions</h6>
        {soluctionsL.map((item) => (
          <Link
            className="text-white"
            href={item.link}
            key={`soculitions-items--${item.id}`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="col-span-1 flex flex-col justify-between items-start sm:items-end h-max sm:h-24 gap-2">
        <h6 className="text-xs sm:text-sm text-white/80">Developers</h6>
        {developersL.map((item) => (
          <Link
            className="text-white"
            href={item.link}
            key={`soculitions-items--${item.id}`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Footer;
