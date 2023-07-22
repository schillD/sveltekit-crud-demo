<script lang="ts">
    import { enhance } from '$app/forms';

    export let data;
	$: allPosts = data.allPosts;
</script>

{#each allPosts as post}
        <h2>{post.id}</h2>
        <p>{post.content}</p>
        <p>{post.created}</p>
{/each}

<form method="POST" use:enhance>
    <input type="text" name="content" placeholder="Type content here!" />
    <button type="submit" formaction="?/createPost">Create Post</button>
    <button type="submit" formaction="?/deleteAllPosts">Delete Everything</button>
</form>



