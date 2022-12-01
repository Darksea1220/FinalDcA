import { addUser } from "../../services/db.js";
export class Register extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a;
        this.render();
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            addUser({ email, password });
            alert("Registro exitoso, ahora prueba el login");
            const event = new CustomEvent("login-success", {
                composed: true
            });
            this.dispatchEvent(event);
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="./components/Register/Register.css">
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        <h3>Regístrate para ver fotos y videos <br> de tus amigos.</h3>
        <section>
            <app-form></app-form>
        </section>
        `;
    }
}
customElements.define("app-register", Register);
