<<<<<<< HEAD
// const API_BASE_URL = 'http://localhost:8080';

=======
const API_BASE_URL = 'http://localhost:8080';

async function fetchNews() {
    const newsList = document.getElementById('news-id');
    try {
        const response = await fetch (`${API_BASE_URL}/news`);
        const news = await response.json();
        console.log(news);
        const newsListElement = news.map((news) => {
            return `
            <li>${news.title}) by ${news.author}</li>
            `;
        });

        newsList.innerHTML = newsListElement
    }   catch (err) {
        console.error(err);
    }
};
fetchNews();

async function addNews () {
    const category = document.getElementById ('news-category').value;
    const title = document.getElementById('news-title').value;

    try {
        console.log(category,title);
        await fetch(`${API_BASE_URL}/news`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ title, author})
        });
    }   catch(err) {
        console.error(err);
    }   finally {
        category.value;
        title.value;
        fetchNews();
    }
}
>>>>>>> 2eab7f7ed4bb3197d781086a50a8379e01ae1307
