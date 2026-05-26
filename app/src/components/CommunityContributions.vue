<script setup lang="ts">
import Button from './Button.vue';
import CodeIcon from './icons/CodeIcon.vue';
import CursorIcon from './icons/CursorIcon.vue';
import ExternalLinkIcon from './icons/ExternalLinkIcon.vue';
import GitHubIcon from './icons/GitHubIcon.vue';
import PaletteIcon from './icons/PaletteIcon.vue';
import StackIcon from './icons/StackIcon.vue';

</script>

<template>
	<div class="content">
		<div class="intro">
				<h2>Community Contributions ↓</h2>
				<p>
					Rome wasn't built in a day, and neither was San Andreas Online.
					We greatly appreciate the contributions of the SAMP/open.mp community, and we
					decided to show gratitude by sharing some of the work that shaped the SAO project.
					You can checkout the full list of contributors on our <a href="https://github.com/orgs/San-Andreas-Online/repositories" target="_blank" rel="noopener"><GitHubIcon/>GitHub page<ExternalLinkIcon/></a>.
				</p>
		</div>
		<div class="textdraw-editor">
			<h3>Web TextDraw Editor</h3>
			<div class="textdraw-editor__demo">
				<img src="https://github.com/San-Andreas-Online/web-textdraw-editor/blob/main/_docs/canvas.gif?raw=true" alt="Web TextDraw Editor" class="community-contributions" />
			</div>
			<article class="textdraw-editor__description">
				<ul>
					<li>
						<span class="icon"><CursorIcon/></span> Drag & drop element placement
					</li>
					<li>
						<span class="icon"><StackIcon/></span> Multi-layer element management
					</li>
					<li>
						<span class="icon"><PaletteIcon/></span> Live color & font preview
					</li>
					<li>
						<span class="icon"><CodeIcon/></span> Export ready-to-paste PAWN code
					</li>
				</ul>
				<p>Try it out ! <a href="https://san-andreas-online.github.io/web-textdraw-editor/" target="_blank" rel="noopener"><Button type="primary"><span>Web TextDraw Editor</span><ExternalLinkIcon/></Button></a></p>
				<p class="source">Source code available on <a href="https://github.com/San-Andreas-Online/web-textdraw-editor" target="_blank" rel="noopener"><GitHubIcon/>GitHub<ExternalLinkIcon/></a>.</p>
			</article>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	h2, h3 {
		color: var(--color-primary-text);
		font-family: 'Beckett', sans-serif;
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
			font-family: 'Beckett', sans-serif;
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
			text-align: justify;

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
