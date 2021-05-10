import React from 'react';
import './App.css';
import './css/Main.css';
import './css/Enemy.css';
import Main,{BulletCreated,Score,Reload} from './js/Main';
import EnemyMelee from './js/EnemyMelee';
function BackGround() {
  return <div className="backGround"></div>
}
function Rule() {
  return <>
  <div className="rule">
    Score : <Score/><br/>
    Space : shoot <br/>
    ArrowUp : go up<br/>
    ArrowDown : go down<br/>
    ArrowLeft : go left<br/>
    ArrowRight : go right<br/>
  </div>
  <div className="rule rule2">
    Hit enemy to kill<br/>
    If enemy touch u <br/>
    or reach bottom ,<br/>
    you lose <br/>
     <br/>
    U have 1 bullet/sec<br/>
    Max : 5<br/>
    Bullets remain : <Reload/>
  </div>
  </>
}
const html = (
  <>
    <Rule/>
    <BackGround/>
    <Main/>
    <BulletCreated/>
    <div></div>
    <EnemyMelee/>
  </>
)
class App extends React.Component {
  render(){
    return html;
  }
}
export default App;
