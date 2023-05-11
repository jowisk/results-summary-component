import { React, useState, useEffect } from 'react'

import Result from './components/UI/organisms/Result'
import Summary from './components/UI/organisms/Summary'

function App() {

  const [average, setAverage] = useState('')

  const percentage = Math.floor(Math.random() * (101 - 0) + 0)

  const skillsArray = [
    {
      name: "Reaction",
      value: (Math.floor(Math.random() * (101 - 0) + 0)),
      icon: '/assets/images/icon-reaction.svg'
    },
    {
      name: "Memory",
      value: (Math.floor(Math.random() * (101 - 0) + 0)),
      icon: 'assets/images/icon-memory.svg'
    },
    {
      name: "Verbal",
      value: (Math.floor(Math.random() * (101 - 0) + 0)),
      icon: "assets/images/icon-verbal.svg"
    },
    {
      name: "Visual",
      value: (Math.floor(Math.random() * (101 - 0) + 0)),
      icon: "assets/images/icon-visual.svg"
    },
  ]

  const getAverage = () => {
    const arr = Object.values(skillsArray);
    const sum = (accumulator, obj) => accumulator + obj.value
    const avg = Math.floor(arr.reduce(sum, 0) / arr.length)
    setAverage(avg)
  }

  useEffect(() => {
    getAverage()
  }, []);

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row lg:m-auto lg:h-[450px] lg:w-[700px] lg:items-center lg:justify-center">
      <Result
        average={average}
        percentage={percentage}
      />
      <Summary
        skills={skillsArray}
      />
    </div>
  )
}

export default App
