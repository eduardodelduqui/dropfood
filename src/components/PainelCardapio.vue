<template>
    <div class="dish-card" style="margin: 0px">
        <div class="dish">
            <h3>Spaghetti alla carbonara</h3>
            <p>Molho de champignon, creme de leite e linguiça toscana. Berinjela grelhada, molho especial de tomate, mussarela e presunto</p>
        </div>
        <b-img class="imagem" src='https://static-images.ifood.com.br/image/upload/t_medium/pratos/818e8137-67cd-450e-9eca-ae0f8169c78e/201712221056_17638671.jpg' alt=""></b-img>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.dish-card
{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid rgba(136, 136, 136, 0.25);
    border-radius: 3px;
    width: 100%;
    height: 200px;
    padding: 20px;
}

.dish-card:hover
{
    border: 1px solid rgba(136, 136, 136, 0.493);
    cursor: pointer;

}

.dish
{
    grid-column: 1 / 3;
    margin: 0;
}

.dish p{
    font-size: 14px;
    color: #717171;
}

h3
{
    font-size: 18px;
    color: #3E3E3E;
}

.imagem
{
    height: 150px;
    width: 150px;
    margin: auto auto;
    border-radius: 5px;
 
}


@media (max-width: 1100px){
    
}





</style>