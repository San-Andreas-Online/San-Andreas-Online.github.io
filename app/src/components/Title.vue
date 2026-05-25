<template>
	<h1 class="title">
		San Andreas<br />
		<span class="title-highlight">Online</span>
	</h1>
</template>

<style scoped lang="scss">
	.title {
		color: var(--color-secondary);
		font-family: 'Beckett', sans-serif;
		font-weight: 100;
		font-size: 6rem;
		line-height: 0.7em;

		$shadow-offset: 3px;
		text-shadow:
			#{$shadow-offset} #{$shadow-offset} 0 #000,
			-#{$shadow-offset} #{$shadow-offset} 0 #000,
			-#{$shadow-offset} -#{$shadow-offset} 0 #000,
			#{$shadow-offset} -#{$shadow-offset} 0 #000;
			
		&-highlight {
			position: relative;
			bottom: 0.2em;
			font-family: 'Pricedown', sans-serif;
			color: var(--color-primary);
		}
	}
</style>