import React from 'react';


const Describe = ({db}) => (
    <ul>
        {
            db.map( item => (<li key={item.id}>
            <h4>{item.day}</h4>
            <div>
             <p>Ранок</p>
             <h4>{item.today}</h4>
<img src={item.src} alt='sunIcon'/>
<h4>{item.temp}&#8451;</h4>
</div>
<div>
    <p>Тиск: {item.pressure}</p>
<p>Вологість: {item.humidity}</p>
<p>Швидкість вітру: {item.wind} км/год</p>
</div>
             <p>Обід</p>
             <h4>{item.day}</h4>
            <div>
             <h4>{item.today}</h4>
<img src={item.src} alt='sunIcon'/>
<h4>{item.temp}&#8451;</h4>
</div>
<div>
    <p>Тиск: {item.pressure}</p>
<p>Вологість: {item.humidity}</p>
<p>Швидкість вітру: {item.wind} км/год</p>
</div>
             <p>Вечір</p>
             <h4>{item.day}</h4>
            <div>
             <h4>{item.today}</h4>
<img src={item.src} alt='sunIcon'/>
<h4>{item.temp}&#8451;</h4>
</div>
<div>
    <p>Тиск: {item.pressure}</p>
<p>Вологість: {item.humidity}</p>
<p>Швидкість вітру: {item.wind} км/год</p>
</div>

</li>))
        }
    </ul>
);

export default Describe;