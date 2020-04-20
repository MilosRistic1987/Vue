import React from 'react';
import OneFiled from './oneFiled';


const Home = ({setStatistics,statistics}) => {
    const arrayFileds = [
        {
            id: 1,
            name: 'A',
            initialValue: 3
        },
        {
            id: 2,
            name: 'B',
            initialValue: 3
        },
        {
            id: 3,
            name: 'C',
            initialValue: 3
        },
        {
            id: 4,
            name: 'D',
            initialValue: 3
        },
        {
            id: 5,
            name: 'E',
            initialValue: 3
        },
        {
            id: 6,
            name: 'F',
            initialValue: 3
        },
        {
            id: 7,
            name: 'G',
            initialValue: 3
        },
        {
            id: 8,
            name: 'H',
            initialValue: 3
        },
        {
            id: 9,
            name: 'I',
            initialValue: 3
        },
        {
            id: 10,
            name: 'J',
            initialValue: 3
        }
    ]

    return (
        <div className='filedList'>
            {arrayFileds.map(filed => <OneFiled filed={filed} key={filed.id} setStatistics={setStatistics}  statistics={statistics}/>)}
        </div>
    )

}

export default Home