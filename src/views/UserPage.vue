<template>
    <main>
      <Navigation />
      <div v-if="user">
        <h1>User profile</h1>
        <p>Firstname: {{ user.firstname }}</p>
        <p>Lastname: {{ user.lastname }}</p>
        <p>Email: {{ user.email }}</p>
        <p>
          Password:
          <span v-if="showPassword">{{ user.password }}</span>
          <span v-else>**********</span>
          <button @click="togglePasswordVisibility">
            {{ showPassword ? 'Hide' : 'Show' }} Password
          </button>
        </p>
        <!-- Add other user data fields as needed -->
      </div>
      <div v-else>
        <p>Loading user data...</p>
      </div>
    </main>
  </template>
  
  <script>
  import router from '../router';
  import Navigation from '../components/Nav.vue';
  
  export default {
    components: {
      Navigation,
    },
    data() {
      return {
        user: null,
        showPassword: false, // Add a showPassword data property
      };
    },
    mounted() {
      this.fetchUserData();
    },
    methods: {
      async fetchUserData() {
        try {
          const userId = localStorage.getItem('id'); // Get the user ID from local storage
          const response = await fetch(`https://sneakpeek-backend.onrender.com/users/user/${userId}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          });
  
          if (response.ok) {
            const userData = await response.json();
            this.user = userData;
  
            // Log the user data to the console
            console.log('User Data:', this.user);
          } else {
            // Handle errors if needed
            console.error('Error fetching user data');
            router.push('/'); // Redirect to home page or handle the error appropriately
          }
        } catch (error) {
          console.error(error);
        }
      },
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
    },
  };
  </script>
