<template>
	<div class="bg-effects" aria-hidden="true">
		<div class="bg-glow" />
		<div class="bg-grid" />
		<div class="bg-fade-bottom" />
	</div>
</template>

<style scoped lang="scss">
	.bg {
		&-effects {
			position: fixed;
			inset: 0;
			pointer-events: none;
			background-color: var(--color-background);
			color: var(--color-text);
			width: 100%;
			height: 100%;
		}

		&-glow {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			width: 900px;
			height: 400px;
			border-radius: 50%;
			filter: blur(120px);
			opacity: 0.3;
			background: var(--color-primary);
		}

		&-grid {
			position: absolute;
			inset: 0;
			opacity: 0.04;
			background-image:
				linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
				linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px);
			background-size: 60px 60px;
		}

		&-fade-bottom {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 160px;
			background: linear-gradient(to top, #0a0a0a, transparent);
		}
	}
</style>