import React from 'react'
import SkillsList from '../molecules/SkillsList'

const Summary = ({ skills }) => {
    return (
        <div className="h-full w-full flex flex-col px-[30px] py-[20px] lg:h-full">
            <p className="font-bold">Summary</p>
            <SkillsList
                skills={skills}
            />
        </div>
    )
}

export default Summary