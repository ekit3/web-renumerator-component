<svelte:options customElement="renumerator-component" />

<script lang="ts">
  import { RateManagerFactory } from '../classes/rateManagerFactory'
  import type { IRateManager } from '../interfaces/IRateManager';
  import type { Company } from '../enums/company'
  import Renumerator from '../components/Renumerator.svelte';
  import Pay from '../components/Pay.svelte';
  export let company: string;
  let rateManager: IRateManager = RateManagerFactory.create(company as Company);
  let selectedDevType: string;
  let experience: number;
  let tjm: number;
  let amount: number;
  $: amount = rateManager.getSalary(experience,selectedDevType,tjm) || 0;
</script>
  <div class="component">
    <div class="block">
      <Renumerator bind:selectedDevType bind:experience bind:tjm rateManager={rateManager} />
    </div>
    <div class="block">
      <Pay bind:amount />
    </div>
  </div>

<style>

  .component {
    display: flex;
    justify-content: center;
    width: 100%;
    color: #FFF;
    font-family: Montserrat,serif;
    font-size: 16px;
    font-weight: 500;
  }

  .block {
    min-width: 280px;
    width: 50%;
    position: relative;
    z-index: 1;
  }

  .block:nth-child(1){
    margin-right: 24px;
  }

  @media screen and (max-width: 1280px) {
    /* Styles pour les écrans de largeur 768px et plus */
    .block {
      width: 100%;
      margin-bottom: 1.5em;
    }
    .component{
      flex-direction: column;
    }

  }

</style>