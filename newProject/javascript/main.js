fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-01-17&sortBy=publishedAt&apiKey=9b0b544ace664abca95baeac5cd0c365')
.then(response => response.json())
.then((data) => {
    const articles = data.articles;
    console.log(articles);

    articles.forEach((article) => {

        const postImg = article.urlToImage;
        const postTitle = article.title;
        const postText = article.description;
        const postDate = article.publishedAt.slice(0, 10);
        const reeadMore = article.url;

        // HTML create Elements //

        //parentElement//
        const articleContainer = document.createElement('section');
        //parentElement//
        const newsCard = document.createElement('article');
        const newsImg = document.createElement('div');
        const newsTitle = document.createElement('div');
        const newsText = document.createElement('div');
        const newsDate = document.createElement('div');
        const newsReadMore = document.createElement('div');

        // Elemnts InnerHTML //
        newsImg.innerHTML = `<img src="${postImg}" alt="${postTitle}" />`;
        newsTitle.innerHTML = `<h2>${postTitle}</h2>`;
        newsText.innerHTML = `<p>${postText}</p>`;
        newsDate.innerHTML = `<p>${postDate}</p>`;
        newsReadMore.innerHTML = `<a href="${reeadMore}">Read More</a>`;
        // parentElement & chaild//
        document.body.appendChild(articleContainer);
        articleContainer.appendChild(newsImg);
        articleContainer.appendChild(newsCard);
        newsCard.appendChild(newsTitle);
        newsCard.appendChild(newsText);
        newsCard.appendChild(newsDate);
        newsCard.appendChild(newsReadMore);

    })

})


const menuButton = document.getElementById('menuButton');

let menuOpen = false;

menuButton.addEventListener('click',()=>{
    if (!menuOpen) {
        menuButton.classList.add('open');
        menuOpen = true;
    } else {
        menuButton.classList.remove('open');
        menuOpen = false;
    }
})