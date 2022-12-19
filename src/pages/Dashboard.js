import React from 'react';
import {Info,Repos,User,Search,Navbar} from '../components';
import {GithubContext} from '../context/context'
import loadingImage from '../images/preloader.gif';

const Dashboard = () => {
  const {isloading}=React.useContext(GithubContext);

   if(isloading){
    return <main>
      <Navbar/>
      <Search/>
      <img src={loadingImage} alt="loading" className='loading-img' />
    </main>
   }

  return (
    <main>
      <Navbar/>
      <Search/>
      <Info/>
      <User/>
      <Repos/>
    </main>
  )
}

export default Dashboard