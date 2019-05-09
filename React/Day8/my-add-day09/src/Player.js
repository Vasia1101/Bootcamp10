import React, {Component, createRef} from 'react';
import s from './Player.module.css';
import Button from './Button';

export default class Player extends Component{
playerRef = createRef();
play = () => this.playerRef.current.play();
pause = () => this.playerRef.current.pause();
    render() {
        const {source} = this.props
      return (
        <div className={s.container}>
          <video className={s.player} src={source} ref={this.playerRef} />
        
        <div className={s.controls}>
<Button label='Play' onClick={this.play}/>
<Button label='Pause' onClick={this.pause}/>
        </div>
        </div>
      )
    }
}