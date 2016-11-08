import { PUSH_ROUTE, POP_ROUTE, SELECT_TAB } from '../constants/ActionTypes';

export function push (route) {
  return {
    type: PUSH_ROUTE,
    route
  }
}

export function pop () {
  return {
    type: POP_ROUTE
  }
}

export function selectTab(tabKey) {
  return {
    type: SELECT_TAB,
    tabKey
  }
}
