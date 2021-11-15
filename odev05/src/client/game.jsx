import React, {Component} from 'react';

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: null
        }
    }

    componentDidMount() {
        this.newGame();
    }

    newGame = () => {
        this.setState({
            game:{
                firstCard: Math.floor(Math.random()*3),
                win: false,
                lose: false,
                card: ["image/back.jfif","image/back.jfif","image/back.jfif"],
                Counter: 0
            }
        })
    }


    cardSelected = (index) => {
        const { card, firstCard, Counter, win, lose } = this.state.game;

        if(card[index]==="image/astronaut.jfif"){
            return;
        }

        if(!win && !lose){
            const newCard = [...kart];

            if(firstCard===index){
                newCard[index] = "image/moon.jfif";
                this.setState({game:{win: true,
                    card:newCard}});
            }else {
                firstCard[index] = "image/moon.jfif";
                if(Counter===1){
                    this.setState({game:{lose: true,
                            card:firstCard}});
                }else {
                    this.setState(prev=>({game:{Counter:prev.game.Counter+1,
                        card:firstCard}}));
                }
            }

        }
    }


    render(){
        if(!this.state.game){
            return <h2>Yükleniyor...</h2>
        }
        const { game } = this.state;

        if(game.win){
            return(
                <div className="game-result">
                    <h2>Kazandın!</h2>
                    <img className="kart" src='image/astronaut.jfif' />

                    <div className="action">
                        <button className="play new-game-button" onClick={this.yeniOyun}>Yeni Oyun</button>
                    </div>
                </div>
            )
        }
        if(game.lose){
            return(
                <div className="game-result">
                    <h2>Kaybettin :( </h2>
                    <div className="action">
                        <button className="play new-game-button" onClick={this.newGame}>Yeni Oyun</button>
                    </div>
                </div>
            )
        }
        const card = game.card;
        const denemeText = (2-game.Counter)+" hakkınız kaldı."
        return (
            <div>
                <p>{denemeText}</p>
                <img className="kart" src={kart[0]} onClick={()=>{this.cardSelected(0)}}/>
                <img className="kart" src={kart[1]} onClick={()=>{this.cardSelected(1)}}/>
                <img className="kart" src={kart[2]} onClick={()=>{this.cardSelected(2)}}/>
            </div>
        );
    }
}

