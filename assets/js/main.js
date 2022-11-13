var app = new Vue({
    el: '#root',
    data: {
      imgObj:[
        {id: 0, name: 'bird', source: './assets/img/bird.jpg'},
        {id: 1, name: 'car', source: './assets/img/cat.jpg'},
        {id: 2, name: 'horses', source: './assets/img/horses.jpg'},
        {id: 3, name: 'meditate', source: './assets/img/meditate.jpg'},
        {id: 4, name: 'train', source: './assets/img/train.jpg'},
      ],
      index: 0,
    },
    methods: {
        slideLeft: function(){
            const max = this.imgObj.length - 1;
            if(this.index == 0){
                return this.index = max;
            }
            return this.index--;
        },
        slideRight: function(){
            const max = this.imgObj.length - 1;
            if(this.index == max){
                return this.index = 0;
            }
            return this.index++;
        }

    }
})