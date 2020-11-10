<template>
	<div class="corpo-cadastro">
		<div class="box-cadastro container">
			<h2>Cadastre-se</h2>
			<form @submit.prevent="cadastraLoja()">
				<div class="formulario-cadastro" :style="form1Animacao">
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
					@change="buscaCoordenada()"
				></b-form-input>
				</b-form-group>
				<button @click="trocaPagina()" type="button" class="btn btn-danger">Próximo</button>
				</div>
				<div class="formulario-cadastro" :style="form2Animacao">
				<b-form-group
					id="input-group-tipo"
					label="Tipo:"
					label-for="input-tipo"
				>
				<b-form-select
					id="input-tipo"
					v-model="loja.tipo"
					:options="tipos"
					required
				></b-form-select>
				</b-form-group>
				<b-form-group label="Descrição: ">
					<b-form-textarea
						v-model="loja.descricao"
						placeholder="Insira uma descrição"
					>
					</b-form-textarea>
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
				<img :src="loja.imagem">
				</b-form-group>
				<b-form-group
					id="input-group-frete"
					label="Taxa de entrega:"
					label-for="input-frete"
				>
				<b-form-input
					id="input-frete"
					v-model="loja.frete"
					type="number"
					required
					step="0.01"
					placeholder="Insira a taxa de entrega do restaurante"
					autocomplete="false"
				></b-form-input>
				</b-form-group>
				<label for="input-abertura">Horário de abertura</label>
				<b-form-timepicker id="input-abertura" v-model="loja.horarioAbre" minutes-step="15" locale="pt-br" placeholder="O restaurante abre às 08:00"></b-form-timepicker>
				<label for="input-fechamento">Horário de fechamento</label>
				<b-form-timepicker id="input-fechamento" v-model="loja.horarioFecha" minutes-step="15" locale="pt-br" placeholder="O restaurante abre às 18:00"></b-form-timepicker>
				<button @click="trocaPagina()" type="button" class="button-voltar btn btn-danger">Voltar</button>
				<button type="submit" class="button-cadastrar btn btn-danger">Cadastrar</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>

import Loja from "../directives/domain/loja/Loja"

export default {

	data() {
		return {
			loja: new Loja(this.nomeDono, this.email),
			tipos:[
				{text: 'Selecione o tipo de comida', value: null},
				'Árabe',
				'Bebidas',
				'Brasileira',
				'Chinesa',
				'Frutos do Mar',
				'Doces & Bolos',
				'Japonesa',
				'Lanches',
				'Pizza',
				'Vegetariana',
			],
			passo_1: true,
			passo_2: false,
			nomeDono: this.$route.params.nome,
			email: this.$route.params.email
		}
	},

	methods: {
		cadastraLoja() {
			console.log(this.loja)
			let endereco = [this.loja.logradouro, this.loja.bairro, this.loja.cidade].join(" ");
			this.$http.get(`https://api.opencagedata.com/geocode/v1/json?q=${endereco}&key=77c77e3eb2574100a02476d764627ff6&language=pt&pretty=1`)
				.then((res) => res.json())
				.then((resultado) =>{
					console.log(resultado.results[0].geometry)
					this.loja.longitude = resultado.results[0].geometry.lng
					this.loja.latitude = resultado.results[0].geometry.lat

				}).then(() => {
					this.$http.post('lojas', this.loja)
					.then(() => this.loja = new Loja(this.nomeDono, this.email))
				});
		},


		buscaEndereco(){
			if(this.loja.cep){
				let cep = this.loja.cep
				this.$http.get(`https://viacep.com.br/ws/${cep}/json`)
					.then((res) => res.json())
					.then((endereco) => {
						this.loja.cep = endereco.cep,
						this.loja.logradouro = endereco.logradouro,
						this.loja.bairro = endereco.bairro,
						this.loja.cidade = endereco.localidade,
						this.loja.estado = endereco.uf
					})
			}else{
				this.loja.logradouro = '',
				this.loja.bairro = '',
				this.loja.cidade = '',
				this.loja.estado = ''
			}
		},

		buscaCoordenada(){
			let endereco = [this.loja.logradouro, this.loja.bairro, this.loja.cidade].join(" ");
			this.$http.get(`https://api.opencagedata.com/geocode/v1/json?q=${endereco}&key=77c77e3eb2574100a02476d764627ff6&language=pt&pretty=1`)
				.then((res) => res.json())
				.then((resultado) =>{
					console.log(resultado.results[0].geometry)
					this.loja.longitude = resultado.results[0].geometry.lng
					this.loja.latitude = resultado.results[0].geometry.lat

				});
		},

		trocaPagina(){
			this.passo_1 = !this.passo_1
			this.passo_2 = !this.passo_2
		}
	},

	computed: {
		form1Animacao() {
			if(!this.passo_1)
				return "display:none; opacity: 0%; transition: 0.8s"
		},

		form2Animacao(){
			if(!this.passo_2){
				return "display: none; opacity: 0%; transition: 0.8s"
			}
		}
	},
}
</script>

<style scoped>

.titulo-pagina
{
	display: block;
	font-size: 60px;
	width: 100%;
	word-wrap: break-word;
	margin: 30px auto 0 auto;
	font-weight: 500;
}

.formulario{
	position: absolute;
}

.corpo-cadastro
{
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: white;
}

h2
{
	text-align: center;
	margin: 20px 0px 30px;
}

button
{
	display: inline-block;
	width: 100px;
	margin: 10px;
}

.button-cadastrar{
	float: right;
}

img
{
	display: block;
	margin: 0 auto;
}

@media (max-width: 500px) {
	form {
		width: 100%;
	}
}

</style>