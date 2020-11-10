<template>
    <div class="banner">
			<div class="menu-nav">
				<b-navbar toggleable="lg" type="light" variant="light">
					<b-navbar-brand :to="{name: 'home'}">dropFood</b-navbar-brand>

					<b-navbar-toggle @click="colapsado = !colapsado" target="nav-collapse"></b-navbar-toggle>

					<b-collapse id="nav-collapse" is-nav>
						<b-navbar-nav class="navbar-parceiros">
							<router-link :to="{name: 'home'}" >dropFood</router-link>
							<router-link :to="{name: 'cadastroloja'}">Cadastrar Restaurante</router-link>
							<router-link :to="{name: 'home'}">Cadastrar Entregador</router-link>
							<router-link :to="{name: 'login'}">Já sou um parceiro</router-link>
						</b-navbar-nav>
					</b-collapse>
				</b-navbar>
			</div>
			<div class="corpo">
				<div class="slogan">
					<span class="slogan-1">Na dropFood você vende mais!</span>
					<span class="slogan-2">Clique para conhecer nossos planos</span>
				</div>
				<div class="reasons">

				</div>
				<a v-if="colapsado" href="#box-2"><b-icon-chevron-double-down class="icon-scroll-down heartbeat"></b-icon-chevron-double-down></a>
			</div>
        <section id="box-2" class="box-2">
        </section>
    </div>

</template>

<script>

import FormularioCadastro from '../components/FormularioCadastro'

export default {

    components: {
        FormularioCadastro,
    },

    data() {
      return {
		  colapsado: true
      }
	},

	methods: {
		iniciaCadastro() {
			this.$router.push({name: 'cadastroloja', params: {nome: this.dados.nome, email: this.dados.email}})
		}
	},



}
</script>

<style scoped>

/* .slogan {
    position: absolute;
    transform: translateY(-50%);
    top: 30%;
    left: 5%;
    font-size: 80px;
    color: rgb(236, 236, 236);
    width: 500px;
} */

/* .logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Montserrat', sans-serif;
		font-size: 100px;
		font-weight:900;
		color: white;
		background-color: transparent;
  	} */


@media (max-width: 950px) {

	.corpo {
		width: 100%;
		padding: 10px;
	}

	.banner
	{
		position: absolute;
		top: 0%;
		left: 0%;
		height: 100vh;
		width: 100%;
		background-image: url('https://www.teahub.io/photos/full/162-1625901_fast-food-dishes-for-takeaway-in-bar-4k.jpg');
		background-size: cover;
		background-position: top;
		border-bottom: 2px solid black;
	}

	.logo {
		display: none;
	}

	.navbar-parceiros{
		text-align: center;
		font-size: 20px;
		height: 93vh;
		justify-content: center;
		border: 1px solid rgb(199, 62, 62);
		border-radius: 5px;
	}

	.navbar-parceiros a{
		margin-bottom: 80px;
	}

	.slogan {
		margin: 50px 0px;
		width: 100%;
		font-size: 50px;
		color: white;
	}

	.slogan-2 {
		font-size: 18px;
	}

	.slogan-1, .slogan-2 {
		display: block;
	}

	.reasons {
		background-color: white;
		width: 80%;
		height: 250px;
		margin: 100px auto;
		border-radius: 15px;
	}


	.box-2 {
		height: 100vh;
		width: 100%;
	}

	.icon-scroll-down {
		position: absolute;
		bottom: 0%;
		left: calc(50% - 25px);
		font-size: 50px;
		color: white;
	}

	button{
		border: 0px;
	}

  .tracking-out-contract {
    -webkit-animation: tracking-out-contract 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1.5s both;
            animation: tracking-out-contract 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1.5s both;
  }

  .slide-in-right {
    -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2.2s both;
            animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2.2s both;
  }

  .scale-up-ver-top {
    -webkit-animation: scale-up-ver-top 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            animation: scale-up-ver-top 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }

  .heartbeat {
    -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
            animation: heartbeat 1.5s ease-in-out infinite both;
  }
}




@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes tracking-out-contract {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
}
@keyframes tracking-out-contract {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
}

@keyframes slideDown {
    0% {
        height: 0px;
        padding: 0px;        
    }100%{
        height: 700px;
        padding: 50px;
    }   
}

@keyframes fadeIn {
    0%{
        opacity: 0;    
    }
    90% {
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}

@-webkit-keyframes scale-in-tl {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
}

@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}








</style>