<template>
	<div class="corpo-home">
		<div class="box-lista">
			<ul>
				<li v-for="loja in lojas" class="loja">
					<!-- {{loja.nome}}
					{{loja.tipo}} -->
				</li>
			</ul>
		

		</div>
	</div>
</template>

<script>
export default {

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
	background-color: rgb(176, 58, 50);
	height: 100%;
}

.box-lista{
	position: absolute;
	background-color: white;
	width: 90%;
	height: 100%;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
	margin: 80px 0 0 0px;
	padding: 0px;
	border-radius: 20px;
	padding: 30px;
}

ul{
	list-style: none
}



</style>