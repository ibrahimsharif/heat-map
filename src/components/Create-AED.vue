<template>
  <div>
    <v-content class="create">
      <section>
          <v-layout row wrap justify-center>
            <v-flex xs12>              
              <iframe src="../../static/Incidentmap.html" seamless></iframe>


                <v-layout row wrap>

                    <v-flex xs12 sm2>

                      <v-text-field
                        v-model="latitude"
                        label="Latitude - 55.675958"
                        prepend-icon="place"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm2>

                      <v-text-field
                        v-model="longtitude"
                        label="Longtitude - 12.56516"
                        prepend-icon="place"
                      ></v-text-field>
                    </v-flex>

                    <v-btn
                    block
                    color="rgba(97, 96, 96, 0.28)"
                    v-on:click="updateMapWithNewAED()"> TEST </v-btn>
                </v-layout>


            </v-flex>
          </v-layout>
      </section>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      longtitude: "",
      latitude: "",
    }
  },
  methods: {
        updateMapWithNewAED: function() {
          let latitude = this.latitude;
          let longtitude = this.longtitude;

          // DO AXIOS CALL
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
