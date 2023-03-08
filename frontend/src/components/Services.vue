<script>
import useVuelidate from '@vuelidate/core';
import { required, email, alpha, numeric } from '@vuelidate/validators';
import axios from 'axios';
const apiURL = import.meta.env.VITE_ROOT_API;

export default {
  setup() {
    return { v$: useVuelidate({ $autoDirty: true }) };
  },
  data() {
    return {
      services: []
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.services = this.$store.state.service;
  },
  methods: {
    getServices() {
    },
    editService(id) {
      this.$router.push({ name: 'editService', params: { id: id } });
    },

    //Add services feature
    addService() {
      this.$router.push({ name: 'addService' });
    },  
    // Delete feature
    deleteService(id) {
      let updatedIbj = {
        _id: id,
        name: this.name,
        isActive: false,
        description: this.desc
      };

      this.$store.dispatch('updateService', updatedIbj);
      this.services = this.$store.state.service;
    }  
  }
};
</script>
<template>
  <main>
    <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center my-10">Services</h1>
    <button class="py-1 mx-10 bg-red-500 text-white rounded" @click="addService">Add new service</button>
    <div class="px-10 py-3" v-for="service in services" :key="service._id">
      <div class="mt-1 bg-neutral-100" v-if="service.isActive == true">
        <div class="px-4 py-1 bg-neutral-200 flex justify-between ...">
          <h3 class="text-2xl">
            {{ service.name }}
          </h3>
          <div>
            <button class="py-1 mr-2 border border-red-500 bg-white text-red-500 rounded" @click="deleteService(service._id)">
              Delete Service
            </button>
            <button class="py-1 bg-red-500 text-white rounded" @click="editService(service._id)">Edit Service</button>
          </div>
        </div>
        <p class="p-4 text-neutral-600">
          {{ service.description }}
        </p>
      </div>
    </div>
  </main>
</template>
