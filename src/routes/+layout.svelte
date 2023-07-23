<script lang="ts">
    import "../app.css";
    import {ip} from "$lib/stores";
    import { onMount } from "svelte";

    onMount(() => {
    $ip = window.location.href;
});
</script>



<slot></slot>