<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card
                elevation="8"
                dark
                class="rounded-xl"
                >
                    <v-card-title>Deagle</v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <span class="overline">Status</span><br />
                                <v-icon large color="info">mdi-circle-small</v-icon> Online
                            </v-col>
                            <v-col>
                                <span class="overline">Location</span><br />
                                <v-icon large color="info">mdi-circle-small</v-icon> East (Virginia)
                            </v-col>
                            <v-col>
                                <span class="overline">Current Map</span><br />
                                <v-icon large color="info">mdi-circle-small</v-icon> am_junkyard
                            </v-col>
                            <v-col>
                                <span class="overline">Online Players</span><br />
                                <v-icon large color="info">mdi-circle-small</v-icon> 24/30
                            </v-col>
                        </v-row>
                          <v-sparkline
                            :value="value"
                            :gradient="gradient"
                            :smooth="radius || false"
                            :padding="padding"
                            :line-width="width"
                            :stroke-linecap="lineCap"
                            :gradient-direction="gradientDirection"
                            :fill="fill"
                            :type="type"
                            :auto-line-width="autoLineWidth"
                            auto-draw
                            height="50%"
                        ></v-sparkline>
                        24 Players Online
                        <v-divider></v-divider>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                        <v-btn
                            text
                            color="primary"
                            class="rounded-xl"
                        >
                        Connect
                        </v-btn>
                        </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]


export default ({
    data: () => ({
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [13, 15, 10, 8, 4, 0, 0, 0, 3, 8, 13, 17, 17, 23, 24],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    }),
    mounted() {
        this.$nextTick(function () {
            this.loadServerData("12321");
        })
    },
    methods: {
        loadServerData: function (ip) {
            console.log(ip);
        }
    }
})
</script>
