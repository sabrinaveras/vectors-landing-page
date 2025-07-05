export const Header = () => {
  return (
    <div className="w-full h-[64px] flex flex-row items-center justify-between">
      <div className="h-full flex items-center gap-4 md:gap-8 lg:gap-12">
        <span className="cursor-pointer">Vectors</span>
        <span className="cursor-pointer">Photos</span>
        <span className="cursor-pointer">PSD</span>
        <span className="cursor-pointer">Vídeos</span>
        <span className="cursor-pointer">More</span>
      </div>
      <div>
        <button className="rounded-xl border border-white px-4 py-3 cursor-pointer">
          <span>Submit</span>
        </button>
      </div>
    </div>
  );
};
