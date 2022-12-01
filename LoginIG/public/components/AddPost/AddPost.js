export var Attribute;
(function (Attribute) {
    Attribute["ubication"] = "ubication";
    Attribute["post"] = "post";
    Attribute["views"] = "views";
    Attribute["description"] = "description";
})(Attribute || (Attribute = {}));
var x = Math.floor(Math.random() * 101) + 1;
var v = x.toString();
export class AddPost extends HTMLElement {
    constructor() {
        super();
        this["ubication"] = "";
        this["post"] = "";
        this["views"] = v + "k views";
        this["description"] = "";
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            ubication: null,
            post: null,
            views: null,
            description: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        var _a, _b, _c, _d;
        this.render();
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("button");
        btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
            const event = new CustomEvent("post-fullfiled", {
                detail: { ubication: this.ubication, post: this.post, views: this.views, description: this.description },
                composed: true
            });
            this.dispatchEvent(event);
        });
        const ubicationInput = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('input[id="2"]');
        const postInput = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('input[id="3"]');
        const descriptionInput = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('input[id="4"]');
        ubicationInput === null || ubicationInput === void 0 ? void 0 : ubicationInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.ubication = value;
        });
        postInput === null || postInput === void 0 ? void 0 : postInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.post = value;
        });
        descriptionInput === null || descriptionInput === void 0 ? void 0 : descriptionInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.description = value;
        });
    }
    attributeChangedCallback(propName, oldvalue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" type="text/css" href="./components/AddPost/AddPost.css">
            <aside class="createpost" id="asde">
                <label>Digite su ubicación</label>
                <input type="text" id="2"></input>

                <label>Ingrese el enlace de la imágen que desea publicar</label>
                <input type="text" id="3"></input>

                <label>Ingrese la descripción que desea publicar</label>
                <input type="text" id="4"></input>

                <button type="submit">Publicar</button>
            </aside>

            `;
        }
    }
}
customElements.define("add-post", AddPost);
