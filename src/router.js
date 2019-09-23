import Vue from 'vue';
import Router from 'vue-router';
import English from './views/English.vue';
import Chinese from './views/Chinese.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'English',
    component: English,
  }, {
    path: '/cn',
    name: 'Chinese',
    component: Chinese,
  }],
});
