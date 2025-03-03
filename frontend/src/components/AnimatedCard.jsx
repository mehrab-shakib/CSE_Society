
import React from "react";

const AnimatedCard = () => {

    return (
        <div
            className="w-full sm:w-[80%] md:w-[60%] shadow-md hover:shadow-none z-0 bg-white rounded-md relative cursor-pointer group before:absolute before:top-0 hover:before:top-[10px] before:left-0 hover:before:left-[-10px] before:w-full before:h-full before:rounded-md before:bg-[#c0e6ed] before:transition-all before:duration-300 before:z-[-1] after:w-full after:h-full after:absolute after:top-0 hover:after:top-[20px] after:left-0 hover:after:left-[-20px] after:rounded-md after:bg-[#d4f2f7] after:z-[-2] after:transition-all after:duration-500">
            {/*  image  */}
            <img
                src="https://img.freepik.com/free-vector/futuristic-science-lab-background_23-2148495020.jpg?t=st=1728229546~exp=1728233146~hmac=5d458a6b808e0c510548aef0446697c3d452564def915e03e892d0ab604ca1ad&w=996"
                alt="animated_card"
                className="w-full h-[200px] rounded-t-md object-cover"
            />

            {/*  contents  */}
            <div className="p-[18px] pt-2.5 bg-white rounded-b-md">
                <h3 className="text-[1.5rem] font-bold text-[#0FABCA]">
                    Science
                </h3>
                <p className="text-[1rem] font-[400] text-gray-600">
                    The science of today is the technology of tomorrow –
                    Edward Teller
                </p>

                <button
                    className="w-full py-2 px-4 hover:bg-[#c0e6ed] hover:text-black text-[1rem] transition-all duration-300 bg-[#0FABCA] text-white rounded-md mt-5">
                    Explore
                </button>
            </div>
        </div>
    );
};

export default AnimatedCard;
              