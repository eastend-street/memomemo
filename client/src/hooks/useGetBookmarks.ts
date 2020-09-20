import { useEffect, useState } from 'react';
import axios from 'axios';
import { ROOT_URL } from 'constants/urls';

type UseGetBookmarks = ({
  bookmarkId,
  isLoggedIn,
}: {
  bookmarkId?: string | undefined;
  isLoggedIn: boolean | undefined;
}) => {
  isLoading: boolean;
  bookmarks: {};
};

const useGetBookmarks: UseGetBookmarks = ({ bookmarkId = '', isLoggedIn }) => {
  const [bookmarks, setBookmarks] = useState({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const getBookmark = async () => {
      if (isLoggedIn) {
        await axios.get(`${ROOT_URL}/bookmarks/${bookmarkId}`).then((res) => {
          setBookmarks(res.data);
        });
      } else {
        const bookmarksJSON = localStorage.getItem('bookmarks');
        setBookmarks(bookmarksJSON ? JSON.parse(bookmarksJSON) : {});
      }
    };
    getBookmark();
    setIsLoading(false);
  }, [bookmarkId, isLoggedIn]);

  return { isLoading, bookmarks };
};

export default useGetBookmarks;