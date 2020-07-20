export class View {
    constructor() {
        this.app = document.getElementById('app');

        this.title = this.createElement('h1', 'title');
        this.title.textContent = 'Github Search Repositories';

        this.searchLine = this.createElement('div', 'search-line');
        this.searchInput = this.createElement('input', 'search-input');
        this.searchCounter = this.createElement('span', 'counter');
        this.searchLine.append(this.searchInput);
        this.searchLine.append(this.searchCounter);

        this.repositoryWrapper = this.createElement('div', 'repository-wrapper');
        this.repositoryList = this.createElement('div', 'repositories');
        this.repositoryWrapper.append(this.repositoryList);

        this.main = this.createElement('div', 'main');
        this.main.append(this.repositoryWrapper);

        this.app.append(this.title);
        this.app.append(this.searchLine);
        this.app.append(this.main);

    }
    createElement (elementTag, elementClass) {
        const element = document.createElement(elementTag);
        if (elementClass) {
            element.classList.add(elementClass);
        }
        return element;
    }

    createRepository (repositoryData) {

        const repElement = this.createElement('div', 'rep-prev');
        repElement.innerHTML = `<p class="rep-prev-name">${repositoryData.name}</p>`;
        repElement.addEventListener('click', function () {

            const div = document.createElement('div');
            div.classList.add('list-art');
            const erem = document.createElement('div');
            const elem = document.createElement('div');

            elem.classList.add('list-elem');
            elem.innerHTML = `<p class="rep-prev-name">Name:${repositoryData.name}</p>
                              <p class="rep-prev-owner">Owner:${repositoryData.owner.login}</p>
                              <p class="rep-prev-stars">Stars:${repositoryData.stargazers_count}</p>`;

            erem.innerHTML = `<img src="Vector.png" alt="Not ie">`;

            const ar = document.querySelector('.list-repo');
            div.append(elem);
            div.append(erem);
            ar.append(div);

            let children = ar.children;
            Array.from(children).forEach((x) => {
                let img = x.querySelector('img');
                img.addEventListener('click', deleteComment);
                function deleteComment(e) {
                    e.target.parentNode.parentNode.remove();
                }
            });

            let inp = document.querySelector('input');
            inp.value = '';
            function f() {
                document.querySelector('.repositories').innerHTML = '';
            }
            f();
        });

        this.repositoryList.append(repElement);
    }

}
