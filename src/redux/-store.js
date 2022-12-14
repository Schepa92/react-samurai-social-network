import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

let store = {
  _state: {
    profilePage: {
      postData: [
        {
          id: 1,
          message: 'How are you?',
          likesCount: 12,
        },
        {
          id: 2,
          message: 'My friend',
          likesCount: 72,
        },
        {
          id: 1,
          message: 'How are you?',
          likesCount: 12,
        },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogsData: [
        {
          name: 'Sergey',
          id: 1,
        },
        {
          name: 'Andrew',
          id: 2,
        },
        {
          name: 'Alex',
          id: 3,
        },
        {
          name: 'Vlad',
          id: 4,
        },
      ],
      messagesData: [
        {
          message: 'Hello',
          id: 1,
        },
        {
          message: 'Helweerefdlo',
          id: 2,
        },
        {
          message: 'Aldfsewex',
          id: 3,
        },
        {
          message: 'Vwefewflad',
          id: 4,
        },
      ],
      newMessageText: '',
    },
    sidebar: [
      {
        name: 'Sergey',
        url: 'https://cspromogame.ru//storage/upload_images/avatars/856.jpg',
      },
      {
        name: 'Andrew',
        url: 'https://cspromogame.ru//storage/upload_images/avatars/858.jpg',
      },
      {
        name: 'Alex',
        url: 'https://cspromogame.ru//storage/upload_images/avatars/4169.jpg',
      },
      {
        name: 'Valera',
        url: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg',
      },
    ],
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;
