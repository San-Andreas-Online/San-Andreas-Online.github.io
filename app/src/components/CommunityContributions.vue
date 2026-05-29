<script setup>
import Button from './Button.vue';
import CodeIcon from './icons/CodeIcon.vue';
import CursorIcon from './icons/CursorIcon.vue';
import ExternalLinkIcon from './icons/ExternalLinkIcon.vue';
import GitHubIcon from './icons/GitHubIcon.vue';
import PaletteIcon from './icons/PaletteIcon.vue';
import StackIcon from './icons/StackIcon.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
	<div class="content">
		<div class="intro">
			<h2>{{ $t('community.title') }}</h2>
			<i18n-t keypath="community.intro" tag="p">
				<a href="https://github.com/orgs/San-Andreas-Online/repositories" target="_blank" rel="noopener"><GitHubIcon/>{{ t('community.githubPage') }}<ExternalLinkIcon/></a>
			</i18n-t>
		</div>
		<div class="textdraw-editor">
			<h3>{{ $t('community.webEditor.title') }}</h3>
			<div class="textdraw-editor__demo">
				<img src="https://github.com/San-Andreas-Online/web-textdraw-editor/blob/main/_docs/canvas.gif?raw=true" alt="Web TextDraw Editor" class="community-contributions" />
			</div>
			<article class="textdraw-editor__description">
				<ul>
					<li>
						<span class="icon"><CursorIcon/></span> <span>{{ $t('community.webEditor.features.dragAndDrop') }}</span>
					</li>
					<li>
						<span class="icon"><StackIcon/></span> <span>{{ $t('community.webEditor.features.multiLayer') }}</span>
					</li>
					<li>
						<span class="icon"><PaletteIcon/></span> <span>{{ $t('community.webEditor.features.livePreview') }}</span>
					</li>
					<li>
						<span class="icon"><CodeIcon/></span> <span>{{ $t('community.webEditor.features.exportCode') }}</span>
					</li>
				</ul>
				<p>{{ $t('community.webEditor.try') }} <a href="https://san-andreas-online.github.io/web-textdraw-editor/" target="_blank" rel="noopener"><Button type="primary"><span>{{ $t('community.webEditor.tryButton') }}</span><ExternalLinkIcon/></Button></a></p>
				<i18n-t keypath="community.webEditor.source" tag="p" class="source">
					<a href="https://github.com/San-Andreas-Online/web-textdraw-editor" target="_blank" rel="noopener">{{ t('community.github') }}<ExternalLinkIcon/></a>
				</i18n-t>
			</article>
		</div>
	</div>
</template>

<style scoped lang="scss">
	h2, h3 {
		color: var(--color-primary-text);
		font-family: 'Beckett', 'Times New Roman', serif;
		font-weight: 100;

		$shadow-offset: 2px;
		text-shadow: #{$shadow-offset} #{$shadow-offset} 0 #000,
		-#{$shadow-offset} #{$shadow-offset} 0 #000,
		-#{$shadow-offset} -#{$shadow-offset} 0 #000,
		#{$shadow-offset} -#{$shadow-offset} 0 #000;
	}

	.content {
		position: relative;
		text-align: center;
		width: 100%;
		display: block;
		padding: 0 10%;
		margin-bottom: 8rem;
	}

	.intro {
		h2 {
			font-family: 'Beckett', 'Times New Roman', serif;
			font-size: 3rem;
			margin-bottom: 1rem;
		}

		p{
			font-family: 'Bank Gothic', sans-serif;
			text-align: justify;
		}
	}

	.textdraw-editor {
		margin-top: 2rem;

		h3 {
			font-size: 2rem;
			margin-bottom: 1rem;
		}

		&__demo, &__description {
			display: inline-block;
			vertical-align: middle;
			min-width: 45%;
			max-width: 40rem;
		}

		&__demo {
			img {
				border-radius: 8px;
				width: 100%;
				height: auto;
				box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
				border-radius: 8px;
			}
		}

		&__description {
			font-family: 'Bank Gothic', sans-serif;
			color: var(--color-text);
			padding: 1rem 3rem;
			margin-top: 1rem;
			text-align: left;

			li {
				list-style: none;
				margin: 1em 0;

				.icon {
					margin-right: 0.5rem;
					color: var(--color-primary);
					background: var(--color-primary-shadow);
					padding: 0.25rem;
					border-radius: 4px;
					vertical-align: middle;

					> * {
						vertical-align: middle;
					}
				}
			}

			.source{
				margin-top: 2rem;
				font-size: 0.9rem;
			}
		}
	}
</style>
