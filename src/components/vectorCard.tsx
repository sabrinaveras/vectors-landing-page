export const VectorCard = () => {
  return (
    <div className="w-[424px] h-[498px] bg-(--background-bt-dark) rounded-xl px-6 py-6 flex flex-col text-center gap-3">
      <div className="w-full h-[280px] bg-red-500 rounded-xl"></div>

      <div className="w-full flex flex-col gap-3 px-5">
        <h2>Chotte Ustaad</h2>

        <p>This vector is available in .EPS and .PSD formats.</p>

        <div className="w-full flex flex-row items-center gap-3 justify-center cursor-pointer">
          <a href="#">Download</a>
          <div className="w-[24px] h-[24px] bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
