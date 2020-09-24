<template>
	<div class="corpo-painel">
		<div>
			<img :src="loja.imagem">
		</div>
		<div class="info">
			<router-link :to ="{name: 'loja', params: {nome: loja.nome}}"><h5>{{loja.nome}}</h5></router-link>
			<div class="info-secundaria">
				<span class="rating">&#9733;</span>
				<p class="rating">4.5</p>
				<p class="tipo"> • {{loja.tipo}} • </p>
				<p class="bairro">{{loja.bairro}}</p>
			</div>
			<div class="info-outras">
				<p>30-45 min • </p>
				<p v-if="loja.frete">R$ {{loja.frete.toFixed(2)}}</p>
				<p v-else class="frete">Grátis</p>
				
				

			</div>
		</div>
	</div>
</template>

<script>
export default {

	props: {
		loja: {
			
		},
	},
}
</script>

<style scoped>

.corpo-painel
{
	display: flex;
	padding: 20px 0px 20px 0px;
	margin: 0px;
	border-bottom: 1px solid rgb(176, 58, 50, 0.25);
	border-top: 1px solid rgb(176, 58, 50, 0.25);
}

img
{
	width: 105px;
	border-radius: 12px;
	margin: 0 5px 0 5px;
}

.info
{
	position: relative;
	width: 100%;
	margin: 0 10px 0 10px;
	padding: 5px;
}

h5
{
	font-size: 1em;
	font-weight: bold;
	margin: 0px;
	color: rgb(176, 58, 50)
}

a{
	text-decoration: none;
	color: black;
}

.info-secundaria, .info-outras
{
	display: flex;
}


.rating, .info-secundaria p, .info-outras p
{
	font-size: 15px;
	margin: 0px 5px 0px 0px;
}

.info-outras
{
	position: absolute;
	bottom: 0%;
}

.rating
{
	color: darkgoldenrod;
}

.info-outras
{
	color: rgb(61, 61, 61)
}

.frete
{
	color: rgb(95, 146, 95)
}

.dot
{
	font-size: 14px;
}


</style>