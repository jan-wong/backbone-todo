$(function(){

  const listCollection = new Backbone.Collection([
  ])

  const TitleView = Backbone.View.extend({
    tagName: 'div',

    className: 'todo-title',

    initialize() {
      this.$el.html('TODO')
    }
  })

  const InputView = Backbone.View.extend({
    tagName: 'input',

    className: 'todo-input',

    attributes: {
      type: 'text',
      placeholder: '输入待完成项目'
    },

    model: listCollection,

    events: {
      'keydown': 'keyAction'
    },

    keyAction(e) {
      if (e.which === 13) {
        this.model.add({
          label: e.target.value,
          checked: false
        })
        e.target.value = ''
      }
    }
  })

  const ListView = Backbone.View.extend({
    model: listCollection,
  
    template: _.template($('#todo-list').html()),

    events: {
      'mousedown .todo-item_label': 'check',
      'mousedown .todo-item_del': 'delete'
    },
  
    initialize() {
      this.render()
      this.model.on('update', _ => this.render())
      this.model.on('change', _ => this.render())
    },
  
    render() {
      this.$el.html(this.template(this.model.toJSON()))
      return this
    },

    check(e) {
      const index = this.$('.todo-item').index(
        $(e.currentTarget).parent()
      )
      const checked = $(e.currentTarget).find('input').attr('checked')
      this.model.at(index).set('checked', checked ? false : true)
    },

    delete(e) {
      const index = this.$('.todo-item').index(
        $(e.currentTarget).closest('.todo-item')
      )
      this.model.remove(this.model.at(index))
    }
  })
  
  const AppView = Backbone.View.extend({
    el: '#todo',
  
    initialize() {
      this.titleView = new TitleView()
      this.inputView = new InputView()
      this.listView = new ListView()

      this.$el.append(this.titleView.$el)
      this.$el.append(this.inputView.$el)
      this.$el.append(this.listView.$el)
    }
  })
  
  new AppView();
})
