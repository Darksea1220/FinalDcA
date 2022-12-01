import data from "../../data.js";
import { Attribute } from "../Profiles/Profiles.js";
class MyProfileContainer extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.attachShadow({ mode: "open" });
        data.forEach((p) => {
            const profileCard = this.ownerDocument.createElement("my-profile");
            profileCard.setAttribute(Attribute.img, p.img);
            profileCard.setAttribute(Attribute.name, p.name);
            this.profiles.push(profileCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = "";
            this.profiles.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
        }
    }
}
customElements.define("my-pcont", MyProfileContainer);
export default MyProfileContainer;
