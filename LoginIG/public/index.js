import "./components/index.js";
var Screens;
(function (Screens) {
    Screens[Screens["login"] = 0] = "login";
    Screens[Screens["register"] = 1] = "register";
    Screens[Screens["home"] = 2] = "home";
})(Screens || (Screens = {}));
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.screen = Screens.home;
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a;
        this.render();
        const login2 = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-register");
        login2 === null || login2 === void 0 ? void 0 : login2.addEventListener("login-success", () => {
            this.screen = Screens.login;
            this.render();
        });
    }
    changeToLogin() {
        var _a;
        const login = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-login");
        login === null || login === void 0 ? void 0 : login.addEventListener("login-success", () => {
            this.screen = Screens.home;
            this.render();
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        switch (this.screen) {
            case Screens.home:
                this.shadowRoot.innerHTML = " <app-home></app-home>";
                break;
            case Screens.login:
                this.shadowRoot.innerHTML = "<app-login></app-login>";
                this.changeToLogin();
                break;
            case Screens.register:
                this.shadowRoot.innerHTML = "<app-register></app-register>";
                break;
            default:
                break;
        }
    }
}
customElements.define("app-container", AppContainer);
