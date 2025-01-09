import { Youtube } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

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
      <div className="flex flex-col sm:flex-row flex-wrap gap-10 justify-between items-center max-w-full w-[1224px]">
        <div className="flex overflow-hidden relative gap-px items-start self-stretch px-1 py-0.5 my-auto ">
          <div className="flex z-0 gap-2.5 items-center">
            <h1 className="text-2xl text-center font-bold tracking-wide bg-clip-text bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(0,0,0,0.7)] ">
              PromptMasters
            </h1>
          </div>
        </div>
        <div className="flex gap-4 justify-center max-sm:w-full items-center self-stretch my-auto text-base whitespace-nowrap min-w-[240px] text-slate-400">
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
        <Button
          size={"lg"}
          className=" gap-2.5 hidden sm:flex items-center self-stretch px-6 py-4 my-auto text-base font-medium leading-none text-white bg-violet-600 rounded-[36px] max-md:px-5"
        >
          <Youtube /> View Demo
        </Button>
      </div>
    </div>
  );
};
export default Navbar;
