import React from 'react'

import BlogRoll from '../components/templates/blogPost';

class BlogIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Latest Posts</h1>
        <section>
          <div className="content">
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default BlogIndexPage