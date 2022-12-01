import "./components/index.js";
enum Screens {
    login,
    register,
    home
}
class AppContainer extends HTMLElement{
    screen: Screens = Screens.home;
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
        const login2 = this.shadowRoot?.querySelector("app-register");
        login2?.addEventListener("login-success", ()=>{
            this.screen = Screens.login;
            this.render();
        })
        
    }
    changeToLogin(){
        const login = this.shadowRoot?.querySelector("app-login");
        login?.addEventListener("login-success", ()=>{
            this.screen = Screens.home;
            this.render();
        })
    }
    render(){
        if(!this.shadowRoot) return;
        switch (this.screen) {
            case Screens.home:
                this.shadowRoot.innerHTML = " <app-home></app-home>"
                break;
        
            case Screens.login:
                this.shadowRoot.innerHTML = "<app-login></app-login>"
                this.changeToLogin();
            break;
            
            case Screens.register:
                this.shadowRoot.innerHTML = "<app-register></app-register>"
            break;

            default:
                break;
        }
    }
}
customElements.define("app-container",AppContainer);