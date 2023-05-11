import { React, useState } from 'react'

const Total = ({ value }) => {

    const [totalResult, setTotalResult] = useState('')

    return (
        <div className="rounded-full h-[130px] w-[130px] bg-gradient-to-b from-[#4E21CA] to-transparent flex flex-col items-center justify-center text-white">
            <p className="text-[50px] font-bold">{value}</p>
            <p className="text-[#D6D6D6]">of 100</p>
        </div>
    )
}

export default Total