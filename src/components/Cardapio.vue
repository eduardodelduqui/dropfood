<template>
    <div class="cardapio-corpo">
        <div v-if="filtroCategoria" class="sticky cardapio-filtro" >
            <ul>
                <li v-for="categoria, index in secoes">
                    <a :href="`#categoria${index}`">
                        {{categoria.secao_nome}}
                    </a>
                </li>
            </ul>
        </div>
        <BuscaCardapio v-if="buscaCardapio" @busca-valor="filtraPratos" />
        {{pratosFiltrados}}
        <ul>
            <li v-for="categoria, index in this.secoes">
                <DishGroup :id="`categoria${index}`" :pratos="pratos" :secao="categoria" :editable="editable" />
            </li> 
        </ul> 
    </div>
</template>

<script>

import DishGroup from '../components/DishGroup'
import FiltroCategorias from '../components/FiltroCategorias'
import BuscaCardapio from './BuscaCardapio'

export default {

    props: {
        id_loja: {
            required: true
        },
        editable: {
            type: Boolean,
            required: false
        },
        filtroCategoria: {
            type: Boolean,
            required: false
        },
        buscaCardapio: {
            type: Boolean,
            required: false
        }
    },

    components: {
        DishGroup,
        FiltroCategorias,
        BuscaCardapio

    },


    data() {
        return {
            pratos: '',
            secoes: [],
            pratosFiltrados: ''
        }
    },

    created () {
        let id = this.id_loja
        this.$http.get(`lojas/${id}/pratos`)
            .then((res) => res.json())
            .then((pratos) => this.pratos = pratos)
            .then(() => {
                this.$http.get(`lojas/${id}/sections`)
                .then((res) => res.json())
                .then((sections) => this.secoes = sections)
            })
    },

    methods: {
        filtraPratos(prato) {
            this.pratos = this.pratos.filter(function(el){
                return el.nome == prato
            })
        }
    },
}
</script>

<style scoped>

.cardapio-corpo
{
    width: 100%;
    margin: 0 auto;
    height: 100%;
}

.cardapio-grid{
    list-style: none;
    display: grid;
    padding: 0;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

.sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
}

h2
{
    color: #3F3E3E;
    font-weight: 500;
    margin-bottom: 20px;
}

.cardapio-filtro
{
    background-color: white;
    z-index: 3;    
}

.cardapio-filtro ul{
    margin: 0 auto; 
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 10px 0;
    overflow: scroll;
    display: flex;
    
}

.cardapio-filtro ul::-webkit-scrollbar {
    display: none;
}

.cardapio-filtro ul li
{
    padding: 8px 10px;
    margin: 0 2px;
    white-space: nowrap;
    font-size: 17px;
}

a
{
    color: #717171;
}

.cardapio-filtro ul li a:hover
{
    color: #B03A32;
}




@media (max-width: 800px)
{
    .cardapio-grid{
        grid-template-columns: 1fr;
        gap: 10px;
    }
}

@media (max-width: 470px){
    .cardapio{
        width: 100%;
    }

    h2{
        text-align: center;
    }
}

@media (max-width: 420px){
    .cardapio{
    padding: 0px;
    }
}

</style>

