<template>
	<div class="corpo-home">
		<div class="box-lista">
			<ul>
				<li v-for="loja in lojas" class="loja">
					<painel></painel>
					<!-- {{loja.nome}}
					{{loja.tipo}} -->
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

.box-lista{
	position: absolute;
	background-color: white;
	width: 90%;
	height: 90%;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
	margin: 15px 0 0 0px;
	padding: 0px;
	border-radius: 20px;
	padding: 30px;
	overflow-y: scroll;
}

.box-lista::-webkit-scrollbar{
	display: none;
}

ul{
	list-style: none;
	padding: 0 20px;
}

.loja{
	
}


</style>