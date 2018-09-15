<template>
 <v-content class="about">
     <div id="customHtml"> </div>
      <section>
        <v-parallax src="../../static/Capture.PNG" height="600">
          <v-layout
            column
            align-center
            class="red--text"
          >
            <h1 class="red--text mb-2 display-4 font-weight-bold text-xs-center">Hearth Map</h1>
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
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">place</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Place an AED in the world</div>
                    </v-card-title>
                    <v-card-text>
                      Try our new feature to place a new AED on the map.
                      See how the response times will change after the new AED is added to the map.
                      Use this tool to plan out your own optimal solution to AED placement.
                      Challenge your friends to beat you!
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">place</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Move an existing AED</div>
                    </v-card-title>
                    <v-card-text>
                      If you identify an existing AED, but believe that it could be placed in a more optimal location,
                      then try out our 'Move an existing AED' feature.
                      This will visually and instantly tell you if the new location is better.
                      <div> &nbsp; </div>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">assessment</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Optimize placements of AED's</div>
                    </v-card-title>
                    <v-card-text>
                      If you want to optimize the placement of AED's but don't have the time to do it?
                      Try out our data-analysis powered soloution which helps you identify new AED placements in order to reduce the response time.
                      Let us help you optimze AED placement in your city!
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
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs8>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="display-1">Heart Hack Info</div>
                </v-card-title>
                <v-card-text>
                  This project was created during the EMS Heart Hack: Hack to save lives. <br>
                  We have developed a solution which utilizes the power of data-analysis to let the user easily and interactively change the future of AED's. <br>
                  This enables the everyday person to help saving lives of people suffering from heart attacks. <br>
                  Using data-anaylsis we have taken data from incidents of heart attacks and joined them with data from the HjerteLøber App by TrygFonden, to create a interactive color coded map which visually let's you identify areas of interest.
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
