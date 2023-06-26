<script setup>
const {variant,arg,size,color} = defineProps(['variant','arg','size','color'])

function validateVariant() {
    if (variant === undefined) {
        return 'default'
    } else return variant
}

</script>


<template>
    <button :class="[validateVariant() , size,color]" :disabled="arg == 'disabled'">
        Default
    </button>

</template>

<style scoped>
/* Main style */
button {
    border: none;
    padding: 8px 12px;
    width: 100px;
    border-radius: 5px;
}
button:hover{
    box-shadow: 2px 2px 0px 0px rgba(0,0,0,0.75);
}

/* Variants Style */


.outline {
    background-color: none;
    border: 2px solid rgb(2, 2, 255);
    color: blue;
}
.outline:hover,
.text:hover {
    background-color: rgb(164, 179, 228);
}

.text {
    background-color: transparent;
    color: blue;
}
.text:disabled{
    background-color: transparent !important;
    box-shadow: none !important;
    cursor:not-allowed
}
/* Disable Styles */

.disableShadow:hover{
    box-shadow: none !important;
    background-color: rgb(113, 113, 113);
}
.default:disabled{
    background-color: rgb(204, 204, 204);
    box-shadow: none !important;
    cursor:not-allowed
}
/* Sizes style */

.sm{
    width: 100px;
}
.md{
    width: 150px;
}
.big{
    width: 200px;
}

/* Colors Styles */
.default {
    background-color: rgb(204, 204, 204);
}
.default:hover {
    background-color: rgb(113, 113, 113);
}
.primary{
    background-color:rgb(55, 95, 255);
}
.primary:hover{
    background-color: rgb(164, 179, 228);
}
.secondary{
    background-color: rgb(74, 105, 92);
}
.secondary:hover{
    background-color: rgb(48, 68, 60);
}
.danger{
    background-color: rgb(167, 0, 0);
}
.danger:hover{
    background-color: rgb(118, 0, 0);

}
</style>