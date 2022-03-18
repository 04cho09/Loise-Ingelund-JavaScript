const Gallerie = [
  {
    id: 1,
    title: "His House",
    category: "Horror",
    rating: 15.99,
    img: "./images/his-house..jpeg",
    desc: `righyt `,
  },
  {
    id: 2,
    title: "American Psycho",
    category: "Horror",
    rating: 13.99,
    img: "./images/American-Pscho.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "The cabin in the woods",
    category: "Horror",
    rating: 6.99,
    img: "./images/Cabin-In-The-Woods.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "As above so below",
    category: "Horror",
    rating: 20.99,
    img: "./images/as-above-so-below.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "The lighthouse",
    category: "Horror",
    rating: 22.99,
    img: "./images/the-Lighthouse.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Extracurriular",
    category: "Serie",
    rating: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Criminal minds",
    category: "Serie",
    rating: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "All of us are dead",
    category: "Serie",
    rating: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: " Nowhere girl",
    category: "Serie",
    rating: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "The uncanny counter",
    category: "Serie",
    rating: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "The hobbit: An unexpected Jouney",
    category: "Fantasy",
    rating: 15.99,
    img: "./images/The-hobbit-unexpected.jpeg",
    desc: `righyt `,
  },
  {
    id: 12,
    title: "The hobbit: The desolation of smaug",
    category: "Fantasy",
    rating: 15.99,
    img: "./images/The-hobbit-smaug.jpeg",
    desc: `righyt `,
  },
  {
    id: 13,
    title: "The hobbit: The battle of the five armies",
    category: "Fantasy",
    rating: 15.99,
    img: "./images/The-hobbit-five.jpeg",
    desc: `righyt `,
  },
  {
    id: 14,
    title: "The lord of the rings: The fellowship of the ring",
    category: "Fantasy",
    rating: 15.99,
    img: "./images/Lord-of-the-rings-fellowship.jpeg",
    desc: `righyt `,
  },
  {
    id: 15,
    title: "The lord of the rings: The two towers",
    category: "Fantasy",
    rating: 15.99,
    img: "./images/The-lord-of-the-rings-two.jpeg",
    desc: `righyt `,
  },
  {
    id: 16,
    title: "The lord of the rings: The return of the king",
    category: "Fantasy",
    rating: 15.99,
    img: "./images/The-lord-of-the-rings-king.jpeg",
    desc: `righyt `,
  },
  {
    id: 17,
    title: "The witch:part1, Subversion",
    category: "Action",
    rating: 15.99,
    img: "./images/The-witch-part-1.jpeg",
    desc: `righyt `,
  },
  {
    id: 18,
    title: "The gentelmen",
    category: "Action",
    rating: 15.99,
    img: "./images/his-house..jpeg",
    desc: `righyt `,
  },
  {
    id:"19",
    title: "Drive",
    category: "Action",
    rating: 15.99,
    img: "./images/his-house..jpeg",
    desc: `righyt `,
  },
  {
    id: 20,
    title: "The kingsman: The secret Service",
    category: "Action",
    rating: 15.99,
    img: "./images/his-house..jpeg",
    desc: `righyt `,
  },
  {
    id: 21,
    title: "The kingsman:The gold circle ",
    category: "Action",
    rating: 15.99,
    img: "./images/his-house..jpeg",
    desc: `righyt `,
  },
  {
    id: 22,
    title: "Kung fu panda",
    category: "Animated",
    rating: 15.99,
    img: "./images/his-house..jpeg",
    desc: `righyt `,
  },
  {
    id: 23,
    title: "Kung fu panda 2",
    category: "Animated",
    rating: 15.99,
    img: "./images/his-house..jpeg",
    desc: `righyt `,
  },
  {
    id: 24,
    title: "Kung fu panda 3",
    category: "Animated",
    rating: 15.99,
    img: "./images/his-house..jpeg",
    desc: `righyt `,
  },
  {
    id: 25,
    title: "My neighbour totoro",
    category: "Animated",
    rating: 15.99,
    img: "./images/his-house..jpeg",
    desc: `righyt `,
  },
  {
    id: 26,
    title: "Howl's moving castle",
    category: "Animated",
    rating: 15.99,
    img: "./images/his-house..jpeg",
    desc: `righyt `,
  },
  {
    id: 27,
    title: "Princess Mononoke",
    category: "Animated",
    rating: 15.99,
    img: "./images/his-house..jpeg",
    desc: `righyt `,
  },
];

nav-bar  


const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});

const sectionCenter = document.querySelector(".section");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}