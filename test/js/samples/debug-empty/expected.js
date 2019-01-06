/* generated by Svelte vX.Y.Z */
import { SvelteComponentDev, addLoc, append, createElement, createText, detachNode, flush, init, insert, noop, safe_not_equal, setData } from "svelte/internal";

const file = undefined;

function create_fragment($$, ctx) {
	var h1, text0, text1, text2, text3, current, mounted;

	return {
		c: function create() {
			h1 = createElement("h1");
			text0 = createText("Hello ");
			text1 = createText(ctx.name);
			text2 = createText("!");
			text3 = createText("\n");
			debugger;
			addLoc(h1, file, 0, 0, 0);
		},

		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, text0);
			append(h1, text1);
			append(h1, text2);
			insert(target, text3, anchor);
			current = mounted = true;
		},

		p: function update(changed, ctx) {
			if (changed.name) {
				setData(text1, ctx.name);
			}

			debugger;
		},

		i: function intro(target, anchor) {
			if (!mounted) this.m(target, anchor);
		},

		o: noop,

		d: function destroy(detach) {
			if (detach) {
				detachNode(h1);
				detachNode(text3);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { name } = $$props;

	$$self.$set = $$props => {
		if ('name' in $$props) $$invalidate('name', name = $$props.name);
	};

	return { name };
}

class SvelteComponent extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.name === undefined && !('name' in props)) {
			console.warn("<SvelteComponent> was created without expected prop 'name'");
		}
	}

	get name() {
		return this.$$.ctx.name;
	}

	set name(name) {
		this.$set({ name });
		flush();
	}
}

export default SvelteComponent;