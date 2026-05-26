<script setup>
	const year = new Date().getFullYear()
</script>

<template>
	<footer class="footer">
		<p class="footer__copyright">
			<img src="@/assets/sao-logo.png" />
			<span>&copy; {{ year }} San Andreas Online</span>
		</p>
	</footer>
</template>

<style scoped lang="scss">

	.footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		display: block;
		padding: 1rem 10%;
		background: var(--color-background);
		color: var(--color-text);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		text-align: center;

		&__copyright {
			font-family: 'Bank Gothic', sans-serif;

			img {
				height: 3rem;
				margin-right: 0.5rem;
			}

			img,
			span {
				vertical-align: middle;
			}
		}
	}
</style>
