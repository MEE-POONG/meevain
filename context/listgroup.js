import { atom } from 'recoil';

import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const listGroupState = atom({
    key: 'listGroup',
    default: { 
      
      name: "",
      color:""
    } ,
    effects_UNSTABLE: [persistAtom]
  });
  export { listGroupState };