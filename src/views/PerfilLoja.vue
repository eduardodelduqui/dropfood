<template>
    <div>
        <div>
            <SideBar/>
        </div>
        <div>
            <ul class="grid">
                <li class="grid-item" v-for="prato in tamanho">
                    <Dish :prato="prato"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import SideBar from '../components/SideBar'
import Dish from '../components/Dish'

export default {

    components: {
        SideBar,
        Dish
    },

    data() {
        return {
            
        }
    },

}
</script>

<style>

.grid
{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px}

</style>