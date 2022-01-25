import { atom } from 'recoil';

import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const navActiveState = atom({
  key: 'navActiveState',
  default: '/',
  effects_UNSTABLE: [persistAtom]
});
export { navActiveState };