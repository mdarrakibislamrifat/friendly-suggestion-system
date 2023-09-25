
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Root = () => {
    return (
        <div>
            <div className='w-[1300px] mx-auto'>
            <Header></Header>
            
            <div className='w-[1300px] mx-auto flex justify-center items-center py-10'>
            <Outlet></Outlet>
            </div>
           
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;