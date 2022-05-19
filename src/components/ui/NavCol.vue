<template>
    <header class="navbar logo">
        <a class="company-logo navbar-brand col-md-2 col-lg-1 me-0 px-3" href="#">
            <img alt="Logo" class="logo" src="@/assets/images/pharmaste-logo.svg" width="72" height="72" />
            <br>
            PharmAste
        </a>
    </header>

    <nav id="sidebarMenu">
        <RouterLink to="/" @click="title.changeTitle('Jedwali')">Jedwali<ChartIcon /></RouterLink>
        <RouterLink to="/sales" @click="title.changeTitle('Mauzo')">Mauzo<DollarIcon /></RouterLink>
        <RouterLink to="/orders" @click="title.changeTitle('Oda')">Oda<ShoppingIcon /></RouterLink>
        <RouterLink to="/products" @click="title.changeTitle('Bidhaa')">Bidhaa<CapsulesIcon /></RouterLink>
        <RouterLink to="/settings" @click="title.changeTitle('Mipangilio')">Mipangilio<GearIcon /></RouterLink>
    </nav>
</template>

<script setup lang="ts">
    import { RouterLink } from "vue-router";
    import { useTitle } from '@/stores/title'

    import ChartIcon from '@/components/icons/IconChart.vue'
    import DollarIcon from '@/components/icons/IconDollar.vue'
    import ShoppingIcon from '@/components/icons/IconShopping.vue'
    import CapsulesIcon from '@/components/icons/IconCapsules.vue'
    import GearIcon from '@/components/icons/IconGear.vue'
    
    const title = useTitle();
</script>

<style>
    header a.company-logo {
        text-decoration: none;
        font-family: Cookie, cursive;
        color:  var(--helio-90);
        font-size: 30px;
        font-weight: normal;
        line-height: 1.2;
    }

    #sidebarMenu a svg {
        display: block;
        margin-bottom: 5px;
        margin-left: auto;
        margin-right: auto;
        height: 35px;
        width: 35px;
        fill: var(--helio-90);
    }

    #sidebarMenu a {
        display: block;
        text-decoration: none;
        margin: 5px;
        padding: 25px 0;
        text-align: center;
        color: var(--helio-90);
        font-family: Nunito-Regular;
        font-size: 16px;
        font-weight: normal;
        border-left-width: 0px;
        border-left-style: solid;
        border-radius: 15px;
    }

    #sidebarMenu a.router-link-exact-active {
        background-color: var(--helio-10);
    }

    #sidebarMenu a:hover {
        color: var(--helio-90);
        background-color: var(--helio-10);
        cursor: default;
    }
</style>