// var app = new Vue({
//   el: "#app",
//   data:{
//     nom:"alaedin",
//   },
//   created: function(){
//     var loaded = JSON.parse(localStorage.getItem("myPrefs"));

//     if(loaded){
//       this.nom = loaded.nomStockee;
//     }else{
//       console.warn('can\'t load prefs from local storage, maybe you first time here ?');
//     }
//   },
//   computed: {
//     prefs: function(){
//       var p ={
//         nomStockee: this.nom,
//       };
//       localStorage.setItem('myPrefs', JSON.stringify(p));
//       return p;
//     }
//   }
// })


// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     nom: ''
//   },
//   methods: {
//     getData(){
//       nom = this.nom
//       console.log(this.nom)
//     }
//   }
// })

var app = new Vue({
  el: "#app-2",
  data:{
    nom:'',
    date:'',
    image:''
  },
  methods: {
    getData(){
      nom = this.nom
      date = this.date,
      image = this.image
    }
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
      let arrayNom = arrayNom.push(this.nom);
      let arrayDate = arrayDate.push(this.date);
      let arrayImage = arrayImage.push(this.image);
      var val ={
        nomStockee: arrayNom,
        dateStockee: arrayDate,
        imageStockee: arrayImage,
        // nomStockee: this.nom,
        // dateStockee: this.date,
        // imageStockee: this.image,
      };
      localStorage.setItem('myPrefs', JSON.stringify(val));
      return val;
    }
  }
})

