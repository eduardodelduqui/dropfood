<template>
  <div>
        <b-form class="formulario" @submit.prevent="adicionaPrato()">
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
            <b-form-group v-show="nova_secao == 'unchecked'" id="input-group-secao" label="Adicionar em:" label-for="input-secao">
            <b-form-select
                id="input-secao"
                v-model="form.secao_nome"
                :options="secoes"
            ></b-form-select>
            </b-form-group>
            <b-form-group v-if="nova_secao == 'checked'" id="input-group-categoria" label="Adicionar em uma nova categoria:" label-for="input-categoria">
                <b-form-input
                    id="input-categoria"
                    v-model="form.secao_nome"
                    placeholder="Insira um nome para a categoria"
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-checkbox
                    id="checkbox-nova-secao"
                    v-model="nova_secao"
                    name="checkbox-nova-secao"
                    value = checked
                    unchecked-value = unchecked
                    >
                    Criar nova categoria
                </b-form-checkbox>
            </b-form-group>
            <b-form-group id="input-group-imagem" label="Imagem:" label-for="input-imagem">
                <b-form-input
                id="input-imagem"
                v-model.lazy="form.imagem"
                type="text"
                required
                placeholder="Insira uma imagem"
                ></b-form-input>
            </b-form-group>
            <b-img :src="form.imagem" fluid></b-img>
            <b-form-group id="input-group-preco" label="Preço:" label-for="input-preco">
                <b-input-group
                prepend="R$"
                >
                    <b-form-input
                    id="input-preco"
                    v-model="form.preco"
                    type="text"
                    required
                    placeholder="Insira um preço"
                    ></b-form-input>
                </b-input-group>
            </b-form-group>
            <b-button type="submit" variant="danger" class="botao-adicionar">Adicionar prato</b-button>
        </b-form>
  </div>
</template>

<script>

import Prato from '../../directives/domain/prato/Prato'

export default {

    props: {
        idLoja: {
            type: Number,
            required: true
        },
        sections: {
            type: Array,
        }
    },

    data() {
        return {
            form: new Prato(this.idLoja),
            secoes: [{text: 'Selecione uma categoria', value: null}],
            nova_secao: 'unchecked'
        }
    },  

    created() {
        this.sections.forEach((section) => {
            this.secoes.push(section.secao_nome)
        })
        
    },

    methods: {
        adicionaPrato(){
            this.$http.post('pratos', this.form)
                .then(() => {
                    this.$emit('prato-adicionado', this.form)
                })
                .finally(() =>{
                    this.form = new Prato(this.idLoja)
                })
        },
    },

    watch: {
        nova_secao(newValue, oldValue) {
            if(newValue == 'unchecked'){
                this.form.secao_nome = null
            }
            
        }
    },
}
</script>

<style>

img
{
    display: block;
    margin: 5px auto;
}

.botao-adicionar
{
    float: right;
}



</style>