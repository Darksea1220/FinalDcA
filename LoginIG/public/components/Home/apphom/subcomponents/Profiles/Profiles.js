export var Attribute;
(function (Attribute) {
    Attribute["img"] = "img";
    Attribute["name"] = "name";
})(Attribute || (Attribute = {}));
class MyProfile extends HTMLElement {
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
            <link rel="stylesheet" type="text/css" href="./components/Home/apphom/subcomponents/Profiles/Profiles.css">
                <div class="perfil"> 
                     <img class="picture" src="${this.img}" alt="foto de perfil de ${this.name}"></img>
                     <p>${this.name}</p>
                </div>
            `;
        }
    }
}
customElements.define("my-profile", MyProfile);
export default MyProfile;
