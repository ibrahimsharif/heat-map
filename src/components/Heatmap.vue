<template>
  <div>
    <v-content class="create">
        <section>
        <v-container grid-list-xl>
            <v-layout row wrap align-center>
                <v-flex xs6>
                <h2 class="display-1">Heatmap of incidents</h2>
            </v-flex>
            <v-flex xs6>
                <h2 class="display-1">Heatmap of AED placement</h2>
            </v-flex>
            </v-layout>
        </v-container>
      </section>
      <section>
          <v-layout row wrap justify-center>
            <v-flex xs12>              
              <iframe :src="iframeUrl" seamless></iframe>
              <iframe :src="iframeUrl2" seamless></iframe>
            </v-flex>
          </v-layout>
      </section>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'Heatmap',
  data: function () {
      return {
        iframeUrl: "../../static/HeatmapIncidents.html",
        iframeUrl2: "../../static/HeatmapAED.html",
        showFullMap: true
      }
    },
  methods: {
        updateMapWithNewAED: function() {

          if (this.showFullMap) {
              this.iframeUrl = "../../static/HeatmapAED.html";
          } else {
              this.iframeUrl = "../../static/HeatmapIncidents.html";
          }
          this.showFullMap = !this.showFullMap;
        }
    }
};
</script>

<style scoped>
 iframe {
   width: 49%;
   height: 800px;
 }
</style>