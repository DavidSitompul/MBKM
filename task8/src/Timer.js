// import { clear } from "@testing-library/user-event/dist/clear";
import {useState,useEffect} from "react";

const Timer = ({data}) => {
    const [timer,setTimer] = useState (data.timer);
    const [done,setDone] = useState (false);

    useEffect ( () => {
        const x = setInterval (() => setTimer ((timer)=> timer - 1),1000);
        if ( timer === 0 ){
            setDone(true);
        }
        return () => {
            clearInterval (x);
        };

    },[timer] );

    if (timer === 0 ){
        return;
    }
    return(
        <>
        <span>{data.title}</span>
        &nbsp;
        <span>{done?'selesai' : timer}</span>
        <br></br>
        </>
    );
};
export default Timer