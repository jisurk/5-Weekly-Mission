import moment from "moment";

export const isEmailValid = (email: string) => {
  const emailForm =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return emailForm.test(email);
};

export const isPasswordValid = (password: string) => {
  const passwordForm = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordForm.test(password);
};

export const formatDate = (dateString: string): string => {
  const date = moment(dateString);
  return date.format("YYYY.MM.DD");
};

export const generateTimeText = (createdAt: string): string => {
  const timeDiff = moment().diff(moment(createdAt), "minutes");

  if (timeDiff < 2) {
    return "1 minute ago";
  }
  if (timeDiff <= 59) {
    return `${timeDiff} minutes ago`;
  }
  if (timeDiff < 60 * 24) {
    const hours = Math.floor(timeDiff / 60);
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  }
  if (timeDiff <= 60 * 24 * 30) {
    const days = Math.floor(timeDiff / (60 * 24));
    return days === 1 ? "1 day ago" : `${days} days ago`;
  }
  if (timeDiff <= 60 * 24 * 30 * 31) {
    const months = Math.floor(timeDiff / (60 * 24 * 30));
    return months === 1 ? "1 month ago" : `${months} months ago`;
  }
  const years = Math.floor(timeDiff / (60 * 24 * 30 * 12));
  return years === 1 ? "1 year ago" : `${years} years ago`;
};
