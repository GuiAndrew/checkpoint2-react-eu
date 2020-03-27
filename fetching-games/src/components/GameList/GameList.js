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

        this.handleRemoveElement = this.handleRemoveElement.bind(this);
    }

    componentDidMount() {
        ApiService.GamesFetchList()              
                  .then(res => {
                      if (res !== undefined) {
                        this.setState({gameList: res});
                        // console.log(res);
                      }                      
                  })
                  .catch(err => this.setState({ error: 'Error in api communication when trying to fetch data.'}));
    }

    handleRemoveElement = (index) => {
        // let list = [...this.state.gameList];
        // let index = list.indexOf(event.target.value);
        // if (index !== -1) {
        //     list.slice(index, 1);
        //     this.setState({
        //         gameList: list
        //     });
        // }
        let list = [...this.state.gameList];
        delete list[index];
        this.setState({
            gameList: list
        });
        console.log(list);
        // console.log(index);
        // console.log(event.target.value);
    }

    render() {          
        const { gameList } = this.state;
        //console.log(gameList);
        return (
            <div className="container mb-10">
                <table className="responsive-table centered highlight">
                <thead>
                    <tr>
                        <th>Game Name</th>
                        <th>Game Image</th>
                        <th>Game Rating</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        gameList.map((value, index) => {
                            return (
                                <Game key={value.id} gameName={value.name} gameImg={value.background_image} 
                                    gameRating={value.rating} index={index} handleRemoveElement={this.handleRemoveElement} />
                            )                        
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Gamelist;