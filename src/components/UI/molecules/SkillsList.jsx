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

            <button className="bg-[#303b59] text-white p-[15px] rounded-[30px]">Continue</button>
        </div>
    )
}

export default SkillsList