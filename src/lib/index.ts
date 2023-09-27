import RenumeratorComponent from "../routes/+page.svelte";

class Renumerator extends HTMLElement {
  connectedCallback() {
    new RenumeratorComponent({ target: this });
  }
}
if (!customElements.get("renumerator-component")) {
  customElements.define("renumerator-component", Renumerator);
}
