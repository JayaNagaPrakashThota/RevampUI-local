import { useState, useEffect } from "react";
import { useNavigation } from "../../context/NavigationContext";
import { FaPencilAlt } from "react-icons/fa";
import axios from "axios";
import { MaxWords } from "../Common/wordValidation";
import { HashLink } from "react-router-hash-link";

const Blog = () => {
  const { isAdmin } = useNavigation();
  const [title, setTitle] = useState("Our Blog");
  const [paragraph, setParagraph] = useState(
    "Stay informed and inspired with our latest insights on job hunting, career growth, and industry trends. Whether you're exploring opportunities or leveling up your skills, our blog has you covered"
  );
  const [titleCounter, setTitleCounter] = useState(4);
  const [paragraphCounter, setParagraphCounter] = useState(85);
  const [isEditing, setIsEditing] = useState(false);
  const page = "HomePage";

  const handleEdit = () => isAdmin && setIsEditing(true);

  const [activeLink, setActiveLink] = useState("Job Hunting");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth < 768 ? 1 : 2
  );

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`https://starteryou.com/api/text`, {
        params: { page, component: "Blogs" },
      });

      setTitle(data?.content || "");
      setParagraph(
        Array.isArray(data?.paragraphs) ? data.paragraphs.join("\n") : ""
      );
    } catch (error) {
      console.error("Error fetching textData of BlogsComp:", error);
    }
  };

  const saveContent = async () => {
    try {
      const noramlizedParagraphs = Array.isArray(paragraph)
        ? paragraph
        : [paragraph.trim()];
      const response = await axios.put(`https://starteryou.com/api/text`, {
        page: "HomePage",
        component: "Blogs",
        content: title.trim(),
        paragraphs: noramlizedParagraphs,
      });
      setIsEditing(false);
      console.log("BlogsComp Data is saved: ", response);
    } catch (error) {
      console.log(
        "Error occurred while saving the content(BlogsComp): ",
        error
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const links = [
    "Job Hunting",
    "Job Applications",
    "Career Insights",
    "Get Inspired",
  ];

  const blogBoxes = [
    {
      img: "/LandingPage/Blogimg1.png",
      title:
        "A Step-by-Step Guide to Creating an Outstanding High School Portfolio",
      date: "20 Jan 2023",
      category: "Job Hunting",
      text: "Crafting an Outstanding High School Portfolio: A Step-by-Step Guide",
    },
    {
      img: "/LandingPage/Blogimg2.png",
      title: "The Ultimate High School Guide to College Applications",
      date: "21 Jan 2023",
      category: "Get Inspired",
      text: "Applying for and Getting into College: The Ultimate Guide for High School Students!",
    },
    {
      img: "/LandingPage/Blogimg1.png",
      title: "Kickstart Your Career: The Ultimate Guide to Entry-Level Jobs",
      date: "22 Jan 2023",
      category: "Job Hunting",
      text: "Learn how to secure entry-level jobs by getting tips on resume writing, experience building, and interview prep",
    },
    {
      img: "/LandingPage/Blogimg2.png",
      title: "Success Stories: How These Professionals Landed Their Dream Jobs",
      date: "25 Jan 2023",
      category: "Get Inspired",
      text: "Read inspiring stories of professionals who overcame challenges to achieve career success",
    },
    {
      img: "/LandingPage/jobApplication1.jpg",
      title: "Writing Cover Letters That Get Noticed",
      date: "28 Jan 2023",
      category: "Job Applications",
      text: "Learn the secrets to writing cover letters that stand out from the competition",
    },
    {
      img: "/LandingPage/jobApplication2.jpg",
      title: "Optimizing Your LinkedIn Profile for Job Search",
      date: "30 Jan 2023",
      category: "Job Applications",
      text: "Tips and tricks to make your LinkedIn profile attractive to recruiters",
    },
    {
      img: "/LandingPage/careerBlog1.jpg",
      title: "Emerging Careers in the Tech Industry",
      date: "2 Feb 2023",
      category: "Career Insights",
      text: "Discover the fastest-growing tech careers and the skills needed to break into them",
    },
    {
      img: "/LandingPage/careerBlog2.jpg",
      title: "Remote Work: Pros, Cons and Best Practices",
      date: "5 Feb 2023",
      category: "Career Insights",
      text: "Everything you need to know about thriving in a remote work environment",
    },
  ];

  const filteredBlogBoxes = blogBoxes.filter(
    (box) => activeLink === "View All" || box.category === activeLink
  );

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + itemsPerPage < filteredBlogBoxes.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-12" id="blog">
      <div className="md:flex justify-between items-start">
        {isEditing ? (
          <div className="mt-10 flex flex-col space-y-4 z-50">
            <textarea
              value={title}
              onChange={(e) =>
                setTitle(MaxWords(e.target.value, 4, setTitleCounter))
              }
              placeholder="Title here..."
              className="lg:w-[400px] p-2 bg-transparent border border-black rounded outline-none resize-none text-2xl text-gray-800 scrollbar"
            />
            <p className="text-sm text-grey-400">
              {titleCounter} words remaining
            </p>
            <textarea
              value={paragraph}
              onChange={(e) =>
                setParagraph(MaxWords(e.target.value, 85, setParagraphCounter))
              }
              placeholder="Paragraph here..."
              className="lg:w-[400px] p-2 bg-transparent border border-black rounded outline-none resize-none text-xl text-gray-800 scrollbar"
            />
            <p className="text-sm text-grey-400">
              {paragraphCounter} words remaining
            </p>
            <div className="lg:w-[400px] flex items-center justify-between space-x-2 text-white">
              <button
                onClick={saveContent}
                className="bg-green-600 py-2 px-4 rounded text-xl w-1/2"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-red-600 py-2 px-4 rounded text-xl w-1/2"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 relative">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              {title}
            </h1>
            <p className="text-[#767676] mb-4 lg:max-w-[800px] whitespace-pre-wrap">
              {paragraph}
            </p>
            {isAdmin && (
              <FaPencilAlt
                onClick={handleEdit}
                className="cursor-pointer absolute top-0 -right-2 lg:-right-5 text-base"
              />
            )}
          </div>
        )}
        <div className="mt-4 md:mt-0">
          <HashLink to="/education#career-posts" smooth>
            <button className="bg-[#D9502E] text-white py-2 px-4 rounded-lg">
              Show All
            </button>
          </HashLink>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex flex-col sm:flex-row justify-start sm:space-x-4 space-y-4 sm:space-y-0">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveLink(link);
                setCurrentIndex(0);
              }}
              className={`py-2 px-4 text-sm md:text-base font-medium transition-colors duration-300 ${
                activeLink === link
                  ? "bg-[#D6E4FF] text-blue-700 rounded-lg md:rounded-t-lg md:rounded-b-none"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              {link}
            </button>
          ))}
        </div>
        <hr className="border-t border-gray-300 mt-4 md:mt-0" />
      </div>

      <div className="flex justify-center items-center mt-8 space-x-6">
        {filteredBlogBoxes
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((box, index) => (
            <div key={index} className="relative w-full md:w-1/2">
              <img
                src={box.img}
                alt="Blog"
                className="w-full h-[300px] md:h-[350px] object-cover mb-4"
              />
              <div className="absolute inset-0 bg-[#FFFFFF66] backdrop-filter backdrop-blur-[7px] h-[25%] flex items-center justify-between p-4 top-[12.1rem] md:top-[14.9rem]">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-base md:text-lg">
                    {box.title}
                  </span>
                  <span className="text-white font-thin text-sm">
                    {box.date}
                  </span>
                </div>
              </div>
              <p className="text-[#767676] mb-4">{box.text}</p>
              <a className="text-black font-semibold md:font-extrabold uppercase hover:underline">
                Read Post
                <img
                  src="/LandingPage/Icons/postarrow.svg"
                  alt="icon"
                  className="inline ml-1 w-4 h-4"
                />
              </a>
            </div>
          ))}
      </div>

      <div className="relative flex justify-between items-center mt-8">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`bg-[#D6E4FF] p-4 rounded-full ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          style={{ width: "50px", height: "50px" }}
        >
          <img
            src="/LandingPage/Icons/Previous_arrow.svg"
            alt="Previous"
            className="w-4 h-4"
          />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex + itemsPerPage >= filteredBlogBoxes.length}
          className={`bg-[#D6E4FF] p-4 rounded-full ${
            currentIndex + itemsPerPage >= filteredBlogBoxes.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          style={{ width: "50px", height: "50px" }}
        >
          <img
            src="/LandingPage/Icons/Next_arrow.svg"
            alt="Next"
            className="w-4 h-4"
          />
        </button>
      </div>
    </div>
  );
};

export default Blog;
