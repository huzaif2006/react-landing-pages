import React from 'react';
import './section3.css';

// Reusable component for each food image
function ImageItem(props) {
  return (
    <div className="image-card">
      <img src={props.imgSrc} alt="Food item" className="food-img" />
    </div>
  );
}

function Section3() {
  // List of images (You can replace these with your own image links)
  const images = [
    "https://img.freepik.com/free-photo/sweet-pastry-assortment-top-view_23-2148516578.jpg?w=360",
    "https://www.giverecipe.com/wp-content/uploads/2020/06/Chocolate-Strawberry-Cake.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMm1jUd9BcgE_3f77PKHqV-jCRTmvUpc6V3A&s",
    "https://www.southernliving.com/thmb/7oCQ4L6HaNIryOHL2Ttxvm8rFHw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Heaven-in-a-Bowl_3x2-066-6b099d564c274d04b2984f8c1d37ec8f.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_lOOPTym-W8Y2YB8-RjWRN61SNwwitt-SQ&s",
    "https://www.recipetineats.com/tachyon/2025/12/Pavlova-bombs_6.jpg?resize=747%2C747"
  ];

  return (
    <div className="page-wrapper">
      <header className="header">
        <h1 className="title">Explore More</h1>
        
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item active">Cake</li>
            <li className="nav-item">Muffins</li>
            <li className="nav-item">Croissant</li>
            <li className="nav-item">Bread</li>
            <li className="nav-item">Tart</li>
            <li className="nav-item">Favorite</li>
          </ul>
        </nav>
      </header>

      <main className="image-grid">
        {images.map((url, index) => (
          <ImageItem key={index} imgSrc={url} />
        ))}
      </main>
    </div>
  );
}

export default Section3;