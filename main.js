import { blogs } from './data/blogs.js';

document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.getElementById('blog-container');
    
    // Check if the container exists on the page
    if (blogContainer) {
        let blogHTML = '';
        
        // Loop through the data in blogs.js and create HTML for each post
        blogs.forEach(blog => {
            blogHTML += `
            <article class="blog-card">
                <div class="blog-date">${blog.date}</div>
                <div class="blog-content">
                    <h3>${blog.title}</h3>
                    <p>${blog.description}</p>
                    <a href="${blog.link}" class="card-link">Read Article →</a>
                </div>
            </article>
            `;
        });
        
        // Inject all the generated HTML into the page at once
        blogContainer.innerHTML = blogHTML;
    }
});
