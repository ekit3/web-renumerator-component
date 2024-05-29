<script lang="ts">
  import type {IRateManager} from "../interfaces/IRateManager";

  export let amount = 450;
  export let rateManager: IRateManager;
</script>
  
<div class="pay">
  <span class="title">Votre salaire annuel brut</span>
  <span class="amount">{amount} €</span>
  <span class="advantage">et + de 9000€ d'<a href="{rateManager.getAvantagesLink()}">avantages sociaux</a></span>
  <a class="joinLink" href="{rateManager.getJoinUsLink()}">Envie de nous rejoindre ?</a>
</div>

<style>
  .pay {
    height: 447px;
    width: 100%;
    background: #9FF000;
    border-radius: 32px;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .pay span.title {
    margin-top: 60px;
    color: #0E130B;
    margin-bottom: 20px;
  }

  .pay span.amount {
    color: #0E130B;
    font-weight: 900;
    font-size: 60px;
    margin-bottom: 54px;
  }

  .pay .joinLink {
    display: inline-flex;
    padding: 16px 24px;
    background-color: white;
    border-radius: 11px;
    border: 0;
    color: #000;
    font-family: Montserrat,serif;
    font-size: 16px;
    font-weight: 700;
  }

  .advantage{
    margin-bottom: 20px;
  }

  .pay a {
    color: #FFFFFF;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 380px) {
    .pay span.title{
      font-size: 0.75em;
    }
  }
</style>
  