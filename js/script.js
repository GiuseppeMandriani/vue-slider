console.log('Vue', Vue); // Verifica Vue

/**
 * VUE SLIDER
 */

const app = new Vue({
    el: '#app',

    data: {
        images: [                   // Array delle immagini
            './img/image1.jpg',
            './img/image2.jpg',
            './img/image3.jpg',
            './img/image4.jpg',
        ],

        indexImages: 0,             // Posizione indice attuale nell'array


    },

    methods: {

        // Next Img Functions
        nextImg(){
            // console.log('click');
            this.indexImages += 1;     // Aumento valore per cambiare img

            // Condizione per tornare all'indice 0

            // A)

            // if(this.indexImages > (this.images.length - 1)){
            //     this.indexImages = 0;
            // };

            // B) Operatore ternario

            this.indexImages = (this.indexImages > (this.images.length - 1)) ? 0 : this.indexImages++;

        },

        // Prev Img Functions
        prevImg(){
            // console.log('click');
            this.indexImages -= 1;

            // Condizione per tornare all'ultimo indice 0

            // A) 

            //  if(this.indexImages < 0){
            //      this.indexImages = this.images.length - 1;
            //  }

            // B) Operatore ternario

            this.indexImages = (this.indexImages < 0) ? this.indexImages = (this.images.length - 1) : this.indexImages --;
        },

        // setImg by nav Buttons
        setImg(index){
            // console.log(index)
            this.indexImages = index;
        },

        




    }
});
    
    
    

    


