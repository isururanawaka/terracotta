<template>
  <div>
    <h1 class="my-3">
      Because you would like to
      <strong>manually determine who can participate in the experiment</strong>,
      we've set you up to select students who are enrolled in your class.
    </h1>

    <v-card class="pt-5 px-5 mx-auto blue lighten-5 rounded-lg" outlined>
      <p>
        <strong>Tip:</strong> If you are working with minors, we suggest you
        collect parental consents before proceeding. You can
        <a
          :href="require('@/assets/files/Terracotta_ParentalPermission_template.docx')"
          download="Terracotta_ParentalPermission_template.docx">
          download a template permission from here
        </a>.
      </p>
    </v-card>

    <div class="mt-5">
      <v-btn
        elevation="0"
        color="primary"
        :to="{ name: 'ParticipationTypeManualSelection' }"
        >Continue
      </v-btn>
      <router-link
        class="plain-link ml-3"
        :to="{ name: 'ParticipationDistribution' }"
      >
        Skip participant selection for now
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParticipationTypeManual",
  props: ["experiment"],
  methods: {
    saveExit() {
      this.$router.push({name:'Home', params:{experiment: this.experiment.experimentId}})
    }
  }
};
</script>