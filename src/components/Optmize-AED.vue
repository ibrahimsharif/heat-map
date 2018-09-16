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
                    v-on:click="optimizeMapWithNewAED()">Optimize existing AED locations</v-btn>
                    <v-btn v-else
                    block
                    color="rgba(97, 96, 96, 0.28)"
                    v-on:click="optimizeMapWithNewAED()">Show map of incidents and AED's</v-btn>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-btn v-if="showHeatMap"
                    block
                    color="rgba(97, 96, 96, 0.28)"
                    v-on:click="showHeatmap()">Show heatmap of existing AED's and optimized AED locations</v-btn>
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
  data: function () {
      return {
        iframeUrl: "../../static/OverallMap.html",
        showFullMap: true,
        showHeatMap: false,
      }
    },
  methods: {
        optimizeMapWithNewAED: function() {

          if (this.showFullMap) {
              this.iframeUrl = "../../static/NewAEDs.html";
              this.showHeatMap = true;
          } else {
              this.iframeUrl = "../../static/OverallMap.html";
              this.showHeatMap = false;
          }
          this.showFullMap = !this.showFullMap;
        },
        showHeatmap: function() {
          this.iframeUrl = "../../static/HeatMapVsNewAED.html"
          this.showHeatMap = false;
        }
    }
};
</script>

<style scoped>
 iframe {
   width: 100%;
   height: 800px;
 }
</style>