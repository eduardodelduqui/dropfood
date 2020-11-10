<template>
    <div class=card-cardapio>
        <div class="dish-card">
        <div class="dish-info">
            <div class="dish-info-top">
                <h3>Spaghetti alla carbonara</h3>
                <div class="descricao">
                    <textarea style="overflow: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical; display: -webkit-box; -webkit-line-clamp: 2;">Molho de champignon, creme de leite e linguiça toscana. Berinjela grelhada, molho especial de tomate, mussarela e presunto</textarea>
                </div>
            </div>
            <span class="dish-preco">R$ 69,90</span>
        </div>
        <div>
            <b-img class="imagem" src='https://static-images.ifood.com.br/image/upload/t_medium/pratos/818e8137-67cd-450e-9eca-ae0f8169c78e/201712221056_17638671.jpg' alt=""></b-img>
        </div>
    </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            conteudo: ''
        }
    },

    created(){
        alert('msg')
    }

}
</script>

<style>

.formulario-card{
    width: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
}

.card-cardapio{
    width: 100%;
    border: 1px solid rgb(185, 185, 185);
    height: 100%;
    padding: 20px;
}

/* textarea{
    background-color: transparent;
    width: 100%;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400px;
    resize: none;
    border: none;
} */

textarea{
    background-color: transparent;
    resize: none;
    border: none;
}

textarea:focus{
    outline: none;
}

h3{
    font-size: 18px;
    color: #3e3e3e;
    margin-bottom: 16px;
}

.dish-card{
    display: grid;
    grid-template-columns: 1fr 120px;
    gap: 15px;
    width: 100%;
    border: 1px solid rgba(209, 209, 209, 0.5);
    padding: 10px;
    min-height: 147px;
    max-height: 190px;
    border-radius: 5px;
    min-width: 300px;
}

.dish-info{
    display: grid;
    grid-template-rows: 1fr 20px;
    height: 100%;
    overflow: hidden;
}

.dish-info-top{
    display: inline;
    grid-row: 1;
}

.descricao{
    font-size: 12px;
    height: 38px;
}

.imagem{
    border-radius: 5px;
    object-fit: cover;
    width: 120px;
    height: 90px;
}

.dish-preco{
    font-size: 16px;
}

@media (max-width: 742px){
    .dish-card{
        position: relative;
    }
}



</style>