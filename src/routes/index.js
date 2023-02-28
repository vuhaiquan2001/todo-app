import Home from '../pages/Home';
import CompleteJobPage from '../pages/completePage';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/compljob', component: CompleteJobPage },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
