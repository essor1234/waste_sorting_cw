<template>
    <div>
      <h1>Waste Management is Important</h1>
  
      <!-- Search input for filtering challenges -->
      <div class="ui fluid input">
        <input type="text" v-model="searchQuery" placeholder="Search challenges..." />
      </div>
  
      <!-- Button to create a new challenge -->
      <button @click="createChallenge" class="ui button primary">Create Challenge</button>
  
      <!-- Display a list of challenge cards -->
      <div class="challenge-list">
        <div class="challenge-card" v-for="(challenge, i) in paginatedChallenges" :key="i">
          <h3>{{ challenge.name }}</h3>
          <p>{{ challenge.description }}</p>
          <span class="challenge-level">{{ challenge.level }}</span>
          <div class="actions">
            <!-- Links for showing and editing the challenge -->
            <router-link :to="{ name: 'showChallenge', params: { id: challenge._id }}">Show</router-link>
            <router-link :to="{ name: 'editChallenge', params: { id: challenge._id }}">Edit</router-link>
            <!-- Link for deleting the challenge, with a confirmation dialog -->
            <a @click.prevent="onDestroy(challenge._id)">Delete</a>
          </div>
        </div>
      </div>
  
      <!-- Pagination controls -->
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import { api } from "../helpers/helpers";
  
  export default {
    name: "MainPage",
    data() {
      return {
        challenges: [], // Array to hold the list of challenges
        searchQuery: "", // Query for searching challenges
        currentPage: 1, // Current page number for pagination
        challengesPerPage: 5, // Number of challenges per page
      };
    },
    computed: {
      // Filters challenges based on the search query
      filteredChallenges() {
        const query = this.searchQuery.toLowerCase();
        return this.challenges.filter(
          (challenge) =>
            challenge.name.toLowerCase().includes(query) ||
            challenge.description.toLowerCase().includes(query) ||
            challenge.level.toLowerCase().includes(query)
        );
      },
      // Calculates total number of pages for pagination
      totalPages() {
        return Math.ceil(this.filteredChallenges.length / this.challengesPerPage);
      },
      // Returns a subset of challenges for the current page
      paginatedChallenges() {
        const start = (this.currentPage - 1) * this.challengesPerPage;
        const end = start + this.challengesPerPage;
        return this.filteredChallenges.slice(start, end);
      },
    },
    methods: {
      // Deletes a challenge after confirmation
      async onDestroy(id) {
        const sure = window.confirm("Are you sure?");
        if (!sure) return;
        await api.deleteChallenge(id);
        this.flash("Challenge deleted successfully!", "success");
        this.challenges = this.challenges.filter((challenge) => challenge._id !== id);
      },
      // Moves to the previous page
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      // Moves to the next page
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      // Creates a new challenge
      createChallenge() {
        this.$router.push({ name: 'createChallenge' });
      },
    },
    async mounted() {
      // Fetch challenges from the API when the component is mounted
      this.challenges = await api.getChallenges();
    },
  };
  </script>
  
  <style scoped>
  /* Styling for the challenge list grid */
  .challenge-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
  /* Styling for individual challenge cards */
  .challenge-card {
    background-color: #fff;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* Styling for challenge card headings */
  .challenge-card h3 {
    margin-top: 0;
    color: #34495e;
  }
  
  /* Styling for challenge level tag */
  .challenge-level {
    display: inline-block;
    background-color: #f39c12;
    color: white;
    padding: 5px;
    border-radius: 5px;
    font-size: 0.8em;
    margin-top: 10px;
  }
  
  /* Styling for action links */
  .actions {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  
  .actions a {
    color: #3498db;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  .actions a:hover {
    color: #2980b9;
  }
  
  /* Styling for pagination controls */
  .pagination {
    margin-top: 20px;
    text-align: center;
  }
  
  .pagination button {
    margin: 0 5px;
    padding: 5px 10px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .pagination button:hover {
    background-color: #2980b9;
  }
  
  .pagination span {
    font-weight: bold;
  }
  </style>
  