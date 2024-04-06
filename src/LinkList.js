import './Linklist.css';

function calculatePastTime(createdAt) {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const calDate = now - createdDate;

    const seconds = Math.floor(calDate / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years >= 1) {
        return years === 1 ? "1 year ago" : years + " years ago";
    } else if (months >= 1) {
        return months === 1 ? "1 month ago" : months + " months ago";
    } else if (days >= 1) {
        return days === 1 ? "1 day ago" : days + " days ago";
    } else if (hours >= 1) {
        return hours === 1 ? "1 hour ago" : hours + " hours ago";
    } else {
        return minutes === 1 ? "1 minute ago" : minutes + " minutes ago";
    } 
}

function LinkItem({link}) {
    const base_image = 'images/card-default.png';
    const url = link.url;
    const createdAt = link.createdAt
    const imageSource = link.imageSource ? link.imageSource : base_image;
    return (
        <a href={url}>
            <div className='Link-card'>
                <div className="Link-image-wrapper">
                    <img className="Link-image" src={imageSource} alt="링크이미지"></img>
                </div>
                <div className="Link-info">
                    <p className="creation-time">{calculatePastTime(createdAt)}</p>
                    <p className='link-description'>{link.description}</p>
                    <p>2023. 3. 15</p>
                </div>
            </div>
        </a>
    );
}

export function LinkList({links}) {
    return (
        <div className="Link-container">
            <ul className="LinkList">
                {links.map((link) => {
                    return (
                        <li key={link.id}>
                            <LinkItem link={link}/>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
