import userdata from "../../userdata.js";
export var Attribute;
(function (Attribute) {
    Attribute["nameuser"] = "nameuser";
    Attribute["imguser"] = "imguser";
})(Attribute || (Attribute = {}));
class MySuggest extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            nameuser: null,
            imguser: null,
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
            <link rel="stylesheet" type="text/css" href="./components/Home/apphom/subcomponents/Recomendations/Recomendations.css">
                <section class="suggestions">
                    <div class="theuser"> 
                        <my-user clase=usersug image="${userdata}"></my-user>
                        <p>${this.nameuser}</p>
                        <p class="cambiar">Cambiar</p>
                    </div>
                    <div class="mid">
                        <p class="spt">Sugerencias para ti<p>
                        <p class="vt">Ver todo<p>
                    </div>
                    <div class="igprofile">
                        <img class="iglogo" src="https://github.com/Darksea1220/ComponenteIG/blob/main/Imagesland/IGsug.png?raw=true" alt="perfil de instagram"></img>
                        <div class="igname">
                            <div class="nameig">instagram</div>
                            <div class="nameig"id="ioa">Instagram Official Account</div>
                            </div>
                            <p class="cambiar">Seguir</p>
                        </div>
                            <my-sugcont></my-sugcont>
                </secction>
            `;
        }
    }
}
customElements.define("my-recomend", MySuggest);
export default MySuggest;
