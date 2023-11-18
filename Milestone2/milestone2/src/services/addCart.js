import axios from 'axios'

export default {
    postData: (id,quantity) =>
    axios({
        'method':'POST',
        'url':'http://localhost:3001/cart',
        'data' : {"id":id, "quantity":quantity}
    })
}