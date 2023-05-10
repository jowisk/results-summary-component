import { React, useState } from 'react'

const Skill = ({ name, value, icon }) => {

    return (
        <div className="bg-[#e3e3ec] rounded-[7px]">
            <div className={`bg${name} w-full h-[50px] flex items-center justify-between px-[15px] rounded-[10px]`}>
                <div className="flex">
                    <img src={icon} alt="" srcSet="" />
                    <p className={`text${name} font-semibold ml-[10px]`} >{name}</p>
                </div>
                <div className="flex">
                    <p className="font-semibold mr-[5px]">{value}</p>
                    <p className="text-[#A0A0A0] font-bold"> / 100</p>
                </div>
            </div>
        </div>
    )
}

export default Skill