<template>
    <div>
      <h2>New Challenge</h2>
      <ChallengeForm @save="saveChallenge" />
    </div>
  </template>
  
  <script>
  import ChallengeForm from '../../components/ChallengeForm.vue';
  import { api } from '../../helpers/helpers';
  
  export default {
    components: { ChallengeForm },
    methods: {
      saveChallenge(challenge) {
        createChallenge(challenge).then(() => {
          this.$router.push('/challenges');
        });
      }
    }
  };
  </script>
  