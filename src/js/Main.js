import React, { useState } from 'react';
var x = -36;
var y = 0;
var leftb = 693
var topb = 583
var keyPress = {};
var bulletReady = [];
var reload =0;
function Bullet() {
    return <div className="bullet" style={{ transform: "translateY(0px)", left: `${leftb}px`, top: `${topb}px` }} onClick={() => { console.log(this.getBoundingClientRect().y); }}>
                <img className="bullet_1" src="bullet.png" alt="bullet" />
                <img className="bullet_2" src="bullet.png" alt="bullet" />
            </div>
}
function BulletCreated() {
    for (var i = 0; i < bulletReady.length; i++) {
        bulletReady[i] = <Bullet key={i} />
    }
    const [state, setState] = useState(0);
    setTimeout(() => {
        setState(state + 1);
    }, 100)
    return <React.Fragment>
        {bulletReady}
    </React.Fragment>
}
function Fire(e) {
    if (document.querySelector(".main")!=null)
    if (e.keyCode === 32 && reload > 0) {
        topb = document.querySelector(".main").getBoundingClientRect().top - 570 + 583
        leftb = document.querySelector(".main").getBoundingClientRect().left - 675 + 684
        bulletReady.push(1)
        setTimeout(() => {
            var firedBullet = document.getElementsByClassName("bullet");
            firedBullet = [...firedBullet]
            firedBullet.forEach(bullet => {
                bullet.style.transform = `translateY(-700px)`
            })
        }, 110);
        reload=reload-2;
    }
}
function CheckBullet() {
    var firedBullet = document.getElementsByClassName("bullet");
    var __firedBullet = []
    for (var i = 0; i < firedBullet.length; i++)
        if (firedBullet[i] != null)
            if (firedBullet[i].getBoundingClientRect().y < -80)
                __firedBullet.push(firedBullet[i]);
    firedBullet = __firedBullet
    firedBullet.forEach(bullet => {
        bullet.remove();
    });
}
function CheckHit() {
    var bullet = document.querySelectorAll(".bullet");
    var enemy = document.querySelectorAll(".enemy");
    for(var i=0;i<bullet.length;i++)
    for(var j=0;j<enemy.length;j++)
    {if(
        bullet[i].getBoundingClientRect().left > enemy[j].getBoundingClientRect().left-75
        && bullet[i].getBoundingClientRect().left < enemy[j].getBoundingClientRect().left+50
        && bullet[i].getBoundingClientRect().top > enemy[j].getBoundingClientRect().top-50
        && bullet[i].getBoundingClientRect().top < enemy[j].getBoundingClientRect().top+50
    ){bullet[i].remove();enemy[j].remove()}}
}
function CheckHit2() {
    var main = document.querySelectorAll(".main");
    var enemy = document.querySelectorAll(".enemy");
    for(var i=0;i<main.length;i++)
    for(var j=0;j<enemy.length;j++)
    {if(
        (main[i].getBoundingClientRect().left > enemy[j].getBoundingClientRect().left-75
        && main[i].getBoundingClientRect().left < enemy[j].getBoundingClientRect().left+50
        && main[i].getBoundingClientRect().top > enemy[j].getBoundingClientRect().top-50
        && main[i].getBoundingClientRect().top < enemy[j].getBoundingClientRect().top+50)
        || enemy[j].getBoundingClientRect().top>640
    ){main[i].remove();enemy[j].remove()}}
}
export default function Main() {
    setInterval(() => {
        CheckBullet()
        if(reload<10)
        reload=reload+2;
    }, 1000);
    setInterval(() => {
        CheckHit()
        CheckHit2()
    }, 100);
    const main = <div className="main" style={{ transform: "translateX(-36px)" }}>
        <div className="mainCharacter">
            <img className="mainCharacter" src="mainCharacter.png" alt="mainCharacter" />
            <div className="mainWeapon">
                <img className="mainWeapon" src="mainWeapon.png" alt="weapon" />
            </div>
        </div>
    </div>
    function Move(keyPresses,ev) {
        if (document.querySelector(".main")!=null)
        {switch (keyPresses) {
            case "ArrowUp":
                {if(y>-300)
                y -= 50
                break;}
            case "ArrowDown":
                {if(y<50)
                y += 50
                break;}
            case "ArrowRight":
                {if(x<180)
                x += 50
                break;}
            case "ArrowLeft":
                {if(x>-270)
                x -= 50
                break;}
                default:
        }
        document.querySelector(".main").style.transform = `translate(${x}px,${y}px)`}
    }
    document.addEventListener("keyup", (e) => {
        delete keyPress[e.key];
    })
    document.addEventListener("keydown", (e) => {
        keyPress[e.key] = true;
        for (var value in keyPress)
            Move(value,e);
    })
    document.addEventListener("keydown", Fire)
    return main;


}
export { BulletCreated }