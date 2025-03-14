// rcc -> 클래스형 컴포넌트
// rsf -> 함수형 컴포넌트
// rsc -> 람다형 컴포넌트
import React, { Component } from 'react';
import './css/App.css';
// import ImportComponent from './R003_ImportComponent'
import Bpp from './Bpp';

class App extends Component {
  // 여기 영역
  static getDerivedStateFormProps(a, b) {
    console.log('getDerivedStateFormProps');
    return {};
  }
  render() {
    console.log('호랑이');
    return (
      <div>
        <h1>Start React 200!</h1> 
        <Bpp></Bpp>
        <h2>[ This is ComponentDidMount Function ]</h2>
      </div>
    );
  }
  // 여기 영역
  componentDidMount() {
    console.log(4, 'componentDidMount');
  }
}

export default App;

// // 일반 함수
// function aaa() {

// }
// // 생성자 함수 == 클래스
// function Bbb() {

// }

// class Tiger {       // 클래스
//   constructor() {   // 생성자

//   }
// }

// class App extends Component {
//   constructor() {
//     super();    // 상속
//     this.state = {} 
//   }

//   // 멤버 변수 정의
//   num = 100;
//   count = 200;

//   monkey() {

//   }

//   render() {
//     return (
//       <div>
//         <h1> 호랑이1 </h1>
//         <h1> 호랑이2 </h1>
//       </div>
//     )
//   }
// }

// export default App;
