/*
For this quiz, use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!
*/

// don't change this variable!
var featuredArticle;

featuredArticle = $('.featured'); //not $('.article-item.featured')
featuredArticle.toggleClass('featured'); //not .toggleClass('article-item')


<!DOCTYPE html>
<!--

This is the HTML document that you'll use jQuery to modify. To take the quiz, click over to app.js!

-->
<html lang="en">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <meta charset="UTF-8">
</head>
<body>
    <div class="container">
        <header class="header">
            <nav id="nav" class="navigator">
                <h1>Nav Header</h1>
                <ul class="nav-list">
                    <li class="nav-item"><a>Item #1</a></li>
                    <li class="nav-item active"><a href="#2">Item #2</a></li>
                    <li class="nav-item"><a href="#3">Item #3</a></li>
                    <li class="nav-item"><a href="#4">Item #4</a></li>
                    <li class="nav-item"><a href="#5">Item #5</a></li>
                    <li class="nav-item"><a href="#6">Item #6</a></li>
                </ul>
            </nav>
        </header>
        <div class="articles">
            <input id="input" value="Cool Articles" type="text">
            <h1>Cool Articles</h1>
            <ul class="article-list">
                <li class="article-item">
                    <header>Article #1</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente officiis beatae, ut consequuntur. Quos minus neque eius, nemo sunt excepturi eveniet amet veritatis voluptatibus corporis ea, blanditiis porro ad!</p>
                    <h3>Sample Image Title here</h3>
                    <img src="http://placehold.it/350x150" alt="Placeholder Image">
                    <ul>
                        <li class="bold">James</li>
                        <li>Lily</li>
                        <li>Harry</li>
                    </ul>
                    <p>Magnam ex autem doloremque, tempore mollitia atque aut delectus corporis rem similique voluptates omnis reiciendis vitae impedit exercitationem unde quaerat, doloribus voluptatibus molestias et veritatis sed optio repudiandae? Provident, voluptates.</p>
                </li>
                <li class="article-item featured">
                    <header>Article #2</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi ipsum, incidunt mollitia modi cum, eum ex doloremque rerum quod, maiores quisquam, enim quam unde cumque! Quam, doloremque. Voluptatum, maxime!</p>
                    <p>Numquam et quae, quasi. Reiciendis nemo mollitia eveniet alias, debitis facere atque excepturi et beatae laudantium commodi optio unde amet vitae libero quas cupiditate, nam porro minus. Quisquam, odit non.</p>
                </li>
                <li class="article-item">
                    <header>Article #3</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ratione, cum doloremque molestias labore amet at dicta reiciendis repudiandae fuga atque adipisci pariatur distinctio suscipit perferendis provident, facere ad aut.</p>
                    <p>Temporibus sapiente odio eveniet enim perferendis maxime, ratione, accusantium suscipit alias, soluta architecto culpa pariatur. Cupiditate nam eaque dolore voluptatem necessitatibus corporis iusto adipisci, dignissimos error, vitae quam, aliquid eius!</p>
                </li>
                <li class="article-item">
                    <header>Article #4</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate commodi, est soluta eos voluptates eum! Modi sit quia ipsum fugiat nesciunt, assumenda deleniti consequuntur molestias reprehenderit. Voluptate corporis illum nam?</p>
                    <p>Quia, omnis. Quasi necessitatibus, ducimus, deserunt ipsa, reprehenderit sit a dolore fuga placeat magni culpa ipsam quas id aut veniam rerum pariatur enim harum recusandae quo odio consequuntur. Maxime, aperiam.</p>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>



/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;

// your code goes here!
article2 = $('.featured');
article3 = article2.next();
article2.toggleClass('featured'); // remove from article2
article3.toggleClass('featured'); // add to article 3 i.e. next


<!DOCTYPE html>
<!--

This is the HTML document that you'll use jQuery to modify. To take the quiz, click over to app.js!

