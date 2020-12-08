import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './bird-1.jpg';
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/
function fullName(use){
  return use.fistname + use.lastname;
};
var person={
  firstname: 'duong',
  lastname: 'dao',
  avarta: logo
};
function clock(){
  var element=(
    <div>
      <h2>đây là đài tiếng nói việt nam, phát thanh từ thủ đô nước cộng hòa xã hội chủ nghĩa việt nam</h2>
      <p>bây giờ là :{new Date().toLocaleTimeString()}</p>
      <img src={person.avarta} alt='duong'/>
      {greeting(person)}
    </div>
  );
  ReactDOM.render(
  element,
  document.getElementById('root')
  );
};


function greeting(use){
  if(use){
    return <h1>hello {fullName(person)}</h1>;
  }
  else{
    return <h1>tan den xi</h1>;
  };
}
setInterval(clock,1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
