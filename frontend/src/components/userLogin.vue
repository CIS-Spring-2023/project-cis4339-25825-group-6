<script>
import axios from 'axios'

// Helmut Brenner - This login component is used to login to the application
export default {
  name: 'userLogin',
  // Store input data here once entered.
  data() {
    return {
      viewerUsername: 'viewer',
      viewerPassphrase: 'password',
      editorUsername: 'editor',
      editorPassphrase: 'password',
    }
  },
  methods: {
    // Helmut Brenner - This method will take the user input and compare it to the data in the component. If it matches, it will set the user role in the local storage.
    signIn() {
      if (this.userName === this.viewerUsername && this.passPhrase === this.viewerPassphrase) {
        // set local storage to viewer and reroute to the dashboard
        localStorage.setItem('userRole', 'viewer')
        this.$router.push({ name: 'dashboard' })
      } else if (this.userName === this.editorUsername && this.passPhrase === this.editorPassphrase) {
        // set local storage to editor and reroute to the dashboard
        localStorage.setItem('userRole', 'editor')
        this.$router.push({ name: 'dashboard' })
      } else {
        alert('Invalid username or password')
      }
    },
    // this method will check the local storage to see what the role is and then return 1 for viwer and 2 for editor
    getUserRole() {
      if (localStorage.getItem('userRole') === 'viewer') {
        return 1
      } else if (localStorage.getItem('userRole') === 'editor') {
        return 2
      } else {
        return 0
      }
    }
  }
}
</script>

<template>
  <!-- Helmut Brenner - This is derived from a free template on tailwind.com "https://tailwindui.com/components/application-ui/forms/sign-in-forms"-->
  <!-- This form takes the credentials from the user and then pushes them to the script logic above.-->
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="w-full max-w-md space-y-8">
    <div>
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
    <form class="mt-8 space-y-6" @submit.prevent="signIn">
      <input type="hidden" name="remember" value="true">
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="userName" class="sr-only">Username</label>
          <input id="userName" name="userName" type="text" v-model="userName" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Username">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" v-model="passPhrase" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password">
        </div>
      </div>
      <div>
        <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-white group-hover:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
</template>

<style>
</style>