-->
<html lang="en">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <meta charset="UTF-8">
</head>
<body>
    <div class="container">
        <header class="header">
            <nav id="nav" class="navigator">
                <h1>Nav Header</h1>
                <ul class="nav-list">
                    <li class="nav-item"><a>Item #1</a></li>
                    <li class="nav-item active"><a href="#2">Item #2</a></li>
                    <li class="nav-item"><a href="#3">Item #3</a></li>
                    <li class="nav-item"><a href="#4">Item #4</a></li>
                    <li class="nav-item"><a href="#5">Item #5</a></li>
                    <li class="nav-item"><a href="#6">Item #6</a></li>
                </ul>
            </nav>
        </header>
        <div class="articles">
            <input id="input" value="Cool Articles" type="text">
            <h1>Cool Articles</h1>
            <ul class="article-list">
                <li class="article-item">
                    <header>Article #1</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente officiis beatae, ut consequuntur. Quos minus neque eius, nemo sunt excepturi eveniet amet veritatis voluptatibus corporis ea, blanditiis porro ad!</p>
                    <h3>Sample Image Title here</h3>
                    <img src="http://placehold.it/350x150" alt="Placeholder Image">
                    <ul>
                        <li class="bold">James</li>
                        <li>Lily</li>
                        <li>Harry</li>
                    </ul>
                    <p>Magnam ex autem doloremque, tempore mollitia atque aut delectus corporis rem similique voluptates omnis reiciendis vitae impedit exercitationem unde quaerat, doloribus voluptatibus molestias et veritatis sed optio repudiandae? Provident, voluptates.</p>
                </li>
                <li class="article-item featured">
                    <header>Article #2</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi ipsum, incidunt mollitia modi cum, eum ex doloremque rerum quod, maiores quisquam, enim quam unde cumque! Quam, doloremque. Voluptatum, maxime!</p>
                    <p>Numquam et quae, quasi. Reiciendis nemo mollitia eveniet alias, debitis facere atque excepturi et beatae laudantium commodi optio unde amet vitae libero quas cupiditate, nam porro minus. Quisquam, odit non.</p>
                </li>
                <li class="article-item">
                    <header>Article #3</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ratione, cum doloremque molestias labore amet at dicta reiciendis repudiandae fuga atque adipisci pariatur distinctio suscipit perferendis provident, facere ad aut.</p>
                    <p>Temporibus sapiente odio eveniet enim perferendis maxime, ratione, accusantium suscipit alias, soluta architecto culpa pariatur. Cupiditate nam eaque dolore voluptatem necessitatibus corporis iusto adipisci, dignissimos error, vitae quam, aliquid eius!</p>
                </li>
                <li class="article-item">
                    <header>Article #4</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate commodi, est soluta eos voluptates eum! Modi sit quia ipsum fugiat nesciunt, assumenda deleniti consequuntur molestias reprehenderit. Voluptate corporis illum nam?</p>
                    <p>Quia, omnis. Quasi necessitatibus, ducimus, deserunt ipsa, reprehenderit sit a dolore fuga placeat magni culpa ipsam quas id aut veniam rerum pariatur enim harum recusandae quo odio consequuntur. Maxime, aperiam.</p>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>



/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList;
var linkFound;
var firstH;

navList = $('.nav-list');// your code goes here!
firstH = navList.children().first();
linkFound = firstH.find('a');
linkFound.attr('href','#1'); //change attrib of href to be #1

<!DOCTYPE html>
<!--

This is the HTML document that you'll use jQuery to modify. To take the quiz, click over to app.js!

