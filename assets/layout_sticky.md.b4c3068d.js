import{_ as t,o as s,c as l,Q as a}from"./chunks/framework.ed8fde47.js";const f=JSON.parse('{"title":"Sticky 顶部吸附","description":"","frontmatter":{},"headers":[],"relativePath":"layout/sticky.md","filePath":"layout/sticky.md"}'),e={name:"layout/sticky.md"},n=a(`<h1 id="sticky-顶部吸附" tabindex="-1">Sticky 顶部吸附 <a class="header-anchor" href="#sticky-顶部吸附" aria-label="Permalink to &quot;Sticky 顶部吸附&quot;">​</a></h1><p>该组件与CSS中position: sticky属性实现的效果一致，当组件达到预设的到顶部距离时， 就会固定在指定位置，组件位置大于预设的顶部距离时，会重新按照正常的布局排列。</p><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><ul><li>通过使用<code>mr-sticky</code>包裹需要吸附顶部元素</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">mr-sticky</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#content</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;bg-sticky&quot;</span><span style="color:#E1E4E8;">&gt;这是一个弹性吸顶&lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">mr-sticky</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">mr-sticky</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#content</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bg-sticky&quot;</span><span style="color:#24292E;">&gt;这是一个弹性吸顶&lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">mr-sticky</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值</th></tr></thead><tbody><tr><td style="text-align:left;">offsetTop</td><td style="text-align:left;">距顶部距离</td><td style="text-align:left;">Number, String</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">offsetBottom</td><td style="text-align:left;">距底部距离</td><td style="text-align:left;">Number, String</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">offsetLeft</td><td style="text-align:left;">距左侧距离</td><td style="text-align:left;">Number, String</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">offsetRight</td><td style="text-align:left;">距右侧距离</td><td style="text-align:left;">Number, String</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr></tbody></table>`,8),o=[n];function p(c,i,r,y,d,E){return s(),l("div",null,o)}const h=t(e,[["render",p]]);export{f as __pageData,h as default};
