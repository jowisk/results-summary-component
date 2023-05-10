import React from 'react'
import SkillsList from '../molecules/SkillsList'

const Summary = ({ skills }) => {
    return (
        <div className="h-[494px] w-full flex flex-col px-[30px] py-[20px]">
            <p className="font-bold">Summary</p>
            <SkillsList
                skills={skills}
            />
        </div>
    )
}

export default Summary