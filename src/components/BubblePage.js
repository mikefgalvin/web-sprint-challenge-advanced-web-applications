import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import fetchFiles from '../utils/fetchFiles';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";



const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [status, setStatus] = useState('loading')



  //If testing switch get to fetchFiles, if not, leave on axiosWithAuth()get()
  const getData = () => {
    // fetchFiles()
    axiosWithAuth().get('colors')
      .then (res => {
        setColorList(res.data)
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
