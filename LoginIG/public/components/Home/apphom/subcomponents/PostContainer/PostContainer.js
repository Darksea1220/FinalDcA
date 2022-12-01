var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { listenPost } from "../../../../../services/db.js";
class MyPostContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            listenPost((igdata) => {
                console.log(igdata);
                this.render(igdata);
            });
        });
    }
    render(igdata) {
        if (this.shadowRoot) {
            const print = igdata.map(p => {
                return `<my-post profileimg="${p.data.profileimg}" name="${p.data.name}" ubication="${p.data.ubication}" post="${p.data.post}" views="${p.data.views}" description="${p.data.description}"></my-post>`;
            });
            this.shadowRoot.innerHTML = print.join('');
        }
    }
}
customElements.define("my-postcont", MyPostContainer);
export default MyPostContainer;
