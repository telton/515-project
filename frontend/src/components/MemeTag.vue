<template>
    <span class="inline-block bg-grey rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 mt-2">
        {{ tag }}
    </span>
</template>

<script>
export default {
    name: 'MemeTag',
    props: {
        tag: {
            required: true,
            type: String
        }
    }
}
</script>
