<template>
	<div class="corpo-home">
		<FiltroLojas class="filtro-tipo" />
		<div class="box-lista">
			<ul>
				<li v-for="loja in lojas" class="loja" >
					<PainelLoja :loja="loja">

					</PainelLoja>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

import PainelLoja from '../components/PainelLoja'
import FiltroLojas from '../components/FiltroLojas'
import LojaService from '../directives/domain/loja/LojaService'


export default {

	components: {
		PainelLoja,
		FiltroLojas,
	},

	data() {
		return {
			lojas: [],
			distancia: ''
		}
	},

	created(){
		this.service = new LojaService(this.$resource);
		this.service.lista()
					.then((lojas) => {
						this.lojas = lojas
					});	
	},

}
</script>

<style scoped>

.corpo-home
{
	height: 100%;
	min-height: 100%;
	margin: 0;
}

.box-lista
{
	display: block;
	background-color: white;
	width: 90%;
	height: 100%;
	margin: 0px auto 0 auto;
	padding: 0px;
	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
	padding: 30px;
	min-height: 100%;
}

ul
{
	list-style: none;
	padding: 0 20px;
}

@media (max-width:750px){
	.box-lista{
		padding: 30px 0 30px 0;
		margin: 0px;
		width: 100%;
	}
}

</style>