/**
 * @typedef {'input'|'toggle'|'show'|'hide'} ShowPasswordElementBehavior
 */ /**
 * Allows the user to toggle the visibility of the text in a password field.
 *
 * ---
 *
 * @customElement show-password
 * @attr input
 * @attr visible
 * @slot toggle
 * @slot toggle-content
 * @part toggle
 * @part toggle-pressed
 * @fires show-password-toggle
 *
 * ---
 *
 * ### Basic Usage:
 *
 * ```html
 * <show-password>
 *   <input type="password">
 * </show-password>
 * ```
 *
 * ---
 *
 * ### Custom Button:
 *
 * ```html
 * <show-password>
 *   <input type="password">
 *   <button type="button" slot="toggle" data-behavior="toggle">Show</button>
 * </show-password>
 * ```
 *
 * ---
 *
 * ### Show/Hide Buttons:
 *
 * ```html
 * <show-password>
 *   <input type="password">
 *   <span slot="toggle">
 *     <button type="button" data-behavior="show">Show</button>
 *     <button type="button" data-behavior="hide">Hide</button>
 *   </span>
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
        this.#updateDom();
    }
    connectedCallback() {
        this.attachShadow({
            mode: "open"
        });
        if (!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
      <slot></slot>

      <slot name="toggle">
        <button type="button" part="toggle">
          <slot name="toggle-content">Show</slot>
        </button>
      </slot>

      <style>
        :host {
          display: inline-block;
        }

        button {
          background: ButtonFace;
          color: ButtonText;
          border-color: ButtonBorder;
        }

        button[aria-pressed="true"] {
          background: AccentColor;
          color: AccentColorText;
          border-color: AccentColor;
        }
      </style>
    `;
        this.#shadowButton?.addEventListener("click", this.#handleClickShadowButton.bind(this));
        this.addEventListener("click", this.#handleClick.bind(this));
        this.#updateDom();
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
        this.#updateDom();
    }
    #visible = false;
    /**
   * @returns {HTMLButtonElement|null}
   */ get #shadowButton() {
        return this.shadowRoot?.querySelector("button") || null;
    }
    /**
   * @returns {HTMLElement|null}
   */ get #toggleButton() {
        return this.#getByBehavior("toggle") || this.#shadowButton;
    }
    /**
   * @param {ShowPasswordElementBehavior} behavior
   * @returns {HTMLElement|null}
   */ #getByBehavior(behavior) {
        return this.querySelector(`[data-behavior="${behavior}"]`) || null;
    }
    /**
   * @param {ShowPasswordElementBehavior} behavior
   * @param {string}                      elementSelector
   * @returns {HTMLElement[]}
   */ #getAllByBehavior(behavior, elementSelector = "*") {
        // @ts-ignore
        return [
            ...this.querySelectorAll(`${elementSelector}[data-behavior="${behavior}"]`)
        ];
    }
    /**
   * @param {HTMLElement}                   el
   * @param {ShowPasswordElementBehavior}   behavior
   * @returns {boolean}
   */ #elementHasBehavior(el, behavior) {
        return Boolean(el.closest(`[data-behavior="${behavior}"]`));
    }
    /**
   * @returns {HTMLInputElement[]}
   */ get #passwordInputs() {
        /** @type {HTMLInputElement[]} */ // @ts-ignore
        const inputs = this.#getAllByBehavior("input", "input");
        if (inputs.length === 0) // @ts-ignore
        return [
            ...this.querySelectorAll('input:is([type="text"], [type="password"])')
        ];
        return inputs;
    }
    /**
   * @returns {void}
   */ #tryToggle() {
        if (this.dispatchEvent(new CustomEvent("show-password-toggle", {
            bubbles: true
        }))) {
            this.visible = !this.visible;
            this.#updateDom();
        }
    }
    /**
   * @returns {void}
   */ #handleClickShadowButton(event) {
        console.log(event.currentTarget, event.target);
        this.#tryToggle();
    }
    /**
   * @param {MouseEvent} event
   * @returns {void}
   */ #handleClick(event) {
        /** @type {HTMLElement} */ // @ts-ignore
        const el = event.target;
        if (this.#elementHasBehavior(el, "toggle") || this.#elementHasBehavior(el, "show") && !this.visible || this.#elementHasBehavior(el, "hide") && this.visible) this.#tryToggle();
    }
    /**
   * @returns {void}
   */ #updateDom() {
        const { visible: visible } = this;
        const passwordInputs = this.#passwordInputs;
        const toggle = this.#toggleButton;
        const shadowButton = this.#shadowButton;
        [
            ...passwordInputs
        ].forEach((input)=>input.type = visible ? "text" : "password");
        if (toggle) toggle.setAttribute("aria-pressed", visible ? "true" : "false");
        if (shadowButton) shadowButton.setAttribute("part", visible ? "toggle toggle-pressed" : "toggle");
    }
}




export {$eeecd72dffd1be23$export$2e2bcd8739ae039 as ShowPasswordElement};
//# sourceMappingURL=index.js.map
