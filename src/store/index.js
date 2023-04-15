import { proxy } from "valtio";

const state = proxy({
    intro: true,
    templateSelection: false,
    resumeMaker: false,
    selectedTemplate: "",
    result: false,
});

export default state;
