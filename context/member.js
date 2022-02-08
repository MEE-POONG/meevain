import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const memberState = atom({
  key: "memberState",
  default: null,
    // username:"",
    // firstname:"",
    // lastname:"",
    // tel:""

  
  effects_UNSTABLE: [persistAtom],
});

export { memberState };
