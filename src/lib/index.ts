import RenumeratorComponent from "../routes/+page.svelte";

class Renumerator extends HTMLElement {
  connectedCallback() {
    new RenumeratorComponent({ target: this });
  }
}

customElements.define("renumerator", Renumerator);
