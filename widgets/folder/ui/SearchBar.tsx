import React from "react";
import styles from "@/widgets/folder/styles/searchBar.module.css";
import magifier from "@/public/img/folder/magnifier.svg";
import Image from "next/image";
import { useKeywordState } from "@/hooks/search/useSearchState";

const SearchBar = () => {
  const { setKeyword } = useKeywordState();

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <Image src={magifier} alt="search" />
        <input
          onChange={(event) => {
            setKeyword(event.target.value);
          }}
          className={styles.searchInput}
          type="text"
          placeholder="링크를 검색해 보세요."
        />
      </div>
    </div>
  );
};

export default SearchBar;
