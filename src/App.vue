<template>
	<div id="app">
    <nav class="navbar navbar-dark bg-cor">
			<router-link class="navbar-brand" href="#" :to="{name: 'home'}">
        Logo
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
  z-index: 1;
}

.bg-cor{
	background-color: #b03a32;
}

</style>
