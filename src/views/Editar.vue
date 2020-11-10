<template>
	<div>
		<SideBar/>
		<div class="corpo-editar">
			<span class="mensagem" :class="{mensagemVisivel}">{{mensagemVisivel}}</span>
			<div class="box-editar">
				<div>
					<h2>{{loja.nome}}</h2>
				</div>
				<div>
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
						<img class="imagem" fluid :src="loja.imagem">
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
				</div>
			</div>
		</div>
	</div>
</template>

<script>


import Cardapio from '../components/Cardapio.vue';
import SideBar from '../components/SideBar.vue';

export default {

	components: {
		Cardapio,
		SideBar

	},

	data() {
		return {
			loja: '',
			id: this.$route.params.id,
			sidebarActivated: false,
			passo_1: true,
			passo_2: false,
			mensagemVisivel: ''
		}
	},



	created () {
        if(this.id){
            let id = this.id
            this.$http.get(`lojas/id/${id}`)
                .then((loja) => this.loja = loja.body, (erro) => this.erro = erro) 
		};
		console.log(this.loja)
	},
	
	methods: {
		editaLoja(){
			console.log(this.loja)
			let id = this.loja.id
			this.buscaCoordenada()
			this.$http.patch(`lojas/${id}`, this.loja)
				.then(()=>{
					this.mensagemVisivel = 'Loja editada com sucesso'
				})
			
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
			console.log(this.loja.longitude)
			console.log(this.form.latitude)
				
			




		},

		trocaPagina(){
			this.passo_1 = !this.passo_1
			this.passo_2 = !this.passo_2

		}
	},

	computed: {
		form1Animacao() {
			if(!this.passo_1)
				return "top: -50%; opacity: 0%; transition: 0.6s; display: none"

		},

		form2Animacao(){
			if(!this.passo_2){
				return "top: -50%; opacity: 0%; transition: 0.6s; display: none"
			}
		}
	},
	

}
</script>

<style scoped>

.imagem{
		margin: 0 auto;
		margin-top: 16px;
		display: block;
	}

@media(min-width: 501px){

	.box-editar{
		width: 500px;
		margin: 0 auto;
	}
}


@media(max-width: 500px){
    .corpo-editar{
        height: 100%;
    }

    .box-editar{
        margin: 0 auto;
        width: 100%;
        height: 100%;
    }

    h2
    {
        margin: 10px 20px;
    }

    .formulario-1, .formulario-2
    {
        display: inline-block;
        position: relative;
        width: 100%;
        transition: 0.6s;
        opacity: 1;
        top: 0%;
        left: 0%;
        padding: 10px;
    }

    button
    {
        display: inline-block;
        width: 100px;
    }

    img{
        display: block;
        margin: 16px auto 0 auto;
    }

    input{
        margin-bottom: 10px;
    }

    .mensagem{
        position: absolute;
        background-color: #B03A32;
        padding: 10px;
        width: 250px;
        text-align: center;
        color: white;
        font-weight: 500;
        transform: translateX(-50%);
        left: 50%;
        visibility: hidden;
    }

    .mensagemVisivel{
        visibility: visible;
        animation: fade-out;
        animation-duration: 1s;
        animation-delay: 2s;
        animation-fill-mode: forwards;
    }
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