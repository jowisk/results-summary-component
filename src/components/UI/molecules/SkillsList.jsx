import React from 'react'

import Skill from './Skill'

const SkillsList = ({ skills }) => {
    return (
        <div className="w-full h-full flex flex-col justify-around">
            {skills.map((skill, index) => (
                <Skill
                    key={index}
                    value={skill.value}
                    name={skill.name}
                    icon={skill.icon}
                />
            ))}

            <button className="bg-gradient-to-b from-[#303b59] to-[#303B59] text-white p-[15px] rounded-[30px] hover:from-[#7857FF] hover:to-[#2E2BE9]">Continue</button>
        </div>
    )
}

export default SkillsList