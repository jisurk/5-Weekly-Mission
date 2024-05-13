import "../card.css";
import starIcon from "../../icon/star.svg";
import kebab from "../../icon/kebab.svg";
import noImg from "../../img/이미지 없을 때 배경.svg";
import { useState } from "react";

const FolderCard = ({ date, title, url, img }) => {
  const [isOpen, setIsOpen] = useState(false);

  const displayedAt = (date) => {
    const milliSeconds = new Date() - new Date(date);
    const seconds = milliSeconds / 1000;
    if (seconds < 120) return `1 minute ago`;
    const minutes = seconds / 60;
    if (minutes <= 59) return `${Math.floor(minutes)} minutes ago`;
    if (minutes < 60) return `1 hour ago`;
    const hours = minutes / 60;
    if (hours <= 23) return `${Math.floor(hours)} hours ago`;
    if (hours < 24) return `1 day ago`;
    const days = hours / 24;
    if (days <= 30) return `${Math.floor(days)} days ago`;
    if (days < 31) return `1 month ago`;
    const months = days / 30;
    if (months <= 11) return `${Math.floor(months)} months ago`;
    if (months < 12) return `1 year ago`;
    const years = days / 365;
    return `${Math.floor(years)} years ago`;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="card">
      <a href={url}  target="_blank" rel="noopener noreferrer">
        <img
          className="cardImg"
          alt="cardImg"
          src={img !== null ? img : noImg}
        />
        <img className="starIcon" alt="starIcon" src={starIcon} />
        </a>
        <div className={"card-text"}>
          <p>{displayedAt(date)}</p>
          <div className="dropdown">
            <div>
            <button className="dropdownBtn" onClick={toggleMenu} >
              <img className="kebab" alt="kebab" src={kebab} />
            </button>
              
            </div>
            {isOpen && (
              <ul className="dropdownContent">
                <li href="#">삭제하기</li>
                <li href="#">폴더에 추가</li>
              </ul>
            )}
          </div>
          <h4>{title}</h4>
          <h6>{date?.slice(0, 10).replace(/-/g, ".")}</h6>
        </div>
    </article>

  );
};

export default FolderCard;
