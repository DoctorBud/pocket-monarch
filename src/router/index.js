import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@/components/Hello';
import About from '@/components/About';
import CoinSearch from '@/components/CoinSearch';
import BioSearch from '@/components/BioSearch';
import Coins from '@/components/Coins';
import CoinWatch from '@/components/CoinWatch';
import BioWatch from '@/components/BioWatch';

Vue.use(Router);


const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello,
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        },
        {
            path: '/coinsearch',
            name: 'CoinSearch',
            component: CoinSearch,
        },
        {
            path: '/biosearch',
            name: 'BioSearch',
            component: BioSearch,
        },
        {
            path: '/coins/:id',
            name: 'Coins',
            component: Coins,
        },
        {
            path: '/watch/',
            name: 'CoinWatch',
            component: CoinWatch,
            children: [
                {
                    path: 'all',
                    component: CoinWatch,
                },
                {
                    path: 'active',
                    component: CoinWatch,
                },
                {
                    path: 'completed',
                    component: CoinWatch,
                },
            ],
        },
        {
            path: '/biowatch/',
            name: 'BioWatch',
            component: BioWatch,
            children: [
                {
                    path: 'all',
                    component: BioWatch,
                },
                {
                    path: 'active',
                    component: BioWatch,
                },
                {
                    path: 'completed',
                    component: BioWatch,
                },
            ],
        },
    ],
});

// router.beforeEach((to, from, next) => {
//     console.log('beforeEach', to, from);
//     next();
// });

export default router;
