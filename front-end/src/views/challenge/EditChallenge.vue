<template>
    <div>
      <h2>Edit Challenge</h2>
      <ChallengeForm :challenge="challenge" @save="saveChallenge" />
    </div>
  </template>
  
  <script>
  import ChallengeForm from './ChallengeForm.vue';
  import { api } from '../../helpers/helpers';
  
  export default {
    components: { ChallengeForm },
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
      saveChallenge(challenge) {
        updateChallenge(this.challenge._id, challenge).then(() => {
          this.$router.push('/challenges');
        });
      }
    }
  };
  </script>
  