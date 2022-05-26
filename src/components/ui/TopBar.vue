<template>
    <div class="rightTop verticalCenter">
        <div class="rightTopLeft">
            <input type="text" placeholder="Search...">
        </div>
        <div class="rightTopRight">
            <BellIcon />
            <UserIcon class="mutedIcon" />
            <span class="text">Kidawa Simirefu</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import BellIcon from '@/components/icons/IconBell.vue'
    import UserIcon from '@/components/icons/IconUser.vue'
</script>

<style>
.rightTop {
    position: relative;
    height: 70px;
    padding: 5px 20px;
    display: flex;
}

.rightTopLeft {
    float: left;
    flex: 2.5;
}

.rightTopLeft input[type=text]{
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
     border-radius: 10px;
     border: 0 solid var(--gray-00);
     width: 50%;
     height: 40px;
     padding-left: 10px;
     font-family: Nunito-Regular;
     font-size: 18px;
     font-size: 15px;
     color: var(--gray-00);
}
    
.rightTopLeft input::placeholder {
    border: 0 solid var(--gray-00);
    font-size: 18px;
}

.rightTopLeft input:hover {
    border: 1 solid var(--gray-20);
}

.rightTopRight {
    float: right;
    flex: 0.5;
}

.verticalCenter {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.rightTopRight svg {
    height: 25px;
    width: 25px;
    fill: var(--helio-90);
    padding-left: 20px;
}

.text {
    float: right;
    color: var(--helio-90);
    font-weight: normal;
    font-size: 18px;
}

</style>