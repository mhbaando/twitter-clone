import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import Image from "next/image";
import User from "public/mh.png";
const FeedInput: React.FC = (): React.ReactElement => {
  return (
    <div className="flex items-start justify-start border-b-2 border-gray-200 p-3 space-x-3">
      {/* user Image */}
      <div>
        <Image src={User} alt="user Image" className="w-11 h-11 rounded-full cursor-pointer hover:bri\" />
      </div>

      {/* What's Happening Input */}
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full resize-none rounded-md border-none focus:ring-0 text-lg placeholder-gray-500 min-h-[50px] text-gray-700"
            rows={3}
            placeholder="What's Happening"
          ></textarea>
        </div>

        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center justify-center">
            <PhotographIcon className="h-10 hoverEffect p-2  text-sky-500 hover:bg-sky-100" />
            <EmojiHappyIcon className="h-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
          </div>
          <button
            className="bg-blue-400 text-white px-4 py-1.5 rounded-full shadow-md hover:brightness-95 cursor-pointer disabled:opacity-50"
            disabled
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};
export default FeedInput;
