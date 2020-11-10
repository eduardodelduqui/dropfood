<template>
        <div class="corpo-loja">
            <div class="info-loja">
                <div class="info-loja-cabecalho">
                    <div class="logo-loja">
                        <img :src="loja.imagem">
                    </div>
                    <div class="titulo-descricao">
                        <h1>{{this.loja.nome}}</h1><router-link :to="{name: 'menuprofile', params:{id: this.loja.id}}"><b-icon-pencil class="editar"></b-icon-pencil></router-link>
                        <p>Pratos Executivos, Refeição, Pizza, Pizza doce, Massas, Grelhados, Grelhados na Brasa, Filé, Filet, Mignon, Minhon, Entrecot, 
                            Entrecote, Salmão, Nhoque, Gnocchi, Frango, Estrogonofe, Strogonoff, Suco, Cerveja, Chopp, Vinho.</p>
                        <p v-if="loja.frete"><span id="rating">&#9733; 4.5</span> •  {{loja.tipo}} •  30-45 min •  {{distancia}} km •  <span class="frete">Entrega R$ {{loja.frete.toFixed(2)}}</span></p>
                        <p v-else><span id="rating">&#9733; 4.5</span> •  {{loja.tipo}} •  30-45 min •  {{distancia}} km •  <span class="frete">Entrega Grátis</span></p>
                        <div class="info-loja-sobre">
                            <SobreLoja
                                :logradouro="loja.logradouro"
                                :bairro="loja.bairro"
                                :cidade="loja.cidade"
                                :estado="loja.estado"
                                :cep="loja.cep"
                                :cnpj="loja.cnpj"
                            ></SobreLoja>
                        </div>
                    </div>
                </div>    
            </div> 
            <section class="cardapio">
                <div class="circle"></div>
                <div v-if="loaded" class="cardapio-itens">
                    <Cardapio :id_loja="loja.id" filtroCategoria buscaCardapio></Cardapio>
                </div>
            </section>
        </div>
</template>

<script>

import Cardapio from '../components/Cardapio'
import SobreLoja from '../components/SobreLoja'
import PratoService from '../directives/domain/prato/PratoService'
const geopoint = require('geopoint')

export default {

    components: {
        Cardapio,
        SobreLoja,
    },

    data() {
        return {
            loja: '',
            nome: this.$route.params.nome,
            user: {
                lat: '',
                lng: ''
            },
            distancia: '',
            loaded: false
        }
    },


    created () {
        this.pratoService = new PratoService(this.$resource)
        
        if(this.nome){
            let nome = this.nome
            this.$http.get(`lojas/nome/${nome}`)
                .then(res => res.json())
                .then((loja) => this.loja = loja, (erro) => this.erro = erro)
                .finally(() => this.loaded = true)   
        };


        this.$getLocation({})
            .then(coordinates =>{ this.user = coordinates})

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

h1
{
    display:inline-block;
}

.editar
{
    margin: 0 10px;
    font-size: 14px;
}

.corpo-loja
{
    height: 100%;
    width: 100%;
    margin: 0 auto;
}

.info-loja{
    width: 90%;
    margin: 0 auto;
}
.info-loja-cabecalho
{
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 20px;
    margin-top: 50px;
}

.titulo-descricao p{
    color: #717171
}

#rating
{
	color: darkgoldenrod;
}

.gratis
{
	color: rgb(95, 146, 95);
}

.frete
{
    border: 1px solid #a7a6a6;
    padding: 3px;
    white-space: nowrap;
}

.cardapio{
	background-color: #b03a32;
	width: 100%;
	height: 90%;
	margin: 20px auto 0px auto;
	border-top-left-radius: 30px;
    border-top-right-radius: 30px;
	padding: 50px 0px;

}

.circle{
    background-color: white;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -132%);
    height: 30px;
    width: 30px;
    border-radius: 30px;
}

.cardapio-itens
{
    background-color: white;
    height: 100%;
    width: 90%;
    margin: 0 auto;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    padding: 25px 40px;
}


.sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
}

@media (max-width: 580px){
    .info-loja-cabecalho{
        display: grid;
        grid-template-columns: 1fr;
    }
}

@media (max-width: 420px){
    .cardapio-itens
    {
        padding: 25px 5px;
    }

    h1
    {
        font-size: 24px;
    }
}

</style>