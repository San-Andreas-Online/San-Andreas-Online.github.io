<script setup>
	const props = defineProps({
		type: {
			type: String,
			default: null,
			validator: (value) => value === null || value === 'primary' || value === 'secondary'
		}
	})

	const modelValue = defineModel();

</script>

<template>
	<select :class="['select', props.type]" v-model="modelValue">
		<slot />
		<slot />
	</select>
</template>

<style scoped lang="scss">
	.select {
		display: inline-block;
		padding: 0.75rem 2rem;
		border-radius: 4px;
		font-size: inherit;
		font-family: 'Bank Gothic', sans-serif;
		cursor: pointer;
		transition: filter 0.2s, transform 0.1s;
		border: 1px solid transparent;

		>* {
			vertical-align: middle;
		}

		&:focus {
			outline: 1px solid var(--color-input-border);
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
			background: var(--color-input);
			color: #fff;
			border-color: var(--color-input-border);

			&:hover {
				filter: brightness(1.25);
			}

		}
	}
</style>