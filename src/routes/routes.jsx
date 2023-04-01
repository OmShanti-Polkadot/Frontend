import { Routes, Route } from 'react-router-dom';
import Hero from '../components/Hero';
import Signin from '../components/Signin'; 

const IntialRoute = () => {
    return (
        <Routes>
            {/* <Route exact path="/" element={<Hero />}/> */}
            <Route path='/Signin' element={<Signin />}/>
        </Routes>
    )
}
export default IntialRoute;