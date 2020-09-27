<template>
    <div class="filtro">
        <ul>
            <router-link v-for="tipo in tipos" :to="{name: 'tipo', params: {tipo: tipo}}" class="lista-item">#{{tipo}}</router-link>
        </ul>
    </div>
</template>

<script>
export default {

    data() {
        return {
            
            tipos:[

                'Árabe',
				'Bebidas',
				'Brasileira',
				'Chinesa',
				'Doces & Bolos',
				'Japonesa',
				'Lanches',
				'Pizza',
                'Vegetariana',
            ]
        }
    },


}
</script>

<style scoped>

.filtro
{
    display: block;
    height: 100%;
}

ul
{
    margin: 20px auto 0 auto;
    width: 100%;
    display: block;
    position: relative;
    height: 100%;
    text-align: center;
    padding: 10px 0;
    z-index: 1;

}


.lista-item
{
    width: 125px;
    padding: 8px 10px;
    background-color: rgba(219, 219, 219, 0.507);
    color: rgba(0, 0, 0, 0.801);
    border-radius: 5px;
    margin: 0 2px;
}

.lista-item:hover{
    background-color: rgba(219, 219, 219, 0.733);
    color: black;
    cursor: pointer;
    text-decoration: none
}





@media (max-width: 1100px)
{
    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .lista-item{
        margin: 1px;
        border: 1px solid rgba(139, 139, 139, 0.63);
        width: 90%;
        text-align: center;
        background-color: rgba(219, 219, 219, .8)
    }
}







</style>