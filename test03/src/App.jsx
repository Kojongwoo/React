import React, { Component } from 'react'

class App extends Component {
  // constructor() {

  // }
  f1() {
    console.log('f1 call');
    this.state.num++;
    this.state.num += 1;
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <button onClick={ () => {this.f1()} }>버튼1</button>
        <h1>{this.state.num}</h1>
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react'

// class App extends Component {
// f1 = (aaa, bbb) => {
//   console.log('call', aaa, bbb);
  
// }
// // 인수전달이 오직 1개일 때는 ()를 생략할 수 있고, 이를 생략하는 것이 일반적이다.
// f2 = (bbb) => {
//   console.log('call', bbb);
  
// }
  
//   render() {
//     return (
//       <div>
//         <button onClick = { ()=>{this.f1(1000, 'tiger')} }>버튼1</button>
//         <button onClick = { ()=>{this.f1(1000, 'tiger')} }>버튼2</button>
//       </div>
//     );
//   }
// }
// export default App;


// ===========================================

// import React, { Component } from 'react'

// class App extends Component {
//   f1() {
//     console.log('f1 call');
//     let s1 = 'tiger';
//     let s2 = 'lion';
//     console.log('두 동물의 이름은', s1, s2, '입니다.');
//     console.log('두 동물의 이름은 s1, s2', '입니다.');
//     console.log(`두 동물의 이름은 ${s1} ${s2}입니다.`);
//   }

//   f4() {
//     let t1 = {
//       a:'lion',
//       b:'tiger',
//       c:true,
//       d:3.14,
//       e:[2, 3, 4],
//       f:{dog:10, cat:20},
//       g:function(){},
//       h:()=>{},
//       i:undefined,
//     };
//     console.log(t1.a, t1.b, t1.c);
//     console.log(typeof(t1.a), typeof(t1.b));
//     console.log(typeof(t1.e), typeof(t1.f));
//     console.log(typeof(t1.g), typeof(t1.h));
//     console.log(typeof(t1.i));
//   }

//   f5() {
//     let obj1 = {
//       c:1,
//       d:2,
//     };
//     let obj2 = {
//       a:5,
//       b:3
//     };
//     // [] + [] = concat = 전개 연산
//     // {} + {} = assign = 전개 연산
//     let obj3 = Object.assign(obj1, obj2);
//     console.log('객체 출력1', obj3);
//     let obj4 = [...obj1, ...obj2];
//     console.log('객체 출력2', obj4);
//     this.f6({...obj1, ...obj2});
//   }
//   f6(result) {
//     console.log('f6의 인수전달 내용 출력:', result);
    
//   }

//   render() {
//     return (
//       <div>
//         <h1>App</h1>
//         <button onClick={ this.f1 } >버튼1</button>
//         <button onClick={ this.f6 } >버튼2</button>
//         <button onClick={ this.f3 } >버튼3</button>
//       </div>
//     );
//   }
// }

// export default App;

// // ====================================

// // import React, { Component } from 'react'

// // class App extends Component {
// //   f1() {
// //     console.log('f1 call');
// //   }
// //   f2() {
// //     console.log('f2 call'); 
// //   }
// //   f3 = () => {
// //     console.log('f3 call');
// //   }
// //   f4 () {
// //     console.log('f4 call');
// //     return 100;
// //   }
// //   f5 = () => {
// //     console.log('f5 call');
// //     return 100;
// //   }
// //   /* 람다 함수 안에서 return 코드만 있는 경우, {}와 return 키워드를 생략할 수 있다. */
// //   f6 = () => {
// //     return 100;
// //   }
  
// //   f7 = () => 200;
// //             /* {
// //     return 100;
// //   } */

// //   render() {
// //     this.f1();
// //     return (
// //     <div>
// //       <h1>App</h1>
// //       <button onClick={ ()=>{this.f1()} }>버튼1</button>
// //       { /* 함수의 안수를 전달하지 않는다는 전제에서 */ }
// //       { /* 람다함수와 ()를 생략할 수 있다. */ }
// //       <button onClick={ /* ()=>{ */ this.f2 /* () } */ }>버튼2</button>
// //       <button onClick={ this.f3 }>버튼3</button>
// //       <button onClick={ this.f4 }>버튼4</button>
// //       <button onClick={ this.f5 }>버튼5</button>

// //       <button onClick={ ()=>{
// //         let num = this.f6();
// //         console.log(num);
// //         // console.log(this.f6());
// //       } }>버튼6</button>

// //       <button onClick={ ()=>{
// //         console.log(this.f7());
// //       } }>버튼7</button>

// //     </div>
// //     );
// //   }
// // }

// // export default App;

// // ===========================================
// // import React, { Component } from 'react';

// // class App extends Component {
// //   // >>>>>
// //   shouldComponentUpdate() {
// //     console.log('shoudComponentUpdate');
// //     // return true;  // render 호출 함
// //     // return false; // render 호출 안함
// //     return true;
// //   }
// //   render() {
// //     console.log('render');
// //     return (
// //       <div>
// //         <h1>호랑이</h1>
// //         <button>버튼1</button>
// //         <button onClick={ ()=>{} }>버튼2</button>
// //         <button 
// //           onClick= { 
// //             ()=> { console.log('클릭됨'); }
// //           }>버튼3</button>
// //         <button onClick= { ()=> { this.setState( {} ) } }>버튼4</button>
// //       </div>
// //     );
// //   }
// //   // >>>>>
// // }

// // export default App;

// // 람다함수 기본꼴(일단 암기) : () => {}

// // ===============================================================

// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App
