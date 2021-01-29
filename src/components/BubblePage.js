import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";



const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  // const token = localStorage.getItem('token');
  // console.log('token', token)

  const getData = () => {
    axiosWithAuth().get('colors')
      .then (res => {
        setColorList(res.data)
        // this.setState({
        //   friends: res.data
        // })
      })
      .catch (err => {
        console.log(err.response)
      })
  };

  useEffect(()=> {
    getData();
  }, [])

  const updateColors = (colorIn) => {
		const idx = colorList.findIndex(el => el.id === colorIn.id);
		if (idx !== -1) {
			setColorList([...colorList, colorList[idx] = { ...colorIn }]);
		}
	}

  return (
    <>
      <ColorList colors={colorList} updateColors={updateColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
