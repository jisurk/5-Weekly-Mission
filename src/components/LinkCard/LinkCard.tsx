import { useState, useEffect, useRef } from 'react';
import styles from './LinkCard.module.css';
import noImagePlaceholder from '@assets/images/placeholder_image.png';
import starIcon from '@assets/images/star.svg';
import purpleStarIcon from '@assets/images/purplestar.svg';
import kebab from '@assets/images/kebab.svg';
import getTimeDifference from '@utils/time-functions/getTimeDifference';
import formatDate from '@utils/time-functions/formatDate';

interface LinkCardProp {
  linkCardInfo: { [key: string]: any };
  onAddToFolder: (url: string) => void;
  onLinkDelete: (url: string) => void;
}

export default function LinkCard({
  linkCardInfo,
  onAddToFolder,
  onLinkDelete,
}: LinkCardProp) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const handleLinkDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onLinkDelete(linkCardInfo.url);
  };

  const handleAddToFolder = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onAddToFolder(linkCardInfo.url);
  };

  const DROPDOWN_LIST_ITEMS = [
    { text: '삭제하기', onClick: handleLinkDelete },
    { text: '폴더에추가', onClick: handleAddToFolder },
  ];

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const thumbnailURL = linkCardInfo.imageSource
    ? linkCardInfo.imageSource
    : noImagePlaceholder;
  const description = linkCardInfo.description;
  const url = linkCardInfo.url;
  const createdDate = new Date(linkCardInfo.createdAt);
  const timestamp = getTimeDifference(createdDate);
  const altMessage = linkCardInfo.title;

  const handleKebabClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsDropdownOpen(!isDropdownOpen);
    event.preventDefault();
  };

  const handleStarClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <a
      className={styles.linkCard}
      href={url}
      target='_blank'
      rel='noreferrer noopener'
    >
      <div className={styles.thumbnailContainer}>
        <button onClick={handleStarClick} className={styles.starButton}>
          {isFavorite ? (
            <img
              src={purpleStarIcon}
              alt='favorite'
              className={styles.purpleStarIcon}
            />
          ) : (
            <img src={starIcon} alt='favorite' className={styles.starIcon} />
          )}
        </button>
        <img className={styles.thumbnail} src={thumbnailURL} alt={altMessage} />
      </div>
      <div className={styles.linkCardInfo}>
        <div className={styles.linkCardTimestampBar}>
          <span className={styles.timestamp}>{timestamp}</span>
          <div className='kebab-button-container' ref={dropdownRef}>
            <button onClick={handleKebabClick} className={styles.kebabButton}>
              <img src={kebab} alt='kebab' className={styles.kebabButton} />
            </button>
            {isDropdownOpen && (
              <ul className={styles.dropdownList}>
                {DROPDOWN_LIST_ITEMS.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={item.onClick}
                      className={styles.dropdownItem}
                    >
                      {item.text}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <p className={styles.linkCardDescription}>{description}</p>
        <span className={styles.linkCardCreated}>
          {formatDate(createdDate)}
        </span>
      </div>
    </a>
  );
}
