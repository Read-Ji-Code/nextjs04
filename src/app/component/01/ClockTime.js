"use client"
import { useState, useEffect } from "react";
const ClockTime = () => { 
    // 일반 변수로 처리 => 재랜더링이 되지 않음
    // let dt = new Date().toLocaleTimeString();
    // setInterval(() => {
    //     dt = new Date().toLocaleTimeString();
    //     console.log(dt);
    // }, 1000)

    //useState 변수
    const [dt, setDt] = useState(new Date().toLocaleTimeString());
    //useEffect : 처음 한번만 실행
    useEffect(() => {
        const t =  setInterval(() => {
            setDt(new Date().toLocaleTimeString());
    }, 1000);

        return () => {clearInterval(t)};
    }, []);

    //useEffect : 특정변수가 바뀔때 실행
    useEffect(() => {
        console.log(dt);
    }, [dt]);

    return (
        <>
            <p>
                NextJs Hello React !!
            </p>
            <div>현재시간 : {dt}</div>
        </>
    );
}

export default ClockTime;