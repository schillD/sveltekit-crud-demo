<!-- Post.svelte -->
<script lang="ts">
    export let post: any;
</script>

<div class="border border-gray-200 rounded-md p-2 max-w-xl">
    <div class="flex flex-col justify-between items-center p-8 space-y-4">
        <h2>{post.id}</h2>
        <p class="break-all">{post.content}</p>
        <p>{post.created}</p>
    </div>
</div>
