<script lang="ts">
    import { enhance } from "$app/forms";
    import Post from "$lib/Post.svelte";
    export let data;
    $: allPosts = data.allPosts;
</script>

<div class="grid gap-4 place-content-center m-4">
    {#each allPosts as post}
        <Post {post} />
    {/each}

    <form method="POST" use:enhance>
        <input class="w-full bg-slate-900 border p-4" type="text" name="content" placeholder="Type content here!" />
        <div class="flex justify-center">
            <button class="p-4 m-4 border border-gray-200 rounded-md max-w-xl" type="submit" formaction="?/createPost">Create Post</button>
            <button class="p-4 m-4 border border-gray-200 rounded-md max-w-xl" formaction="?/deleteAllPosts">Delete Everything</button>
        </div>
    </form>
</div>
