<script lang="ts">
  import Select, {Option} from '@smui/select';
  import type {IRateManager} from '../interfaces/IRateManager';
  import minusSvg from '../images/minus-icon.svg?url';
  import plusSvg from '../images/plus-icon.svg?url';

  export let rateManager: IRateManager;
  export let experience = 2;
  export let tjm = rateManager.getMinTJMValue();
  export let selectedDevType: string;
  let minExperience = rateManager.getMinExperienceValue();
  let minTjm = rateManager.getMinTJMValue();
  const devTypes = rateManager.getRateList();
</script>
<div class="renumerator">
  <span class="title">Votre métier</span>

  <Select
      class="shaped-outlined"
      variant="outlined"
      bind:value={selectedDevType}
      on:click={() => tjm = rateManager.updateTJM(experience, selectedDevType)}
  >
    {#if !selectedDevType}
      <Option value="" disabled>Sélectionnez un poste</Option>
    {/if}
    {#each devTypes as devType}
      <Option value={devType.name}>{devType.name}</Option>
    {/each}
  </Select>

  <div class="container">
    <div class="half-block">
      <span class="title">Années d'expérience</span>
      <div class="flex">
        <button on:click={() => experience = Math.max(minExperience, experience - 1)}
                on:click={() => tjm = rateManager.updateTJM(experience, selectedDevType)}>
          <img src={minusSvg} alt="Minus Svg icon" class="img-btn">
        </button>
        <span>{experience}</span>
        <button on:click={() => experience += 1}
                on:click={() => tjm = rateManager.updateTJM(experience, selectedDevType)}>
          <img src={plusSvg} alt="Plus Svg icon" class="img-btn">
        </button>
      </div>
    </div>
    <div class="half-block">
      <span class="title">TJM</span>
      <div class="flex">
        <button on:click={() => tjm = Math.max(minTjm, tjm - 10)}>
          <img src={minusSvg} alt="Minus Svg icon" class="img-btn">
        </button>
        <span>{tjm}</span>
        <button on:click={() => tjm += 10}>
          <img src={plusSvg} alt="Plus Svg icon" class="img-btn">
        </button>
      </div>
    </div>
  </div>
</div>

<style>

  @import "https://ekit3.github.io/web-renumerator-component/dist/smui.css";

  .renumerator {
    display: flex;
    padding: 77px 40px;
    width: calc(100% - 80px);
    flex-shrink: 0;
    border-radius: 32px;
    background: linear-gradient(180deg, #1D211A 0%, #1D2E0E 100%);
    box-shadow: 0 24px 44px 0 rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(22px);
    flex-direction: column;
  }

  .renumerator .half-block {
    display: flex;
    flex-direction: column;
    width: 50%;
    box-sizing: border-box;
  }

  .renumerator .half-block span.title {
    margin-bottom: 40px;
    text-align: center;
    display: block;
    flex:1;
  }

  .renumerator .flex {
    justify-content: space-around;
    display: flex;
    flex: 1;
  }

  .renumerator .flex button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .renumerator .flex span {
    font-size: 2em;
    font-weight: 900;
    margin: 5px 2px;
  }

  .renumerator .title {
    margin-bottom: 16px;
    text-align: left;
  }

  .renumerator .container {
    display: flex;
    align-self: center;
    width: 100%;
    margin-top:40px;
  }

  /* overide selectBox */

  * :global(.mdc-select__dropdown-icon-graphic) {
    fill: white !important;
  }

  * :global(.mdc-select__selected-text) {
    color: white !important;
  }

  * :global(.mdc-select__selected-text) {
    font-size: 16px;
    font-weight: 500;
    font-family: Montserrat, serif;
  }

  * :global(.mdc-deprecated-list-item--selected) {
    background-color: #0E130B;
    color: white !important;
  }

  :global(.mdc-select__menu) {
    background: #404639;
    color: white;
  }

  :global(.mdc-select__menu li) {
    color: white;
  }

  :root {
    --mdc-theme-primary: rgba(255, 255, 255, 0.6);
  }

  :global(.smui-select__line-ripple) {
    border-color: yellow;
  }

  :global(.smui-select__dropdown-icon) {
    color: grey;
  }


  :global(.smui-select--focused .smui-select__line-ripple) {
    border-color: blue;
  }

  * :global(.mdc-select) {
    background: rgba(255, 255, 255, 0.10);
  }

  * :global(.mdc-select__anchor) {
    height: 100px;
  }

  * :global(.shaped-outlined),
  * :global(.shaped-outlined .mdc-select__anchor) {
    border-radius: 24px;
  }

  * :global(.shaped-outlined .mdc-text-field__input) {
    padding-left: 32px;
    padding-right: 0;
  }

  * :global(.shaped-outlined
    .mdc-notched-outline
    .mdc-notched-outline__leading) {
    border-radius: 24px 0 0 24px;
    border-color: rgba(255, 255, 255, 0.6);
    width: 28px;
  }

  * :global(.shaped-outlined
    .mdc-notched-outline
    .mdc-notched-outline__trailing) {
    border-color: rgba(255, 255, 255, 0.6);
    border-radius: 0 24px 24px 0;
  }

  * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch) {
    border-color: rgba(255, 255, 255, 0.6);
  }

  .img-btn {
    width: 3em;
  }

  @media screen and (max-width: 380px) {
    .img-btn {
      width: 1.5em;
    }
    .renumerator .flex span {
      font-size: 1.5em;
    }

  }


</style>
  
