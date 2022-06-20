import { ActionTree, ActionContext } from 'vuex';

import { BirdState } from '@/store';

import { State } from './state';
import { Mutations } from './mutations';
import { AppMutationTypes } from './mutations.types';
import { AppActionTypes } from './actions.types';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, BirdState>, 'commit'>

export interface Actions {
  [AppActionTypes.SET_NAVIGATION_ACTIVE_INDEX](
    { commit }: AugmentedActionContext,
    index: number,
  ): Promise<void>;
}

export const actions: ActionTree<State, BirdState> & Actions = {
  async [AppActionTypes.SET_NAVIGATION_ACTIVE_INDEX]({ commit }, index: number) {
    return new Promise(() => {
      commit(AppMutationTypes.SET_NAVIGATION_ACTIVE_INDEX, index)
    });
  },
};
