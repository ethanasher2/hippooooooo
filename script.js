const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const resultsDiv = document.getElementById('results');

// Dummy data for search results
const dummyData = [
    { title: 'Example 1', link: 'https://example.com/1', description: 'This is a description for example 1.' },
    { title: 'Example 2', link: 'https://example.com/2', description: 'This is a description for example 2.' },
    { title: 'Example 3', link: 'https://example.com/3', description: 'This is a description for example 3.' },
    { title: 'Example 4', link: 'https://example.com/4', description: 'This is a description for example 4.' },
    { title: 'Example 5', link: 'https://example.com/5', description: 'This is a description for example 5.' },
];

searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    resultsDiv.innerHTML = ''; // Clear previous results

    if (query) {
        // Special case for the secret code "Ola"
        if (query === 'ola') {
            const password = prompt('Enter the password:'); // Prompt for password
            if (password === 'harleyth') {
                resultsDiv.innerHTML = '<p>Uberrrrrrrrrrr</p>'; // Show special message
            } else {
                resultsDiv.innerHTML = '<p>Incorrect password.</p>'; // Show error message
            }
            return; // Exit the function
        }

        // Filter dummy data for regular search results
        const filteredResults = dummyData.filter(data => data.title.toLowerCase().includes(query));

        if (filteredResults.length > 0) {
            filteredResults.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.innerHTML = `<h3><a href="${result.link}" target="_blank">${result.title}</a></h3>
                                        <p>${result.description}</p>`;
                resultsDiv.appendChild(resultItem);
            });
        } else {
            resultsDiv.innerHTML = '<p>No results found.</p>';
        }
    } else {
        resultsDiv.innerHTML = '<p>Please enter a search term.</p>';
    }
});
