<!-- Post.svelte -->
<script lang="ts">
    export let post: any;
</script>

<h2>{post.id}</h2>
<p>{post.content}</p>
<p>{post.created}</p>
