import React from 'react';
import { Planet } from 'react-kawaii'

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '10%'
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }



  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (

        <div style={pageStyle}>
          <Planet size={220} mood="sad" color="#44A4D7" />
          <h2 style={{ textAlign: 'center', marginTop: 20, fontSize: 25, color: 'red' }}>404</h2>
          <h4 style={{ textAlign: 'center', fontSize: 20 }}>Seems there was some sort of error.
    <span style={{ color: 'green', marginLeft: 10 }}>Please go back to home page.</span></h4>
        </div>

      )
    }

    return this.props.children;
  }
}
export default ErrorBoundary;