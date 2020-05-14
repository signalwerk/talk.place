import styled from 'styled-components'
import React from "react";
import { color } from 'styled-system'

const Invert = styled.div([], color, {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // backgroundColor: 'white',
  backgroundColor: '#1ba9d5',


  '& a': {
    color: 'inherit'
  }
})

Invert.defaultProps = {
  color: 'background',
  bg: 'text'
}



const Image = props => <Invert className="layout layout-image">{props.children}</Invert>

// export default Invert

export default Image
