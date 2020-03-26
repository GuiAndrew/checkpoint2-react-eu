import React, { Component } from 'react';
import ApiService from '../../Util/ApiService';

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
            <div className="">
                This is from gameList
                {
                    gameList.map((value) => {
                        return (
                            <p key={value.id}>{value.name}</p>
                        )
                        
                    })
                }

            </div>
        );
    }
}

export default Gamelist;