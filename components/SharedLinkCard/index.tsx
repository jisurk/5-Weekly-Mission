import { SampleLink } from "@/lib/api";
import { displayCreatedTime, formatDateString } from "@/lib/dateUtils";
import defaultImage from "@/public/card-default.png";
import styles from "../LinkCard.module.css";

interface SharedLinkCardProps {
  link: SampleLink;
}

function SharedLinkCard({ link }: SharedLinkCardProps) {
  const { url, description, title, createdAt, imageSource } = link;

  const createdTime = displayCreatedTime(createdAt);
  const createdAtFormat = formatDateString(createdAt);

  const src = imageSource || String(defaultImage);

  return (
    <div className={styles.linkContainer}>
      <a
        className={styles.linkImageAnchor}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.imageWrapper}>
          <img className={styles.linkImage} src={src} alt={title} />
        </div>
      </a>
      <div className={styles.linkInfo}>
        <div className={styles.linkInfoContent}>{createdTime}</div>
        <div className={styles.linkInfoContent}>{description}</div>
        <div className={styles.linkInfoContent}>{createdAtFormat}</div>
      </div>
    </div>
  );
}

export default SharedLinkCard;
