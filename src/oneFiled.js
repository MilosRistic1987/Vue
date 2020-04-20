import React, { useState, useEffect } from 'react';
import Switch from "react-switch";


const OneFiled = ({ filed, setStatistics, statistics }) => {
    let { name } = filed
    const [time, setTime] = useState(0)
    const [value, setValue] = useState(3);
    // const[chartdata,setChartdata]=useState([3])
    const [toggle, setToggle] = useState(true)
    let copyValue = 3
    var operator = [1, -1];
    var randomIndex = Math.round(Math.random())
    let randomNumber = Number((Math.random() * 1 + 1) * operator[randomIndex]);
    const [elementStatistics, setElementStat]= useState({time:time, [name]:value})
    // console.log(chartdata, 'pera');






    useEffect(() => {
        if (toggle) {
            var interval = setInterval(() => {
                setValue(Number((copyValue + randomNumber).toFixed(3)));
                setTime(time+2)
                // setChartdata(currentData=>[...currentData,Number((copyValue + randomNumber).toFixed(3))])
                let data = {
                    time: time,
                    [name]: value
                }
                // const obj = statistics.find(el=>el.time === time)
                // const newObj = obj? {...obj,[name]:value}:{time:time, [name]:value}
                setElementStat(data)
              
            }, 2000);
            return () => clearInterval(interval);
        } else {
            clearInterval(interval)

        }

    }, [value, toggle])

    useEffect(()=>{
        console.log(statistics,2)
        setStatistics({...statistics, [time]: {...statistics[time], ...elementStatistics}})

    },[elementStatistics])


    const handleChange = () => {
        setToggle(!toggle)
    }



    return (
        <div className='divCapsula'>
            <div className='firstCardpart'>
                <div><h4 className='cardName'>{name}</h4></div>
                <div className='threePartDiv'>
                    <div>
                        {value >= 3 ? <img className='arrow' src='./arrowUp.png' alt='arrow' /> : <img className='arrow' src='./arrowDown.png' alt='arrow' />}
                    </div>
                    <div>
                        <h4 className='cardValue'>{value}</h4>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className='toggleBtnDiv'>
                <Switch
                    checked={toggle}
                    onChange={() => handleChange()}
                    onColor="#86c232"
                    offColor="#689ff7"
                    offHandleColor="#d1525f"
                    onHandleColor="#61892f"
                    handleDiameter={28}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0 0.1rem 0.3rem rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0 0.1rem 0.3remrgba(0, 0, 0, 0.2)"
                    height={20}
                    width={68}
                    className="react-switch"
                    id="material-switch" />
            </div>
        </div>
    )
}


export default OneFiled