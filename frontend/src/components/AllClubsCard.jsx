import React from 'react'
import { useState } from 'react'
// react icons
import {BsEye, BsThreeDotsVertical} from "react-icons/bs";
import {FaHeart} from "react-icons/fa";
import {HiMiniShare} from "react-icons/hi2";
import {BiLike} from "react-icons/bi";


const AllClubsCard = ({club}) => {
    
    const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div>
        <div className="w-screen md:w-[80%] shadow-lg bg-white rounded m-10">
            <img
                src={club.image}
                alt={club.name}
                className="w-full h-64 object-cover"
            />
            <div className="flex w-full justify-between items-center p-4">
                <div className="flex  items-center gap-4">
                    <div className=" flex flex-col items-center">
                        <h2 className="font-semibold text-3xl">{club.name}</h2>
                    </div>
                </div>
                <BsThreeDotsVertical
                    className="text-[#424242] rounded-full text-[2.5rem] p-2 hover:bg-[#ececec] cursor-pointer"/>
            </div>

            <p className="text-[#424242] p-4">
                <div className="flex flex-row ">
                    <button className="flex flex-row ">
                        {" "}
                        <BsEye className="text-2xl p-1"/> 50
                    </button>
                    <button className="flex flex-row ">
                        <BiLike className="text-2xl p-1"/> 10
                    </button>
                </div>
                {club.description}
            </p>

            <div className="flex items-center justify-between w-full p-4 ">
                <div className="flex flex-col items-center gap-4 ">
                    
                    <div className="flex flex-row gap-5">
                        <FaHeart
                            className={`${
                                isFavorite ? "text-[#7506ff]" : "text-[#424242]"
                            } text-[1.4rem] cursor-pointer`}
                            onClick={() => setIsFavorite(!isFavorite)}
                        />
                        <HiMiniShare className="text-[#424242] text-[1.4rem] cursor-pointer"/>
                    </div>
                </div>
                <button
                    className="btn p-3 rounded border bg-violet-600 text-white hover:bg-violet-300 hover:text-white">
                    View Club
                </button>
            </div>
     
            
    </div>
    </div>
  )
}

export default AllClubsCard