import './FolderPage.css';
import Search from '../components/Search';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import { getMockFolder } from '../api';
import useAsync from '../hooks/useAsync';
import AddLink from '../components/AddLink';

function FolderPage() {
  const [, , getUserFolder] = useAsync(getMockFolder);
  const [folder, setFolder] = useState([]);

  const getFolder = async () => {
    const result = await getUserFolder();
    if (!result) return;

    const {
      folder: { links },
    } = result;
    setFolder(links);
  };

  useEffect(() => {
    getFolder();
  }, []);

  return (
    <main className="main_wrap">
      <div className="main_header">
        <AddLink />
      </div>
      <Search />
      <ul className="folder">
        {folder.map((item) => {
          const { imageSource } = item;
          return <Card key={item.id} link={item} preview={imageSource} />;
        })}
      </ul>
    </main>
  );
}

export default FolderPage;
