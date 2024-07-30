class BlogPost {
  constructor(title, content, timestamp) {
    this.title = title;
    this.content = content;
    this.timestamp = timestamp;
  }
}

const blogPosts = [];

module.exports = { BlogPost, blogPosts };