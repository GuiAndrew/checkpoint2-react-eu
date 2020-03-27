import React, { Component } from 'react';
import ApiService from '../../Util/ApiService';
import Game from '../Game/Game';

class Gamelist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gameList: [],
            error: ""
        }
    }

    componentDidMount() {
        ApiService.GamesFetchList()              
                  .then(res => {
                      if (res !== undefined) {
                        this.setState({gameList: res});
                        console.log(res);
                      }                      
                  }).catch(err => this.setState({ error: 'Error in api communication when trying to fetch data.'}));
    }

    render() {          
        const { gameList } = this.state;
        //console.log(gameList);
        return (
            <div className="container mb-10">
                {
                    gameList.map((value, index) => {
                        return (
                            <Game key={value.id} gameName={value.name} gameImg={value.background_image} gameRating={value.rating} index={index} />
                        )                        
                    })
                }
            </div>
        );
    }
}

export default Gamelist;