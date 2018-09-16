<template>
  <div>
    <v-content class="create">
      <section>
          <v-layout row wrap justify-center>
            <v-flex xs12>              
              <iframe :src="iframeUrl" seamless></iframe>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-btn v-if="showFullMap"
                    block
                    color="rgba(97, 96, 96, 0.28)"  
                    v-on:click="updateMapWithNewAED()">Create new AED locations using incident information</v-btn>
                     <v-btn v-else
                    block
                    color="rgba(97, 96, 96, 0.28)"
                    v-on:click="updateMapWithNewAED()">Show map of incidents</v-btn>
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
  name: 'CreateAED',
  data: function () {
      return {
        iframeUrl: "../../static/Incidentmap.html",
        showFullMap: true
      }
    },
  methods: {
        updateMapWithNewAED: function() {

          if (this.showFullMap) {
              this.iframeUrl = "../../static/NewNewAEDMap.html";
          } else {
              this.iframeUrl = "../../static/Incidentmap.html";
          }
          this.showFullMap = !this.showFullMap;
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