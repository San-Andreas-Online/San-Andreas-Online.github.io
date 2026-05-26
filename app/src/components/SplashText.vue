<script setup>
	const splashTexts = [
		// GTA San Andreas Quotes
		'Ah shit, here we go again.',
		'Now I know you blind man, but you gotta see this.',
		'Does the pope shit in the woods?',
		'All you had to do was download the damn launcher, CJ !',
		'You picked the right server fool!',
		'I’ll have two number 9s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda.',
		'Same things that make us laugh, make us cry.',
		'Hey, I can see my house from here !',
		// Miami Vice Quotes
		'You wanna be dead ? BANG, you\'re dead.',
		'How do you go from this tranquility to this violence ?<br> - I usually take the Cheetah',
		// San Andreas Online originals
		'GTA Online, for the poor.',
		'Not for the weak.',
		'It\'s not a bug, it\'s a feature.',
	]

	const randomText = splashTexts[Math.floor(Math.random() * splashTexts.length)]
</script>

<template>
	<p class="splash-text">
		<i v-html="randomText"></i>
	</p>
</template>

<style lang="scss" scoped>
	.splash-text {
		font-family: 'Aharoni', sans-serif;
		font-weight: 100;
		color: var(--color-text);
		margin: 0 auto 1rem auto;
		max-width: 40rem;
		$shadow-offset: 2px;
		text-shadow: 0px 0px 2px #000;
	}
</style>
