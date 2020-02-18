import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () =>{
  new Vue({
    el: "#app",
    data:{
      countries: [],
      runningTotal:0,
      selectedCountry: null
    },
    mounted(){
      this.fetchCountry();
      // this.totalPopulation;
    },

    computed: {
      totalPopulation: function() {
        return this.countries.reduce((runningTotal, country)=> runningTotal + country.population, 0);

      },

    },

    methods: {
      fetchCountry: function () {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => this.countries=data)
        // .then(this.countries.reduce((runningTotal, country)=> {
        //   return runningTotal + country.population;
        // }, 0) = totalPopulation)
        // .then( this.countries.reduce((runningTotal, country) => {
        //   runningTotal += country.population},0)
        // )
      },
      calcTotalPopulation: function() {
        return this.countries.reduce((runningTotal, country)=> {
          return runningTotal + country.population;
        }, 0);
      },
      // totalPopulation: function(){
      //   fetch('https://restcountries.eu/rest/v2/all')
      //   .then(response => response.json())
      //   .then( data => data=data.reduce((runningTotal, country) =>{
      //     return runningTotal + country.population;
      //   }, 0))

      selectedCountries: function() {
        return this.counries.filter((country) => {
          country == selectedCountry;
        })
      }


    }
  })
})
