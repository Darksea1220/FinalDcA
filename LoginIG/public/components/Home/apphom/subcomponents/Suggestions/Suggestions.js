export var Attribute;
(function (Attribute) {
    Attribute["img"] = "img";
    Attribute["name"] = "name";
})(Attribute || (Attribute = {}));
class MySuggestions extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            img: null,
            name: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" type="text/css" href="./components/Home/apphom/subcomponents/Suggestions/Suggestions.css">
            <div class="igprofile">
                <img class="iglogo" src="${this.img}" alt="imagen de perfil de ${this.name}"></img>
                <div class="igname">
                    <div class="nameig">${this.name}</div>
                    <div class="nameig"id="ioa">Recomendado por Instagram</div>
                    </div>
                    <p class="cambiar">Seguir</p>
            </div>
            `;
        }
    }
}
customElements.define("my-suggestions", MySuggestions);
export default MySuggestions;
