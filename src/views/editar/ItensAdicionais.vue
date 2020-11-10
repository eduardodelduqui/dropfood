<template>
    <div>
        <h3>Itens Adicionais</h3>
        <ul>
            <li v-for="item in itensAdicionais">
                {{item.nome}}
            </li>
        </ul>

        <h3>Grupos</h3>
        

    </div>
</template>

<script>
export default {

    data() {
        return {
            idLoja: this.$route.params.id,
            itensAdicionais: '',
        }
    },



    created () {
        let id_loja = this.idLoja
        this.$http.get(`lojas/${id_loja}/adicionais`)
            .then((res) => res.json())
            .then((itens) => this.itensAdicionais = itens)
    },

}
</script>

<style>

</style>