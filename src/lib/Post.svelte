<!-- Post.svelte -->
<script lang="ts">
    import { enhance } from "$app/forms";

    let editMode = false;
    export let post: any;
    let updateText = post.content;

    const onSubmit = () => {
        editMode = false;
    };
</script>

<div
    class="border border-gray-200 hover:bg-slate-950 rounded-md max-w-xl relative"
>
    <button
        class="absolute top-2 right-2 p-2 rounded-md bg-slate-700 hover:bg-slate-800 text-white"
        on:click={() => (editMode = !editMode)}>📝</button
    >

    <div class="grid grid-cols-2 gap-4 p-4">
        <div class="col-span-2">
            <h2>Post Nr: {post.id}</h2>
            <br />
            <p class="break-all">{post.content}</p>
            <br />
            {#if editMode}
                <textarea
                    class="w-full h-auto rounded-md bg-slate-900 hover:bg-slate-950 border p-4 resize-y"
                    style="resize: vertical;"
                    bind:value={updateText}
                />
            {/if}
            <p>{post.created}</p>
        </div>
        <div class="col-start-1 flex justify-start">
            <form action="?/updatePost" method="POST" use:enhance={onSubmit}>
                <input type="hidden" name="id" value={post.id} />
                <input type="hidden" name="content" value={updateText} />
                {#if !editMode}
                    <button
                        class="p-2 m-2 rounded-md bg-slate-700 hover:bg-slate-800 hover:outline outline-offset-2 outline-emerald-800 opacity-50"
                        type="submit"
                        disabled>Update Post</button
                    >
                {:else}
                    <button
                        class="p-2 m-2 rounded-md bg-slate-700 hover:bg-slate-800 hover:outline outline-offset-2 outline-emerald-800"
                        type="submit">Update Post</button
                    >
                {/if}
            </form>
        </div>
        <div class="col-start-2 flex justify-end">
            <form action="?/deletePost" method="POST" use:enhance>
                <input type="hidden" name="id" value={post.id} />
                <button
                    class="p-2 m-2 rounded-md bg-slate-700 hover:bg-slate-800 hover:outline outline-offset-2 outline-orange-800"
                    type="submit">Delete Post</button
                >
            </form>
        </div>
    </div>
</div>
