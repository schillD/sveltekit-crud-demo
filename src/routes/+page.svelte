<script lang="ts">
    import { enhance } from "$app/forms";
    import Post from "$lib/Post.svelte";
    export let data;
    $: allPosts = data.allPosts;
</script>

{#each allPosts as post}
    <Post {post} />
{/each}

<form method="POST" use:enhance>
    <input type="text" name="content" placeholder="Type content here!" />
    <button type="submit" formaction="?/createPost">Create Post</button>
    <button type="submit" formaction="?/deleteAllPosts"
        >Delete Everything</button
    >
</form>
