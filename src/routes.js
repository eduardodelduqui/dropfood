import Home from './views/Home.vue'
import CadastroLoja from './views/CadastroLoja.vue'
import CadastroUsuario from './views/CadastroUsuario.vue'
import Loja from './views/Loja.vue'

export const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/cadastro/loja', component: CadastroLoja, name: 'cadastroloja'},
    {path: '/cadastro/usuario', component: CadastroUsuario, name: 'cadastrousuario'},
    {path: '/loja/:nome', component: Loja, name: 'loja' }
]