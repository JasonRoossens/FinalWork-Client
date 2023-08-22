<template>
  <div class="main">
    <div id="bg"></div>
    <Navigation />
    <h1 class="title">Upcoming releases</h1>
    <div class="container">
      <section class="sneakerlist">
        <div class="card-container">
          <div
            v-for="item in items"
            :key="item.id"
            @click="$router.push(`/sneakers/${item.id}`)"
            class="card"
          >
          <div
      class="favorites-icon"
      @click="toggleFavorite(item.id)"
      :class="{ 'is-favorite': isFavorite(item.id) }"
    >
      <font-awesome-icon icon="heart" />
    </div>
            <div class="card-image">
              <img
                v-for="image in item.images"
                :key="image"
                :src="image"
                alt="Release Image"
                class="release-image"
              />
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
      releaseDate: '2023-06-20T00:00:00.000Z', // Set your desired release date here
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
        const response = await fetch('https://sneakpeek-backend.onrender.com/sneakers');
        const data = await response.json();
        if (response.ok) {
          this.items = data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    updateCountdown() {
      // ... Your existing countdown logic ...
    },
    async toggleFavorite(sneakerId) {
      try {
        // Get the user ID from local storage
        const userId = localStorage.getItem('id');

        // Send a POST request to add/remove the sneaker from the user's favorites
        const response = await fetch(
          `https://sneakpeek-backend.onrender.com/favorites/${userId}/add/${sneakerId}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );

        // Handle the response if needed
        if (response.ok) {
          // Sneaker added/removed from favorites successfully
          // Refresh the data to show the updated favorites status
          this.fetchData();
        } else {
          // Handle errors
        }
      } catch (error) {
        console.error(error);
      }
    },
    isFavorite(sneakerId) {
      // Implement the logic to check if the sneaker is in the user's favorites
      // For example, you can compare with a list of favorites stored in local storage
      // and return true if the sneakerId exists in the favorites list.
      // For simplicity, I'm assuming it returns false here.
      return false;
    },
  },
};
</script>

<style>
.main {
  padding: 20px;
}

.title {
  font-size: 20px;
  margin-bottom: 20px;
  color: #fff;
  font-family: LemonMilkRegular;
}

.container {
  
  border-radius: 4px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between
}

.card {
  width: calc(20% - 10px); /* Adjust the width and spacing as needed */
  margin-bottom: 20px;
  background-color: #fff;
  cursor: pointer;
}

.card-events {
  width: calc(10% - 10px); /* Adjust the width and spacing as needed */
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
  background-color: #0B0E0F;
  color: #fff;
}

.brand {
  font-weight: bold;
}

.model {
  color: #999;
}

.countdown {
  font-size: 14px;
  color: #888;
  margin-top: 5px;
  font-weight: 700;
}

#bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #0B0E0F;
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