-->
<html lang="en">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <meta charset="UTF-8">
</head>
<body>
    <div class="container">
        <header class="header">
            <nav id="nav" class="navigator">
                <h1>Nav Header</h1>
                <ul class="nav-list">
                    <li class="nav-item"><a>Item #1</a></li>
                    <li class="nav-item active"><a href="#2">Item #2</a></li>
                    <li class="nav-item"><a href="#3">Item #3</a></li>
                    <li class="nav-item"><a href="#4">Item #4</a></li>
                    <li class="nav-item"><a href="#5">Item #5</a></li>
                    <li class="nav-item"><a href="#6">Item #6</a></li>
                </ul>
            </nav>
        </header>
        <div class="articles">
            <input id="input" value="Cool Articles" type="text">
            <h1>Cool Articles</h1>
            <ul class="article-list">
                <li class="article-item">
                    <header>Article #1</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente officiis beatae, ut consequuntur. Quos minus neque eius, nemo sunt excepturi eveniet amet veritatis voluptatibus corporis ea, blanditiis porro ad!</p>
                    <h3>Sample Image Title here</h3>
                    <img src="http://placehold.it/350x150" alt="Placeholder Image">
                    <ul>
                        <li class="bold">James</li>
                        <li>Lily</li>
                        <li>Harry</li>
                    </ul>
                    <p>Magnam ex autem doloremque, tempore mollitia atque aut delectus corporis rem similique voluptates omnis reiciendis vitae impedit exercitationem unde quaerat, doloribus voluptatibus molestias et veritatis sed optio repudiandae? Provident, voluptates.</p>
                </li>
                <li class="article-item featured">
                    <header>Article #2</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi ipsum, incidunt mollitia modi cum, eum ex doloremque rerum quod, maiores quisquam, enim quam unde cumque! Quam, doloremque. Voluptatum, maxime!</p>
                    <p>Numquam et quae, quasi. Reiciendis nemo mollitia eveniet alias, debitis facere atque excepturi et beatae laudantium commodi optio unde amet vitae libero quas cupiditate, nam porro minus. Quisquam, odit non.</p>
                </li>
                <li class="article-item">
                    <header>Article #3</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ratione, cum doloremque molestias labore amet at dicta reiciendis repudiandae fuga atque adipisci pariatur distinctio suscipit perferendis provident, facere ad aut.</p>
                    <p>Temporibus sapiente odio eveniet enim perferendis maxime, ratione, accusantium suscipit alias, soluta architecto culpa pariatur. Cupiditate nam eaque dolore voluptatem necessitatibus corporis iusto adipisci, dignissimos error, vitae quam, aliquid eius!</p>
                </li>
                <li class="article-item">
                    <header>Article #4</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate commodi, est soluta eos voluptates eum! Modi sit quia ipsum fugiat nesciunt, assumenda deleniti consequuntur molestias reprehenderit. Voluptate corporis illum nam?</p>
                    <p>Quia, omnis. Quasi necessitatibus, ducimus, deserunt ipsa, reprehenderit sit a dolore fuga placeat magni culpa ipsam quas id aut veniam rerum pariatur enim harum recusandae quo odio consequuntur. Maxime, aperiam.</p>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>



/*
For this quiz, change the font-size of all the article-items to 20px!

You must use jQuery's css() method!
*/

// Start with this variable!
var articleItems;

articleItems = $('.article-item');// your code goes here!
articleItems.css('font-size', '20px');


<!DOCTYPE html>
<!--

This is the HTML document that you'll use jQuery to modify. To take the quiz, click over to app.js!

-->
<html lang="en">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <meta charset="UTF-8">
</head>
<body>
    <div class="container">
        <header class="header">
            <nav id="nav" class="navigator">
                <h1>Nav Header</h1>
                <ul class="nav-list">
                    <li class="nav-item"><a>Item #1</a></li>
                    <li class="nav-item active"><a href="#2">Item #2</a></li>
                    <li class="nav-item"><a href="#3">Item #3</a></li>
                    <li class="nav-item"><a href="#4">Item #4</a></li>
                    <li class="nav-item"><a href="#5">Item #5</a></li>
                    <li class="nav-item"><a href="#6">Item #6</a></li>
                </ul>
            </nav>
        </header>
        <div class="articles">
            <input id="input" value="Cool Articles" type="text">
            <h1>Cool Articles</h1>
            <ul class="article-list">
                <li class="article-item">
                    <header>Article #1</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente officiis beatae, ut consequuntur. Quos minus neque eius, nemo sunt excepturi eveniet amet veritatis voluptatibus corporis ea, blanditiis porro ad!</p>
                    <h3>Sample Image Title here</h3>
                    <img src="http://placehold.it/350x150" alt="Placeholder Image">
                    <ul>
                        <li class="bold">James</li>
                        <li>Lily</li>
                        <li>Harry</li>
                    </ul>
                    <p>Magnam ex autem doloremque, tempore mollitia atque aut delectus corporis rem similique voluptates omnis reiciendis vitae impedit exercitationem unde quaerat, doloribus voluptatibus molestias et veritatis sed optio repudiandae? Provident, voluptates.</p>
                </li>
                <li class="article-item featured">
                    <header>Article #2</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi ipsum, incidunt mollitia modi cum, eum ex doloremque rerum quod, maiores quisquam, enim quam unde cumque! Quam, doloremque. Voluptatum, maxime!</p>
                    <p>Numquam et quae, quasi. Reiciendis nemo mollitia eveniet alias, debitis facere atque excepturi et beatae laudantium commodi optio unde amet vitae libero quas cupiditate, nam porro minus. Quisquam, odit non.</p>
                </li>
                <li class="article-item">
                    <header>Article #3</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ratione, cum doloremque molestias labore amet at dicta reiciendis repudiandae fuga atque adipisci pariatur distinctio suscipit perferendis provident, facere ad aut.</p>
                    <p>Temporibus sapiente odio eveniet enim perferendis maxime, ratione, accusantium suscipit alias, soluta architecto culpa pariatur. Cupiditate nam eaque dolore voluptatem necessitatibus corporis iusto adipisci, dignissimos error, vitae quam, aliquid eius!</p>
                </li>
                <li class="article-item">
                    <header>Article #4</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate commodi, est soluta eos voluptates eum! Modi sit quia ipsum fugiat nesciunt, assumenda deleniti consequuntur molestias reprehenderit. Voluptate corporis illum nam?</p>
                    <p>Quia, omnis. Quasi necessitatibus, ducimus, deserunt ipsa, reprehenderit sit a dolore fuga placeat magni culpa ipsam quas id aut veniam rerum pariatur enim harum recusandae quo odio consequuntur. Maxime, aperiam.</p>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>




