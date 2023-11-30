import axios from "axios";

export default{
    postAuth:(data)=>
    axios({
        'method':'POST',
        'url':'http://localhost:8080/api/home/authenticate',
        'data':data
    }).catch((error) => {
        console.error('Error during login:', error);
        
      }),
}