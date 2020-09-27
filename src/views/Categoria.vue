<template>
	<div class="corpo-home">
		<!-- Image and text -->
		<filtro class="filtro-tipo"></filtro>
		<div class="box-lista">
			<ul>
				<li v-for="loja in lojas" class="loja" >
					<painel :loja="loja">

					</painel>
				</li>
			</ul>
		

		</div>
	</div>
</template>

<script>

import PainelLoja from '../components/PainelLoja'
import Filtro from '../components/Filtro'

export default {

	components: {
		'painel': PainelLoja,
		Filtro
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
            let promise = this.$http.get(`http://localhost:3030/lojas/tipo/${tipo}`)
            promise.then((res) => res.json())
                .then((lojas) => {
                this.lojas = lojas
            });
            
        }
    },
    




	

	created(){
        let tipo = this.tipo

        let promise = this.$http.get(`http://localhost:3030/lojas/tipo/${tipo}`)
        promise.then((res) => res.json())
            .then((lojas) => {
            this.lojas = lojas
        });
	},

}
</script>

<style scoped>



nav{
	margin-bottom: 30px;
}

.corpo-home
{
	height: 100%;
	min-height: 100%;
	margin: 0;
}

.bg-cor{
	background-color: #b03a32;
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


</style>