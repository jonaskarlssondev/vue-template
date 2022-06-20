import { GetterTree } from 'vuex';

import { BirdState } from '@/store';

import { State } from './state';

export type Getters = {
  activeIndex(state: State): number;
}

export const getters: GetterTree<State, BirdState> & Getters = {
  activeIndex: (state) => state.activeIndex,
};