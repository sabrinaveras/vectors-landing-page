import { Search } from "../../components/search";
import { VectorCard } from "../../components/vectorCard";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export const HomePage = () => {
  return (
    <div className="w-full h-full bg-(--background-dark)">
      <div className="max-w-[1378px] flex flex-col gap-16 m-auto px-4">
        {/* Header */}
        <Header />

        {/* Main */}
        <div className="w-full h-fit items-center justify-center flex flex-col gap-16">
          <div className="max-w-[810px] flex flex-col gap-16">
            <div className="flex flex-col gap-6 text-center">
              <h1>Stunning Pro Stock Vectors</h1>

              <h3>
                High quality Vectors with worry-free licensing for personal and
                commercial use.
              </h3>
            </div>

            <div>
              <Search />
            </div>
          </div>

          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-9">
              <span>Latest</span>
              <span>Popular</span>
              <div className="w-[1px] h-[16px] bg-gray-500"></div>
              <span>Premium</span>
              <span>Free</span>
            </div>
            <div className="flex flex-row items-center gap-5">
              <div className="w-[34px] h-[34px] bg-red-500 rounded-full"></div>
              <div className="w-[34px] h-[34px] bg-red-500 rounded-full"></div>
            </div>
          </div>

          <div className="w-full flex flex-row items-center justify-between gap-9">
            <VectorCard />
            <VectorCard />
            <VectorCard />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
