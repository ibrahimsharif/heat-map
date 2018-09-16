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
              <v-data-table v-if="!showFullMap"
                  :headers="headers"
                  :items="adresses"
                  hide-actions
                  class="elevation-1"
                >
                  <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td>{{ props.item.adress }}</td>
                  </template>
                </v-data-table>
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
        headers: [
          {
            text: 'Name of company',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Adress',
            value: 'adress', 
            sortable: false,
            align: 'left' 
           }
        ],
        adresses: [
          {name: "Baadstad Strand", adress: "Bådstadvej 20 3760 Gudhjem"},
          {name: "Bed & Breakfast i Gilleleje", adress: "Græstedvejen 38, 3250 Gilleleje"},
          {name: "Gilleleje Planteskole", adress: "Almevej 163, 3250 Gilleleje"},
          {name: "Munkhøjgård", adress: "Borsholmvej 11, 3100 Hornbæk"},
          {name: "Madorma", adress: "Gadebyvejen 3, 3730 Nexø"},
          {name: "Macho Custom", adress: "Græse Bygade 17A, 3600 Frederikssund"},
          {name: "Ting og Gaver", adress: "Fjordbakken 20, 4040 Jyllinge"},
          {name: "Hyldegaarden", adress: "3630, Hyldegaardsvej 35, 3630 Jægerspris"},
          {name: "Westh Lennart", adress: "Simblegårdsvej 6, 3782 Klemensker"},
          {name: "Jeppe's Al Round Service", adress: "Elmegårdsvej 10, 3630 Jægerspris"},
          {name: "parkeringsplads", adress: "Nordre Borrelyngvej 48, 3770 Allinge"},
          {name: "Sofie Rifbjerg Fond", adress: "Brunemarksvej 15, 3490 Kvistgård"},
          {name: "Zapos", adress: "Kajakvej 26, 4040 Jyllinge"},
          {name: "Skoventreprenør & Anlægsgartner", adress: "Akelejevej 23, 3250 Gilleleje"},
          {name: "Dramaterne", adress: "Kagerupbakken 2, 3200 Helsinge"},
          {name: "Mårum (Græsted-Gilleleje) St", adress: "3230 Graested"},
          {name: "Kikhavn", adress: "Vestre Stræde 17, 3390 Hundested"},
          {name: "Koloni Svea Dan", adress: "Villingebæk Strandvej 575, 3120 Dronningmølle"},
          {name: "Butik Aurora", adress: "Ørsholtvej 40, 3490 Kvistgård"},
          {name: "Elverdal A/S", adress: "Risbyvej 28, 2765 Smørum"},
        ]
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