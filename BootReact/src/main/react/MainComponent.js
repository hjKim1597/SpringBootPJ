import React {Fragment, useState} from 'react'; //어느 컴포넌트이든 React임포트가 필요합니다.

function MainComponent({name}) {
    const [data, setData] = useState('');

    const handleChange = (e) => {
        setData(e.target.value);
    }

    console.log(data);

return (
    <Fragment>
        <h3>자식컴포넌트 프롭스{name}<h3/>
        <input type="text" name="name" value={data} onChange={handleChange} />
    </Fragment>
    )

}
export default MainComponent;