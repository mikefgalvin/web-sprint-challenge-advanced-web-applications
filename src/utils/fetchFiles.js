import { axiosWithAuth } from './axiosWithAuth';



const getData = () => {
    axiosWithAuth().get('colors')
      .then (res => {
          return res
        // setColorList(res.data)
        // this.setState({
        //   friends: res.data
        // })
      })
      .catch (err => {
        console.log(err.response)
      })
  };

export default getData;