import { useState, useEffect } from 'react'

export default function Time() {
    const [time, setTime] = useState(""); 
    useEffect(() => {
        let date = new Date();
        let year = date.getFullYear()
        let month = date.getMonth()+1
        let day= date.getDay()
        let hour= date.getHours()
        let minute = date.getMinutes()
        let sec= date.getSeconds()
        setTime(`${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${sec}초`)
    }, [])

    return (
        <div>{time}</div>
    )
}
