<template>
  <div>
    <v-content class="create">
      <section>
          <v-layout row wrap justify-center>
            <v-flex xs12>              
              <iframe src="../../static/Incidentmap.html" seamless></iframe>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-btn
                    block
                    color="rgba(97, 96, 96, 0.28)"
                    v-on:click="updateMapWithNewAED()">Create new AED locations using incident information</v-btn>
                  </v-flex>
                </v-layout>
            </v-flex>
          </v-layout>
      </section>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'OptimizeAED',
  methods: {
        updateMapWithNewAED: function() {

          // Replace source for iframe.
        }
    }
};
</script>

<style scoped>
 iframe {
   width: 100%;
   height: 840px;
 }
</style>