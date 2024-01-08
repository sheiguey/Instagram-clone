import { create } from "zustand";

const useUserProfile = create((set)=>({
 userProfile:null,
 setUserProfile: (data)=>set({userProfile:data})
}))

export default useUserProfile;