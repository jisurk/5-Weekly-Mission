import styled from "styled-components";

const SearchBarSection = styled.div`
  position: relative;
  width: 1060px;
  margin: 0 auto;

  @media (max-width: 1124px) {
    width: 704px;
  }
  @media (max-width: 767px) {
    width: 325px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 54px;
  border: none;
  border-radius: 10px;
  padding: 15px 24px;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
`;

const SearchInputIcon = styled(SearchInput)`
  background-image: url("/img/searchIcon.svg");
  background-position: 5px 50%;
  background-repeat: no-repeat;
  background-size: 16px;
`;

const SearchBar = () => {
  return (
    <SearchBarSection>
      <SearchInputIcon type="search" placeholder="링크를 검색해 보세요." />
    </SearchBarSection>
  );
};

export default SearchBar;
