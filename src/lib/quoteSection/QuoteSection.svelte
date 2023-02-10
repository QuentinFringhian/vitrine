<script lang="ts">
	import { Lottie } from 'lottie-svelte';
	import Section from '../Section.svelte';
</script>

<Section bg="dark">
	<div class="flex flex-row justify-around items-center gap-16">
		<div class="max-w-lg">
			<Lottie path="./networkAnimation.json" name="network animation" />
		</div>
		<figure class="max-w-lg">
			<blockquote class="text-primary italic indent-16 relative px-5 py-5">
				<p class="text-2xl text-light">
					Feel free to reach me out if you want to work on some side projects related to AI /
					Algorithm.
				</p>
			</blockquote>
			<figcaption class="text-secondary opacity-30">
				— Valentin De Matos, <cite>SmartShark</cite>
			</figcaption>
		</figure>
	</div>
</Section>

<style>
	blockquote:before {
		content: '\201C';
		position: absolute;
		font-size: 85px;
		top: 25px;
		left: -45px;
	}
	blockquote:after {
		content: '\201D';
		position: absolute;
		font-size: 85px;
		bottom: -10px;
		right: 25px;
	}
</style>
