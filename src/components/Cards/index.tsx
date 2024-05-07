import { useFetch } from '../../hooks/useFetch';
import { formatDate, generateTimeText } from '../../hooks/date';
import thumbnail from '../../assets/thumbnail.svg';
import styles from './index.module.css';

interface Link {
  id: string;
  url: string;
  imageSource?: string;
  title: string;
  createdAt: Date;
  description: string;
}

interface FolderData {
  folder: {
    links: Link[];
  };
}

function Cards({ url }: { url: string }) {
  // props를 비구조화 할당하여 사용
  const CardData = useFetch<FolderData>(url);

  return (
    <div className={styles.card_grid_container}>
      {CardData ? (
        CardData.folder.links.map((link: Link) => (
          <a href={link.url}>
            <div key={link.id} className={styles.card}>
              <div className={styles.card_img_div}>
                {link.imageSource ? (
                  <img
                    src={link.imageSource}
                    className={styles.card_img}
                    alt={link.title}
                  />
                ) : (
                  <img
                    src={thumbnail}
                    className={styles.card_img}
                    alt="thumbnail_img"
                  />
                )}
              </div>
              <div className={styles.card_txt_div}>
                <div className={styles.card_txt_div_top}>
                  <p className={styles.left_time_p}>
                    {generateTimeText(link.createdAt)}
                  </p>
                </div>
                <div className={styles.card_txt_div_body}>
                  <p className={styles.card_txt_div_body}>{link.description}</p>
                </div>
                <div className={styles.card_txt_date}>
                  {formatDate(link.createdAt)}
                </div>
              </div>
            </div>
          </a>
        ))
      ) : (
        <div className={styles.noLinkText}>저장된 링크가 없습니다</div>
      )}
    </div>
  );
}

export default Cards;
