<script setup>

const { query } = useRoute();
// console.log({ query })
var metaDescription;
useAsyncData(() => {
    metaDescription = (query.name && query.content) ? { name: query.name, content: query.content } : { name: 'description', content: 'default description' }
})
</script>

<template>
    <div>
        <Metatags :metatags="[metaDescription]" />
        <h1>Metatags Test page</h1>
        <pre><code>{{ metaDescription }}</code></pre>
    </div>
</template>