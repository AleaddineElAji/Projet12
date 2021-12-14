var app = new Vue({
  el: "#app",
  data:{
    nom:"alaedin",
    date:"11/12/1998",
    image:"NON"
  },
  created: function(){
    var loaded = JSON.parse(localStorage.getItem("myPrefs"));

    if(loaded){
      this.nom = loaded.nomStockee;
      this.date = loaded.dateStockee;
      this.image = loaded.imageStockee;
    }else{
      console.warn('can\'t load prefs from local storage, maybe you first time here ?');
    }
  },
  computed: {
    prefs: function(){
      var p ={
        nomStockee: this.nom,
        dateStockee: this.date,
        imageStockee: this.image
      };
      localStorage.setItem('myPrefs', JSON.stringify(p));
      return p;
    }
  }
})