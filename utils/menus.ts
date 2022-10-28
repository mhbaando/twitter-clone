import { HomeIcon, InboxIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  UserIcon,
} from "@heroicons/react/outline";

export interface IMenus {
  text: string;
  icon: any;
}

const menus: IMenus[] = [
  {
    text: "Home",
    icon: HomeIcon,
  },
  {
    text: "Explore",
    icon: HashtagIcon,
  },
  {
    text: "Notifications",
    icon: BellIcon,
  },
  {
    text: "Messages",
    icon: InboxIcon,
  },
  {
    text: "Bookmark",
    icon: BookmarkIcon,
  },
  {
    text: "Lists",
    icon: ClipboardIcon,
  },
  {
    text: "Profile",
    icon: UserIcon,
  },
  {
    text: "More",
    icon: DotsCircleHorizontalIcon,
  },
];

export default menus;
