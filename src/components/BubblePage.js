import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import fetchFiles from '../utils/fetchFiles';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";



const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [status, setStatus] = useState('loading')

  // const token = localStorage.getItem('token');
  // console.log('token', token)

  const getData = () => {
    fetchFiles()
      .then (res => {
        setColorList(res.data)
        // this.setState({
        //   friends: res.data
        // })
      })
      // .catch (err => {
      //   console.log(err.response)
      // })
  };

  useEffect(()=> {
    if(status === 'loading') {
      getData();
    }
    setStatus('idle')
    
  }, [status])

  const triggerLoad = () => {
    setStatus('loading')
  }

  const updateColors = (colorIn) => {
		// const idx = colorList.findIndex(el => el.id === colorIn.id);
		// if (idx !== -1) {
		// 	setColorList([...colorList, colorList[idx] = { ...colorIn }]);
    // }
    
      setColorList(colorList.map(color => {
        if(color.id === colorIn.id) {
          return colorIn
        }
        else { return color }
      }))
	}

  return (
    <>
      <ColorList colors={colorList} updateColors={updateColors} triggerLoad={triggerLoad} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
