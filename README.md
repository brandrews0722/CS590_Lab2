# CS590 - Lab 2

## Lab Description:

### Part1: News App (using API)

1.  Create an app which makes asynchronous calls to the BBC News API and displays the required content. The page should have provision to display news by
  a. Topic (e.g.: Bit Coin)
  b. Source of news (e.g.: TechCrunch, acm.org, BBC News)
•	When the user searches by topic or source or both, the relevant results should be displayed accordingly. 
•	Each result should at least contain headlines and image of their corresponding articles along with timestamp of published article. On clicking the image, the related article must be displayed in a new tab
•	Handle any unexpected values by displaying appropriate message
2. The app should have the following
a.	A registration page
b.	A login page
c.	A home page (News page)


### Part2: Develop a Tic-Tac-Toe game with Angular JS

1. Define an empty board (3*3) [It can be any m*m, but minimum 3*3]
2. Create 2 players [It can be any no of players but minimum 2]
3. Create recursive method to fill the blocks until any of the players wins the game

## Technologies Used:
HTML, CSS, Bootstrap, AngularJS

## Knowledge Gained/Obstacles Overcame
I was able to play around with Bootstrap a little bit further, especially regarding the Tic-Tac-Toe portion and making the grid line up and setting static image sizes.
I ran into issues with AngularJS.  It took me awhile to overcome some syntax issues regarding injection.  Also, I attempted to use XMLHttpWebRequests for the API calls within an AngularJS controller, however I ultimately had to use the AngularJS $http service.
Another issue that I came across within the News Application was the Login/Registration piece.  I was trying to implement a service through AngularJS in order to pass an array of login information from one page to another, but the array's data would not persist.  I ended up adding the registration page to the login page as a workaround.

