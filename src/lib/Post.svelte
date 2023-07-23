<!-- Post.svelte -->
<script lang="ts">
    import { enhance } from "$app/forms";

    export let post: any;
</script>

<div class="border border-gray-200 hover:bg-slate-950 rounded-md p-2 max-w-xl">
    <div class="flex flex-col justify-between items-center p-8 space-y-4">
        <h2>{post.id}</h2>
        <p class="break-all">{post.content}</p>
        <p>{post.created}</p>
        <form action="?/deletePost" method="POST" use:enhance>
            <input type="hidden" name="id" value="{post.id}" />
            <button class="p-2 m-2 rounded-md bg-slate-700 hover:bg-slate-800" type="submit">Delete Post</button>
        </form>
    </div>
</div>
