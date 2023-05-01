# Data Platform Frontend

Follow the instructions below to set up our project. 

This project uses [VueJS 3](https://vuejs.org/) with [Vite](https://vitejs.dev/) and [TailwindCSS](https://tailwindcss.com/).
For form validation [Vuelidate](https://vuelidate-next.netlify.app/) is used.

## Project setup

    npm install

### Before startup
You need to either have a local backend running and or use a cloud deployed backend.

Setup a .env file with following variables, e.g.:

    VITE_ROOT_API=http://localhost:3000

VITE_ROOT_API is the URL for the backend API, either on localhost or in the cloud.
### Compiles and hot-reloads for development

    npm run dev

### Login Information
Currently there are two users available for testing purposes:

    username: viewer
    password: password1

    username: editor
    password: password2

These two roles are used to restrict access to certain pages. Upon first logging in, the role is null so you see the login and dashboard. Upon logging
in with one of the above credentials, the role is set and you can navigate to the other pages.


This is the API postman Document.

https://documenter.getpostman.com/view/23891003/2s93eSab5k



This is the link to the video presentation.

https://uofh-my.sharepoint.com/:v:/r/personal/hbrenner_cougarnet_uh_edu/Documents/Recordings/Group%206%20CIS%204339%20Presentation-20230430_150512-Meeting%20Recording.mp4?csf=1&web=1&e=O1pqwj
