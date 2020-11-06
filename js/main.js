const arrItem = ['social-proof-section-master', 'fylo-data-storage-component-master',
'single-price-grid-component-master', 'four-card-feature-section-master', 
'huddle-landing-page-with-single-introductory-section-master', 'faq-accordion-card-main'
,'testimonials-grid-section-main'];

const list = document.querySelector('.web-list');
arrItem.forEach(function(project) {
    const link = document.createElement('a');
    const item = document.createElement('li');
    link.href = `/${project}/index.html`;
    link.innerText = project;
    const img = document.createElement('img');
    img.src = `/${project}/design/desktop-design.jpg`;

    link.prepend(img);
    item.append(link);
    list.append(item);
    console.log(project);
});