import { createStore } from 'vuex';

import { store as app, AppStore, State as AppState } from '@/store/modules/app';

export type BirdState = {
  app: AppState;
};

export type Store = AppStore<Pick<BirdState, 'app'>>;

export const store = createStore({
  modules: {
    app,
  },
});