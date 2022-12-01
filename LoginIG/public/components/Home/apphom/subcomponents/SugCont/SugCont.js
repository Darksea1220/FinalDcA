import sugdata from "../../sugdata.js";
import { Attribute } from "../Suggestions/Suggestions.js";
class MySuggestionContainer extends HTMLElement {
    constructor() {
        super();
        this.suggested = [];
        this.attachShadow({ mode: "open" });
        sugdata.forEach((p) => {
            const suggestionsCard = this.ownerDocument.createElement("my-suggestions");
            suggestionsCard.setAttribute(Attribute.img, p.img);
            suggestionsCard.setAttribute(Attribute.name, p.name);
            this.suggested.push(suggestionsCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = "";
            this.suggested.forEach((suggestions) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(suggestions);
            });
        }
    }
}
customElements.define("my-sugcont", MySuggestionContainer);
export default MySuggestionContainer;
