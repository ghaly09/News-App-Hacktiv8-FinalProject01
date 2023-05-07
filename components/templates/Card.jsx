export const Card = () => {
  return (
    <section className="flex justify-center ">
      <div className=" flex sm:flex-row flex-col items-center border-2 border-blue-500 sm:w-[500px] w-[300px] sm:h-[300px] h-[700px] rounded-md">
        <div className=" w-[200px] h-[298px] sm:border-r-2">
          <img
            className="object-fit sm:w-60 w-[300px] h-30 sm:h-[296px] rounded-l-md p-3 sm:p-0"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6ulsxkO3-I7dHKu72hCdugh05b0VLaHcKw&usqp=CAU"
            alt="person"
          />
        </div>
        <div className="sm:w-[300px] w-[200px] p-3">
          <h2 className="font-bold text-xl">Ini Judul Template</h2>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            expedita, molestias quam magni impedit sapiente fugiat accusamus,
            nesciunt deleniti facilis aspernatur itaque iure nulla quasi, est
            laudantium mollitia repellat incidunt?
          </p>
          <div className="flex flex-row gap-2 items-center pt-5">
            <i className="fas fa-user-circle text-3xl"></i>
            <span className="w-50 sm:w-60">
              <p className="font-semibold">author</p>
              <p className="opacity-70 text-sm">June 10, 2023 • 100 min read</p>
            </span>
            <i className="fas fa-heart text-red-600"></i>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center justify-center min-h-screen px-2">
        <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="max-w-md mx-auto">
            <div className="h-[236px]"></div>
            <div className="p-4 sm:p-6">
              <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
                Spagetti with shrimp sauce
              </p>
              <div className="flex flex-row">
                <p className="text-[#3C3C4399] text-[17px] mr-2 line-through">
                  MVR 700
                </p>
                <p className="text-[17px] font-bold text-[#0FB478]">MVR 700</p>
              </div>
              <p className="text-[#7C7C80] font-[15px] mt-6">
                Our shrimp sauce is made with mozarella, a creamy taste of
                shrimp with extra kick of spices.
              </p>

              <a
                target="_blank"
                href="foodiesapp://food/1001"
                className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                View on foodies
              </a>
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/id1493631471"
                className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                Download app
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};
