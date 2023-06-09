import React from 'react'
import Total from '../molecules/Total'

const Result = ({ average, percentage }) => {
    return (
        <div className="py-[10px] w-full h-full flex flex-col items-center bg-gradient-to-b from-[#7857FF] to-[#2E2BE9] justify-around rounded-b-[35px] lg:rounded-[35px]">

            <p className="text-[20px] text-[#D6D6D6]">Your Result</p>

            <Total
                value={average}
            />
            <div className="flex flex-col items-center justify-center text-center w-[65%]">
                <p className="text-[23px] font-bold text-white">Great</p>
                <p className="text-[#D6D6D6] my-[5px]">You scored higher than {(percentage)}% of the people who have taken these tests.</p>
            </div>
        </div>
    )
}

export default Result