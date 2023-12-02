<script lang="ts">
  export let amount = 450;
</script>
  
<div class="pay">
  <span class="title">Votre salaire annuel brut</span>
  <span class="amount">{amount} €</span>
  <button>Envie de nous rejoindre ?</button>
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

  .pay button {
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

  @media screen and (max-width: 380px) {
    .pay span.title{
      font-size: 0.75em;
    }
  }
</style>
  