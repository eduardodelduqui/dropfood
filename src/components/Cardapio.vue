<template>
    <div class="cardapio">
        <h2>Destaques</h2>
        <ul>
            <li v-for="item of this.tamanho">
                <PainelCardapio/>
            </li>
        </ul>

        
    </div>
  
</template>

<script>

import PainelCardapio from '../components/PainelCardapio'

export default {

    components: {
        PainelCardapio,
    },

    data() {
        return {
            tamanho: 7
        }
    },

    

}
</script>

<style scoped>

.cardapio
{
    width: 90%;
    margin: 0 auto;
}

h2
{
    color: #3F3E3E;
    font-weight: 500;
    margin-bottom: 20px;
}

ul
{   
    display: grid;
    list-style: none;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin: 0 auto;
    padding: 0;
}

li{
    width: 100%;
    margin: 0;
}

@media (max-width: 1100px)
{
    ul{
        grid-template-columns: repeat(1fr);
    }

}

</style>

