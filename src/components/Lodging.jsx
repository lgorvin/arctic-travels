import React from "react";

const Lodging = () => {
  return (
    <div
      name="lodgings"
      className="w-full xl:h-screen mountain2 py-24 md:py-16"
    >
      <div className="max-w-[1920px] w-full grid grid-cols-2 gap-8">
        <div className="text-left pb-4 pl-10 pt-8">
          <p className="text-4xl font-bold inline border-b-4 text-white border-blue-400">
            Lodgings
          </p>
        </div>
        <div></div>
      </div>

      <div class="md:p-[110px] p-10  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        <div class="wrapper antialiased text-gray-900 ">
          <div>
            <img
              src="https://www.jetsetter.com/uploads/sites/7/2018/04/lodge-mountains-outdoors-scenic-views-1380x1380.jpeg"
              alt=" random imgee"
              class="w-full object-cover object-center  rounded-lg shadow-md border-4 border-white hover:scale-105 transition duration-300 ease-in-out"
              style={{ height: "400px", width: "500px" }}
            />

            <div class="relative px-4 -mt-16 ">
              <div class="bg-white p-6 rounded-lg shadow-lg hover:bg-slate-200 cursor-pointer duration-300">
                <div class="flex items-baseline">
                  <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    New
                  </span>
                  <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    2 beds &bull; 3 rooms
                  </div>
                </div>

                <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  Mountain Lodge
                </h4>

                <div class="mt-1">
                  $160
                  <span class="text-gray-600 text-sm"> /per night</span>
                </div>
                <div class="mt-4">
                  <span class="text-teal-600 text-md font-semibold">
                    4/5 ratings{" "}
                  </span>
                  <span class="text-sm text-gray-600">
                    (based on 234 ratings)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper antialiased text-gray-900">
          <div>
            <img
              src="https://th.bing.com/th/id/R.cd5e55a0476efa3bdeb7fde886b526c5?rik=zGK3T%2f6DbaVRXw&riu=http%3a%2f%2fwww.themilliardaire.co%2fwp-content%2fuploads%2f2014%2f12%2fStowe-mountain-lodge-1.jpg&ehk=PBl40ixl0uGzMJ%2flCHqDVdZJk5iVhi5lnP3ufmMRskI%3d&risl=&pid=ImgRaw&r=0"
              alt=" random imgee"
              class="w-full object-cover object-center rounded-lg shadow-md border-4 border-white hover:scale-105 transition duration-300 ease-in-out"
              style={{ height: "400px", width: "500px" }}
            />

            <div class="relative px-4 -mt-16  ">
              <div class="bg-white p-6 rounded-lg shadow-lg hover:bg-slate-200 cursor-pointer duration-300">
                <div class="flex items-baseline">
                  <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    New
                  </span>
                  <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    4 beds &bull; 3 rooms
                  </div>
                </div>

                <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  Mountain Lodge
                </h4>

                <div class="mt-1">
                  $200
                  <span class="text-gray-600 text-sm"> /per night</span>
                </div>
                <div class="mt-4">
                  <span class="text-teal-600 text-md font-semibold">
                    3.8/5 ratings{" "}
                  </span>
                  <span class="text-sm text-gray-600">
                    (based on 34 ratings)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper  antialiased text-gray-900">
          <div>
            <img
              src="https://content.presspage.com/uploads/1376/1920_cathedralmountainlodge1.jpg?10000"
              alt=" random imgee"
              class="w-full object-cover object-center rounded-lg shadow-md border-4 border-white hover:scale-105 transition duration-300 ease-in-out"
              style={{ height: "400px", width: "500px" }}
            />

            <div class="relative px-4 -mt-16  ">
              <div class="bg-white p-6 rounded-lg shadow-lg hover:bg-slate-200 cursor-pointer duration-300">
                <div class="flex items-baseline">
                  <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    New
                  </span>
                  <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    2 beds &bull; 3 rooms
                  </div>
                </div>

                <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  Mountain Lodge
                </h4>

                <div class="mt-1">
                  $110
                  <span class="text-gray-600 text-sm"> /per night</span>
                </div>
                <div class="mt-4">
                  <span class="text-teal-600 text-md font-semibold">
                    5/5 ratings{" "}
                  </span>
                  <span class="text-sm text-gray-600">
                    (based on 134 ratings)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper  antialiased text-gray-900">
          <div>
            <img
              src="https://th.bing.com/th/id/R.472d81df545979161278d9bcd4684fc9?rik=iS6203rdc%2b%2brZg&riu=http%3a%2f%2fcdn.l-media.net%2fmedia%2f77%2f9886%2f277820-9886-l-67123MaTE7ej.jpg&ehk=zBQ%2fQlh3lZxL3S0zJj%2fS7bSCFFdqdLpk%2fONiZw8dHxI%3d&risl=&pid=ImgRaw&r=0"
              alt=" random imgee"
              class="w-full object-cover object-center rounded-lg shadow-md border-4 border-white hover:scale-105 transition duration-300 ease-in-out"
              style={{ height: "400px", width: "500px" }}
            />

            <div class="relative px-4 -mt-16  ">
              <div class="bg-white p-6 rounded-lg shadow-lg hover:bg-slate-200 cursor-pointer duration-300">
                <div class="flex items-baseline">
                  <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    New
                  </span>
                  <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    1 bed &bull; 2 rooms
                  </div>
                </div>

                <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  Mountain Lodge
                </h4>

                <div class="mt-1">
                  $90
                  <span class="text-gray-600 text-sm"> /wk</span>
                </div>
                <div class="mt-4">
                  <span class="text-teal-600 text-md font-semibold">
                    4.8/5 ratings{" "}
                  </span>
                  <span class="text-sm text-gray-600">
                    (based on 172 ratings)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lodging;
