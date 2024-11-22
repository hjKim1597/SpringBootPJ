import React from 'react'; //어느 컴포넌트이든 React임포트가 필요합니다.
import ReactDOM from 'react-dom/client';
import './Main.css'
import MainComponent from './MainComponent.js'; //반드시 확장자를 jsx로 표현합니다.

function Main() {

  return (
    <div>
      <h3 className="app">이것이 멀티 페이지 렌더링 방식의 리액트다.</h3>
      ing
      <MainComponent name={'프롭스 데이터'}/>
    </div>
  )
}
//페이지 root가 되는 JS는 root에 삽입되도록 처리
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);
