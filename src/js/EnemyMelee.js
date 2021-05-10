import React,{useState} from 'react';
var enemys=[];
var speech=8;
function Enemy (props){
    return<div className="enemy enemyMelee" style={{left:props.left,transition: `all cubic-bezier(0, 0, 0, 0) ${speech}s`}}></div>
}
export default function EnemyMelee() {
    const [state,setState]=useState(0);
    setTimeout(() => {
        setState(state+1)
        if(speech>3)speech=speech-0.05
    }, 1100);
    enemys.push(Math.random()*465+445);
    for(var i=0;i<enemys.length;i++)
    {
        enemys[i]=<Enemy key={i} left={enemys[i]} />
    }
    var enemyMelee=document.getElementsByClassName("enemyMelee")
    for(var j=0;j<enemyMelee.length;j++)
    {
        if(enemyMelee[j].getBoundingClientRect().top<1)
        enemyMelee[j].style.top=`${660}px`
        if(enemyMelee[j].getBoundingClientRect().top>640 || enemyMelee[j].getBoundingClientRect().left<2)
        enemyMelee[j].remove()
    }
    return <>{enemys}</>
}