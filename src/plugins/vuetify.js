import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                    primary: '#ff6c17',
                    secondary: '#fc8c03',
                    accent: '#1E1E1E',
                    error: '#d10a0a',
                    info: '#25bfe6',
                    success: '#99ed11',
                    warning: '#f2cc1f',
                    background: '#181a1b'
                }
            }
        }
});
