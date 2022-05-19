<template>
    <div class="outerWrapper">
        <div class="leftWrapper">
            <NavCol />
        </div>
        <div class="rightWrapper">
            <TopBar />
            <Content />
        </div>
    </div>
</template>

<script setup lang="ts">
    import TopBar from '@/components/ui/TopBar.vue'
    import Content from '@/components/ui/Content.vue'
    import NavCol from '@/components/ui/NavCol.vue'
</script>

<style>
@import '@/assets/styles/pharmaste.css';

.outerWrapper{
    display: inline-block;
    width: 100%;
}
.leftWrapper{
    position:fixed;
    text-align:center;
    width:8%;
    left: 0;
    height: 100%;
    background-color: var(--white-00);
    padding-top: 10px;
}

.rightWrapper
{
    position: fixed;;
    text-align:left;
    right: 0px;
    width: 92%;
    display: block;
    color: var(--gray-50);
}

.rightBottom {
    position: relative;
    padding: 20px;
}

.rightBottom h1 {
    font-size: 20px;
}

.contentWrapper {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 30px;
}

.rightContent {
    border-radius: 10px;
    text-align: justify;
    background-color: Var(--white-00);
    padding: 10px;
}

/* A few changes for mobile screens by Kizito */
@media (max-width: 900px) {
	.sidebar-menu {
		position: inherit;
        margin: 0 auto;
	}
    .rightTop {
        display: none;
    }

    nav, .leftWrapper, #sidebarMenu a {
        display: inline;
        position: inherit;
        margin: 0 auto;
        padding: 5px;
        background-color: inherit;
        border-radius: 0px;
    }

    #sidebarMenu a svg, #sidebarMenu a.router-link-exact-active {
        display: none;
        background-color: inherit;
    }
    header {
        display: flex;
        text-align: center;
    }

    header a.company-logo {
        font-size: 20px;
        font-weight: normal;
        line-height: 1;
    }

    .rightWrapper
    {
        width: 100%;
    }
}

</style>
