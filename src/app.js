// const ItemView = Backbone.View.extend({
//   el: '#todo-item',

//   events: {

//   },

//   initialize() {

//   },

//   render() {

//     return this;
//   }
// })

const AppView = Backbone.View.extend({
  el: '#todo',

  template: _.template($('#todo').html()),

  initialize() {
    // console.log(this);
  },
  
  render() {
    console.log(this.$el);
    return this;
  }
})

new AppView();