import React, {createContext, Component} from 'react';

export const ContextApp = createContext();

class ContextAppProvider extends Component {
    state = {
        gameList: []
    }

    render(){
        return(
            <ContextApp.Provider value={{...this.state}}>
                { this.props.children }
            </ContextApp.Provider>
        );
    }
}

export default ContextAppProvider;