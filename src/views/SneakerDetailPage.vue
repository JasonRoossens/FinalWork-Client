<script>
import Navigation from '../components/Nav.vue';

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      sneaker: null,
    };
  },
  mounted() {
    this.fetchSneakerData();
  },
  methods: {
    async fetchSneakerData() {
      try {
        const sneakerId = this.$route.params.id;
        const response = await fetch(`https://sneakpeek-backend.onrender.com/sneakers/sneaker/${sneakerId}`);
        const data = await response.json();
        if (response.ok) {
          this.sneaker = data;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <div class="main">
    <Navigation />
    <button @click="$router.push(`/`)" class="back-button">Back</button>
    <div class="container">
      <div v-if="sneaker">
        <h1 class="title">{{ sneaker.brand }} {{ sneaker.model }}</h1>
        <div class="sneaker-details">
          <div class="sneaker-image">
            <img :src="sneaker.images[0]" :alt="sneaker.brand" class="releaseDetail-image" />
          </div>
          <div class="sneaker-info">
            <p><strong>Colorway:</strong> {{ sneaker.colorway }}</p>
            <p><strong>Price:</strong> € {{ sneaker.price }}</p>
            <p><strong>Style Code:</strong> {{ sneaker.stylecode }}</p>
            <!-- Add more details as needed -->
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading sneaker details...</p>
      </div>
    </div>
  </div>
</template>
  
  <style>
/* Styles for the SneakerDetailPage component */
.main {
  padding: 20px;
}

.container {
  padding: 20px;
  border-radius: 4px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.sneaker-details {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.sneaker-image {
  flex: 1;
  margin-right: 20px;
}

.sneaker-info {
  flex: 2;
}

.releaseDetail-image {
  width: 250px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
}

button {
    background-color: #c4d663;
    padding: 10px 20px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
   
  }

/* Include your existing styles here or add additional styles as needed */
</style>