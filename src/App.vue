<template>
	<div id="app">
    <nav class="navbar navbar-main navbar-dark bg-cor">
			<router-link class="navbar-brand" href="#" :to="{name: 'home'}">App</router-link>
      <router-link :to="{name: 'menuprofile'}">
        <b-icon-person class="icon-profile"></b-icon-person>
      </router-link>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
body, html, #app{
  position: absolute;
  min-height: 100%;
  width: 100%;
	margin: 0;
	padding: 0;
	background-color: white;
  min-width: 350px;
  scroll-behavior: smooth;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2 {
  font-weight: normal;
}

*{
  font-family: 'Merriweather Sans', sans-serif;
}


nav{
	margin-bottom: 0px;
  z-index: 0;
}

ul{
  list-style: none;
  margin: 0px;
  padding: 0px;
}

.bg-cor{
	background-color: #b03a32;
}

.icon-profile{
  font-size: 30px;
  margin: 5px 0px;
  color: white;
}

button:focus
{
  outline: 0px;
}

a{
  color: initial;
}

a:hover{
  color: initial;
  text-decoration: initial;
}



@media (max-width: 400px){
  body, html, #app{
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  *::-webkit-scrollbar{
    display: none;
  }
}

</style>
