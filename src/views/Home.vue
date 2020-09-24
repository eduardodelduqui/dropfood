<template>
	<div class="corpo-home">
		<!-- Image and text -->
		<nav class="navbar fixed-top navbar-dark bg-cor">
			<a class="navbar-brand" href="#">
				Logo
			</a>
		</nav>
		<div class="box-lista">
			<ul>
				<li v-for="loja in lojas" class="loja">
					<painel :loja="loja">

					</painel>
				</li>
			</ul>
		

		</div>
	</div>
</template>

<script>

import Painel from '../components/Painel'

export default {

	components: {
		Painel
	},

	data() {
		return {
			lojas: []
			
		}
	},

	

	created(){
		let promise = this.$http.get('http://localhost:3030/lojas')
		promise.then((res) => res.json())
			.then((lojas) => {
				this.lojas = lojas
			});
			

	},

}
</script>

<style scoped>



.corpo-home
{
	height: 100vh;
}

.bg-cor{
	background-color: #b03a32;
}

.box-lista{
	background-color: white;
	width: 90%;
	height: 100%;
	margin: 15px auto 0 auto;
	padding: 0px;
	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
	padding: 30px;
}

/* .box-lista::-webkit-scrollbar{
	display: none;
} */

ul{
	list-style: none;
	padding: 0 20px;
}

.loja{
	
}


</style>