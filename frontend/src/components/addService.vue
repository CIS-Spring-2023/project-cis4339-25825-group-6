<script>
import useVuelidate from '@vuelidate/core';
import { required, email, alpha, numeric } from '@vuelidate/validators';
import axios from 'axios';
const apiURL = import.meta.env.VITE_ROOT_API;

// Adding Services component

export default {
  setup() {
    return { v$: useVuelidate({ $autoDirty: true }) };
},
data() {
    return {
      // data that comprises the service
      id: '',
      name: '',
      Desc: '',
      isActive: false,
      org: ''
    };
},
  mounted() {
    window.scrollTo(0, 0);
},
methods: {
  // This method will be used to add a service to the DB.
    addServices(){
      // This is the object that will be sent to the DB.
      let service = {
        name: this.name,
        description: this.Desc,
        isActive: true,
      };
      // This is the axios call to the DB.
      axios
        .post(`${apiURL}/services/services`, service)
        .then((res) => {
          // This is the response from the DB.
          console.log(res);
          // This is the confirmation message.
          alert('Service added successfully');
          // This is the route to the services page.
          this.$router.push({ name: 'services' });
        })
        .catch((err) => {
          // This is the error message.
          alert('Error adding service');
          console.log(err);
        });
    }
  }
};

</script>
<template>
  <!-- This form collects the data to add a service -->
  <main>
    <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center my-10">Add Service</h1>
    <div class="px-10 py-3">
      <form @submit.prevent="addServices">
        <!-- grid container -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Name</span>
              <span style="color: #ff0000">*</span>
              <input
                type="text"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                v-model="name"
              />
            </label>
          </div>
        </div>

        <div class="flex flex-col mt-5">
          <label class="block">
            <span class="text-gray-700">Description</span>
            <textarea
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows="3"
              v-model="Desc"
            ></textarea>
            <!-- <input
              type="text"
              placeholder
              v-model="desc"
            /> -->
          </label>
        </div>

        <!-- grid container -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          <!-- submit button -->
          <div class="flex justify-between mt-5 mr-20">
            <button class="bg-red-700 text-white rounded" type="submit">Add service</button>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>
