<script setup>
	import Button from './Button.vue';
	import ExternalLinkIcon from './icons/ExternalLinkIcon.vue';
	import SplashText from './SplashText.vue';
	import Title from './Title.vue';

	const serverInfo = {
		ip: { label: 'IP', value: "Not available yet !" },
		port: { label: 'Port', value: 7777 },
		mode: { label: 'Mode', value: "Freeroam" },
		version: { label: 'Version', value: "0.3.DL (compatible with 0.3.7)" },
	}

	function IsValidIp(ip, port) {
		return typeof ip === 'string' && ip.trim().length > 0 && /^(\d{1,3}\.){3}\d{1,3}$/.test(ip)
			&& typeof port !== 'undefined' && /^\d+$/.test(String(port));
	}

	const connectUrl = IsValidIp(serverInfo.ip.value, serverInfo.port.value) ? `samp://${serverInfo.ip.value}:${serverInfo.port.value}` : '#'
</script>

<template>
	<div class="content">
		<Title />
		<SplashText />

		<div class="row-centered buttons">
			<a :href="connectUrl">
				<Button type="primary"><span>Connect Now</span></Button>
			</a>
			<a href="https://open.mp/downloads/launcher" target="_blank" rel="noopener">
				<Button type="secondary"><ExternalLinkIcon /><span> Get open.mp launcher</span></Button>
			</a>
		</div>

		<div class="row-centered">
			<div v-for="item in serverInfo" :key="item.label" class="info-item">
				<h2 class="info-item__label">{{ item.label }}</h2>
				<p class="info-item__value">{{ item.value }}</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.content {
		position: relative;
		text-align: center;
		width: 100%;
		display: block;
		padding: 4rem 10%;
	}

	.row-centered {
		text-align: center;

		> * {
			display: inline-block;
			vertical-align: middle;
			margin: 0.5rem;
		}
	}

	.buttons {
		margin-bottom: 3rem;
		
		a {
			text-decoration: none;
			font-size: 2rem;
		}
	}

	.info {
		&-item {
			display: inline-block;
			text-align: center;
			margin: 0 1.5rem;
			width: 8rem;
    		vertical-align: top;

			&__label {
				display: block;
				font-family: 'Bank Gothic', sans-serif;
				color: var(--color-primary);
			}

			&__value {
				display: block;
				font-family: 'Bank Gothic', sans-serif;
				color: var(--color-text);
			}
		}
	}
</style>
