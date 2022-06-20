import { MutationTree } from 'vuex';

import { AppMutationTypes } from './mutations.types';
import { State } from './state';

export type Mutations<S = State> = {
  [AppMutationTypes.SET_NAVIGATION_ACTIVE_INDEX](state: S, index: number): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [AppMutationTypes.SET_NAVIGATION_ACTIVE_INDEX](state: State, index: number) {
    state.activeIndex = index;
  },
};