/*
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/


$('#input').on('change', function() {
    var val;
    var h1val;
    val = $('#input').val();// Your code goes here!
    h1val = $('.articles').children('h1');
    h1val = text(val);
});

<!DOCTYPE html>
<!--

This is the HTML document that you'll use jQuery to modify. To take the quiz, click over to app.js!

-->
<html lang="en">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <meta charset="UTF-8">
</head>
<body>
    <div class="container">
        <header class="header">
            <nav id="nav" class="navigator">
                <h1>Nav Header</h1>
                <ul class="nav-list">
                    <li class="nav-item"><a>Item #1</a></li>
                    <li class="nav-item active"><a href="#2">Item #2</a></li>
                    <li class="nav-item"><a href="#3">Item #3</a></li>
                    <li class="nav-item"><a href="#4">Item #4</a></li>
                    <li class="nav-item"><a href="#5">Item #5</a></li>
                    <li class="nav-item"><a href="#6">Item #6</a></li>
                </ul>
            </nav>
        </header>
        <div class="articles">
            <input id="input" value="Cool Articles" type="text">
            <h1>Cool Articles</h1>
            <ul class="article-list">
                <li class="article-item">
                    <header>Article #1</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente officiis beatae, ut consequuntur. Quos minus neque eius, nemo sunt excepturi eveniet amet veritatis voluptatibus corporis ea, blanditiis porro ad!</p>
                    <h3>Sample Image Title here</h3>
                    <img src="http://placehold.it/350x150" alt="Placeholder Image">
                    <ul>
                        <li class="bold">James</li>
                        <li>Lily</li>
                        <li>Harry</li>
                    </ul>
                    <p>Magnam ex autem doloremque, tempore mollitia atque aut delectus corporis rem similique voluptates omnis reiciendis vitae impedit exercitationem unde quaerat, doloribus voluptatibus molestias et veritatis sed optio repudiandae? Provident, voluptates.</p>
                </li>
                <li class="article-item featured">
                    <header>Article #2</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi ipsum, incidunt mollitia modi cum, eum ex doloremque rerum quod, maiores quisquam, enim quam unde cumque! Quam, doloremque. Voluptatum, maxime!</p>
                    <p>Numquam et quae, quasi. Reiciendis nemo mollitia eveniet alias, debitis facere atque excepturi et beatae laudantium commodi optio unde amet vitae libero quas cupiditate, nam porro minus. Quisquam, odit non.</p>
                </li>
                <li class="article-item">
                    <header>Article #3</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ratione, cum doloremque molestias labore amet at dicta reiciendis repudiandae fuga atque adipisci pariatur distinctio suscipit perferendis provident, facere ad aut.</p>
                    <p>Temporibus sapiente odio eveniet enim perferendis maxime, ratione, accusantium suscipit alias, soluta architecto culpa pariatur. Cupiditate nam eaque dolore voluptatem necessitatibus corporis iusto adipisci, dignissimos error, vitae quam, aliquid eius!</p>
                </li>
                <li class="article-item">
                    <header>Article #4</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate commodi, est soluta eos voluptates eum! Modi sit quia ipsum fugiat nesciunt, assumenda deleniti consequuntur molestias reprehenderit. Voluptate corporis illum nam?</p>
                    <p>Quia, omnis. Quasi necessitatibus, ducimus, deserunt ipsa, reprehenderit sit a dolore fuga placeat magni culpa ipsam quas id aut veniam rerum pariatur enim harum recusandae quo odio consequuntur. Maxime, aperiam.</p>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>



/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems;

articleItems = $('.article-item');// your code goes here!
ulList = articleItems.find('ul');
ulList.remove();


<!DOCTYPE html>
<!--

This is the HTML document that you'll use jQuery to modify. To take the quiz, click over to app.js!

-->
<html lang="en">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <meta charset="UTF-8">
</head>
<body>
    <div class="container">
        <header class="header">
            <nav id="nav" class="navigator">
                <h1>Nav Header</h1>
                <ul class="nav-list">
                    <li class="nav-item"><a>Item #1</a></li>
                    <li class="nav-item active"><a href="#2">Item #2</a></li>
                    <li class="nav-item"><a href="#3">Item #3</a></li>
                    <li class="nav-item"><a href="#4">Item #4</a></li>
                    <li class="nav-item"><a href="#5">Item #5</a></li>
                    <li class="nav-item"><a href="#6">Item #6</a></li>
                </ul>
            </nav>
        </header>
        <div class="articles">
            <input id="input" value="Cool Articles" type="text">
            <h1>Cool Articles</h1>
            <ul class="article-list">
                <li class="article-item">
                    <header>Article #1</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente officiis beatae, ut consequuntur. Quos minus neque eius, nemo sunt excepturi eveniet amet veritatis voluptatibus corporis ea, blanditiis porro ad!</p>
                    <h3>Sample Image Title here</h3>
                    <img src="http://placehold.it/350x150" alt="Placeholder Image">
                    <ul>
                        <li class="bold">James</li>
                        <li>Lily</li>
                        <li>Harry</li>
                    </ul>
                    <p>Magnam ex autem doloremque, tempore mollitia atque aut delectus corporis rem similique voluptates omnis reiciendis vitae impedit exercitationem unde quaerat, doloribus voluptatibus molestias et veritatis sed optio repudiandae? Provident, voluptates.</p>
                </li>
                <li class="article-item featured">
                    <header>Article #2</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi ipsum, incidunt mollitia modi cum, eum ex doloremque rerum quod, maiores quisquam, enim quam unde cumque! Quam, doloremque. Voluptatum, maxime!</p>
                    <p>Numquam et quae, quasi. Reiciendis nemo mollitia eveniet alias, debitis facere atque excepturi et beatae laudantium commodi optio unde amet vitae libero quas cupiditate, nam porro minus. Quisquam, odit non.</p>
                </li>
                <li class="article-item">
                    <header>Article #3</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ratione, cum doloremque molestias labore amet at dicta reiciendis repudiandae fuga atque adipisci pariatur distinctio suscipit perferendis provident, facere ad aut.</p>
                    <p>Temporibus sapiente odio eveniet enim perferendis maxime, ratione, accusantium suscipit alias, soluta architecto culpa pariatur. Cupiditate nam eaque dolore voluptatem necessitatibus corporis iusto adipisci, dignissimos error, vitae quam, aliquid eius!</p>
                </li>
                <li class="article-item">
                    <header>Article #4</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate commodi, est soluta eos voluptates eum! Modi sit quia ipsum fugiat nesciunt, assumenda deleniti consequuntur molestias reprehenderit. Voluptate corporis illum nam?</p>
                    <p>Quia, omnis. Quasi necessitatibus, ducimus, deserunt ipsa, reprehenderit sit a dolore fuga placeat magni culpa ipsam quas id aut veniam rerum pariatur enim harum recusandae quo odio consequuntur. Maxime, aperiam.</p>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>



/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!
var fam1, fam2, bruce, madison, hunter;
fam1 = $('#family1');
fam2 = $('<div id = "family2"><h1>Family2</h1></div>');
bruce = $('<div id = "bruce"><h2>Bruce</h2></div>');
madison = $('<div id = "madison"><h3>Madison</h3></div>');
hunter = $('<div id = "hunter"><h3>Hunter</h3></div>');
fam2.insertAfter(fam1);
fam2.append(bruce);
bruce.append(madison);
bruce.append(hunter);


<!DOCTYPE html>
<!--

This is the HTML document that you'll use jQuery to modify. To take the quiz, click over to app.js!

-->
<html lang="en">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <meta charset="UTF-8">
</head>
<body>
	<div>
		<div>
			<div id='family1'>
				<h1>Family1</h1>
				<div id='alex'>
					<h2>Alex</h2>
					<div id='jane'>
						<h3>Jane</h3>
					</div>
				</div>
				<div id='taylor'>
					<h2>Taylor</h2>
					<div id='bob'>
						<h3>Bob</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>




/*
For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!
*/

