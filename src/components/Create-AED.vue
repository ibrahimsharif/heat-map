<template>
  <div>
    <v-content class="create">
      <section>
          <v-layout row wrap justify-center>
            <v-flex xs12>              
              <iframe :src="iframeUrl" seamless></iframe>
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
  data: function () {
      return {
        iframeUrl: "../../static/OverallMap.html"
      }
    },
  methods: {
        updateMapWithNewAED: function() {
          debugger;
          this.iframeUrl = "../../static/NewAEDs.html";
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