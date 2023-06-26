<script setup>
const {icon,start} = defineProps(['icon','start'])


</script>

<template>
    <button>
        <font-awesome-icon 
            v-if="start =='start'" 
            :icon="[icon =='shopping-cart'?'fas':'fab',icon]"
        />
        Default
        <font-awesome-icon 
            v-if="start =='end'" 
            :icon="[icon =='shopping-cart'?'fas':'fab',icon]"
        />

    </button>
</template>

<style scoped>
button {
    border: none;
    padding: 8px 12px;
    width: 100px;
    border-radius: 5px;
    background-color:rgb(55, 95, 255);
}
button:hover{
    background-color: rgb(164, 179, 228);
}
</style>