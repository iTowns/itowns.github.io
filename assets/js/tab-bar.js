const tabBar = document.getElementById('tab-bar');
const tabItem = tabBar.getElementsByClassName('tab-bar-item');
const activeTab = document.getElementById('active-tab');


class Tab {
	#link;
	#tab;

	constructor(initialLink) {
		this.link = initialLink;
	}

	get link() {
		return this.#link;
	}
	set link(newLink) {
		this.#link?.classList.remove('active');
		this.#tab?.classList.remove('active');

		this.#link = newLink;
		this.#link.classList.add('active');

		this.#tab = document.getElementById(
			'tab-' + this.#link.id.split('link-')[1],
		);

		this.#tab.classList.add('active');
		activeTab.innerHTML = this.#link.innerHTML;
	}
}


const urlAnchor = window.location.hash
	.split('#')[1];
const currentTab = new Tab(
	urlAnchor ?
		tabItem.namedItem('link-' + urlAnchor)
		: tabItem[0],
);

for (let tabLink of tabItem) {
	tabLink.onclick = () => {
		currentTab.link = tabLink;
		tabBar.classList.add('collapsed');
	};
}

activeTab.onclick = () => {
	tabBar.classList.toggle('collapsed');
};

