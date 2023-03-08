import { createApp } from 'vue';
import { createStore } from 'vuex';

import router from './router';
import App from './App.vue';
import './index.css';


//Managing Services
const store = createStore({
  state() {
    return {
      service: [
        {
          _id: 'service1',
          name: 'Family Support',
          isActive: true,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat lectus eu bibendum efficitur. Nam auctor rutrum lorem, sit amet vehicula nibh blandit nec.'
        },
        {
          _id: 'service2',
          name: 'Adult Education',
          isActive: true,
          description:
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sagittis eros non nulla posuere suscipit. Sed varius aliquam nisi, id viverra tellus sollicitudin non.'
        },
        {
          _id: 'service3',
          name: 'Youth Services Program',
          isActive: true,
          description:
            'Donec euismod aliquet enim, ac imperdiet sapien lobortis a. Praesent dapibus lorem vel nulla consequat, vitae fringilla felis egestas. Nulla facilisi. Nullam ac libero vel elit dictum pellentesque.'
        },
        {
          _id: 'service4',
          name: 'Early Childhood Education',
          isActive: true,
          description:
            'Vestibulum vitae hendrerit augue, eu sodales tellus. Morbi varius, felis vel fermentum finibus, dolor purus venenatis nibh, id molestie arcu elit ut est.'
        }
      ]
    };
  },
  actions: {
    updateService({ commit }, newValue) {
      const filteredServices = this.state.service.filter((service) => service._id !== newValue._id);
      this.state.service = [];
      this.state.service = filteredServices;
      this.state.service.push(newValue);
    },
    addService({ commit }, newValue) {
      this.state.service.push(newValue);
    }
  }
});



const app = createApp(App)
app.use(store);
app.use(router)
app.mount('#app')
