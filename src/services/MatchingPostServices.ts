import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
  MatchingPost,
  PatchMatchingPost,
  PostInvitations,
  deleteMatchingPost,
  getMatchingPostAll,
  getMatchingPostOne,
  postMatchingPost,
} from '../apis/MatchingPostApis';

// 모든 매칭 포스트 가져오기
export const useReadMatchingPosts = () => {
  return useQuery<MatchingPost[]>('matchingPosts', getMatchingPostAll);
};

// 새로운 매칭 포스트 생성
export const useCreateMatchingPost = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (
      newPostData: Omit<
        MatchingPost,
        'id' | 'createdAt' | 'updateAt' | 'status'
      >,
    ) => {
      return postMatchingPost(
        newPostData.title,
        newPostData.introduce,
        newPostData.appeal,
      );
    },
    {
      onSuccess: () => {
        // 새로운 포스트가 생성된 후 매칭 포스트 쿼리를 무효화하고 다시 가져옵니다.
        queryClient.invalidateQueries('matchingPosts');
      },
    },
  );
};

/*
  export const useCreateMatchingPost = () => {
  const queryClient = useQueryClient();

  return useMutation<
    void,
    unknown,
    { title: string; introduce: string; appeal: string[] }
  >(
    ({ title, introduce, appeal }) => {
      return postMatchingPost(title, introduce, appeal);
    },
    {
      onSuccess: () => {
        // 새로운 포스트가 생성된 후 매칭 포스트 쿼리를 무효화하고 다시 가져옵니다.
        queryClient.invalidateQueries('matchingPosts');
      },
    },
  );
};
*/

// ID를 사용하여 단일 매칭 포스트 가져오기
export const useReadMatchingPost = (id: number) => {
  return useQuery<MatchingPost>(['matchingPost', id], () =>
    getMatchingPostOne(id),
  );
};

// 기존 매칭 포스트 업데이트
export const useUpdateMatchingPost = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (updatedPostData: MatchingPost) => {
      return PatchMatchingPost(
        updatedPostData.id,
        updatedPostData.title,
        updatedPostData.introduce,
        updatedPostData.appeal,
      );
    },
    {
      onSuccess: () => {
        // 포스트가 업데이트된 후 매칭 포스트 쿼리를 무효화하고 다시 가져옵니다.
        queryClient.invalidateQueries('matchingPosts');
      },
    },
  );
};

// 매칭 포스트 삭제
export const useDeleteMatchingPost = (postId: number) => {
  const queryClient = useQueryClient();

  return useMutation(
    () => {
      return deleteMatchingPost(postId);
    },
    {
      onSuccess: () => {
        // 포스트가 삭제된 후 매칭 포스트 쿼리를 무효화하고 다시 가져옵니다.
        queryClient.invalidateQueries('matchingPosts');
      },
    },
  );
};

// 특정 사용자와 포스트에 초대 생성
/*
export const useCreateInvitation = () => {
  return useMutation((postId: string, userId: string) => {
    return PostInvitations(postId, userId);
  });
};
*/
