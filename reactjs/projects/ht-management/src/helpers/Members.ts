import MDKRouter from "@src/Members/MDK";
import NVTPRouter from "@src/Members/NVTP/src/Router";
import LQPTRouter from "@src/Members/LPQT/Router";
import NHHRouter from "@src/Members/NHH/Router";
import LHMTuanRouter from "@src/Members/LHMTuan/Router";
// import TTBRouter from "@src/Members/TTB";

export const MEMBERS = [
  //   { id: "0", name: "LHMT" },
  { id: "1", name: "LPQT", pages: LQPTRouter },
  { id: "2", name: "MDK", pages: MDKRouter },
  { id: "3", name: "NHH", pages: NHHRouter },
  { id: "4", name: "NVTP", pages: NVTPRouter },
  //   { id: "5", name: "PBT" },
  //   { id: "6", name: "TTB", pages: TTBRouter },
  { id: "7", name: "LHMTuan", pages: LHMTuanRouter },
];
