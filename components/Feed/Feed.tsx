import { SparklesIcon } from "@heroicons/react/outline";
import FeedInput from "./FeedInput";

const Feed: React.FC = () => {
  return (
    <div className="xl:ml-[370px] xl:min-w-[576px] border-2 border-x-gray-200 sm:ml-[72px] flex-grow max-w-xl">
      {/* Feed Header */}
      <div className="flex items-center justify-between py-2 px-3 sticky top-0 z-50 bg-white border-b-2 ">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center  ml-auto">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      {/* Feed Input */}
      <FeedInput />
    </div>
  );
};
export default Feed;
