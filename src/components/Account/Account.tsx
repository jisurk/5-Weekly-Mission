import styles from './Account.module.css';

interface AccountProps {
  profileImgSource?: string;
  userEmail: string;
}

const Account = ({ profileImgSource, userEmail }: AccountProps) => {
  return (
    <div className={styles.account}>
      <img
        src={profileImgSource}
        alt='User Profile'
        className={styles.userProfileImg}
      />
      <span className={styles.userEmail}>{userEmail}</span>
    </div>
  );
};
export default Account;
