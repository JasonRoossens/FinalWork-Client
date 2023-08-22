<script>
import router from '../router'

export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async fetchData() {
      const data = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      }
      try {
        const response = await fetch('https://sneakpeek-backend.onrender.com/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        router.push('/Login') // Redirect to login once the user is register
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<template>
  <div id="bg"><img src="../assets/images/black-snkr.jpg" alt=""></div>
    <form @submit.prevent="fetchData">
      <section id="container">
        <h1>Sign up</h1>
        
        <!-- Requirement -->
        <label for="fname"><b>Firstname</b></label>
        <input v-model="firstname" type="text" name="firstname" required>
  
        <label for="lname"><b>Lastname</b></label>
        <input v-model="lastname" type="text" name="lastname" required>
  
        <label for="email"><b>Email</b></label>
        <input v-model="email" type="email" name="email" required>
  
        <label for="psw"><b>Password</b></label>
        <input v-model="password" type="password" name="psw" required>
  
        <button type="submit" class="createbtn">Create Account</button>
        <div class="line"></div>
        <router-link to="/login" class="login">Login</router-link>
      </section>
    </form>
  </template>
  
  <style scoped>
  #container {
    background-color:  #24272C;
    padding: 20px;
    text-align: center;
    width: 440px;
    margin: 0 auto;
  }
  
  h1 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #fff;
    font-family: LemonMilkBold;
  }
  
  h2 {
    font-size: 14px;
    margin-bottom: 20px;
    color: #fff;
    font-family: LemonMilkRegular;
  }

  #bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

#bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
  
  label {
    display: block;
    margin-bottom: 10px;
    font-family: LemonMilkRegular;
    color: #fff;
    font-size: 14px;
  }
  
  input {
    background-color: #333;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 4px;
    color: white;
  }

  
  button {
    background-color: #c4d663;
    color: black;
    padding: 10px 20px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    font-family: LemonMilkRegular;
    opacity: 100%;
  }
  
  button:hover {
    opacity: 85%;
  }
  
  .line {
    margin: 20px 0;
    border-bottom: 1px solid #777;
  }
  
  .login {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-family: LemonMilkRegular;
  }
  </style>