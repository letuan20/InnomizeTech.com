import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import BlogComponent from './BlogComponent';

import Image from 'gatsby-image';

import hoangle from '../../assets/images/hoangle.jpeg';
import iconFacebook from '../../assets/images/blog/facebook-icon.svg';
import iconTwitter from '../../assets/images/blog/twitter-icon.svg';
import iconLinkedIn from '../../assets/images/blog/linkedIn-icon.svg';
import subcribe from '../../assets/images/blog/subcribe.svg';

import moment from 'moment';

const OurBlog = () => {
  const blogs = useStaticQuery(graphql`
    query QueryBlogs {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      ) {
        nodes {
          frontmatter {
            path
            hashtags
            position
            date
            title
            author
            image
          }
        }
      }
    }
  `);

  return (
    <>
      <section className="blog-area">
        <div className="container">
          <div className="other-content">
            <div className="col-lg-8 col-md-6 trending-blog">
              <Link
                to={`/blog/${blogs.allMarkdownRemark.nodes[0].frontmatter.path}`}
              >
                <div className="single-blog-post">
                  <div className="post-image">
                    {blogs.allMarkdownRemark.nodes[0].frontmatter.image ? (
                      <Image
                        fluid={
                          blogs.allMarkdownRemark.nodes[0].frontmatter.image
                        }
                        style={{ height: '288px' }}
                      />
                    ) : (
                      <div style={{ height: '288px' }}></div>
                    )}
                  </div>

                  <div className="post-content">
                    <h2>Trending</h2>
                    <h3>
                      {blogs.allMarkdownRemark.nodes[0].frontmatter.title}
                    </h3>
                    <ul className="post-meta d-flex justify-content-between align-items-center">
                      <li>
                        <div className="post-author d-flex align-items-center">
                          <img
                            src={hoangle}
                            className="rounded-circle"
                            alt="blog"
                          />
                          <span>
                            {
                              blogs.allMarkdownRemark.nodes[0].frontmatter
                                .author
                            }
                          </span>
                        </div>
                      </li>
                      <li>
                        {moment(
                          blogs.allMarkdownRemark.nodes[0].frontmatter.date,
                        ).format('ll')}
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 info-blog">
              <div className="other-content follow-us">
                <input
                  type="search"
                  id="search"
                  name="search"
                  placeholder="Search..."
                />
                <h2>Follow us on</h2>
                <div>
                  <button>
                    <img src={iconFacebook} />
                    Facebook
                  </button>
                  <button>
                    <img src={iconLinkedIn} />
                    LinkedIn
                  </button>
                  <button>
                    <img src={iconTwitter} />
                    Twitter
                  </button>
                </div>
              </div>
              <div className="other-content subcribe">
                <div>
                  <h2>Get our new post</h2>
                  <a className="default-btn" href="/contact">
                    Subcribe
                  </a>
                </div>
                <img src={subcribe} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-area" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="row">
            {blogs.allMarkdownRemark.nodes.map((blog) => (
              <BlogComponent blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurBlog;
