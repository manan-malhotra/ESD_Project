import axios from 'axios'

export default {
    getData: () =>
    axios({
        'method':'GET',
        'url':'http://localhost:3001/cart',
    }),
    getPrice : () =>
    axios({
        'method':'GET',
        'url':'http://localhost:3001/price',
    })
}