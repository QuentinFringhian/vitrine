<script lang="ts">
	export let bg: string = 'secondary';
	export let darkText: boolean = false;
</script>

<div class="bg-{bg} text-{darkText ? 'dark' : 'light'} p-16">
	<center>
		<slot />
	</center>
</div>
