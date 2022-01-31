new Vue({
    el: '#app',
    data: () => {
        return {
            api_key: 'c4e67fb3ba535386201e6e41f9f1b143',
            url_base:'http://api.openweathermap.org/data/2.5/',
            api_date:'https://pholiday.herokuapp.com/today',
            query:'',
            weather:{},
            date:{}
        }
    },

    methods: {
        fetchWeather (e) {
            if (e.key == "Enter") {
                fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`).then(res => {
                    return res.json();
                }).then(this.setResults);
            }
        },

        setResults (results) {
            this.weather = results
        },
        
    }
    
   
});