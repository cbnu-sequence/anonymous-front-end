import axios, { AxiosInstance } from 'axios';

export const API: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface MatchingPost {
  id: number;
  title: string;
  introduce: string;
  appeal: string;
  status: 'RECRUIT' | 'ADMIN';
  createdAt: string;
  updateAt: string;
}

//매칭 포스트 생성 post
export const postMatchingPost = async (
  title: string,
  introduce: string,
  appeal: string,
) => {
  const { data } = await API.post(`/matching-posts`, {
    title,
    introduce,
    appeal,
  });
  alert(data.title + ' 추가');
};

//모든 매칭 포스트 조회 get
export const getMatchingPostAll = async () => {
  const res = await API.get(`/matching-posts`);
  return res.data;
};

//단건 매칭 포스트 조회 get
export const getMatchingPostOne = async (id: number) => {
  const res = await API.get<MatchingPost>(`/matching-posts/${id}`);
  return res.data;
};

//매칭 포스트 수정 patch
//const PatchMatchingPost

//매칭 포스트 삭제 delete
//const deleteMatchingPost

//특정 유저 초대 post
//const PostInvitations
