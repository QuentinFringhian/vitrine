<script lang="ts">
	import Section from '../Section.svelte';
</script>

<Section bg="light" darkText>
	<div class="flex flex-row justify-around gap-16">
		<div class="text-left grid gap-y-6">
			<h1 class="text-3xl">Megalotron</h1>
			<p>
				Nous vivons dans un monde de plus en plus connecté, ce qui augmente la vulnérabilité des
				entreprises à des attaques réseaux de plus en plus fréquentes. Pour faire face à ce défi,
				les systèmes de détection d'intrusion ont été créés pour protéger les entreprises. Les
				systèmes les plus connus, tels que Snort, fonctionnent en utilisant un certain nombre de
				règles que l'entreprise peut personnaliser pour filtrer les paquets réseau.
			</p>
			<p>
				Cependant, ces systèmes de détection d'intrusion sont rigides et peuvent bloquer les
				utilisateurs légitimes en plus des attaques malveillantes. Pour surmonter ce problème,
				Megalotron utilise l'Intelligence Artificielle pour analyser les paquets circulant sur le
				réseau et filtrer les paquets considérés comme malveillants. L'IA permet un modèle en
				constante évolution qui s'adapte au trafic spécifique d'une entreprise pour une solution
				plus flexible et performante.
			</p>
			<p>
				En conclusion, Megalotron apporte une solution innovante en utilisant l'IA pour sécuriser
				les entreprises contre les attaques réseaux. Cette approche flexible et performante garantit
				une protection optimale pour les entreprises face à ces menaces en constante évolution.
			</p>
		</div>
		<img src="./megalotronIcon.png" alt="Megalotron" class="w-96 h-96" />
	</div>
</Section>
