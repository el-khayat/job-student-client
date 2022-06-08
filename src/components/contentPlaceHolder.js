import React from 'react'
// import './contentPlaceHolder.css'


const contentPlaceHolder = () => {

const card = ()=> {

  return (
<div class="card-M">
{/* master do an change */}
<div class="author">
  <div class="profile-img animated-bg" id="profile_img">&nbsp;</div>
  <div class="author-info">
    <strong class="animated-bg animated-bg-text" id="name"
      >&nbsp;</strong>
    <small class="animated-bg animated-bg-text" id="date">&nbsp;</small>
  </div>
</div>

    <div class="card-header animated-bg" id="header">&nbsp;</div>
<div class="card-content">
<h3 class="card-title animated-bg animated-bg-text" id="title">
  &nbsp;
</h3>
<p class="card-excerpt" id="excerpt">
  &nbsp;
  <span class="animated-bg animated-bg-text">&nbsp;</span>
  <span class="animated-bg animated-bg-text">&nbsp;</span>
  <span class="animated-bg animated-bg-text">&nbsp;</span>
</p>
</div>
</div>

  )
};

  return (
    <div class="CONTENT">
{card()}
{card()}
{card()}
{card()}
  </div>

  );
}

export default contentPlaceHolder