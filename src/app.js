$(function(){
  const InputView = Backbone.View.extend({
    tagName: 'input',
    className: 'todoo-input',
    attributes: {
      type: 'text'
    },
    events: {
      'keydown': 'keyAction'
    },
    initialize() {
      console.log(this)
    },
    keyAction(e) {
      if (e.which === 13) this.trigger('enter', e)
    }
  })

  const listCollection = new Backbone.Collection([
    { label: 'hello world' },
    { label: 'hello pone' }
  ])

  const ListView = Backbone.View.extend({
    model: listCollection,
  
    template: _.template($('#todo-list').html()),
  
    initialize() {
      this.render()
      this.model.on('update', _ => this.render())
    },
  
    render() {
      this.$el.html(this.template(this.model.toJSON()))
      return this
    },

    addItem(label) {
      this.model.add({
        label: label
      })
    }
  })
  
  const AppView = Backbone.View.extend({
    el: '#todo',
  
    initialize() {
      this.inputView = new InputView()
      this.listView = new ListView()

      this.$el.append(this.inputView.$el)
      this.$el.append(this.listView.$el)

      this.inputView.on('enter', e => {
       this.listView.addItem(e.target.value)
      })
    },
    
    render() {
      return this;
    }
  })
  
  new AppView();
})