// Your code goes here!
function summingUp(){
    var textIn, num;
    textIn = $(this).text();
    num = textIn.length;
    $(this).text(textIn + " " + num);
}
$('p').each(summingUp);


<!DOCTYPE html>
<!--

This is the HTML document that you'll use jQuery to modify. To take the quiz, click over to app.js!

-->
<html lang="en">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <meta charset="UTF-8">
</head>
<body>
    <div class="container">
        <header class="header">
            <nav id="nav" class="navigator">
                <h1>Nav Header</h1>
                <ul class="nav-list">
                    <li class="nav-item"><a>Item #1</a></li>
                    <li class="nav-item active"><a href="#2">Item #2</a></li>
                    <li class="nav-item"><a href="#3">Item #3</a></li>
                    <li class="nav-item"><a href="#4">Item #4</a></li>
                    <li class="nav-item"><a href="#5">Item #5</a></li>
                    <li class="nav-item"><a href="#6">Item #6</a></li>
                </ul>
            </nav>
        </header>
        <div class="articles">
            <input id="input" value="Cool Articles" type="text">
            <h1>Cool Articles</h1>
            <ul class="article-list">
                <li class="article-item">
                    <header>Article #1</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente officiis beatae, ut consequuntur. Quos minus neque eius, nemo sunt excepturi eveniet amet veritatis voluptatibus corporis ea, blanditiis porro ad!</p>
                    <h3>Sample Image Title here</h3>
                    <img src="http://placehold.it/350x150" alt="Placeholder Image">
                    <ul>
                        <li class="bold">James</li>
                        <li>Lily</li>
                        <li>Harry</li>
                    </ul>
                    <p>Magnam ex autem doloremque, tempore mollitia atque aut delectus corporis rem similique voluptates omnis reiciendis vitae impedit exercitationem unde quaerat, doloribus voluptatibus molestias et veritatis sed optio repudiandae? Provident, voluptates.</p>
                </li>
                <li class="article-item featured">
                    <header>Article #2</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi ipsum, incidunt mollitia modi cum, eum ex doloremque rerum quod, maiores quisquam, enim quam unde cumque! Quam, doloremque. Voluptatum, maxime!</p>
                    <p>Numquam et quae, quasi. Reiciendis nemo mollitia eveniet alias, debitis facere atque excepturi et beatae laudantium commodi optio unde amet vitae libero quas cupiditate, nam porro minus. Quisquam, odit non.</p>
                </li>
                <li class="article-item">
                    <header>Article #3</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ratione, cum doloremque molestias labore amet at dicta reiciendis repudiandae fuga atque adipisci pariatur distinctio suscipit perferendis provident, facere ad aut.</p>
                    <p>Temporibus sapiente odio eveniet enim perferendis maxime, ratione, accusantium suscipit alias, soluta architecto culpa pariatur. Cupiditate nam eaque dolore voluptatem necessitatibus corporis iusto adipisci, dignissimos error, vitae quam, aliquid eius!</p>
                </li>
                <li class="article-item">
                    <header>Article #4</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate commodi, est soluta eos voluptates eum! Modi sit quia ipsum fugiat nesciunt, assumenda deleniti consequuntur molestias reprehenderit. Voluptate corporis illum nam?</p>
                    <p>Quia, omnis. Quasi necessitatibus, ducimus, deserunt ipsa, reprehenderit sit a dolore fuga placeat magni culpa ipsam quas id aut veniam rerum pariatur enim harum recusandae quo odio consequuntur. Maxime, aperiam.</p>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>

