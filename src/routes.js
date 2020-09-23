import Home from './views/Home.vue'
import CadastroLoja from './views/CadastroLoja.vue'
import CadastroUsuario from './views/CadastroUsuario.vue'

export const routes = [
    {path: '/', component: Home, name: 'Home'},
    {path: '/cadastro/loja', component: CadastroLoja, name: 'CadastroLoja'},
    {path: '/cadastro/usuario', component: CadastroUsuario, name: 'CadastroUsuario'}
]