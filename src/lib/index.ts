import RenumeratorComponent from "../routes/+page.svelte";

class Renumerator extends HTMLElement {
  connectedCallback() {
    let getCompany = this.getAttribute("company");
    const company = getCompany != null ? getCompany : "";
    new RenumeratorComponent({ target: this, props: { company } });
  }
}
if (!customElements.get("renumerator-component")) {
  customElements.define("renumerator-component", Renumerator);
} else {
  console.log("déjà présent !");
}
