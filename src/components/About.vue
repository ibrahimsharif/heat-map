<template>
 <v-content class="about">
     <div id="customHtml"> </div>
      <section>
        <v-parallax src="../../static/Capture2.PNG" height="600">
          <v-layout
            column
            align-center
            class="black--text"
          >
            <h1 class="black--text mb-2 display-4 font-weight-bold text-xs-center">Heart Map</h1>
            <div class="mb-3 display-2 font-weight-bold text-xs-center">Hacking to save lives</div>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="display-3">A hacked solution to save lives</h2>
              <span class="subheader">
                Data analysis optimizing the placements of AED's
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">place</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Optimize your city's AED placement</div>
                    </v-card-title>
                    <v-card-text>
                      Use our software to optimize the locations of new AED's in your city.
                      If your city already have an existing network of AED's we can help you improve it even further.
                      We help you with suggestions to new locations, based on data from existing AED locations and locations of incidents in your city.
                      The software focus on areas with high response times, so the chance of survival until the ambulance arrives increases.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">assessment</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Create suggestions for new AED locations</div>
                    </v-card-title>
                    <v-card-text>
                      If your city does not have an existing network of AED's we will help you build one.
                      Use our software to place the new AED's in locations where incident numbers are high.
                      We collaporate with you and using your city's incident data, we can improve survival rate.
                      The software focus on areas with high response times, so the chance of survival until the ambulance arrives increases.
                      <div> &nbsp; </div>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center>
            <v-flex xs8>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="display-1">Heart Hack Info</div>
                </v-card-title>
                <v-card-text>
                  This project was created during the EMS Heart Hack: Hack to save lives. <br>
                  We have developed a solution which utilizes the power of data-analysis to easily let people in charge of AED networks optimize their placement <br>
                  We have focused on both cities with existing AED networks, and cities without an existing network.
                  This will allow our software to help the future cities to become even more save, and help save the lives of people suffering from heart attacks. <br>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
    h1 {
        margin-top: 1em;
    }
    .subheader {
        font-size: 2em;
    }
    .about {
        font-size: 16px;
    }
</style>
