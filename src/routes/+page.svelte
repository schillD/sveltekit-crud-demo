<script lang="ts">
    import { enhance } from "$app/forms";
    import Post from "$lib/Post.svelte";
    import { ip } from "$lib/stores";
    import { afterUpdate } from "svelte";
    export let data;
    $: allPosts = data.allPosts;
    $: if (allPosts) pressed = false;
    let pressed = false;

    const fetchAndUpdateData = async () => {
        if ($ip === undefined) {
            return;
        }
        const res = await fetch($ip + "api/getAllPosts");
        const data = await res.json();
        allPosts = data;
    };

    const polling = setInterval(fetchAndUpdateData, 2000);

    function press() {
        pressed = true;
    }
</script>

<div class="grid gap-4 place-content-center m-4">
    {#each allPosts as post}
        <Post {post} />
    {/each}

    <form method="POST" use:enhance={press}>
        <textarea
            class="w-full rounded-md bg-slate-900 hover:bg-slate-950 border p-4 resize-y"
            style="resize: vertical;"
            type="text"
            name="content"
            placeholder="Type content here!"
        />

        <div class="flex justify-center">
            <button
                class="p-2 m-4 border border-gray-200 hover:bg-slate-950 rounded-md max-w-xl"
                type="submit"
                formaction="?/createPost"
                disabled={pressed}>Creating Post...</button
            >
            <button
                class="p-2 m-4 border border-gray-200 hover:bg-slate-950 rounded-md max-w-xl"
                formaction="?/deleteAllPosts">Delete Everything</button
            >
        </div>
    </form>
</div>
