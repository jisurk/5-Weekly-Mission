import "../FolderList/FolderList.css";
import { useFolderList } from "../../hooks/useFolderList";
import noImageLogo from "../../assets/noImageLogo.svg";
import KebabButton from "../../components/KebabButton/KebabButton";
import { getElapsedTime } from "../../util/getElapsedTime";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function FolderList() {
  const folderdata = useFolderList();
  return (
    <div className="container">
      <div className="card-container">
        {folderdata &&
          folderdata.data.map((item) => (
            <div className="card" key={item.id}>
              {/* <a href={item.url} target="_blank" rel="noreferrer"> */}
              <div className="card-Thumbnail-container">
                {item.image_source ? (
                  <img
                    className="card-thumbnail"
                    src={item.image_source}
                    alt="카드 썸네일"
                  />
                ) : (
                  <img
                    className="card-no-thumbnail"
                    src={noImageLogo}
                    alt="카드 썸네일 없음"
                  />
                )}
              </div>
              <div className="card-info">
                <div className="top">
                  <p className="card-created-at">
                    {getElapsedTime(item.created_at)}
                  </p>
                  <KebabButton />
                </div>
                <p className="card-description">{item.description}</p>
                <p className="card-created-at">{formatDate(item.created_at)}</p>
              </div>
              {/* </a> */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default FolderList;
