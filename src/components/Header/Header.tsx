import React from 'react';
import { Head, Point } from './Header.styled';




const Header: React.FC = () => {
 

    return (
      <Head><img src="https://pixlpark.ru/content/images/pixlpark_logo.svg" alt='logo' className="logo" width="150"/>
        <Point >.</Point>
        </Head>
      
    )
  }
  
  export default Header;
  