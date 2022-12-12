<script setup>
const props = defineProps({
    /**
     * The Metatags Array
     */
    metatags: {
        type: Array,
        default: () => ([{
            name: 'description',
            content: 'supper description'
        }])
    }
})

useHead({
    meta: props.metatags
})

</script>
