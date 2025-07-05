export const Search = () => {
  return (
    <div className="w-full h-[64px] bg-(--background-bt-dark) rounded-xl flex flex-row items-center justify-between py-2 px-5">
      <div className="flex flex-row items-center gap-6">
        <div className="w-[113px] h-[50px] bg-red-600 rounded-xl flex items-center justify-center">
          <span>Vectors</span>
        </div>

        <span>Search Vectors...</span>
      </div>

      <div className="w-[30px] h-[30px] bg-blue-500 rounded-full"></div>
    </div>
  );
};
