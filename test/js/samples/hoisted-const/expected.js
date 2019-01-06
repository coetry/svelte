/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, append, createElement, createText, detachNode, identity, init, insert, noop, safe_not_equal } from "svelte/internal";

function create_fragment($$, ctx) {
	var b, text_value = get_answer(), text, current, mounted;

	return {
		c() {
			b = createElement("b");
			text = createText(text_value);
		},

		m(target, anchor) {
			insert(target, b, anchor);
			append(b, text);
			current = mounted = true;
		},

		p: noop,

		i(target, anchor) {
			if (!mounted) this.m(target, anchor);
		},

		o: noop,

		d(detach) {
			if (detach) {
				detachNode(b);
			}
		}
	};
}

const ANSWER = 42;

function get_answer() { return ANSWER; }

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, identity, create_fragment, safe_not_equal);
	}
}

export default SvelteComponent;