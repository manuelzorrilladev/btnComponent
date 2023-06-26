<script setup>
import Github from '../components/svg.vue'
</script>

<template>
    <nav>
        <h1>
            <span>Dev</span>
            challenges
        </h1>
        <div class="navItem">
            <p>Solution submited by:</p>

            <a href="https://github.com/manuelzorrilladev" class="githubBtn">

                <div class="linkBtn">
                    <span>Manuel Zorrilla</span>
                    <Github />
                </div>
            </a>

        </div>

    </nav>
</template>

<style scoped>
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(228, 228, 228);
    padding: 0px 20px;
}

h1 {
    margin: 20px;
}

h1 span {
    margin: -5px;
    color: rgb(248, 123, 28);
}

.navItem {
    display: flex;
    gap: 10px;
    margin-right: 10px;
}

p {
    margin-top: 5px;
}

.githubBtn {
    background-color: rgb(171, 171, 171);
    text-decoration: none;
}

.linkBtn {
    
    color: black;
    background-color: rgb(248, 123, 28);
    padding: 5px 15px;
    transition: 0.3s;
}
.linkBtn span{
    margin-right: 5px;
}

.githubBtn:hover .linkBtn {
    transform: translate(5px,-5px);
}
</style>    