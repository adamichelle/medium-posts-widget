This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Medium Posts Widget
An embeddable multiple item slider or carousel widget of medium posts filtered according to certain categories or tags.

I built this to embed some of my medium posts based on certain categories or tags on my [github profile page](https://adamichelle.github.io). 

It makes use of the [RSStoJSON Converter Online](https://api.rss2json.com/v1/api.json) service to convert the medium feed RSS to JSON. It only works for one medium feed. It has only been used for the RSS endpoint of a medium user i.e `https://medium.com/feed/@yourusername`. 


## Screenshot
[[https://res.cloudinary.com/missada/image/upload/v1569182081/my_portfolio/medium_posts_widget.png|alt=MediumPostsWidget]]

## Demo
This is the [link](https://drv.tw/~deladycoda@gmail.com/gd/medium-posts-widget/) to a live version of the widget.

## Installation
__Fork__ the repo and clone it to your local device.

Install the dependencies

```
npm install
```

Run locally using

```
npm start
```

Build Using

```
npm run build
```

Host the widget.js and widget.css files found in the `widget_dist/static` folder on your web server

Add the code below to wherever you want the widget to be dispayed. This is the element that serves as the entry point.

```
<div id="medium-posts-widget" data-medium-rss="link-to-your-medium-feed"></div>
```

Include the links to your hosted build css and js files on your web page using the `<link>` and `<script>` tags respectively.


### Example
```
<link href="/widget.css">
```

...

```
<div id="medium-posts-widget" data-medium-rss="https://medium.com/feed/@yourusername"></div>
```

...

```
<script src="/widget.js"></script>
```

## Changing the categories.
If you would like to change the categories or tags by which your posts should be filtered, you can do that.
In the `src` folder, you can change the strings in the `keyCategories` array to whatever categories you want.

## A note of caution
This only works if your medium posts have categories or tags associated with them.

## Options
| Option | Default | Required? | Explanation
| --- | --- | --- | --- |
| id | Not Applicable | Yes | You must set the id of the div that would serves as the entry point to "medium-posts-widget".
| data-medium-rss | Not Applicable | Yes | You must provide on valid url to the medium feed or RSS endpoint for your profile.