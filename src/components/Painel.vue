<template>
	<div class="corpo-painel">
		<div>
			<img :src="loja.imagem">
		</div>
		<div class="info">
			<h5>{{loja.nome}}</h5>
			<div class="info-secundaria">
				<span class="star">&#9733;</span>
				<p class="rating">4.5</p>
				<p class="tipo"><span class="dot">&#10625; </span>{{loja.tipo}}<span class="dot"> &#10625; </span></p>
				<p class="bairro">{{loja.bairro}}</p>
			</div>
			<div class="info-outras">
				<p class="tempo">{{loja.tempoEntrega}}<span class="dot"> &#10625; </span></p>
				<p v-if="loja.frete" class="frete">R$ {{loja.frete.toFixed(2)}}</p>
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
	border-bottom: 1px solid rgba(173, 173, 173, 0.25);
	border-top: 1px solid rgb(173, 173, 173, 0.25);
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
}

.info-secundaria, .info-outras
{
	display: flex;
}


.star, .info-secundaria p, .info-outras p
{
	font-size: 15px;
	margin: 0px 5px 0px 0px;
}

.info-outras
{
	position: absolute;
	bottom: 0%;
}

.star
{
	color: darkgoldenrod;
}

.tempo
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