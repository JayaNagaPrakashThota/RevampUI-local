import { useState } from "react";
import PostDetail from "./PostDetail";
const posts = [
  {
    id: "post-1",
    title: "8 Cover Letter Mistakes That You Should Avoid",
    description:
      "Explore our comprehensive blog for expert insights and practical advice on mastering cover letter writing.",
    author: "Alexa Le",
    authorImage: "/EducationPage/Alex.png",
    date: "10th 2024",
    readTime: "2 min read",
    image: "/EducationPage/CoverLetter.png",
  },
  {
    id: "post-2",
    title: "How to Write a Short Professional Bio",
    description:
      "Learn to create a concise and impactful professional bio that effectively introduces your background and accomplishments.",
    author: "Leila Le",
    authorImage: "/EducationPage/Leila.png",
    date: "Nov 27, 2023 (Updated: Apr 19, 2024)",
    readTime: "5 min read",
    image: "/EducationPage/PersonalBio.png",
  },
  {
    id: "post-3",
    title: "What are Employment Barriers?",
    description:
      "A barrier to employment can be any challenge that may prevent a person from getting or keeping a job, or advancing in their career.",
    author: "Albert",
    authorImage: "/EducationPage/Albert.png",
    date: "Mar 16, 2023",
    readTime: "6 min read",
    image: "/EducationPage/Employment.png",
  },
  {
    id: "post-4",
    title: "How to Maintain A Professional Networking Relationship",
    description:
      "Learn how to effectively maintain and nurture professional networking relationships for long-term success in your career.",
    author: "Jessey",
    authorImage: "/EducationPage/jessey.png",
    date: "Oct 23, 2023 (Updated: Oct 23, 2023)",
    readTime: "7 min read",
    image: "/EducationPage/Networking.png",
  },
  {
    id: "post-5",
    title: "Best Job Markets for Recent College Graduates in 2023",
    description:
      "Explore the top job markets for recent graduates in 2023 and streamline your job search journey with Simplify's platform for organized job applications.",
    author: "Lenard",
    authorImage: "/EducationPage/Lenard.png",
    date: "Aug 28, 2023 (Updated: Nov 5, 2023)",
    readTime: "9 min read",
    image: "/EducationPage/RecentGrad.png",
  },
  {
    id: "post-6",
    title: "The Importance of Education Requirements When Finding a Job",
    description:
      "Education plays a key role in both finding and keeping a job and can open doors to higher-paying and more rewarding careers. Learn more here.",
    author: "Nick",
    authorImage: "/EducationPage/Nick.png",
    date: "Mar 17, 2023 (Updated: Mar 17, 2023)",
    readTime: "5 min read",
    image: "/EducationPage/Education.png",
  },
];

const CareerPosts = ({ id }) => {
  const [selectedPost, setSelectedPost] = useState(null); // Track selected post

  return (
    <div id={id} className="px-4 py-10 max-w-screen-xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold font-['Inter'] text-center">
          Career & Professional Development Posts
        </h1>
        <p className="text-gray-600 mt-2 text-center">
          Explore our library made by Starteryou below!
        </p>
      </div>

      {selectedPost ? (
        <div className="relative">
          {/* Back Button */}
          <button
            onClick={() => setSelectedPost(null)}
            className="absolute top-0 left-0 bg-[#6E00BF] text-white font-medium py-2 px-4 rounded-md"
          >
            ← Back
          </button>

          {/* Post Detail */}
          <PostDetail postId={selectedPost.id} />
        </div>
      ) : (
        // Show the list if no post is selected
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)} // Set selected post
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold text-lg mb-1 text-700">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 mb-3">{post.description}</p>
                <div className="flex items-start gap-2 text-sm text-gray-500">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-8 h-8 rounded-full object-cover mt-0.5"
                  />
                  <div>
                    <div className="font-medium text-gray-800 leading-tight">
                      {post.author}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {post.date} - {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CareerPosts;
