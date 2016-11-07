import { PUSH_ROUTE, POP_ROUTE, SELECT_TAB } from '../constants/ActionTypes';
import { NavigationExperimental } from 'react-native';
const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental;

const initialState = {
  // application tabs
  tabs: {
    index: 1,
    routes: [
      {key: 'home'},
      {key: 'about'},
      {key: 'contact'},
    ],
  },
  // scenes for the `home` tab
  home: {
    index: 0,
    routes: [{ key: 'home', title: 'Home' }],
  },
  // scenes for the `about` tab
  about: {
    index: 0,
    routes: [{ key: 'about', title: 'About' }],
  },
  // scenes for the `contact` tab
  contact: {
    index: 0,
    routes: [{ key: 'contact', title: 'Contact us' }],
  },
}

function navigationState (state = initialState, action) {
  switch (action.type) {

    case PUSH_ROUTE: {
      // Push a route into the scenes stack.
      const route = action.route;
      const {tabs} = state;
      const tabKey = tabs.routes[tabs.index].key;
      const scenes = state[tabKey];console.log(scenes);
      const nextScenes = NavigationStateUtils.push(scenes, route);
      if (scenes !== nextScenes) {
        return {
          ...state,
          [tabKey]: nextScenes,
        };
      }
    }

    case POP_ROUTE: {
      // Pops a route from the scenes stack.
      const {tabs} = state;
      const tabKey = tabs.routes[tabs.index].key;
      const scenes = state[tabKey];
      const nextScenes = NavigationStateUtils.pop(scenes);
      if (scenes !== nextScenes) {
        return {
          ...state,
          [tabKey]: nextScenes,
        };
      }
    }

    case SELECT_TAB: {
      // Switches the tab.
      const tabKey = action.tabKey;
      const tabs = NavigationStateUtils.jumpTo(state.tabs, tabKey);
      if (tabs !== state.tabs) {
        return {
          ...state,
          tabs,
        };
      }
    }

   default:
     return state;

  }
}

function navigationParams(state = {}, action) {
  switch (action.type) {
    case PUSH_ROUTE:
      return action.route;

     default:
       return state;
  }
}

export {navigationState as default, navigationParams};
