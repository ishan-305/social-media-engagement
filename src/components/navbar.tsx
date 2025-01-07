import Link from "next/link";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "About",
    href: "/about",
  },
];
const Navbar = () => {
  return (
    <div className="flex flex-col justify-center items-center py-6 w-full border-b border-solid border-b-slate-900 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center max-w-full w-[1224px]">
        <div className="flex overflow-hidden relative gap-px items-start self-stretch px-1 py-0.5 my-auto w-[158px]">
          <div className="flex z-0 gap-2.5 items-center">
            <div className="text-2xl font-bold tracking-wide bg-clip-text bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(0,0,0,0.7)] max-md:max-w-full max-md:text-4xl">
              HackerBoyz
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center self-stretch my-auto text-base whitespace-nowrap min-w-[240px] text-slate-400">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="gap-2 self-stretch p-2 my-auto cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="gap-2.5 self-stretch px-6 py-4 my-auto text-base font-medium leading-none text-white bg-violet-600 rounded-[36px] max-md:px-5">
          View Demo
        </div>
      </div>
    </div>
  );
};
export default Navbar;
