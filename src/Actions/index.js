import { SAVE_COMMENT,CHANGE_AUTH } from 'Actions/type';


export function saveComment(Comment) {
    return {
        type: SAVE_COMMENT,
        payload: Comment
    };
}

export function changeAuth(isLoggedIn)
{
   return{
       type:CHANGE_AUTH,
       payload:isLoggedIn
   }
}