import React from 'react';

import BlogTile from './components/BlogTile';

import './App.css';

class App extends React.Component {

  state = {
    posts: [
      { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
      { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
      { id: 3, title: 'Adam Małysz Zgolił wąs',     intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'}
    ]
  }

  postsList = this.state.posts.map( post => (
   <BlogTile 
      key = {post.id} 
      title = {post.title}
      intro = {post.intro}
    />
  ))

  render(){
  return (
    <div className="App">
      {this.postsList}
    </div>
  );
  }
}

export default App;
