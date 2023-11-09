"use client"
import style from './Lotto.module.css';

const LottoNums = ({ns}) => {
    console.log("LottoNums : ",ns);
    
    // const nsTag = ns.map((item, idx) => { 
    //     let temp;
    //     // if (item < 10) temp = <div className={style.lottonum1}>{item}</div>;
    //     // else if (item < 20) temp =<div className={style.lottonum2}>{item}</div>;
    //     // else if (item < 30) temp =<div className={style.lottonum3}>{item}</div>;
    //     // else if (item < 40) temp =<div className={style.lottonum4}>{item}</div>;
    //     // else temp =<div className={style.lottonum5}>{item}</div>;
    //     // return temp;
        
    //     //switch case
    //     // switch (n) {
    //     //     case 0 : temp = <div className={style.lottonum1}>{item}</div>;
    //     //         break; 
    //     //     case 1 : temp = <div className={style.lottonum2}>{item}</div>;
    //     //         break; 
    //     //     case 2 : temp = <div className={style.lottonum3}>{item}</div>;
    //     //         break; 
    //     //     case 3 : temp = <div className={style.lottonum4}>{item}</div>;
    //     //         break; 
    //     //     case 4 : temp = <div className={style.lottonum5}>{item}</div>;
    //     //         break;     
    //     // }
    //     // console.log(n);
    //     // return temp;

    // }
    // )

    // const nsTag = ns.map((item, idx) => { 
    //     let temp;
        

    //     return temp;
    // });    
  
    // const nsTag = ns.map((item, idx) => temp);    
  
    return (
        <div className={style.lottobox}>
        {/* {nsTag} */}
        </div>
    )
}
export default LottoNums;