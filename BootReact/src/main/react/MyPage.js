import React from 'react'; //어느 컴포넌트 이든 React 임포트가 필요함
import ReactDOM from 'react-dom/client';

function MyPage() {

    return (
        <div>
            마이페이지 입니다
        </div>
    )
}
//페이지가 root가 되는 JS는 root에 삽입되도록 처리
const root = ReactDOM.createRoot(document.getElementById('root') );
root.render(
    <MyPage/>
);