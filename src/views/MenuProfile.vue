<template>
    <div class="corpo">
        <ul class="menu-lista">
            <li class="menu-item"><router-link :to="{name: 'editar', params:{id: this.id}}">Perfil</router-link></li>
            <li class="menu-item"><router-link :to="{name: 'perfilloja', params: {id: this.id}}">Cardápio</router-link></li>
            <li class="menu-item"><router-link :to="{name: 'home'}">Loja</router-link></li>
            <li class="menu-item"><router-link :to="{name: 'itensadicionais', params: {id: this.id}}">Itens Adicionais</router-link></li>
            <li class="menu-item"><router-link :to="{name: 'home'}">Histórico</router-link></li>
            <li class="menu-item"><router-link :to="{name: 'home'}">Ajuda</router-link></li>
        </ul>

    </div>
</template>

<script>
export default {

    data(){

        return{
            id: this.$route.params.id,
            loja: ''
        }
    },

    mounted(){

        if(this.id){
            let id = this.id
            this.$http.get(`lojas/id/${id}`)
                .then((loja) => this.loja = loja.body, (erro) => this.erro = erro) 
        };

        console.log(this.nome)
        console.log(this.loja)

    }


}
</script>

<style>

.corpo{
    width: 90%;
    margin: 0 auto;
}

.menu-lista{
    list-style:none;
    padding: 0;
}

.menu-item{
    background-color: white;
    text-align: center;
    border-bottom: 1px solid rgba(176, 58, 50, 0.25);
    padding: 8px;
}

a{
    text-decoration: none;
    color: black;
}

a:hover{
    text-decoration: none;
    color: black;
}

</style>