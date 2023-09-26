<script lang="ts">
    import Select, { Option } from '@smui/select';
    import type { IRateManager } from '../interfaces/IRateManager';
    
    export let rateManager: IRateManager;
    export let experience = 3;
    export let selectedDevType: string;
    let minExperience = rateManager.getMinExperienceValue();
    let minTjm = rateManager.getMinTjmValue();
    const devTypes = rateManager.getRateList();
  </script>
  <div class="renumerator">
    <span class="title">Votre métier</span>
  
    <Select 
      class="shaped-outlined"
      variant="outlined"
      bind:value={selectedDevType}
    >
      {#if !selectedDevType}
        <Option value="" disabled>Sélectionnez un poste</Option>
      {/if}
      {#each Array.from(devTypes.keys()) as devType}
        <Option value={devType}>{devType}</Option>
      {/each}
    </Select>
  
    <div class="container">
      <div class="half-block">
        <span class="title">Année d'expérience</span>
        <div class="flex">
          <button on:click={() => experience = Math.max(minExperience, experience - 1)}>
            <img src="minus-icon.svg" alt="Minus Svg icon">
          </button>
          <span>{experience}</span>
          <button on:click={() => experience += 1}>
            <img src="plus-icon.svg" alt="Plus Svg icon">
          </button>
        </div>
      </div>
    </div>
  </div>
  
<style>
  .renumerator {
    display: flex;
    padding: 80px 40px;
    width: calc(100% - 80px);
    height: calc(447px - 160px);
    flex-shrink: 0;
    border-radius: 32px;
    background: linear-gradient(180deg, #1D211A 0%, #1D2E0E 100%);
    box-shadow: 0px 24px 44px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(22px);
    flex-direction: column;
  }

  .renumerator .half-block {
    width: 50%;
  }

  .renumerator .half-block {
    margin-top: 40px;
  }
  .renumerator .half-block span.title {
    margin-bottom: 40px;
    text-align: center;
    display: block;
  }

  .renumerator .flex {
    justify-content: center;
    display: flex;
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
    font-size: 40px;
    font-weight: 900;
    margin: 0 24px;
  }

  .renumerator .title {
    margin-bottom: 16px;
  }

  .renumerator .container {
    display: flex;
  }

  /* overide selectBox */
  
  * :global(.mdc-select__dropdown-icon-graphic) {
    fill: white !important;
  }

  * :global(.mdc-select__selected-text) {
    color: white !important;
  }

  * :global(.mdc-select__selected-text){
    font-size: 16px;
    font-weight: 500;
    font-family: Montserrat;
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
    color: gray;
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

</style>
  