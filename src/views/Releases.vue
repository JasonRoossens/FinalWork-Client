<template>
  <div class="main">
    <div id="bg"><img src="../assets/images/bg.jpg" alt=""></div>
    <Navigation />
    <!-- <h1 class="title">Releases</h1> -->
    <div class="container">
      <section class="sneakerlist">
        <div class="card-container">
          <div v-for="item in items" :key="item.id" @click="$router.push(`/sneakers/${item.id}`)" class="card">
            <div class="favorites-icon">
              <font-awesome-icon icon="fa-heart"/>
  </div>
            <div class="card-image">
              <img v-for="image in item.images" :key="image" :src="image" alt="Release Image" class="release-image">
            </div>
            <div class="card-details">
              <p class="brand">{{ item.brand }}</p>
              <p class="model">{{ item.model }}</p>
              <p class="countdown">{{ countdown }}</p>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Nav.vue';

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      items: [],
      releaseDate: '2023-06-17T00:00:00.000Z', // Set your desired release date here
      countdown: '',
    };
  },
  mounted() {
    this.fetchData();
    this.updateCountdown(); // Initial countdown update
    setInterval(this.updateCountdown, 1000); // Update countdown every second
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('http://localhost:8080/sneakers');
        const data = await response.json();
        if (response.ok) {
          this.items = data;
          console.log(data);
        }
      } catch (error) {
        console.error(error);
      }
    },
    updateCountdown() {
      const releaseDate = new Date(this.releaseDate);
      const now = new Date();
      const timeDiff = releaseDate - now;

      if (timeDiff < 0) {
        this.countdown = 'Released';
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    },
  },
};
</script>

<style>
.main {
  padding: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.container {
  padding: 20px;
  border-radius: 4px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  width: calc(33.33% - 10px); /* Adjust the width and spacing as needed */
  margin-bottom: 20px;
  background-color: #fff;
  cursor: pointer;
}

.card:hover {
  background-color: #eee;
}

.card-image {
  text-align: center;
}

.card-image img {
  width: 70%; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
  margin: 10px;
}

.card-details {
  padding: 20px;
}

.brand {
  font-weight: bold;
}

.model {
  color: #888;
}

.countdown {
  font-size: 14px;
  color: #888;
  margin-top: 10px;
  font-weight: 700;
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


.favorites-icon {
  
  top: 10px;
  right: 10px;
  color: red; /* Set your desired icon color */
  cursor: pointer;
  text-align: right;
  padding-right: 10px;
  font-size: 20px;
}

/* Responsive Styles */
@media (max-width: 767px) {
  h1{
    display: none;
  }
  .card {
    width: calc(100% - 10px);
  }
  .container {
    margin-top: 80px;
  padding: 0px;
  border-radius: 4px;
}
  #app{
    padding: 1rem;
  }
}
</style>