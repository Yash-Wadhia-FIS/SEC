
// import { createContext, useContext, useState, ReactNode } from 'react';

// type User = {
//   id: number;
//   name: string;
//   dob: string;
//   profilePicture: string;
// };

// type UserContextType = {
//   users: User[];
//   addUser: (user: User) => void;
//   updateUser: (user: User) => void;
//   deleteUser: (id: number) => void;
//   userToEdit: User | null;
//   setUserToEdit: (user: User | null) => void;
// };

// const UserContext = createContext<UserContextType | undefined>(undefined);

// type UserContextProviderProps = {
//   children: ReactNode;
// };

// export function UserContextProvider({ children }: UserContextProviderProps) {
//   const [users, setUsers] = useState<User[]>([]);
//   const [userToEdit, setUserToEdit] = useState<User | null>(null);

//   const addUser = (user: User) => {
//     const id = Date.now();
//     const newUser: User = { ...user, id }; 
//     setUsers((prevUsers) => [...prevUsers, newUser]);
//   };
  
//   const updateUser = (user: User) => {
//     const updatedUsers = users.map((u) => (u.id === user.id ? user : u));
//     setUsers(updatedUsers);
//     setUserToEdit(null);
//   };

//   const deleteUser = (id: number) => {
//     const updatedUsers = users.filter((user) => user.id !== id);
//     setUsers(updatedUsers);
//   };

//   return (
//     <UserContext.Provider value={{ users, addUser, updateUser, deleteUser, userToEdit, setUserToEdit }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// export function useUserContext() {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error('useUserContext must be used within a UserContextProvider');
//   }
//   return context;
// }

export {}