import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                    primary: '#ff6c17',
                    secondary: '#fc8c03',
                    accent: '#fff717',
                    error: '#d10a0a',
                    info: '#25bfe6',
                    success: '#99ed11',
                    warning: '#f2cc1f',
                }
            }
        }
});
