
export class Search {
    constructor(view) {
        this.view = view;
        this.view.searchInput.addEventListener('keyup', this.debounce(this.searchRepositories.bind(this), 500));

    }

    async searchRepositories () {
        if (this.view.searchInput.value) {
        return await fetch(`https://api.github.com/search/repositories?q=${this.view.searchInput.value}&per_page=5`)
            .then(res => {
                this.view.repositoryList.innerHTML = '';
                if (res.ok) {
                    res.json().then(res => {
                        res.items.forEach(rep => {
                            this.view.createRepository(rep);
                        })
                    })
                } else {

                }
            })
        } else {
            this.clearRepo();
        }
    }

    clearRepo() {
        this.view.repositoryList.innerHTML = '';
    }

    debounce (func, wait, immediate) {
        let timeout;
        return function () {
            const context = this, args = arguments;
            const later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply (context, args);
        }
    }
}