import React, {Component} from 'react';
import './Widget.css';
import Card from './components/Card';
import $ from 'jquery';

const urlForFeedToJson = feed => `https://api.rss2json.com/v1/api.json?rss_url=${feed}`;
const keyCategories = ['javascript', 'front-end-development', 'responsive-web-design'];
const contains = (keyCategories, categories) => {
  const [category1, category2, category3] = keyCategories
  return categories.indexOf(category1) > -1 || categories.indexOf(category2) > -1 || categories.indexOf(category3) > -1
}

class Widget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false,
    }
  }

  componentDidMount() {
    fetch(urlForFeedToJson(this.props.mediumRSSFeedLink))
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }

        return response
      })
      .then(data => data.json())
      .then(data => {   
        const dataItems = data.items
        const mediumPosts = dataItems.filter(item => item.categories.length > 0 && contains(keyCategories, item.categories))
        this.setState({
          mediumPosts: mediumPosts
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })

    /*
        Carousel
    */
    $('#carouselExampleControls').on('slide.bs.carousel', function (e) {
      /*
          CC 2.0 License Iatek LLC 2018 - Attribution required
      */
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $('.carousel-item').length;
      console.log(totalItems);
      if (idx >= totalItems-(itemsPerSlide-1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i=0; i<it; i++) {
              // append slides to end
              if (e.direction === "left") {
                  $('.carousel-item').eq(i).appendTo('.carousel-inner');
              }
              else {
                  $('.carousel-item').eq(0).appendTo('.carousel-inner');
              }
          }
      }
    });
  }

  render (){
    if (!this.state.mediumPosts) return <p>Loading...</p>
    
    const posts = this.state.mediumPosts
    const cardCarousels = posts.map((post, index) => 
      <div className="carousel-item col-12 col-sm-12 col-md-6 col-lg-4 active" key={index}> 
        <Card post={post} />
      </div>
    )
    
    return(
      <div className="container">
        <h1>{this.state.mediumPosts[0].title}</h1>
        {console.log(this.state.mediumPosts)}
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
          <div className="carousel-inner row w-100 mx-auto" role="listbox">
            {cardCarousels}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}

export default Widget;
