document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const jobCards = document.querySelectorAll('.job-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterJobs(filter);
        });
    });

    function filterJobs(filter) {
        jobCards.forEach(card => {
            const tags = card.getAttribute('data-tags').split(' ');
            if (tags.includes(filter)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
