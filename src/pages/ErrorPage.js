import React from 'react';
import { Planet } from 'react-kawaii'

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '10%'
}
const ErrorPage = (props) => {
  return (

    <div style={pageStyle}>
      <Planet size={220} mood="sad" color="#44A4D7" />
      <h2 style={{ textAlign: 'center', marginTop: 20, fontSize: 25, color: 'red' }}>404</h2>
      <h4 style={{ textAlign: 'center', fontSize: 20 }}>Seems there was some sort of error.
     <span style={{ color: 'green', marginLeft: 10 }}>Please Try again</span></h4>

    </div>

  )
}

export default ErrorPage;