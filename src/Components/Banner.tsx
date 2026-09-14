 
import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
          return (
<section className="border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-16 py-8 sm:py-10 md:py-12 lg:py-16">

          <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-[27px] sm:text-[34px] md:text-[40px] lg:text-[50px] font-bold leading-[1.05] text-slate-900">Build Your Ideal<br />
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent"> Development Stack</span></h1>

          <p className="mt-4 sm:mt-5 md:mt-5 lg:mt-5 max-w-xl mx-auto lg:mx-0 text-[10px] sm:text-xs md:text-sm lg:text-base leading-4 sm:leading-5 md:leading-6 text-slate-500">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>

          <div className="mt-5 sm:mt-6 md:mt-6 lg:mt-7 flex flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3">
          <button className="rounded-md px-3 sm:px-4 md:px-4 lg:px-5 py-2 sm:py-2 md:py-2.5 text-[9px] sm:text-xs md:text-sm lg:text-sm font-medium text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-90 transition duration-300 cursor-pointer">Explore Technologies</button>

          <button className="rounded-md border border-slate-200 bg-white px-4 sm:px-5 md:px-5 lg:px-5 py-2 sm:py-2 md:py-2.5 text-[9px] sm:text-xs md:text-sm lg:text-sm font-medium text-slate-600 hover:bg-slate-50 transition duration-300 cursor-pointer">Learn More</button>
          </div>
           </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-2 sm:mt-4 md:mt-5 lg:mt-0">

           <img src={BannerImage} alt="Development Stack" className="w-[230px] sm:w-[280px] md:w-[330px] lg:w-[390px] xl:w-[420px] h-auto object-contain" />
                         </div>

                 </div>
         </div>
  </section>
          );
};

export default Banner;