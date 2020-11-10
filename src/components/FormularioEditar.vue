<template>
    <form @submit.prevent="editaLoja()">
        <div class="formulario-1" :style="form1Animacao">
            <b-form-group
                id="input-group-nome"
                label="Nome:"
                label-for="input-nome"
            >
            <b-form-input
                id="input-nome"
                v-model="loja.nome"
                type="text"
                required
                placeholder="Insira o nome do restaurante"
                autocomplete="false"
            ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-cnpj"
                label="CNPJ:"
                label-for="input-cnpj"
            ><b-form-input
                id="input-cnpj"
                v-model.lazy="loja.cnpj"
                type="text"
                required
                placeholder="CNPJ"
                autocomplete="false"
            ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-cep"
                label="CEP:"
                label-for="input-cep"
            >
            <b-form-input
                id="input-cep"
                v-model.lazy="loja.cep"
                type="text"
                required
                placeholder="Insira o CEP do restaurante"
                autocomplete="false"
                @change="buscaEndereco()"
            ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-estado"
                label="UF:"
                label-for="input-estado"
            >
            <b-form-input
                id="input-estado"
                v-model="loja.estado"
                type="text"
                required
                autocomplete="false"
            ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-cidade"
                label="Município:"
                label-for="input-cidade"
            >
            <b-form-input
                id="input-cidade"
                v-model="loja.cidade"
                type="text"
                required
                autocomplete="false"
            ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-bairro"
                label="Bairro:"
                label-for="input-bairro"
            >
            <b-form-input
                id="input-bairro"
                v-model="loja.bairro"
                type="text"
                required
                autocomplete="false"
            ></b-form-input>
            </b-form-group>
            <button @click="trocaPagina()" type="button" class="btn btn-danger">Próximo</button>
            </div>
            <div class="formulario-2" :style="form2Animacao">
            <b-form-group
                id="input-group-tipo"
                label="Tipo:"
                label-for="input-tipo"
            >
            <b-form-input
                id="input-tipo"
                v-model="loja.tipo"
                type="text"
                required
                placeholder="Insira o tipo de comida"
                autocomplete="false"
            ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-imagem"
                label="Logo:"
                label-for="input-imagem"
            >
            <b-form-input
                id="input-imagem"
                v-model.lazy="loja.imagem"
                type="url"
                required
                placeholder="Insira o logo do restaurante"
                autocomplete="false"
            ></b-form-input>
            <img class="imagem" :src="loja.imagem">
            </b-form-group>
            <b-form-group
                id="input-group-frete"
                label="Frete:"
                label-for="input-frete"
            >
            <b-form-input
                id="input-frete"
                v-model="loja.frete"
                type="number"
                required
                step="0.01"
                placeholder="Insira o frete do restaurante"
                autocomplete="false"
            ></b-form-input>
            </b-form-group>
            <label for="input-abertura">Horário de abertura</label>
            <b-form-timepicker id="input-abertura" v-model="loja.horarioAbre" minutes-step="15" locale="pt-br" placeholder="O restaurante abre às 08:00"></b-form-timepicker>
            <label for="input-fechamento">Horário de fechamento</label>
            <b-form-timepicker id="input-fechamento" v-model="loja.horarioFecha" minutes-step="15" locale="pt-br" placeholder="O restaurante abre às 18:00"></b-form-timepicker>
            <button @click="trocaPagina()" type="button" class="btn btn-danger">Voltar</button>
            <button @click="trocaPagina()" type="submit" class="btn btn-danger">Editar</button>
        </div>
    </form>
</template>

<script>
export default {

    props: [
        'loja'
    ],

    data() {
        return {
			form: '',
			passo_1: true,
			passo_2: false,

		}
    },
	
	methods: {
		editaLoja(){
			console.log(this.form)
			let id = this.form.id
			this.$http.patch(`http://localhost:3030/lojas/${id}`, this.form)
				.then(()=>{
					this.mensagemVisivel = 'Loja editada com sucesso'
				})
			
		},

		buscaEndereco(){
			if(this.form.cep){
				let cep = this.form.cep
				this.$http.get(`https://viacep.com.br/ws/${cep}/json`)
					.then((res) => res.json())
					.then((endereco) => {
						this.form.cep = endereco.cep,
						this.form.logradouro = endereco.logradouro,
						this.form.bairro = endereco.bairro,
						this.form.cidade = endereco.localidade,
						this.form.estado = endereco.uf
					})
			}else{
				this.form.logradouro = '',
				this.form.bairro = '',
				this.form.cidade = '',
				this.form.estado = ''
			}
		},

		trocaPagina(){
			this.passo_1 = !this.passo_1
			this.passo_2 = !this.passo_2

		}
	},

	computed: {
		form1Animacao() {
			if(!this.passo_1)
				return "top: -50%; opacity: 0%; transition: 0.8s"

		},

		form2Animacao(){
			if(!this.passo_2){
				return "top: -50%; opacity: 0%; transition: 0.8s"
			}
		}
	},

}
</script>

<style>

.formulario-1, .formulario-2
{
	display: inline-block;
	margin: 20px;
	position: absolute;
	width: 550px;
	transition: 0.8s;
	opacity: 1;
	transform: translatey(-50%);
	top:40%;
}

button
{
	display: inline-block;
	width: 100px;
}

@keyframes slide-left{
	0% {
		right: -100%;
	}
	100%{
		right: 0%;
	}
}



@keyframes fade-out{
	0%{
		opacity: 100%
	}100%{
		opacity: 0%
	}
}



</style>