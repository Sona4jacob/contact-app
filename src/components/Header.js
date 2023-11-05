import React from 'react'

function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light">
  <div class="container">
  <img
              alt=""
              src="../logo.jpg"
              width="60"
              height="35"
              className=" align-top ms-0"
            />  
    <a className="navbar-brand" href="#" style={{  color:' rgb(70, 153, 255)',marginLeft:'-500px',textAlign:'center'
}}>CONNECT</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
  </div>
</nav>
    </div>
  )
}

export default Header