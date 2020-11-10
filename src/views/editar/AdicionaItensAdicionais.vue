<template>
    <div>
        <b-form class="formulario" @submit.prevent="cadastraItemAdicional()">
            <b-form-group id="input-group-nome" label="Nome:" label-for="input-nome">
                <b-form-input
                id="input-nome"
                v-model="form.nome"
                type="text"
                required
                placeholder="Digite um nome"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-descricao" label="Descrição:" label-for="input-descricao">
                <b-form-textarea
                id="input-descricao"
                v-model="form.descricao"
                type="text"
                required
                placeholder="Coloque uma descricao"
                ></b-form-textarea>
            </b-form-group>
            <b-form-group id="input-group-preco" label="Preço:" label-for="input-preco">
                <b-form-input
                id="input-preco"
                v-model="form.preco"
                type="number"
                required
                placeholder="Digite um preço"
                step="0.01"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-grupo_nome" label="Nome grupo:" label-for="input-grupo_nome">
                <b-form-input
                id="input-grupo_nome"
                v-model="form.grupo_nome"
                type="text"
                required
                placeholder="Digite um nome do grupo"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-id_grupo" label="ID do grupo:" label-for="input-id_grupo">
                <b-form-input
                id="input-id_grupo"
                v-model="form.id_grupo"
                type="number"
                required
                placeholder="Digite o id do grupo"
                ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="danger" >Adicionar</b-button>
            
        </b-form>
    </div>
</template>

<script>
export default {

    props: {
        idLoja: {
            type: Number,
            required: true
        },
        idPrato: {
            type: Number,
            required: true
        }
    },

    data() {
        return {
            form: {
                nome: '',
                descricao: '',
                preco: '',
                grupo_nome: '',
                id_grupo: '',
                id_loja: this.idLoja,
                id_prato: this.idPrato

            }
        }
    },

    methods: {
        cadastraItemAdicional() {
            console.log(this.form)
            this.$http.post('adicionais', this.form)
                .then(() => {
                    this.form = {
                        nome: '',
                        descricao: '',
                        preco: '',
                        grupo_nome: '',
                        id_grupo: '',
                        id_loja: this.idLoja,
                        id_prato: this.idPrato
                    }
                })
            this.$emit('item-adicionado')
        }
    },

}
</script>

<style>

</style>