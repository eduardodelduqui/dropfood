<template>
    <div>
        <button @click="expanded = !expanded">
            <span class="expandir" v-if="!expanded">Ver mais</span>
            <span class="expandir" v-else>Ver menos</span>
            <b-icon-chevron-compact-down v-if="!expanded" class="arrow-down"></b-icon-chevron-compact-down>
            <b-icon-chevron-compact-down v-else class="arrow-up"></b-icon-chevron-compact-down>

        </button>
        <div class="conteudo" :class="{visivel: expanded}">
            <div class="horario-entrega">
                <div>
                    <span>Segunda</span><span>10:00 às 22:00</span>
                </div>
                <div>
                    <span>Terça</span><span>10:00 às 22:00</span>
                </div>
                <div>
                    <span>Quarta</span><span>10:00 às 22:00</span>
                </div>
                <div>
                    <span>Quinta</span><span>10:00 às 22:00</span>
                </div>
                <div>
                    <span>Sexta</span><span>10:00 às 22:00</span>
                </div>
                <div>
                    <span>Sábado</span><span>Fechado</span>
                </div>
                <div>
                    <span>Domingo</span><span>Fechado</span>
                </div>
            </div>
            <div class="outras-informacoes">
                <p>Outras informações</p>
                <p>{{logradouro}}</p>
                <p>{{bairro}}</p>
                <p>{{cidade}}, {{estado}}</p>
                <p>CEP {{cep}}</p>
                <p>CNPJ {{cnpj}}</p>
            </div>
        </div>



    </div>
</template>

<script>
export default {

    props: [
        'logradouro', 'bairro', 'cidade', 'estado', 'cep', 'cnpj'
    ],

    data() {
        return {
            expanded: false,
        }
    },
    
}
</script>

<style scoped>

button{
    border: none;
    background-color: transparent;
}

button:focus{
    border: none;
    outline: none;
}

.expandir
{
    display: inline-block;
    width: 90px;
    font-weight: bold;
    color: #717171;
}

.conteudo
{
    overflow: hidden;
    height: 0px;
    transition: .2s;
}

.visivel
{
    height: 450px;
    transition: .2s;

}

.arrow-down, .arrow-up
{
    /* transition: 0.2s; */
}

.arrow-up
{
    transform: rotate(180deg)
}

.horario-entrega div, .outras-informacoes p
{
    margin: 10px 0;
}

.horario-entrega div span
{
    color: #717171;
    display: inline-block;
    width: 120px;
}

.horario-entrega{
    border-bottom: 1px solid rgba(196, 196, 196, 0.719)
}

.outras-informacoes p{
    color: #3E3E3E
}

.outras-informacoes p:first-child
{
    font-weight: bold;
    color: #717171;
}

 






</style>