<template>
    <div class="corpo-login">
        <div class="formulario-login">
            <h1>Faça o login</h1>
            <b-form @submit.prevent="efetuaLogin()">
                <b-form-group
                label="Usuário:">
                    <b-form-input
                    type="text"
                    required
                    v-model="form.user"
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                label="Senha:">
                    <b-form-input
                    type="text"
                    required
                    v-model="form.pwd"
                    ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary" >Entrar</b-button>
            </b-form>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            form: {
                user: '',
                pwd: ''
            }
        }
    },

    methods: {
        efetuaLogin() {
            this.$http.post('login', this.form)
                .then(res => {}, err => {console.log(err)})
        }
    },

    



}
</script>

<style>

h1 {
    font-size: 35px;
    margin-bottom: 35px;
}

.corpo-login {
    background-image: url('https://www.teahub.io/photos/full/162-1625901_fast-food-dishes-for-takeaway-in-bar-4k.jpg');
    background-size: cover;
    height: 100vh;
}

.formulario-login {
    width: 500px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    padding: 50px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 20px;
    height: 400px;
}

</style>