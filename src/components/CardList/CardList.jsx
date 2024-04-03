import "./CardList.css";
import Card from "../Card/Card";

function CardList({ cardListData }) {
    return (
        <ul className="card-list">
            {cardListData.map(({ createdAt, description, id, title, url, imageSource }) => {
                const data = { createdAt, description, id, title, url, imageSource };

                return <Card data={data} key={id} />;
            })}
        </ul>
    );
}

export default CardList;
