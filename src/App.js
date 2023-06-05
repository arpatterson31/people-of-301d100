// REBUILD AS A CLASS COMPONENT

// 1ST IMPORT
import React from 'react';
import Main from './Main'

// 2ND CREATE OUR CLASS COMPONENT
class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hello from App!</h1>
        <Main />
      </>
    )
  }
}

// 3RD EXPORT THE CLASS FOR OTHER FILES TO USE IT
export default App;