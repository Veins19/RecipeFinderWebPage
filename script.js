document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        {
            title: "Caesar Salad",
            description: "A classic Caesar salad with homemade dressing.",
            image: "https://th.bing.com/th/id/OIP.QHDigvQawaaKlCekwi3sUgHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            ingredients: ["romaine lettuce", "croutons", "parmesan", "Caesar dressing"],
            instructions: "Toss chopped romaine lettuce with Caesar dressing. Add croutons and grated parmesan. Serve immediately.",
            time: "10 minutes"
        },
        {
            title: "Grilled Cheese Sandwich",
            description: "A quick and easy cheesy sandwich.",
            image: "https://th.bing.com/th/id/OIP.zCgr0Gsjfiqn2KwUXGf6zAHaE6?w=230&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            ingredients: ["bread", "cheese", "butter"],
            instructions: "Butter the outside of two slices of bread. Place cheese in between and grill on a pan until golden brown on both sides. Serve hot.",
            time: "10 minutes"
        },
        {
            title: "Chicken Alfredo",
            description: "Creamy and delicious pasta with chicken.",
            image: "https://th.bing.com/th/id/OIP.VtkxLS9XV-E9FYTWfSt6BgAAAA?rs=1&pid=ImgDetMain",
            ingredients: ["pasta", "chicken", "cream", "parmesan"],
            instructions: "Cook pasta until al dente. Sauté chicken until cooked through. Mix cream and parmesan in a pan until smooth, then combine with pasta and chicken.",
            time: "30 minutes"
        },
        {
            title: "Caprese Salad",
            description: "Fresh and healthy Italian salad.",
            image: "https://downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-4.jpg",
            ingredients: ["tomato", "mozzarella", "basil", "olive oil"],
            instructions: "Layer sliced tomato and mozzarella on a plate. Add fresh basil leaves, drizzle with olive oil, and sprinkle with salt and pepper.",
            time: "5 minutes"
        },
        {
            title: "Pancakes",
            description: "Fluffy and golden breakfast pancakes.",
            image: "https://th.bing.com/th/id/OIP.cj4k7gz0VX-vSY96LgkJQQHaHa?rs=1&pid=ImgDetMain",
            ingredients: ["flour", "milk", "egg", "butter"],
            instructions: "Mix flour, milk, egg, and melted butter into a batter. Pour onto a hot griddle and cook until bubbles form, then flip. Serve with syrup.",
            time: "20 minutes"
        },
        {
            title: "Tomato Soup",
            description: "A comforting classic soup.",
            image: "https://i1.wp.com/garlicmatters.com/wp-content/uploads/2016/06/Fresh-Tomato-Soup-2.jpg?resize=1360%2C2040",
            ingredients: ["tomatoes", "onion", "garlic", "cream"],
            instructions: "Sauté onion and garlic, then add chopped tomatoes. Simmer and blend until smooth. Add cream and season to taste.",
            time: "30 minutes"
        },
        {
            title: "Garlic Bread",
            description: "Crispy and buttery garlic bread.",
            image: "https://www.ambitiouskitchen.com/wp-content/uploads/2018/01/garlicbread-4.jpg",
            ingredients: ["bread", "butter", "garlic", "parsley"],
            instructions: "Mix minced garlic and parsley into softened butter. Spread on bread slices and bake at 200°C until golden.",
            time: "15 minutes"
        },
        {
            title: "Veggie Burger",
            description: "A healthy and tasty alternative to a classic burger.",
            image: "https://www.foodandwine.com/thmb/nfLq4BlAQNSaDlA8b7O5_yGE430=/2000x1334/filters:fill(auto,1)/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg",
            ingredients: ["burger bun", "vegie patty", "lettuce", "tomato"],
            instructions: "Cook veggie patty as directed. Assemble burger with lettuce, tomato, and condiments.",
            time: "15 minutes"
        },
        {
            title: "Mushroom Risotto",
            description: "Creamy rice dish with mushrooms.",
            image: "https://th.bing.com/th/id/OIP.OVYD-MTI6Mal4RCbjH8bBQHaKX?rs=1&pid=ImgDetMain",
            ingredients: ["rice", "mushrooms", "onion", "parmesan"],
            instructions: "Sauté onions and mushrooms. Add rice and cook with broth, stirring constantly. Finish with grated parmesan.",
            time: "45 minutes"
        },
        {
            title: "Chocolate Chip Cookies",
            description: "Soft and chewy cookies.",
            image: "https://iambaker.net/wp-content/uploads/2010/09/ccc.jpg",
            ingredients: ["flour", "butter", "sugar", "chocolate chips"],
            instructions: "Mix butter and sugar, then add flour and chocolate chips. Scoop onto a baking sheet and bake at 180°C until golden.",
            time: "25 minutes"
        },
        {
            title: "Fish Tacos",
            description: "Light and flavorful tacos with fish.",
            image: "https://i2.wp.com/wonkywonderful.com/wp-content/uploads/2019/08/fish-tacos-thrive-8.jpg?resize=980%2C1470&ssl=1",
            ingredients: ["fish", "taco shells", "cabbage", "lime"],
            instructions: "Cook fish fillets and flake into pieces. Fill taco shells with fish, shredded cabbage, and a squeeze of lime.",
            time: "20 minutes"
        },
        {
            title: "Shrimp Scampi",
            description: "A quick and delicious shrimp pasta.",
            image: "https://th.bing.com/th/id/OIP.fQEVuPkAEOTsMAmm78SJ6AHaLH?rs=1&pid=ImgDetMain",
            ingredients: ["shrimp", "pasta", "garlic", "lemon"],
            instructions: "Cook pasta. Sauté garlic in butter, add shrimp, and cook until pink. Toss with pasta and lemon juice.",
            time: "20 minutes"
        },
        {
            title: "Egg Fried Rice",
            description: "Quick and easy fried rice with egg.",
            image: "https://sweetandsavorymeals.com/wp-content/uploads/2020/04/egg-fried-rice-recipe-facebook.jpg",
            ingredients: ["rice", "egg", "soy sauce", "green onions"],
            instructions: "Scramble eggs in a wok. Add rice and soy sauce, then stir in chopped green onions.",
            time: "15 minutes"
        },
        {
            title: "French Toast",
            description: "Classic breakfast dish.",
            image: "https://iambaker.net/wp-content/uploads/2010/10/861A6736.toast_.jpg",
            ingredients: ["bread", "egg", "milk", "cinnamon"],
            instructions: "Dip bread in a mixture of egg, milk, and cinnamon. Cook on a skillet until golden brown on both sides.",
            time: "15 minutes"
        },
        {
            title: "Stuffed Bell Peppers",
            description: "Bell peppers filled with rice and meat.",
            image: "https://bellyfull.net/wp-content/uploads/2021/01/Stuffed-Peppers-blog-3-1536x2048.jpg",
            ingredients: ["bell peppers", "rice", "ground beef", "cheese"],
            instructions: "Hollow out bell peppers and stuff with a mixture of cooked rice, ground beef, and cheese. Bake at 200°C for 25 minutes.",
            time: "40 minutes"
        },
        {
            title: "Banana Smoothie",
            description: "A creamy and nutritious drink.",
            image: "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2019/07/banana-smoothie-700-519.jpg?resize=600%2C900&ssl=1",
            ingredients: ["banana", "milk", "yogurt", "honey"],
            instructions: "Blend banana, milk, yogurt, and honey until smooth. Serve chilled.",
            time: "5 minutes"
        },
        {
            title: "Chicken Caesar Wrap",
            description: "A healthy and filling wrap.",
            image: "https://www.tasteandtellblog.com/wp-content/uploads/2017/04/Chicken-Caesar-Wraps-tasteandtellblog.com-1.jpg",
            ingredients: ["chicken", "lettuce", "Caesar dressing", "tortilla"],
            instructions: "Fill tortilla with cooked chicken, lettuce, and Caesar dressing. Roll tightly and serve.",
            time: "10 minutes"
        },
        {
            title: "Vegetable Stir Fry",
            description: "A healthy and quick veggie dish.",
            image: "https://natashaskitchen.com/wp-content/uploads/2020/08/Vegetable-Stir-Fry-2.jpg",
            ingredients: ["broccoli", "carrot", "bell pepper", "soy sauce"],
            instructions: "Heat oil in a wok or large skillet. Add chopped garlic and stir-fry for 30 seconds. Add sliced carrots, bell peppers, and broccoli. Stir-fry on high heat for 5-7 minutes. Add soy sauce, a pinch of sugar, and a splash of water. Toss well and serve immediately over steamed rice or noodles.",
            time: "15 minutes"
        },
{
            title: "Spaghetti Carbonara",
            description: "A classic Italian pasta dish.",
            image: "https://th.bing.com/th/id/R.415f6084504f1642b7f92b98ce13430f?rik=CgPH9IoM17NyIg&riu=http%3a%2f%2ffoodwhirl.com%2fwp-content%2fuploads%2f2017%2f02%2fspaghetti-carbonara-insta.jpg&ehk=k6BrmXRCK%2bjCz6K8qHVVhXFVe%2fO7GbyUM0uaGzNJq20%3d&risl=&pid=ImgRaw&r=0",
            ingredients: ["spaghetti", "egg", "parmesan", "bacon"],
            instructions: "Boil spaghetti in salted water until al dente. In a bowl, whisk egg yolks and grated parmesan. Fry bacon in a pan until crispy. Drain spaghetti, reserving some pasta water. Mix hot spaghetti with egg mixture and add bacon, stirring quickly to create a creamy sauce. Add reserved pasta water if needed. Serve with extra parmesan and black pepper.",
            time: "25 minutes"
        },
        {
            title: "Chicken Curry",
            description: "A flavorful Indian curry.",
            image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/priyanjali/shutterstock_111998606.jpg",
            ingredients: ["chicken", "onion", "tomato", "spices"],
            instructions: "Heat oil in a pan and sauté chopped onions until golden brown. Add ginger-garlic paste and cook for a minute. Stir in spices like turmeric, cumin, and coriander. Add diced tomatoes and cook until soft. Add chicken pieces and mix well. Cover and simmer until chicken is fully cooked. Garnish with cilantro and serve with rice or naan.",
            time: "40 minutes"
        },
        {
            title: "Margherita Pizza",
            description: "A simple and delicious pizza.",
            image: "https://cdn.loveandlemons.com/wp-content/uploads/2019/09/margherita-pizza.jpg",
            ingredients: ["pizza dough", "tomato", "mozzarella", "basil"],
            instructions: "Preheat oven to 220°C (430°F). Roll out pizza dough and spread a thin layer of tomato sauce. Add sliced mozzarella and fresh basil leaves. Drizzle with olive oil and bake for 10-15 minutes until the crust is golden and cheese is bubbly. Slice and serve hot.",
            time: "30 minutes"
        }

    ];

    let favouriteRecipes = JSON.parse(localStorage.getItem('favouriteRecipes')) || [];

    const searchInput = document.getElementById('searchInput');
    const recipeList = document.getElementById('recipeList');
    const favouriteList = document.getElementById('favouriteList');

    function displayRecipes(filteredRecipes) {
        recipeList.innerHTML = '';
        filteredRecipes.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'recipe-card';
            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="details">
                    <h3>${recipe.title}</h3>
                    <p>${recipe.description}</p>
                    <button class="favourite-btn" data-title="${recipe.title}">favourite</button>
                </div>
                <div class="dropdown">
                    <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
                    <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                    <p><strong>Cooking Time:</strong> ${recipe.time}</p>
                </div>
            `;
            recipeList.appendChild(card);
        });

        const favouriteButtons = document.querySelectorAll('.favourite-btn');
        favouriteButtons.forEach(button => {
            button.addEventListener('click', () => {
                const recipeTitle = button.getAttribute('data-title');
                const recipe = recipes.find(r => r.title === recipeTitle);
                if (!favouriteRecipes.some(r => r.title === recipe.title)) {
                    favouriteRecipes.push(recipe);
                    localStorage.setItem('favouriteRecipes', JSON.stringify(favouriteRecipes));
                    displayfavourites();
                }
            });
        });
    }

    function displayfavourites() {
        favouriteList.innerHTML = '';
        favouriteRecipes.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'recipe-card';
            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="details">
                    <h3>${recipe.title}</h3>
                    <p>${recipe.description}</p>
                    <button class="favourite-btn" data-title="${recipe.title}">Remove from favourites</button>
                </div>
                <div class="dropdown">
                    <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
                    <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                    <p><strong>Cooking Time:</strong> ${recipe.time}</p>
                </div>
            `;
            favouriteList.appendChild(card);
        });

        const favouriteButtons = document.querySelectorAll('.favourite-btn');
        favouriteButtons.forEach(button => {
            button.addEventListener('click', () => {
                const recipeTitle = button.getAttribute('data-title');
                favouriteRecipes = favouriteRecipes.filter(r => r.title !== recipeTitle);
                localStorage.setItem('favouriteRecipes', JSON.stringify(favouriteRecipes));
                displayfavourites();
                displayRecipes(recipes); // Re-render the main recipe list
            });
        });
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe =>
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query))
        );
        displayRecipes(filteredRecipes);
    });

    displayRecipes(recipes); // Initially display all recipes
    displayfavourites(); // Display favourite recipes on load
});