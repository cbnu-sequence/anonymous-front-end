import axios, { AxiosInstance } from 'axios';

export const API: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface MachingPosts {
  id: number;
  title: string;
  introduce: string;
  appeal: string;
}

//매칭 포스트 생성 post
export const postMachingPost = async (
  title: string,
  introduce: string,
  appeal: string,
) => {
  const { data } = await API.post(`/maching-posts`, {
    title,
    introduce,
    appeal,
  });
  alert(data.title + ' 추가');
};

//모든 매칭 포스트 조회 get
//const getMachingPostAll

//단건 매칭 포스트 조회 get
//const getMachingPostOne

//매칭 포스트 수정 patch
//const PatchMachingPost

//매칭 포스트 삭제 delete
//const deleteMachingPost

//특정 유저 초대 post
//const PostInvitations
