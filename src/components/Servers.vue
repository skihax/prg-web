<template>
<v-container>
    <v-row>
        <v-col>
            <v-card elevation="8" dark class="rounded-xl">
                <v-skeleton-loader class="mx-auto" type="card" v-if="loading"></v-skeleton-loader>
                <div v-if="!loading">
                    <v-card-title>Deagle</v-card-title>
                    <v-card-text>
                        <v-row justify="center">
                            <v-col md="2">
                                <v-row justify="center"><span class="overline">Status</span></v-row>
                                <v-row justify="center"> {{this.deagle.status}}</v-row>
                            </v-col>
                            <v-col md="2">
                                <v-row justify="center"><span class="overline">Location</span></v-row>
                                <v-row justify="center"> East (Virginia)</v-row>
                            </v-col>
                            <v-col md="2">
                                <v-row justify="center"><span class="overline">Current Map</span></v-row>
                                <v-row justify="center"> {{this.deagle.map}}</v-row>
                            </v-col>
                            <v-col md="2">
                                <v-row justify="center"><span class="overline">Online Players</span></v-row>
                                <v-row justify="center"> {{this.deagle.playercount}}/{{this.deagle.maxplayers}}</v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col md="2" align="center">
                                <span class="overline">Player List</span><br />
                                <table width=100%>
                                    <tr v-for="player in deagle.players" :key="player">
                                        <td style="text-align: center; padding: 7px; border-bottom: 1px solid #333">
                                            {{player}}
                                        </td>
                                    </tr>
                                </table>
                            </v-col>
                            <v-col>
                                <v-sparkline :value="value" :gradient="gradient" :smooth="radius || false" :padding="padding" :line-width="width" :stroke-linecap="lineCap" :gradient-direction="gradientDirection" :fill="fill" :type="type" :auto-line-width="autoLineWidth" auto-draw height="50%"></v-sparkline>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                        <v-btn block text color="primary" class="rounded-xl" href="steam://connect/51.81.6.196:27015" target="_blank">
                            Connect
                        </v-btn>
                    </v-card-actions>
                </div>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
const axios = require('axios');
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
        deagle: {
            map: "",
            players: [],
            maxplayers: "",
            playercount: "",
            status: ""
        },
        loading: true
    }),
    mounted() {
        this.$nextTick(function () {
            this.loadServerData("deagle");
        })
    },
    methods: {
        loadServerData: function (name) {
            const self = this;
            axios.get('https://www.prgaming.net:8080/servers?server=' + name).then(resp => {
                    this.deagle.map = resp.data.map;
                    resp.data.players.forEach(player => {
                        this.deagle.players.push(player.name);
                    });
                    this.deagle.maxplayers = resp.data.maxplayers;
                    this.deagle.playercount = resp.data.raw.numplayers;
                    this.deagle.status = "Online";
                    this.loading = false;
                })
                .catch(function (error) {
                    if (error.response) {
                        if (error.response.status == 500) {
                            self.deagle.status = "Offline";
                            self.loading = false;
                        } else {
                            self.deagle.status = "Query Error";
                            self.loading = false;
                        }
                    }
                });
        }
    }
})
</script>
