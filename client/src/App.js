import React from 'react';
import './App.css';
import ImportComponent from './R003_ImportComponent';
import LifecycleEx from './R004_LifecycleEx';
/* component란, 특정 코드 뭉치를 다른 부분에 이식하거나 재사용하기 위해 사용하는 코드 블록 단위 */

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p> CSS 적용하기 </p>
      <ImportComponent></ImportComponent>
      <LifecycleEx></LifecycleEx>
    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
