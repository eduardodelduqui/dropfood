<template>
        <div class="corpo-loja">
            <div class="info-loja">
                <div class="info-loja-cabecalho">
                    <img :src="loja.imagem">
                    <div class="titulo-descricao">
                        <h1>{{this.loja.nome}}</h1><router-link :to="{name: 'editar', params:{nome: this.loja.nome}}"><b-icon-pencil class="editar"></b-icon-pencil></router-link>
                        <p>Pratos Executivos, Refeição, Pizza, Pizza doce, Massas, Grelhados, Grelhados na Brasa, Filé, Filet, Mignon, Minhon, Entrecot, 
                            Entrecote, Salmão, Nhoque, Gnocchi, Frango, Estrogonofe, Strogonoff, Suco, Cerveja, Chopp, Vinho.</p>
                        <p v-if="loja.frete"><span id="rating">&#9733; 4.5</span> •  {{loja.tipo}} •  30-45 min •  {{loja.bairro}} •  <span class="frete">Entrega R$ {{loja.frete.toFixed(2)}}</span></p>
                        <p v-else><span id="rating">&#9733; 4.5</span> •  {{loja.tipo}} •  30-45 min •  {{loja.bairro}} •  <span class="frete">Entrega Grátis</span></p>
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
            
            <div class="box">
                <div class="circle"></div>
                <div class="box-itens">
                    <cardapio></cardapio>

                </div>

            </div>

        </div>
</template>

<script>

import Cardapio from '../components/Cardapio'
import SobreLoja from '../components/SobreLoja'

export default {

    components: {
        Cardapio,
        SobreLoja
    },

    data() {
        return {
            loja: '',
            nome: this.$route.params.nome,
        }
    },


    created () {
        
        if(this.nome){
            let nome = this.nome
            this.$http.get(`http://localhost:3030/lojas/nome/${nome}`)
                .then((loja) => this.loja = loja.body, (erro) => this.erro = erro) 
        };
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
    display: flex;
    margin-top: 50px;
    align-items: flex-start;
}

.titulo-descricao
{
    margin-left: 20px;
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
}




.box{
	background-color: #b03a32;
	width: 100%;
	height: 90%;
	margin: 20px auto 0 auto;
	padding: 0px;
	border-top-left-radius: 30px;
    border-top-right-radius: 30px;
	padding-top: 50px;
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

.box-itens
{
    background-color: white;
    height: 100%;
    width: 90%;
    margin: 0 auto;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    padding: 30px 50px;
}



</style>