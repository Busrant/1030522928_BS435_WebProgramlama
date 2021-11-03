import React from "react";
import  ReactDOM from "react-dom";

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            firstCard: Math.floor(Math.random()*3),
            durum: undefined,
            card: ["image/back.jfif","image/back.jfif","image/back.jfif"],
            Counter: 0,
            endGame: false
        }
    }


    kediSec = (index) => {
        const { card, firstCard, Counter, endGame } = this.state;

        if(!endGame){
        const newCard = [...card];
        let status;

        if(firstCard===index){
            newCard[index] = "image/astronaut.jfif";
            status = "Kazandın :)"
        }else {
            newCard[index] = "image/moon.jfif";
            if(Counter===1){
                status = "Kaybettin :("
            }
        }
        this.setState({
            card:newCard,
            Counter: this.state.Counter+1,
            status
        });

        if(status){
            this.setState({
                endGame: true
            })
        }

        }
    }

    newGame = () => {
        this.setState({
            firstCard: Math.floor(Math.random()*3),
            status: undefined,
            card: ["image/back.jfif","image/back.jfif","image/back.jfif"],
            Counter: 0,
            endGame: false
        })
    }

    render(){
        const { card, status } = this.state;
        return (
<div>
    <p>Bu oyunda 3 kapalı kart içindeki astronotu bulman gerekmektedir. İlk tercihte astronotu kartını bulamaz isen
    2. seçim hakkı tanınacaktır.</p>
    <img className="card" src={card[0]} onClick={()=>{this.selectedCard(0)}}/>
    <img className="card" src={card[1]} onClick={()=>{this.selectedCard(1)}}/>
    <img className="card" src={card[2]} onClick={()=>{this.selectedCard(2)}}/>
    <div className="message">
        <p>{status?status:"astronotu kartını bulmak için kartın üzerine tıklamalısın."}</p>
        {status && <p>
            Yeni bir oyun oynamak istersen <span onClick={this.newGame} className='link'>buraya</span> tıklayabilirsin.
        </p>}
    </div>
</div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));

