import { SVGProps } from "react";
import menus, { IMenus } from "utils/menus";

interface ISideBarMenuProps {
  data: IMenus;
  index: number;
  active: string;
  setActive: (active: string) => void;
}
const SidebarMenu: React.FC<ISideBarMenuProps> = ({ data, index, active, setActive }): React.ReactElement => {
  return (
    <div className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3">
      <data.icon className="h-7 w-7" />
      <span
        className={`hidden xl:inline ${active === data.text ? "font-bold" : ""}`}
        onClick={() => setActive(data.text)}
      >
        {data.text}
      </span>
    </div>
  );
};
export default SidebarMenu;
