function getArticleGenerator(articles) {
    let articlesInfo = articles;
    let divElement = document.querySelector('#content');

    return () => {

        if (articlesInfo.length > 0) {
            let articleElement = document.createElement('article');
            let textNodeElement = document.createTextNode(articlesInfo.shift());
            articleElement.appendChild(textNodeElement);
            divElement.appendChild(articleElement);
        }

    }
}