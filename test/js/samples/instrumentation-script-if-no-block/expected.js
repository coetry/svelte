/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, addListener, append, createElement, createText, detachNode, init, insert, noop, safe_not_equal, setData } from "svelte/internal";

function create_fragment($$, ctx) {
	var button, text1, p, text2, text3, current, mounted, dispose;

	return {
		c() {
			button = createElement("button");
			button.textContent = "foo";
			text1 = createText("\n\n");
			p = createElement("p");
			text2 = createText("x: ");
			text3 = createText(ctx.x);
			dispose = addListener(button, "click", ctx.foo);
		},

		m(target, anchor) {
			insert(target, button, anchor);
			insert(target, text1, anchor);
			insert(target, p, anchor);
			append(p, text2);
			append(p, text3);
			current = mounted = true;
		},

		p(changed, ctx) {
			if (changed.x) {
				setData(text3, ctx.x);
			}
		},

		i(target, anchor) {
			if (!mounted) this.m(target, anchor);
		},

		o: noop,

		d(detach) {
			if (detach) {
				detachNode(button);
				detachNode(text1);
				detachNode(p);
			}

			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let x = 0;

	function foo() {
		if (true) { x += 1; $$invalidate('x', x); }
	}

	return { x, foo };
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal);
	}
}

export default SvelteComponent;