import "../index.js";
export class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <hom-container></hom-container>
        `;
    }
}
customElements.define("app-home", Home);
