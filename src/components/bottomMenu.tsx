import React from 'react';
import Icons from './icons';
const BottomMenu=({mainScreen,setMainScreen}:{mainScreen:number,setMainScreen:any})=>{
    return <div className='kdnklms-awendwd'>
        <div onClick={()=>{
            setMainScreen(1)
        }} className='khjn0-jandw'>
            <Icons iconNumber={53}/>
            <h5>Questions</h5>
        </div>
        <div onClick={()=>{
            setMainScreen(2)
        }}  className='khjn0-jandw'>
            <Icons iconNumber={54}/>
            <h5 className=''>Answers</h5>
        </div>
        <div 
        onClick={()=>{
            setMainScreen(3)
        }} 
        className='khjn0-jandw'>
            <Icons iconNumber={55}/>
            <h5>Messages</h5>
        </div>
    </div>
}

export default BottomMenu;