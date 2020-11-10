<template>
	<div class="corpo-home">
		<!-- Image and text -->
		<FiltroLojas class="filtro-tipo"></FiltroLojas>
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

export default {

	components: {
		PainelLoja,
		FiltroLojas
	},

	data() {
		return {
            tipo: this.$route.params.tipo,
			lojas: [],


			
		}
    },

    beforeRouteUpdate(to, from, next) {
        this.tipo = to.params.tipo
        this.buscaPorTipo(this.tipo)
        next()
    },


    methods: {
        buscaPorTipo(tipo) {
            let promise = this.$http.get(`lojas/tipo/${tipo}`)
            promise.then((res) => res.json())
                .then((lojas) => {
                this.lojas = lojas
            });
            
        }
    },
    




	

	created(){
        let tipo = this.tipo

        let promise = this.$http.get(`lojas/tipo/${tipo}`)
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
	height: 100%;
	min-height: 100%;
	margin: 0;
}

.box-lista{
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

ul{
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