import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';



const Statistics = ({ statistics }) => {
  // let {time}=statistics

  // {Object.keys(statistics).map(name=> console.log(statistics[name]) )}
  console.log(statistics, 'statistics')
  console.log(Object.keys(statistics), 'keys')
  const names = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  const time = [...Object.keys(statistics)]
  const colors = { "A": "#e7717d", "B": "#F1B1B8", "C": "#afd275", "D": "#0f3b81", "E": "#54E563", "F": "#7e685a", "G": "#3A91BC", "H": "FBF784", "I": "#4E21A0", "J": "#9FA6AB" }
  return (
    <div className='chartDiv'>

      <LineChart
        width={1800}
        height={800}
        data={Object.values(statistics)}
        margin={{
          top: 20, right: 30, left: 20, bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" stroke='#fff' />
        <YAxis stroke='#fff' />
        <Tooltip />
        <Legend />
        {names.map(name => <Line type="monotone" dataKey={name} stroke={colors[name]} dot={{ r: 1.5 }} activeDot={{ r: 6.5 }} />)})}


      </LineChart>



    </div>
  )

}

export default Statistics