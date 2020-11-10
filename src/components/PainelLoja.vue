<template>
	<div class="corpo-painel">
		<div class="imagem-loja">
			<img :src="loja.imagem">
		</div>
		<div class="info">
			<div class="info-loja">
				<router-link :to ="{name: 'loja', params: {nome: loja.nome}}"><h5>{{loja.nome}}</h5></router-link>
				<div class="info-secundaria">
					<span class="rating">&#9733;</span>
					<p class="rating">4.5</p>
					<p class="tipo"> • {{loja.tipo}} • </p>
					<p class="bairro">{{distancia}} km</p>
				</div>
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

const geopoint = require('geopoint')
export default {

	props: ['loja'],

	data(){
		return {
			distancia: '',
			user: {
				lat: 0,
				lng: 0
			}

		}
	},

	created(){
		this.$getLocation({})
            .then(coordinates =>{
				this.user = coordinates
                
            })
	},

	watch: {
		user(newValue, oldValue) {
			this.distancia = this.calculaDistancia(newValue, this.loja)

		}
	},

	methods: {
		calculaDistancia(user, loja) {
			let usuario = user;
			let ponto1 = new geopoint(usuario.lat, usuario.lng)
			let ponto2 = new geopoint(loja.latitude, loja.longitude)
			let distancia = ponto1.distanceTo(ponto2)*1.609
			
			return distancia.toFixed(1)
		}
	},







}
</script>

<style scoped>

/* .corpo-painel
{
	display: flex;
	padding: 20px 0px 20px 0px;
	margin: 0px;
	border-bottom: 1px solid rgb(176, 58, 50, 0.25);
	border-top: 1px solid rgb(176, 58, 50, 0.25);
} */

.corpo-painel
{
	display: grid;
	grid-template-columns: 110px 1fr;
	padding: 12px;
	margin: 0px;
	border-bottom: 1px solid rgb(176, 58, 50, 0.25);
	border-top: 1px solid rgb(176, 58, 50, 0.25);
	gap: 20px;
}

img
{
	width: 105px;
	border-radius: 12px;
	margin: 0 5px 0 5px;
}

.imagem-loja{
	padding: 5px 0px;
}

.info
{
	position: relative;
	transform: translatex(-50%);
	left: 50%;
	width: 100%;
	padding: 5px;
}

.info{
	display: grid;
	grid-template-rows: 1fr 30px;
}

h5
{
	display: inline-block;
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
	padding: 5px;
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

@media (max-width: 430px){
	img{
		width: 70px;
	}
}

@media (max-width: 500px){
	.corpo-painel{
		grid-template-columns: 80px 1fr;
		height: 120px;
		font-size: 14px;
	}

	.rating, .info-secundaria p, .info-outras p{
		font-size: 14px;
		white-space: nowrap;
	}

	.bairro{
		text-overflow: ellipsis;
		overflow: hidden;
	}
}


</style>