const ApiService = {
    GamesFetchList: () => {
        return fetch('https://wild-games.herokuapp.com/api/v1')
                .then(res => ApiService.ErrorHandler(res))
                .then(res => res.json());
    },
    ErrorHandler: res => {
        if (!res.ok) {
            throw Error(res.responseText);
        }
        return res;
    }
}

export default ApiService;