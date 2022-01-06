const app = new Vue({
    el: '#app',
    data: {
      cats: [],
      newName: null,
      newDate: null,
      newImg: null,
      poniteur: 0,
      cadeau: [],
      newCadeau: null,
      inter: null,
    },
    mounted() {
      if (localStorage.getItem('cats')) {
        try {
          this.cats = JSON.parse(localStorage.getItem('cats'));
          this.poniteur = (this.cats.sort(function(a,b){return b.cont - a.cont}).slice(0,1)[0].cont)+1;
        } catch (e) {
          localStorage.removeItem('cats');
        }
      }
    },
    methods: {
      addCat() {
        // s'assurer que l'utilisateur a entré quelque chose
        if (!this.newName && !this.newDate && !this.newImg) {
          return;
        }

        this.cats.push({
         "intervalle": age(this.newDate),
         "nom": this.newName,
         "date": this.newDate,
         "image": this.newImg,
         "cont": this.poniteur++,
        });

        this.inter = '';
        this.newName = '';
        this.newDate = '';
        this.newImg = '';
        this.saveCats();
      },
      removeCat(x,id) {
        this.cats.splice(id, 1);
        this.saveCats();
      },
      saveCats() {
        const parsed = JSON.stringify(this.cats);
        localStorage.setItem('cats', parsed);
      },
      addCadeau(id) {
        // s'assurer que l'utilisateur a entré quelque chose
        if (!this.newCadeau) {
          return;
        }
        this.cadeau = [];
        this.cadeau.push({
          "nomCadeau": this.newCadeau,
        });

      //  if (this.cats[id].cadeau === undefined) {
      //   this.cats[id].cadeau = [this.cadeau];

      //  }else{
      //    this.cats[id].cadeau.push(this.cadeau);           
      //  }

      this.cats[id].cadeau = [this.cadeau];      
        this.newCadeau = '';
        this.saveCats();
      },
      removeCadeau(x) {
        this.cadeau.splice(x, 1);
        this.saveCats();
      },
    }
  })


  function age(aniversaire){
    let ladate = new Date();
    let date = ladate.getDate();
    let month = ladate.getMonth();
    let year = ladate.getFullYear();
  
    let ladateAnniv = new Date(aniversaire);
    let dateAnniv = ladateAnniv.getDate();
    let monthAnniv = ladateAnniv.getMonth();
    let yearAnniv = ladateAnniv.getFullYear();

    var intervalle = ladateAnniv.getTime() - ladate.getTime();
    intervalle = Math.floor(intervalle / (1000 * 60 * 60 * 24));
    document.getElementById("test").innerHTML = intervalle 
    return intervalle;
  }


  function openNavMenu() {
    document.getElementById("myNavMenu").style.width = "100%";
    document.getElementById("cheatAl").classList.add("opaAL");
}

function closeNavMenu() {
    document.getElementById("myNavMenu").style.width = "0%";
    document.getElementById("cheatAl").remove("opaAL");      
}

function openNavR() {
  document.getElementById("myNavR").style.width = "100%";
}

function closeNavR() {
  document.getElementById("myNavR").style.width = "0%";
}

// const app = new Vue({
//     el: '#app',
//     data: {
//         cats: [],
//         newName: null,
//         newDate: null,
//         newImg: null,
//         poniteur: 0,
//         cadeau: [],
//         newCadeau: null,
//         inter: null,
//     },
//         if (localStorage.getItem('cats')) {
//             try {
//                 this.cats = JSON.parse(localStorage.getItem('cats'));
//                 this.poniteur = (this.cats.sort(function (a, b) {
//                     return b.cont - a.cont
//                 }).slice(0, 1)[0].cont) + 1;
//             } catch (e) {
//                 localStorage.removeItem('cats');
//             }
//         }
//     },
//     methods: {
//         addCat() {
//             // s'assurer que l'utilisateur a entré quelque chose
//             if (!this.newName && !this.newDate && !this.newImg) {
//                 return;
//             }

//             this.cats.push({
//                 "intervalle": age(this.newDate),
//                 "nom": this.newName,
//                 "date": this.newDate,
//                 "image": this.newImg,
//                 "cont": this.poniteur++,
//             });
//             this.inter = '';
//             this.newName = '';
//             this.newDate = '';
//             this.newImg = '';
//             this.saveCats();
//         },
//         removeCat(x, id) {
//             this.cats.splice(id, 1);
//             this.saveCats();
//         },
//         saveCats() {
//             const parsed = JSON.stringify(this.cats);
//             localStorage.setItem('cats', parsed);
//         },
//         addCadeau(id) {
//             // s'assurer que l'utilisateur a entré quelque chose
//             console.log('blup')
//             if (!this.newCadeau) {
//                 return;
//             }
//             this.cadeau = [];
//             this.cadeau.push({
//                 "nomCadeau": this.newCadeau,
//             });

//             if (this.cats[id].cadeau !== undefined) {
//                 this.cats[id].cadeau.push(this.cadeau);
//             } else {
//                 this.cats[id].cadeau = [this.cadeau];
//             }

//             this.newCadeau = '';
//             this.saveCats();
//         },
//         removeCadeau(x) {
//             this.cadeau.splice(x, 1);
//             this.saveCats();
//         },
//     }
// })


// function age(aniversaire) {
//     let ladate = new Date();
//     let date = ladate.getDate();
//     let month = ladate.getMonth();
//     let year = ladate.getFullYear();

//     let ladateAnniv = new Date(aniversaire);
//     let dateAnniv = ladateAnniv.getDate();
//     let monthAnniv = ladateAnniv.getMonth();
//     let yearAnniv = ladateAnniv.getFullYear();

//     var intervalle = ladateAnniv.getTime() - ladate.getTime();
//     intervalle = Math.floor(intervalle / (1000 * 60 * 60 * 24));
//     document.getElementById("test").innerHTML = intervalle
//     return intervalle;
// }


// function openNavR() {
//     document.getElementById("myNavR").style.width = "100%";
// }

// function closeNavR() {
//     document.getElementById("myNavR").style.width = "0%";
// }
