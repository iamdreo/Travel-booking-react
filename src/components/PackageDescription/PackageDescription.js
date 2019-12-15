import React from 'react';
import { Tab } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { withRouter } from 'react-router';
import './PackageDescription.css';


const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
]

/**
 * 
 * @param {PackageDescription} props - shows the package info on the detail package, contains text and tabs
 */

const PackageDescription = (props) => {

  const id = props.match.params.id;

  useFirestoreConnect([
    { collection: 'todos', doc: id }
  ])
  const todos = useSelector(state => state.firestore.ordered.todos)
  if (!isLoaded(todos)) {
    return <div>Loading...</div>
  }

  if (isEmpty(todos)) {
    return <div>Todos List Is Empty</div>
  }

  return (
    <div >

      <h2 id="package-header">Ex commodo velit irure minim</h2>
      <p id="package-description">Consectetur amet enim commodo ut dolor enim deserunt
       aliqua culpa amet nisi labore magna commodo proident culpa in dolor cupidatat ex.
       Eu aute velit voluptate occaecat elit occaecat sunt magna ad nulla
        aute duis duis eu nostrud qui aute incididunt cillum veniam ex esse.
        Officia duis ullamco ullamco dolore dolor sed in id eiusmod occaecat exercitation
        ullamco veniam tempor minim dolore laborum tempor laboris ea veniam veniam incididunt
      nulla in.</p>

      <Tab panes={panes} className="tab" />
    </div>
  )
}


export default withRouter(PackageDescription);
