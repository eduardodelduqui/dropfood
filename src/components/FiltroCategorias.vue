<template>
    <ul class="cardapio-filtro">
        <li v-for="categoria, index in categorias">
            <div :href="`#categoria${index}`">
                <span :id="`categoria${index}`">{{categoria.secao_nome}}</span>
            </div>
        </li>
    </ul>
</template>

<script>
export default {

    props: {
        categorias: {
            type: Array,
            required: true
        },
    },

    data() {
        return {
        }
    },

}
</script>

<style scoped>



</style>