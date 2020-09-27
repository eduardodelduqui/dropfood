import Home from './views/Home.vue'
import CadastroLoja from './views/CadastroLoja.vue'
import CadastroUsuario from './views/CadastroUsuario.vue'
import Loja from './views/Loja.vue'
import Categoria from './views/Categoria.vue'
import SobreLoja from './components/SobreLoja.vue'
import Editar from './views/Editar.vue'
import EditarCardapio from './views/editar/EditarCardapio.vue'
import Card from './components/Card.vue'


export const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/cadastro/loja', component: CadastroLoja, name: 'cadastroloja'},
    {path: '/cadastro/usuario', component: CadastroUsuario, name: 'cadastrousuario'},
    {path: '/loja/:nome', component: Loja, name: 'loja' },
    {path: '/categoria/:tipo', component: Categoria, name: 'tipo'},
    {path: '/sobre', component: SobreLoja},
    {path: '/editar/:nome', component: Editar, name: 'editar'},
    {path: '/cardapio', component: EditarCardapio, name: 'editarcardapio'},
    {path: '/card', component: Card}
]