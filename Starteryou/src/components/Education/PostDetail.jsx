import { useParams } from "react-router-dom";
import posts from "./posts";

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <div className="p-8">Post not found.</div>;
  }

  return (
    <div className=" font-poppins max-w-7xl mx-auto px-4 py-8 pt-16">
      {/* First Section - Header Area */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* Left Column - Title and Author Info */}
        <div className="lg:w-[40%]">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="text-500 mt-2">{post.description}</p>

          {/* Updated margin-top and text size */}
          <div className="text-gray-500 text-sm mt-4">
            {post.date} - {post.readTime}
          </div>

          <div className="flex items-center mt-6">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-sm font-medium text-gray-500 mt-2">
                Written by
              </p>
              <div className="text-sm font-medium mt-1">{post.author}</div>
            </div>
          </div>
          <p className="text-gray-500 mt-2 text-sm mt-4">{post.authorInfo}</p>
        </div>

        {/* Right Column - Cover Image */}
        <div className="lg:w-[60%]">
          <img
            src={post.image}
            alt="Cover"
            className="w-full max-h-96 rounded-lg"
          />
        </div>
      </div>

      {/* Second Section - Content Area */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Small (Additional points and CTA) */}
        <div className="lg:w-[25%]">
          {/* Overview Heading */}
          <h2 className="text-xl font-medium mb-6 ml-2 font-poppins">
            Overview:
          </h2>

          {/* White Card with List Items */}
          <div className="bg-white p-6 rounded shadow-md mb-6">
            <ul className="space-y-3 font-poppins text-[15px] leading-[22px]">
              <li>1. Using a Generic Template</li>
              <li>2. Focusing Too Much on Your Needs</li>
              <li>3. Not Addressing the Hiring Manager or Company</li>
              <li>4. Repeating the Resume</li>
              <li>5. Being Overly Formal or Informal</li>
              <li>6. Ignoring Spelling and Grammar Errors</li>
              <li>7. Making it Too Long or Too Short</li>
              <li>8. Not Tailoring the Content to the Job Description</li>
            </ul>
            <p className="mt-6 font-poppins font-medium">
              Find Your Dream Job With Simplify Today
            </p>

            {/* Purple Card with CTA */}
            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 font-poppins">
                Specify job search!
              </h3>
              <p className="mb-4 font-poppins">
                Discover roles, tailor resumes, autofill applications & track
                jobs in one platform.
              </p>

              {/* Sign Up Button */}
              <button className="bg-white py-2 px-6 rounded-md w-full border border-purple-600 hover:bg-purple-100 transition-colors">
                <span className="font-poppins font-medium text-[#6E00BF]">
                  Sign Up - It's Free!
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Large (Full content) */}
        <div className="lg:w-[75%]">
          <div className="prose max-w-none prose-lg prose-headings:font-semibold prose-p:leading-relaxed">
            {post.fullContent.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
