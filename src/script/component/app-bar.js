class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
        <h2>
            <span class="movie">Movie.</span>
            <span class="time">Time</span>
        </h2>
        `;
    }
}

customElements.define("app-bar", AppBar);