import './style.scss'
import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';
const index = () => {
  return (
    <div className="container">
      <div className="wrap">
        <Breadcrumb className='mt-[150px]'
          items={[
            {
              title: <NavLink  to="/">Home</NavLink>,
            },
            {
              title: <NavLink to="../../Pages/NoPage">In Progress</NavLink>,
            },
          ]}
        />
        <div className="items-center text-center mt-[200px] mb-[200px]">
          <h2>In Progress </h2>
        </div>
      </div>
    </div>
  );
}

export default index;