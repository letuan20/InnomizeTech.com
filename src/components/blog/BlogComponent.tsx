import React, {useState, useEffect} from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import hoangle from '../../assets/images/hoangle.jpeg';

import moment from 'moment';

const BlogComponent = ({blog}) => {

    
    let a = [{
        ...blog.frontmatter.hashtags.split(',')
    }]
    
    

    var res = Object.values(blog.frontmatter.hashtags.split(','));
    console.log(a.map((el)=>{
       {el}
      }));
  return (      
     <div className="col-lg-4 col-md-6">
        <Link to = {`/blog/${blog.frontmatter.path}`}>
  <div className="single-blog-post">
    <div className="post-image">
        {blog.frontmatter.image ? 
         <Image fluid={blog.frontmatter.image.childImageSharp.fluid} style={{ height: '288px' }} /> : 
         <div style={{ height: '288px'}}></div>
      }
        </div>

    <div className="post-content">
      <ul className="post-meta d-flex justify-content-between align-items-center">
        <li>
          <div className="post-author d-flex align-items-center">
            <img
              src={hoangle}
              className="rounded-circle"
              alt="blog"
            />
            <span>{blog.frontmatter.author}</span>
          </div>
        </li>
        <li>{moment(blog.frontmatter.date).format('ll')}</li>
      </ul>
      <h3>
         {blog.frontmatter.title}
      </h3>
      <ul>
          
          {/* {hashtags.map((el)=>{
            <li>{el}</li>
          })} */}
      </ul>
    </div>
  </div>
  </Link>
</div>
  );
};

export default BlogComponent;
