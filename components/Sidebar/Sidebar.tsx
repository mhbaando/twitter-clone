import Image from "next/image";
import mh from "public/mh.png";

import Logo from "public/twlogo.png";
import SidebarMenu from "./SidebarMenu";
import menus from "utils/menus";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { useState } from "react";

const Sidebar: React.FC = (): React.ReactElement => {
  const [active, setActive] = useState(menus[0].text);
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed top-0 h-full">
      {/* image */}
      <div className="hoverEffect flex items-center justify-center hover:bg-blue-100">
        <Image src={Logo} alt="Our logo" width={40} height={40} />
      </div>

      {/* menus */}
      <div className="mt-4 mb-2.5 xl:items-start">
        {menus.map((menu, i) => (
          <SidebarMenu key={i} data={menu} index={i} active={active} setActive={setActive} />
        ))}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline mt-2">
          Tweet
        </button>
      </div>

      {/* Profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-12">
        <Image src={mh} alt="user Icon" className="w-10 h-10 rounded-full xl:mr-2" />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Mohamud A. Abshir</h4>
          <p className="text-gray-500">@mhbaando</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
};

export default Sidebar;
