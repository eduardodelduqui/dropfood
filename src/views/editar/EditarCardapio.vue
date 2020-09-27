<template>
    <div class="corpo">
        <div class="resumo">

        </div>
        <div class="corpo-editar-cardapio">
            <div class="edit-bar">
                <ul class="edit-tools">
                    <li><button class="edit-button" @click="acrescentaItem()"><b-icon-plus-circle class="icon" v-b-tooltip.hover title="Novo card"></b-icon-plus-circle></button></li>
                    <li><button class="edit-button"><b-icon-trash class="icon" v-b-tooltip.hover title="Excluir"></b-icon-trash></button></li>
                </ul>
            </div>
            <div class="grid">
                <div v-for="item in this.items" class="card" @click="expande()" :class="{expanded}">
                    <textarea>1</textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            items: 3,
            expanded: false
        }
    },


    methods: {
        acrescentaItem(){
            this.items++
        },

        expande(){
            this.expanded = !this.expanded

        }

    },


   

}
</script>

<style scoped>

.corpo
{
    display: flex;  
}

.resumo
{
    width: 260px;
    height: 100vh;
}

.corpo-editar-cardapio
{
    width: 100%;
}

.edit-bar
{
    margin: 6px 0;
}

.edit-tools
{
    list-style: none;
    display: flex;
    margin: 0px;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 5px 40px;
    background-color: rgb(236, 236, 236);
}

.edit-tools li{
    margin-right: 30px;
    background-color: transparent;

}

.edit-button{
    background-color: transparent;
    border: none;
    padding: 0;
}

.edit-button:focus{
    outline: none;
}

.icon{
    transform: scale(1.5)
}

.icon:hover{
    transform: scale(1.6);
}

.grid
{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 10px;
}

.card
{
    border: 1px solid rgb(185, 185, 185);
    height: 200px;
    padding: 20px;
    transition: 1s;
}

.card:hover{
    transform: scale(1.01);
    cursor: pointer;
}

.card-add
{
    position: relative;
    padding: 60px;
    background-color: rgba(134, 134, 134, 0.1);
}

.add-icon
{
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    height: 70px;
    width: 70px;
    padding: 0;
    border: none;
    font-size: 50px;
    color: rgba(134, 134, 134, 0.35)
}

.add-icon:hover{
    color: rgba(78, 78, 78, 0.507);
    transition: 0.2s;
}

.expanded{
    grid-row: 2;
}

textarea{
    font-family: Arial, Helvetica, sans-serif;
    border: none;
    resize: none;
}

textarea:focus{
    outline: none;
}

@media (max-width: 1400px){
    .grid{
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 950px){
    .grid{
        grid-template-columns: repeat(1, 1fr);
    }
}



</style>