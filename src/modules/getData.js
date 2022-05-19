const getData = (str) => {
    return fetch(`https://ozon-f8404-default-rtdb.firebaseio.com/goods.json`)
    // return fetch(`https://ozon-f8404-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
    .then(response => response.json());
};

export default getData;