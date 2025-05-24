import Category from "@/components/category";
import Navbar from "@/components/navbar";
import CategoryMenu from "@/components/categoryMenu";

const Homepage = () => {
  return (
    <div className="bg-[#f9f9fb] h-screen overflow-y-scroll scrollbar-hide  px-6 py-4">
      <div className="w-full max-w-5xl mx-auto flex flex-col ">
        <Navbar />
        <Category />
         <div className="flex justify-between items-center mt-5 ">
            <p className="font-semibold text-shadow-black text-md leading-0.5">coffee menu</p>
            <span className="text-sm text-gray-400">12 coffee results</span>
          </div>
        <CategoryMenu />
      </div>
    </div>
  );
};
export default Homepage;