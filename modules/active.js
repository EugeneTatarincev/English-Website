export default function active (links, navbar, clas) {
    const navLinks = document.querySelectorAll(links),
        nav = document.querySelector(navbar);
    
    const deleteAll = () => {
        navLinks.forEach(item => {
            item.classList.remove(clas);
        });
    }

    const addActive = (item) => {
        item.classList.add(clas);
    }

    deleteAll();
    addActive(navLinks[0]);

    nav.addEventListener('click', (e) => {
        navLinks.forEach(item => {
            if(e.target && e.target==item) {
                deleteAll();
                addActive(item);
            }
        });
    });
    
}