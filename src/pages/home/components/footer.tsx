export const Footer = () => {
  return (
    <div className="w-full h-[140px] pb-16 flex flex-row items-center justify-between">
      <div className="max-w-[475px] h-[74px] flex flex-row items-center gap-6">
        <div className="h-[74px] flex">
          <a href="#">Discover All Collections</a>
        </div>
        <div className="flex flex-row items-center">
          <div className="w-[74px] h-[74px] rounded-xl bg-red-500"></div>
          <div className="w-[74px] h-[74px] rounded-xl bg-yellow-500 relative left-[-32px]"></div>
          <div className="w-[74px] h-[74px] rounded-xl bg-blue-500 relative left-[-64px]"></div>
          <div className="w-[74px] h-[74px] rounded-xl bg-green-500 relative left-[-96px]"></div>
        </div>
      </div>
      <div>
        <button className="rounded-xl bg-(--background-bt-dark) px-4 py-3 cursor-pointer">
          <span>Next Page</span>
        </button>
      </div>
      <div className="flex flex-row items-center gap-2">
        <caption className="text-(--light-gray)">Page</caption>
        <div className="w-[34px] h-[34px] rounded-[0.5vw] bg-(--dark-gray)"></div>
        <div className="w-[34px] h-[34px] rounded-[0.5vw] bg-(--light-gray) flex items-center justify-center text-white">
          1
        </div>
        <div className="w-[34px] h-[34px] rounded-[0.5vw] bg-(--dark-gray)"></div>
        <caption className="text-(--light-gray)">of 120</caption>
      </div>
    </div>
  );
};
