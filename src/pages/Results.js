import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import ResultsNavbar from '../components/Navbar/ResultsNavbar';
import Map from '../components/Map/Map';
import ContentCard from '../components/Card/ContentCard';
import ErrorBoundary from './ErrorBoundary';

const Results = (props) => {
  return (
    <ErrorBoundary>
      <div>

        <ResultsNavbar />
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 50 }}>
          <div style={{ flex: 2 }}>

            <ContentCard />
          </div>
          <Hidden mdDown>
            <div style={{ flex: 1 }}>
              <Map />
            </div>
          </Hidden>
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default Results;