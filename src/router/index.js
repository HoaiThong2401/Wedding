import { createRouter, createWebHistory } from 'vue-router'

import Invitation from '../views/Invitation.vue'

const routes = [
    {
        path: '/',
        name: 'Invitation',
        component: Invitation
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})