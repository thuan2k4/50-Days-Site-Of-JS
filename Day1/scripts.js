const cur = document.querySelectorAll('.image');

cur.forEach(parent => {
    parent.addEventListener('click', () => {

        cur.forEach(child => {
            child.classList.remove('active');
        })

        parent.classList.add('active');
    })
});