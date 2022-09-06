import React from "react";

const Regions = () => {
  return (
    <div
      name="regions"
      className="w-full xl:h-screen bg-blue-900  py-32 sm:py-24"
    >
      <div className="max-w-[1920px] w-full grid grid-cols-2 gap-8">
        <div className="text-left pb-4 pl-10">
          <p className="text-4xl font-bold inline border-b-4 text-white border-blue-400">
            Regions
          </p>
        </div>
        <div></div>
      </div>

      <div class="p-[50px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 ">
        <div class="rounded-md  overflow-hidden shadow-lg drop-shadow-sm hover:scale-105 bg-blue-400  opacity-80 hover:opacity-90 duration-300 hover:shadow-xl">
          <img
            class="w-full "
            src="https://th.bing.com/th/id/R.b90d905797d3b51b3c62af3d752f3250?rik=M8fSsPGQrOSgpQ&riu=http%3a%2f%2fwww.italymagazine.com%2fsites%2fdefault%2ffiles%2ffeature-story%2fleader%2fbigstock-st-magdalena-in-winter-38392990.jpg&ehk=dXoliUXv1R22jfLiQVlXIEgNCn4OBj3NNfPUFd%2bCedo%3d&risl=1&pid=ImgRaw&r=0"
            alt="Mountain"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-white">Italy</div>
            <p class="text-slate-200 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div class="rounded-md overflow-hidden shadow-lg drop-shadow-sm hover:scale-105 bg-blue-400 opacity-80 hover:opacity-90 duration-300 hover:shadow-xl">
          <img
            class="w-full"
            src="https://th.bing.com/th/id/R.a1f4d71dab63f7e7210715bc88dfe4d8?rik=B%2bC5fWKWWDB5bw&pid=ImgRaw&r=0"
            alt="River"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-white">Austria</div>
            <p class="text-slate-200 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        <div class="rounded-md overflow-hidden shadow-lg drop-shadow-sm hover:scale-105 bg-blue-400 opacity-80 hover:opacity-90 duration-300 hover:shadow-xl">
          <img
            class="w-full"
            src="https://4.bp.blogspot.com/-VRe_1OLitEs/ULjd6ab-HCI/AAAAAAAAAw8/XIi8ywWQ-Kc/s1600/IMG_8032.JPG"
            alt="Forest"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-white">Bulgaria</div>
            <p class="text-slate-200 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regions;
