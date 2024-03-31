import {Component} from 'react'

import './index.css'

class Foodcounts extends Component {
    state = {
        pizzaCount: 0,
        burgarCount: 0,
    }

    onClickEatPizza = () =>{
        this.setState(prevState =>({pizzaCount:prevState.pizzaCount +1}))
    }

    onClickEatBurgar = () =>{
        this.setState(prevState =>({burgarCount:prevState.burgarCount +1}))
    }
 render(){
    const {pizzaCount, burgarCount} = this.state
    return(
        <div className = "foodcounts-app-container">
            <div className = "foodcounts-container">
                <h1 className = "count-heading"> Bob eat  
                    <span className = "count">{pizzaCount}</span> Pizza
                    <span className = "count">{burgarCount}</span> Burgar 
                </h1>
                <div className = "counters-control-container">
                    <div className = "counter-control">
                        <img src = "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1709457562~exp=1709461162~hmac=c8d8d2467752cda831bb699ea5294b326398e85dd669629ca3d60ea6434537d5&w=740"
                        alt = "pizza"
                        className = "pizza"
                        />
                        <div className= "button-container">
                            <button 
                            className = "button"
                            type = "button"
                            onClick = {this.onClickEatPizza}
                            >
                                Eat pizza
                            </button>
                        </div>
                    </div>
                    <div className = "counters-control-container">
                    <div className = "counter-control">
                        <img src = "https://img.freepik.com/free-photo/delicious-burger-with-many-ingredients-isolated-white-background-tasty-cheeseburger-splash-sauce_90220-1266.jpg?t=st=1709457598~exp=1709461198~hmac=eea5fe6a6391d44454918d585368a229f91e20b4004b26aec0cb135937de8ebc&w=740"
                        alt = "burgar"
                        className = "burgar"
                        
                        />
                        <div className= "button-container">
                            <button 
                            className = "button"
                            type = "button"
                            onClick = {this.onClickEatBurgar}
                            >
                                Eat burgar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
 }   
}

export default Foodcounts 