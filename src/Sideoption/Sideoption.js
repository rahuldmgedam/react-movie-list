import React from 'react';
import './Sideoption.css';

const Sideoption=()=> {
  return (
    <div className='container-side'>
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action-Film
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">RRR</a>
    <a class="dropdown-item" href="#">Tenet</a>
    <a class="dropdown-item" href="#">URI</a>
  </div>
</div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Comedy-Film
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">BADBOY</a>
    <a class="dropdown-item" href="#">Godzilla</a>
  </div>
</div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Romantic-Film
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">CrazyRich</a>
    <a class="dropdown-item" href="#">Ye Jawani Hai Deewani</a>
  </div>
</div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sci-fri Film
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Avenger</a>
    <a class="dropdown-item" href="#">IronMan</a>
    <a class="dropdown-item" href="#">Blackpanther</a>
  </div>
</div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    War Film
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">1917</a>
    <a class="dropdown-item" href="#">Overload</a>
    <a class="dropdown-item" href="#">Liger</a>
  </div>
</div>



    </div>
  )
}
export default Sideoption;
