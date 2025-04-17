import styled from "styled-components";

const NewsWrapper = styled.section`
  padding: 40px 20px;
  background-color: #1e1e60;
  text-align: center;

  h3 {
    margin-bottom: 20px;
  }
`;

const newsItems = [
  "Exhibition | Discover the Future of SPIE Photonics West 2025",
  // Add more news items as needed
];

const LatestNews = () => (
  <NewsWrapper>
    <h3>LATEST NEWS</h3>
    {newsItems.map((news, index) => (
      <p key={index}>{news}</p>
    ))}
  </NewsWrapper>
);

export default LatestNews;
