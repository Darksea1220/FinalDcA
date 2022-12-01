export var Attribute;
(function (Attribute) {
    Attribute["clase"] = "clase";
    Attribute["image"] = "image";
})(Attribute || (Attribute = {}));
class MyUser extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            clase: null,
            image: null,
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
            <link rel="stylesheet" type="text/css" href="./components/Home/apphom/subcomponents/User/User.css">
                <div> 
                    <img class="${this.clase}"src="${this.image}" alt="foto de perfil de usted"></img>
                </div>
            `;
        }
    }
}
customElements.define("my-user", MyUser);
export default MyUser;
