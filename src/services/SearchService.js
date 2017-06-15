
class SearchService {

    searchRepositories(searchQuery) {
        var url = 'https://api.github.com/search/repositories?q=' + searchQuery;

        return fetch(url)
            .then(response => response.json())

    }



}

module.exports = new SearchService();