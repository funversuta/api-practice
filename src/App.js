import {  getOrderData } from './components/Utils/Common';
import './App.css';
import { Button, Container, H3, InputError1, TextDiv } from './components/Profile/Profile.styled';

import Header from './components/Header/Header';
import  { useState } from 'react';



function App() {
 

  const [error1 ] = useState(null);
  const [error2] = useState(null);
  
  const [blEr] = useState(false);
 

 
  const sha1 = require('sha1');
  
  
   
 /*  function saveToken(token) {
    sessionStorage.setItem('tokenData', JSON.stringify(token));
    
}
function saveTokenAccess(token1) {
  sessionStorage.setItem('AccessTokenData', JSON.stringify(token1));
} */
function saveOrders(Result) {
  sessionStorage.setItem('OrderData', JSON.stringify(Result));
}




(async () => {
  let url = 'http://localhost:8080/http://api.pixlpark.com/oauth/requesttoken';
  let response = await fetch(url);
  
  let commits = await response.json(); // читаем ответ в формате JSON
  console.log(commits.RequestToken)
  let url1 = `http://localhost:8080/http://api.pixlpark.com/oauth/accesstoken?oauth_token=${commits.RequestToken}&grant_type=api&username=38cd79b5f2b2486d86f562e3c43034f8&password=${(sha1(commits.RequestToken + '8e49ff607b1f46e1a5e8f6ad5d312a80'))}`;
  
  let response1 = await fetch(url1);
  let commits1 = await response1.json();
  console.log('access Token:' + commits1.AccessToken)
  let url2 = `http://localhost:8080/http://api.pixlpark.com/orders?oauth_token=${commits1.AccessToken}`
  let response2 = await fetch(url2);
  let commits2 = await response2.json();
  saveOrders(commits2.Result);
  console.log(commits2.Result)
 
  })()

/*  (function () {
 fetch('http://localhost:8080/http://api.pixlpark.com/oauth/requesttoken')
.then((response) => {
  return response.json();
 
})
.then((data) => {
  console.log('This is your data', data);
 
  saveToken(data.RequestToken);

  console.log('trueToken: ' + getToken().replace(/[" ]+/g, '')); */
   /* console.log('sha1:' + (sha1(trueToken + "8e49ff607b1f46e1a5e8f6ad5d312a80"))); */
 /*  console.log('token + privateK:' + ((trueToken + "8e49ff607b1f46e1a5e8f6ad5d312a80")));  */

/* })  
.then(
    fetch(`http://localhost:8080/http://api.pixlpark.com/oauth/accesstoken?oauth_token=${getToken().replace(/[" ]+/g, '')}&grant_type=api&username=38cd79b5f2b2486d86f562e3c43034f8&password=${(sha1(getToken().replace(/[" ]+/g, '') + "8e49ff607b1f46e1a5e8f6ad5d312a80"))}`
, {method: 'GET'}
)
.then((response) => {
  return response.json();
 
})
.then((data) => {
  console.log('This is your AccessTk',data); 
  saveTokenAccess(data.AccessToken);
  console.log('trueTokenAccess: ' + (getToken1().replace(/['"]+/g, '')));
 
}))
.then(
  fetch(`http://localhost:8080/http://api.pixlpark.com/orders?oauth_token=${getToken1().replace(/['"]+/g, '')}`)
.then((response) => {
  return response.json();
  
})
.then((data) => {
   console.log('This is DATA ORDERS', data);
saveOrders(data.Result);
}))
})();
    console.log(getOrderData()); */
 

  return (
    <><Header /><Container>
       <Button  /* onClick={handleClick()} */ >
          download data
        </Button>  
      <header className="jumbotron">
        <H3 id="demo">
          Данные о заказах:
        </H3>

        
        {blEr && <InputError1>{error2} { error1  } </InputError1>}
      </header>
      
         <TextDiv className='Users' >
         {getOrderData() }
         </TextDiv>
    

    </Container></>
  );
}

export default App;
