// example Layout.js
import React from "react";
import styled from 'styled-components'


const Source = styled.div([],  {

  position: 'absolute',
  left: 0,
  bottom: '1rem',
  height: '3.6rem',
  width: '100%',
  overflow: 'visible',
  // backgroundColor: 'gray',
  color: '#0a0045',
  textAlign: "right",
  paddingTop: "0.2rem",
  paddingRight: "2rem",
  display: 'flex',
  alignItems: "flex-end",
  justifyContent: "flex-end",

  '& p': {
    marginTop: '0',
    fontSize: '0.7rem',
  },

  '& a': {
    color: '#1ba9d5'
  }
})

export default Source;
