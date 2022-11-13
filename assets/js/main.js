var app = new Vue({
    el: '#root',
    data: {
      message: 'Hello Vue!',
      imgs:[
        {id: 0, name: 'bird', url: './assets/img/bird.jpg'},
        {id: 1, name: 'car', url: './assets/img/cat.jpg'},
        {id: 2, name: 'horses', url: './assets/img/horses.jpg'},
        {id: 3, name: 'meditate', url: './assets/img/meditate.jpg'},
        {id: 4, name: 'train', url: './assets/img/train.jpg'},
      ]
    }
  })