<template>
    <div>
        <div class="sidebar" :class="{sidebarActivated}">
            <button @click="sidebarActivated = !sidebarActivated" class="sidebar-button">
                <b-icon-chevron-compact-left v-if="sidebarActivated" class="button-icon-right"></b-icon-chevron-compact-left>
                <b-icon-chevron-compact-left v-else class="button-icon-left" ></b-icon-chevron-compact-left>
            </button>
            <div class="menu">
                <ul>
                    <li>
                        <router-link :to="{name: 'editar'}">Loja</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'editarcardapio'}">Cardápio</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'itensadicionais', params: {id: this.id}}">Itens Adicionais</router-link>
                    </li>
                    <li>
                        <router-link :to="{path: '/historico'}">Histórico</router-link>
                    </li>
                    <li>
                        
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            sidebarActivated: false
        }
    },

}
</script>

<style scoped>

.sidebar{
	position: absolute;
	height: 100%;
	width: 250px;
	left: -250px;
	background-color: #111;
	color: #dbdbdb;
	z-index: 1;
	transition: 0.5s;
}

.sidebarActivated{
	left: 0px;
}

.sidebar-button{
	position: absolute;
    top: 40%;
	right: -20px;
	width: 20px;
	height: 45px;
	margin: 0px;
	background-color: #111;
	padding: 0px;
	border: none;
	border-bottom-right-radius: 10px;
	border-top-right-radius: 10px;
	color: white;
}

.sidebar-button:focus{
    outline: none;
	border: none;
}

.button-icon-left, .button-icon-right{
	font-size: 22px;
	font-weight: bold;
	transition: 0.2s;
	margin: 0 auto;
	margin-top: 2px;
}

.button-icon-left{
	transform: rotate(-180deg);
}

.menu{
	text-align: center;
    font-size: 27px;
    padding-top: 50px;
}

ul{
    list-style: none;
    padding: 0;
}

li{
    margin: 20px 0;
}

a{
    text-decoration: none;
    color: white;
}

</style>