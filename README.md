# KendoUISushiSeleniumJS

Simple Selenium test suite on basic shopping cart functionality (various single/multiple product addition to / removal from shopping cart/checkout) The test suite captures screenshots at the end of test case run (for logging purposes).

#Tech Requirements:
 
 1.Node.js

 2.Jest
 
 3.IntelliJ IDEA (or another IDE)

#Setup

1. Clone this repository into IntelliJ(or other IDE) workspace folder (or wherever the project can be launched by IDE)
2. Open the IDE and open the project folder
3. Install Node.js
4. Make sure JavaScript/TypeScript plugins are enabled in the IDE.
5. Install and configure Jest (enter in IDE terminal: npm install --save-dev jest)
6. Run the test suite on the IDE

## Test Case List

//Home Page Tests

//Add Single Product To Cart Test

1.	//Test 001 -> add single product ('Sashimi salad') to cart test

//Add Multiple Products To Cart Test

1.	//Test 001a -> add multiple products ('Seaweed salad', 'Maguro', 'Shake') to cart test

//Remove Single Product From Cart Test

1.	//Test 001b -> remove single product from cart test

//Single Product Page Tests

//Add Single Product Page Product To Cart Test

1.	//Test 002 -> add single product page product ('Shiromi') to cart test

//Add Multiple Single Product Page Products To Cart Test

1.	//Test 002a-> add multiple single product page products ('Hosomaki Mix') to cart test

//Remove Single Product Page Product From Cart Test

1.	//Test 002b -> remove single product page product ('Seattle Rolls') from cart test

//Scroll Up/Down Through Single Product Pages Tests

1.	//Test 003 -> scroll up through single product pages test
2.	//Test 003a -> scroll down through single product pages test

//Checkout Page Tests

//Single Product Checkout Test

1.	//Test 004 -> single product checkout test

//Product Checkout (Product Quantity Increase/Decrease During Checkout) Test

1.	//Test 004a -> product ('Shiromi') checkout (with product quantity increase) test
2.	//Test 004b-> multiple single product page products ('Hosomaki Mix') checkout (with product quantity decrease) test

//Multiple Products Checkout Test

1.	//Test 004c -> product ('Seaweed salad', 'Maguro', 'Shake') checkout test
