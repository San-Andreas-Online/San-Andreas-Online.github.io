<script setup>
	import { onMounted, computed } from 'vue'
	import Button from './Button.vue';
	import ExternalLinkIcon from './icons/ExternalLinkIcon.vue';
	import SplashText from './SplashText.vue';
	import Title from './Title.vue';
	import { setLocale } from '../services/i18n'
	import { useI18n } from 'vue-i18n'

	function IsValidIp(ip, port) {
		return typeof ip === 'string' && ip.trim().length > 0 && /^(\d{1,3}\.){3}\d{1,3}$/.test(ip)
			&& typeof port !== 'undefined' && /^\d+$/.test(String(port));
	}

	const userNavigatorLocale = (navigator.language || 'en').split('-')[0]
	onMounted(() => setLocale(userNavigatorLocale))

	const { t } = useI18n();

	const serverInfo = ['ip','port','mode','version']
	const connectUrl = IsValidIp(
		t(`server.ip.value`),
		t(`server.port.value`)
	) ? `samp://${t(`server.ip.value`)}:${t(`server.port.value`)}` : '#'
	
</script>

<template>
	<div class="content">
		<Title />
		<SplashText />

		<div class="row-centered buttons">
			<a :href="connectUrl">
				<Button type="primary"><span>{{ $t('connect') }}</span></Button>			</a>
			<a href="https://open.mp/downloads/launcher" target="_blank" rel="noopener">
				<Button type="secondary"><ExternalLinkIcon /><span>{{ $t('get_open_mp_launcher') }}</span></Button>
			</a>
		</div>

		<div class="row-centered">
			<div v-for="key in serverInfo" :key="key" class="info-item" v-if="$te(`server.${key}.value`)">
				<h2 class="info-item__label">{{ $t(`server.${key}.label`) }}</h2>
				<p class="info-item__value">{{ $t(`server.${key}.value`) }}</p>
			</div>
			<i18n-t keypath="donate" tag="p" class="donate">
				<a href="https://paypal.me/MichaelAceAnderson" target="_blank" rel="noopener">PayPal</a>
				<a href="https://www.patreon.com/posts/san-andreas-open-153811828" target="_blank" rel="noopener">Patreon</a>
			</i18n-t>
		</div>
	</div>
</template>

<style scoped lang="scss">
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

	.donate{
		margin-top: 2rem;
		color: #fff;
	}
</style>
