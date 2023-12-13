import React from 'react';

const Button = () => {
  return (

<form className="d-flex" >

<button className="btn btn-outline-dark" type="submit">
<i class="bi bi-chat-left-text-fill"></i>
</button>

<button className="btn btn-outline-dark" type="submit" >
<i class="fa-solid fa-gear"></i>
</button>
<button className="btn btn-outline-dark" type="submit" >
<i className="fa-solid fa-bell"></i>
</button>

	
<img className="avatar-img rounded-2" src="ava.jpg" id="avg"></img>


</form>

  );
}

export default Button;



