/**
 * Allows the user to toggle the visibility of the text in a password field
 *
 * @customElement show-password
 * @attr input
 * @attr visible
 * @fires toggle
 *
 * ```html
 * <show-password>
 *   <input type="password">
 *   <button slot="hide-button">Hide PW</button>
 *   <button slot="show-button">Show PW</button>
 * </show-password>
 * ```
 */ class $eeecd72dffd1be23$export$2e2bcd8739ae039 extends HTMLElement {
    static observedAttributes = [
        "visible"
    ];
    constructor(){
        super();
        this.visible = this.hasAttribute("visible");
    }
    /**
   * @param {string} name
   * @param {string|null} oldVal
   * @param {string|null} newVal
   */ attributeChangedCallback(name, oldVal, newVal) {
        if (name === "visible") this.#visible = newVal !== null;
        this.#updateInput();
    }
    connectedCallback() {
        this.attachShadow({
            mode: "open"
        });
        if (!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
      <slot></slot>
      <slot name="toggle"><button type="button" part="toggle" aria-pressed="false">Show</button></slot>

      <style>
        :host {
          display: inline-block;
        }

        [part="toggle"] {
          background: ButtonFace;
          color: ButtonText;
          border-color: ButtonBorder;
        }

        [part="toggle"][aria-pressed="true"] {
          background: AccentColor;
          color: AccentColorText;
          border-color: AccentColor;
        }
      </style>
    `;
        this.#toggleSlot?.addEventListener("click", this.#handleClick.bind(this));
        this.#updateInput();
    }
    /**
   * @returns {boolean}
   */ get visible() {
        return this.#visible;
    }
    /**
   * @param {boolean} value
   */ set visible(value) {
        this.#visible = value;
        if (this.#visible) this.setAttribute("visible", "");
        else this.removeAttribute("visible");
        this.#updateInput();
    }
    #visible = false;
    /**
   * @returns {HTMLSlotElement|null}
   */ get #toggleSlot() {
        return this.shadowRoot?.querySelector('slot[name="toggle"]') || null;
    }
    /**
   * @returns {HTMLButtonElement|null}
   */ get #toggle() {
        return this.querySelector('button[slot="toggle"], [slot="toggle"] button') || this.shadowRoot?.querySelector('button[part~="toggle"]') || null;
    }
    /**
   * @returns {HTMLInputElement|null}
   */ get #passwordInput() {
        return this.querySelector('input:is([type="text"], [type="password"])') || null;
    }
    /**
   * @param {MouseEvent} event
   * @returns {void}
   */ #handleClick(event) {
        if (!(event.target instanceof HTMLButtonElement)) return;
        if (this.dispatchEvent(new CustomEvent("show-password-toggle", {
            bubbles: true
        }))) {
            this.visible = !this.visible;
            this.#updateInput();
        }
    }
    /**
   * @returns {void}
   */ #updateInput() {
        const { visible: visible } = this;
        const passwordInput = this.#passwordInput;
        const toggle = this.#toggle;
        if (passwordInput) passwordInput.type = visible ? "text" : "password";
        if (toggle) toggle.setAttribute("aria-pressed", visible ? "true" : "false");
    }
}




export {$eeecd72dffd1be23$export$2e2bcd8739ae039 as ShowPasswordElement};
//# sourceMappingURL=index.js.map
