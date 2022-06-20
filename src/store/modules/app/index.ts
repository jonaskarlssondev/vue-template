import {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  Module,
} from 'vuex';

import { BirdState } from '@/store';
import type { State } from './state';
export { State };

import { state } from './state';
import { getters, Getters } from './getters';
import { actions, Actions } from './actions';
import { mutations, Mutations } from './mutations';


export type AppStore<S = State> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  };
};

export const store: Module<State, BirdState> = {
  state,
  getters,
  mutations,
  actions,
}