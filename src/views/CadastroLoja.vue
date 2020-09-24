<template>
	<div class="corpo-cadastro">
		<div class="box-cadastro">
			<h2>Cadastre sua loja</h2>
			<form @submit.prevent="cadastraLoja()">
				<b-form-group
					id="input-group-1"
					label="Nome:"
					label-for="input-1"
				>
				<b-form-input
					id="input-1"
					v-model="form.nome"
					type="text"
					required
					placeholder="Insira o nome do restaurante"
					autocomplete="false"
				></b-form-input>
				</b-form-group>
				<b-form-group
					id="input-group-2"
					label="Tipo:"
					label-for="input-2"
				>
				<b-form-input
					id="input-2"
					v-model="form.tipo"
					type="text"
					required
					placeholder="Insira o tipo de comida"
					autocomplete="false"
				></b-form-input>
				</b-form-group>
				<b-form-group
					id="input-group-3"
					label="Logo:"
					label-for="input-3"
				>
				<b-form-input
					id="input-3"
					v-model="form.imagem"
					type="url"
					required
					placeholder="Insira o logo do restaurante"
					autocomplete="false"
				></b-form-input>
				</b-form-group>
				<b-form-group
					id="input-group-4"
					label="Bairro:"
					label-for="input-4"
				>
				<b-form-input
					id="input-4"
					v-model="form.bairro"
					type="text"
					required
					placeholder="Insira o bairro do restaurante"
					autocomplete="false"
				></b-form-input>
				</b-form-group>
				<b-form-group
					id="input-group-5"
					label="Frete:"
					label-for="input-5"
				>
				<b-form-input
					id="input-5"
					v-model="form.frete"
					type="number"
					required
					step="0.01"
					placeholder="Insira o frete do restaurante"
					autocomplete="false"
				></b-form-input>
				</b-form-group>
				<label for="input-6">Horário de abertura</label>
				<b-form-timepicker id="input-6" v-model="form.horarioAbre" minutes-step="15" locale="pt-br" placeholder="O restaurante abre às 08:00"></b-form-timepicker>
				<label for="input-7">Horário de fechamento</label>
				<b-form-timepicker id="input-7" v-model="form.horarioFecha" minutes-step="15" locale="pt-br" placeholder="O restaurante abre às 18:00"></b-form-timepicker>
				<button type="submit" class="btn btn-danger">Cadastrar</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {

	data() {
		return {
			form:{
				nome: '',
				tipo: '',
				imagem: '',
				bairro: '',
				frete: '',
				horarioAbre: '',
				horarioFecha: ''
			},
		}
	},

	methods: {
		cadastraLoja() {
			console.log(this.form)
			this.$http.post('http://localhost:3030/lojas', this.form)
			.then(() => this.form = {
				nome: '',
				tipo: '',
				imagem: '',
				bairro: '',
				frete: '',
				horarioAbre: '',
				horarioFecha: ''
			})
		},
	},

}
</script>

<style scoped>


.corpo-cadastro
{
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: white;
}

.box-cadastro{
	background-color: white;
	margin: 0 auto;
	padding: 0px;
}

h2
{
	text-align: center;
	margin: 20px 0px 30px;
}

form
{
	width: 550px;
	margin: 0 auto;
}

button
{
	display: block;
	margin: 10px auto 0 auto;
	width: 300px;
}

</style>