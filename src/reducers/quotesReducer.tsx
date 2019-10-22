const initialState = {
  quotes: [
    {
      quote:
        'Tortor lacinia euismod sit amet at mauris. Duis dapibus sed ante ac dapibus. Pellentesque consequat erat non turpis auctor volutpat.',
      person: 'Vestibulum Phasellus'
    },
    {
      quote:
        'Suspendisse quis est sit amet tortor lacinia euismod sit amet at mauris. Duis dapibus sed ante ac dapibus.',
      person: 'Vestibulum Phasellus'
    },
    {
      quote:
        'Sit amet tortor lacinia euismod sit amet at mauris. Pellentesque consequat erat non turpis auctor volutpat.',
      person: 'Vestibulum Phasellus'
    },
    {
      quote:
        'Suspendisse quis est sit amet tortor lacinia euismod sit. Duis dapibus sed ante ac dapibus.',
      person: 'Vestibulum Phasellus'
    },
    {
      quote:
        'Quis est sit amet tortor lacinia euismod sit amet at mauris. Duis dapibus sed ante ac dapibus. Pellentesque consequat erat.',
      person: 'Vestibulum Phasellus'
    },
    {
      quote:
        'Lorem Ipsum quis est sit amet tortor lacinia euismod sit amet at mauris. Duis dapibus sed ante ac dapibus.',
      person: 'Vestibulum Phasellus'
    }
  ]
};
export default (state = initialState, action: any): any => {
 switch (action.type) {
  case 'QUOTES_ACTION':
   return {
    quotes: [
      ...action.quotes
    ]
   }
  default:
   return state
 }
}