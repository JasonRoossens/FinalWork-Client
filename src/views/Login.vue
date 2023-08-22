<script>
import router from '../router';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async fetchData() {
      const data = {
        email: this.email,
        password: this.password,
      };
      try {
        const response = await fetch('https://sneakpeek-backend.onrender.com/users/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const responseData = await response.json();
        if (response.ok) {
          // Save user data to local storage
          localStorage.setItem('id', responseData.id);
          console.log(responseData.id)
          localStorage.setItem('firstname', responseData.firstname);
          console.log(responseData.firstname)
          localStorage.setItem('lastname', responseData.lastname);
          console.log(responseData.lastname)
          localStorage.setItem('email', responseData.email);
          console.log(responseData.email)
          localStorage.setItem('password', responseData.password);
          console.log(responseData.password)
          localStorage.setItem('accessToken', responseData.accessToken);
          console.log(responseData.accessToken)
          // Redirect to the home page after successful login
          router.push('/');
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <form @submit.prevent="fetchData">
    <div id="bg"><img src="../assets/images/black-snkr.jpg" alt=""></div>
    <section id="container">
      <h1>Log in</h1>
       
      <!-- Requirement -->
      <label for="email"><b>Email</b></label>
      <input type="text" v-model="email" name="email" required>
  
      <label for="psw"><b>Password</b></label>
      <input type="password" v-model="password" name="psw" required>
  
      <button type="submit" class="signinbtn">Log in</button>
  
      <!-- <a href="Login">Forgotten password?</a> -->
      <div class="line"></div>
      <router-link to="/register" class="register">Register</router-link>
    </section>
  </form>
</template>
  
  <style scoped>
  @font-face {
  font-family: 'LemonMilkRegular';
  src: url('../assets/fonts/LEMONMILK-Regular.otf');
}

@font-face {
  font-family: 'LemonMilkBold';
  src: url('../assets/fonts/LEMONMILK-Bold.otf');
}

  #container {
    background-color:  #24272C;
    padding: 20px;
    text-align: center;
    width: 440px;
    margin: 0 auto;
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

  h1 {
    font-size: 20px;
    margin-bottom: 10px;
    color: White;
    font-family: LemonMilkBold;
  }
  
  h2 {
    font-size: 12px;
    margin-bottom: 20px;
    color: White;
    font-family: LemonMilkRegular;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
    font-family: LemonMilkRegular;
    color: White;
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
  
  .register {
    text-decoration: none;
    color: White;
    font-family: LemonMilkRegular;

  }
  </style>