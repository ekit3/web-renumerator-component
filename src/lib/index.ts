import RenumeratorComponent from "../routes/+page.svelte";

class Renumerator extends HTMLElement {
  connectedCallback() {
    const company = this.getAttribute("company");
    new RenumeratorComponent({ target: this, props: { company } });
  }
}
if (!customElements.get("renumerator-component")) {
  customElements.define("renumerator-component", Renumerator);
}
