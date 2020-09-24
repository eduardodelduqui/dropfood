<template>
        <div class="corpo-loja">
            <div class="cabecalho-loja">
                <img :src="loja.imagem">
                <div class="titulo-descricao">
                    <h1>{{this.loja.nome}}</h1>
                    <p>Pratos Executivos, Refeição, Pizza, Pizza doce, Massas, Grelhados, Grelhados na Brasa, Filé, Filet, Mignon, Minhon, Entrecot, 
                        Entrecote, Salmão, Nhoque, Gnocchi, Frango, Estrogonofe, Strogonoff, Suco, Cerveja, Chopp, Vinho.</p>
                    <p v-if="loja.frete"><span id="rating">&#9733; 4.5</span> •  {{loja.tipo}} •  30-45 min •  {{loja.bairro}} • R$ {{loja.frete.toFixed(2)}}</p>
                    <p v-else><span id="rating">&#9733; 4.5</span> •  {{loja.tipo}} •  30-45 min •  {{loja.bairro}} •  <span class="frete">Grátis</span></p>
                </div>
            </div>
            <div class="box">
                <div class="box-itens">
                    <h2>Destaques</h2>

                </div>

            </div>

        </div>
</template>

<script>
export default {

    data() {
        return {
            loja: '',
            nome: this.$route.params.nome,
            outro: ''
        }
    },


    created () {
        
        if(this.nome){
            let nome = this.nome
            this.$http.get(`http://localhost:3030/lojas/nome/${nome}`)
                .then((loja) => this.loja = loja.body, (erro) => this.erro = erro) 
        };
    },

    // watch: {
    //     $route(to, from) {
    //         if(to !== from){
    //             location.reload();
    //         } 
    //     } 
    // }



}
</script>

<style scoped>



.corpo-loja
{
    height: 100%;
    width: 100%;
    margin: 0 auto;
}

.cabecalho-loja
{
    width: 90%;
    margin: 0 auto;
    display: flex;
    margin-top: 50px;
    align-items: center;
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

.frete
{
	color: rgb(95, 146, 95)
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

h2
{
    color: #3F3E3E;
    font-weight: 500;
}

</style>