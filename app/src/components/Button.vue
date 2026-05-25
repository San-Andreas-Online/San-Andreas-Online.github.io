<script setup>
	const props = defineProps({
		type: {
			type: String,
			default: null,
			validator: (value) => value === null || value === 'primary' || value === 'secondary'
		}
	})

</script>

<template>
	<button :class="['btn', props.type]">
		<slot />
	</button>
</template>

<style scoped lang="scss">
	.btn {
		display: inline-block;
		padding: 0.75rem 2rem;
		border-radius: 4px;
		font-size: inherit;
		font-family: 'Bank Gothic', sans-serif;
		cursor: pointer;
		transition: filter 0.2s, transform 0.1s;
		border: 1px solid transparent;

		> * {
			vertical-align: middle;
		}

		&:active {
			transform: scale(0.95);
			filter: brightness(0.75);
		}

		&.primary {
			background: var(--color-primary);
			color: var(--color-primary-text);
			border-color: var(--color-primary);
			box-shadow: 0 0 24px var(--color-primary-shadow);

			&:hover {
				filter: brightness(1.1);
			}
		}

		&.secondary {
			background: rgba(45, 45, 45, 0.8);
			color: #fff;
			border-color: rgba(255, 255, 255, 0.1);

			&:hover {
				filter: brightness(1.25);
			}
			
		}

		&.primary, &.secondary{
			&:active {
				transform: scale(0.95);
				filter: brightness(0.75);
			}
		}
	}
</style>