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
                    v-on:click="optimizeMapWithNewAED()">Optimize existing AED locations</v-btn>
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
        optimizeMapWithNewAED: function() {
          // Replace source for iframe.
        }
    }
};
</script>

<style scoped>
 iframe {
   width: 100%;
   height: 940px;
 }
</style>