import Home from './views/Home.vue'
import CadastroLoja from './views/CadastroLoja.vue'
import Loja from './views/Loja.vue'
import Categoria from './views/Categoria.vue'
import SobreLoja from './components/SobreLoja.vue'
import Editar from './views/Editar.vue'
import FormularioEditar from './components/FormularioEditar.vue'
import MenuProfile from './views/MenuProfile.vue'
import ItensAdicionais from './views/editar/ItensAdicionais.vue'
import PerfilLoja from './views/editar/PerfilLoja.vue'
import HomeParceiros from './views/HomeParceiros.vue'
import Login from './views/Login.vue'


export const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/cadastro/loja', component: CadastroLoja, name: 'cadastroloja'},
    {path: '/loja/:nome', component: Loja, name: 'loja' },
    {path: '/categoria/:tipo', component: Categoria, name: 'tipo'},
    {path: '/sobre', component: SobreLoja},
    {path: '/loja/:id/perfil', component: PerfilLoja, name: 'perfilloja'},
    {path: '/formulario', component: FormularioEditar, name: 'formularioeditar'},
    {path: '/menuprofile/:id', component: MenuProfile, name: 'menuprofile'},
    {path: '/editar/:nome', component: Editar, name: 'editar'},
    {path: '/loja/:id/itensadicionais', component: ItensAdicionais, name: 'itensadicionais'},
    {path: '/parceiros', component: HomeParceiros, name: 'homeparceiros'},
    {path: '/login', component: Login, name: 'login'}
]