import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <p></p>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hashtags}</a></span>)
                }
            </p>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;