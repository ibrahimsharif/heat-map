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
                        v-model="oldLatitude"
                        label="Latitude - 55.675958"
                        prepend-icon="place"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm2>

                      <v-text-field
                        v-model="oldLongtitude"
                        label="Longtitude - 12.56516"
                        prepend-icon="place"
                      ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm2>
                                            <v-text-field
                        v-model="newLatitude"
                        label="Latitude - 55.675958"
                        prepend-icon="place"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm2>

                      <v-text-field
                        v-model="newLongtitude"
                        label="Longtitude - 12.56516"
                        prepend-icon="place"
                      ></v-text-field>
                    </v-flex>
                    <v-btn
                    block
                    color="rgba(97, 96, 96, 0.28)"
                    v-on:click="updateMapWithNewAED()"> Move AED </v-btn>
                </v-layout>


            </v-flex>
          </v-layout>
      </section>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'MoveAED',
  data: function () {
    return {
      oldLongtitude: "",
      oldLatitude: "",
      newLongtitude: "",
      newLatitude: "",
    }
  },
  methods: {
        updateMapWithNewAED: function() {
          let oldLatitude = this.oldLatitude;
          let oldLongtitude = this.oldLongtitude;
          let newLatitude = this.newLatitude;
          let newLongtitude = this.newLongtitude;

          // DO AXIOS CALL
        }
    }
};
</script>

<style scoped>
 iframe {
   width: 100%;
   height: 760px;
 }
</style>