<template>
    <div>
      <h2>{{ challenge.name }}</h2>
      <p>{{ challenge.description }}</p>
      <p>Level: {{ challenge.level }}</p>
      <p>Score: {{ challenge.score }}</p>
      <button @click="editChallenge">Edit</button>
      <button @click="deleteChallenge">Delete</button>
    </div>
  </template>
  
  <script>
  import { fetchChallengeById, deleteChallenge } from '../helpers';
  
  export default {
    data() {
      return {
        challenge: null
      };
    },
    created() {
      this.loadChallenge();
    },
    methods: {
      loadChallenge() {
        const challengeId = this.$route.params.challengeId;
        fetchChallengeById(challengeId).then(response => {
          this.challenge = response.data;
        });
      },
      editChallenge() {
        this.$router.push(`/challenges/${this.challenge._id}/edit`);
      },
      deleteChallenge() {
        deleteChallenge(this.challenge._id).then(() => {
          this.$router.push('/challenges');
        });
      }
    }
  };
  </script>
  