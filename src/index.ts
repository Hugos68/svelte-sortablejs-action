import Sortable from "sortablejs";

export function sortable(node: HTMLElement, options: Sortable.Options = {}) {
	const sortable = new Sortable(node, options);
	return {
		update(newOptions: Sortable.Options) {
			Object.assign(sortable.options, newOptions);
		},
		destroy: sortable.destroy.bind(sortable),
	};
}
