<template>
  <div id="app">
    <div class="nav">
      <nav id="nav-router">
        <div id="nav-router-links">
          <router-link to="/" tag="div" id="logo"><img src="../public/logo.png"></router-link>
          <router-link to="/coffee" id="category">Coffee</router-link>
          <router-link to="/beans" id="category">Beans</router-link>
          <router-link to="/buddy" id="category">Buddy</router-link>
          <router-link to="/community" id="category">Community</router-link>
        </div>
      </nav>
      <nav id="nav-sign">
        <div id="nav-router-links">
        <router-link to="/signin" tag="button" id="sign-in">Sign In</router-link>
        <router-link to="/signup" tag="button" id="sign-up">Sign Up</router-link>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
 
}
</script>


<style>
html{
  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
}
body{
  background: #f0efe1;
  overflow-x: hidden;
  letter-spacing: -0.05em;
}
#category {
  color:#996600;
  text-decoration: none;
}
/* nav */
.nav {
  background: #fffeef;
  display: flex;
}
#nav-router {
  width: 100%;
  height: 5rem;
  padding: 0 1rem;
  font-size: 0.8rem;
}
#nav-router-links{
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
img {
  width: 3rem;
  height: 3rem;
}
#nav-sign {
  display: flex;
  width: 40%;
  justify-content: flex-end;
}
#nav-sign button{
  width: 3rem;
  height: 2rem;
  border-radius: 0.8em;
  cursor: pointer;
  font-size: 0.7rem;
  margin-right: 0.5rem;
}
#sign-in {
  background: #fff;
  border: #996600 1px solid;
  color:#996600;
}
#sign-up {
  background: #996600;
  border: none;
  color:#fff;
}
@media (min-width: 1024px) {
  html{
    font-size: 20px;
  }
  img {
    width: 5rem;
    height: 5rem;
  }
}

</style>
