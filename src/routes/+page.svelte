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
  let amount: number;
  $: amount = experience * (rateManager?.getRate(selectedDevType) || 0);
</script>

  <div class="component">
    <div class="block">
      <Renumerator bind:selectedDevType bind:experience rateManager={rateManager} />
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
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
  }

  .block {
    width: 40%;
  }

  .block:nth-child(1){
    margin-right: 24px;
  }
 
</style>