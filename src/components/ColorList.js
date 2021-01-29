import React, { useState } from "react";
import axios from "axios";
import EditMenu from './EditMenu';
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  // const params = useParams();
  const { push } = useHistory();
  // const paramId = props.match.params.id;


  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    console.log(colorToEdit)
     axiosWithAuth()
      .put(`colors/${colorToEdit.id}`, colorToEdit)
      .then(res => {
        console.log('res', res)
        updateColors(res.data)
        // push(`/bubbles`)
        window.location.href = `/bubbles`
      })
      .catch(err => {
        console.log(err)
      })
  };

  const deleteColor = color => {
    axiosWithAuth()
    .delete(`colors/${color.id}`)
    .then( res => {
      console.log('delete', res)
      // setTimeout(() => { 
      updateColors(res.data)
    // }, 3000)
      push(`/bubbles`)
      // window.location.href = '/bubbles';
    })
    .catch(err => {
      console.log('error:', err)
    })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} data-testid="colorTest" onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.