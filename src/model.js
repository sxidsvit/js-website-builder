export const model = [
  {
    type: 'title', value: 'New test title', options: {
      tag: 'h1',
      styles: 'background: blue; color: yellow; text-align: center;'
    }
  },
  {
    type: 'text', value: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit', options: {
      tag: 'h6',
      styles: 'background: red; color: #fff; text-align: center;'
    }
  },

  {
    type: 'textColumns', value: [
      'Text 1',
      'Text 2',
      'Text 3'
    ], options: {
      tag: 'div',
      styles: 'padding: 2rem'
    }
  },
]
