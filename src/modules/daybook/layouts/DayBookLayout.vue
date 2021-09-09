<template>
    <NavBar />
</template>

<script>
    import { defineAsyncComponent } from "vue";

export default ({
    Comments:{
        NavBar:defineAsyncComponent (() => import('../components/NavBar.vue'))
    }
})
</script>
